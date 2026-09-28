#!/usr/bin/env node
// Captures a deterministic fidelity baseline from a live source site: screenshots at
// multiple viewports, computed-style samples (seeds color/typography tokens), an asset
// manifest (images/video/fonts), cookie-consent banner markup, and a form inventory.
// Never submits a live form unless the site config explicitly opts in (see README).
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

import { loadSiteConfig, REPO_ROOT, routeToDirName } from './lib/site-config.mjs';
import { VIEWPORTS } from './lib/viewports.mjs';
import { gotoSettled } from './lib/navigation.mjs';

const DEFAULT_MAX_PAGES = 60;
const SKIP_EXTENSION_PATTERN = /\.(pdf|zip|jpg|jpeg|png|gif|svg|webp|mp4|mov|doc|docx|xls|xlsx)$/i;

async function main() {
  const siteId = process.argv[2];
  if (!siteId) {
    console.error('Usage: node capture.mjs <site-id>');
    process.exit(1);
  }

  const site = await loadSiteConfig(siteId);
  const outDir = path.join(REPO_ROOT, 'migration', 'captures', siteId);
  await fs.rm(outDir, { recursive: true, force: true });
  await fs.mkdir(outDir, { recursive: true });

  const browser = await chromium.launch();
  try {
    const routes = await discoverRoutes(browser, site);
    console.log(`Discovered ${routes.length} route(s) for ${siteId}`);

    const tokenSamples = { colors: {}, fonts: {}, borders: {} };
    for (const routePath of routes) {
      console.log(`Capturing ${routePath}`);
      await captureRoute(browser, site, routePath, outDir, tokenSamples);
    }

    await fs.writeFile(path.join(outDir, 'tokens.json'), JSON.stringify(summarizeTokens(tokenSamples), null, 2));
    await fs.writeFile(
      path.join(outDir, 'routes.json'),
      JSON.stringify({ siteId, sourceUrl: site.sourceUrl, capturedAt: new Date().toISOString(), routes }, null, 2),
    );
    console.log(`Capture complete: ${outDir}`);
  } finally {
    await browser.close();
  }
}

async function discoverRoutes(browser, site) {
  if (Array.isArray(site.capture?.routes) && site.capture.routes.length > 0) {
    return site.capture.routes;
  }

  const maxPages = site.capture?.maxPages ?? DEFAULT_MAX_PAGES;
  const startUrl = new URL(site.sourceUrl);
  const startPath = normalizePath(startUrl);
  const seen = new Set([startPath]);
  const queue = [startPath];
  const routes = [];

  const page = await browser.newPage();
  try {
    while (queue.length > 0 && routes.length < maxPages) {
      const routePath = queue.shift();
      const url = new URL(routePath, startUrl.origin).toString();

      let links = [];
      try {
        const response = await gotoSettled(page, url);
        if (!response || response.status() >= 400) {
          console.warn(`Warning: ${url} returned status ${response ? response.status() : 'unknown'}; excluding from the route inventory.`);
          continue;
        }
        links = await page.$$eval('a[href]', (anchors) => anchors.map((a) => a.getAttribute('href') || ''));
      } catch (error) {
        console.warn(`Warning: failed to crawl ${url}: ${error.message}`);
        continue;
      }

      routes.push(routePath);

      for (const href of links) {
        const normalized = tryNormalize(href, startUrl);
        if (normalized && !seen.has(normalized)) {
          seen.add(normalized);
          queue.push(normalized);
        }
      }
    }
  } finally {
    await page.close();
  }

  return routes;
}

function normalizePath(url) {
  return url.pathname.replace(/\/+$/, '') || '/';
}

function tryNormalize(href, startUrl) {
  if (/^(mailto:|tel:|javascript:|#)/i.test(href)) return null;
  try {
    const resolved = new URL(href, startUrl);
    if (resolved.origin !== startUrl.origin) return null;
    if (SKIP_EXTENSION_PATTERN.test(resolved.pathname)) return null;
    return normalizePath(resolved);
  } catch {
    return null;
  }
}

async function captureRoute(browser, site, routePath, outDir, tokenSamples) {
  const routeDir = path.join(outDir, routeToDirName(routePath));
  await fs.mkdir(routeDir, { recursive: true });
  const url = new URL(routePath, site.sourceUrl).toString();

  const context = await browser.newContext();
  const page = await context.newPage();

  const networkAssets = [];
  page.on('response', (response) => {
    const request = response.request();
    const type = request.resourceType();
    if (type === 'image' || type === 'media' || type === 'font') {
      networkAssets.push({ url: request.url(), type, status: response.status() });
    }
  });

  try {
    for (const viewport of VIEWPORTS) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await gotoSettled(page, url);
      await page.screenshot({ path: path.join(routeDir, `screenshot-${viewport.name}.png`), fullPage: true });

      const styles = await captureComputedStyles(page);
      mergeTokenSamples(tokenSamples, styles);
      await fs.writeFile(path.join(routeDir, `styles-${viewport.name}.json`), JSON.stringify(styles, null, 2));
    }

    // DOM/asset/consent/form artifacts are captured once, at the largest viewport.
    const desktop = VIEWPORTS.at(-1);
    await page.setViewportSize({ width: desktop.width, height: desktop.height });
    await gotoSettled(page, url);

    await fs.writeFile(path.join(routeDir, 'dom.html'), await page.content());

    const assets = await captureAssets(page, networkAssets);
    await fs.writeFile(path.join(routeDir, 'assets.json'), JSON.stringify(assets, null, 2));

    const consent = await captureConsentBanner(page);
    await fs.writeFile(path.join(routeDir, 'consent.json'), JSON.stringify(consent, null, 2));

    const forms = await captureForms(page, site);
    await fs.writeFile(path.join(routeDir, 'forms.json'), JSON.stringify(forms, null, 2));
  } catch (error) {
    console.warn(`Warning: capture failed for ${url}: ${error.message}`);
  } finally {
    await context.close();
  }
}

async function captureComputedStyles(page) {
  return page.evaluate(() => {
    const selectors = ['body', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'button', 'header', 'nav', 'footer'];
    const samples = {};
    for (const selector of selectors) {
      const el = document.querySelector(selector);
      if (!el) continue;
      const computed = window.getComputedStyle(el);
      samples[selector] = {
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        borderTopColor: computed.borderTopColor,
        borderTopWidth: computed.borderTopWidth,
      };
    }
    return samples;
  });
}

function mergeTokenSamples(tokenSamples, styles) {
  for (const sample of Object.values(styles)) {
    if (sample.color) bump(tokenSamples.colors, sample.color);
    if (sample.backgroundColor && sample.backgroundColor !== 'rgba(0, 0, 0, 0)') bump(tokenSamples.colors, sample.backgroundColor);
    if (sample.fontFamily) bump(tokenSamples.fonts, sample.fontFamily);
    if (sample.borderTopColor && sample.borderTopWidth && sample.borderTopWidth !== '0px') {
      bump(tokenSamples.borders, sample.borderTopColor);
    }
  }
}

function bump(map, key) {
  map[key] = (map[key] || 0) + 1;
}

function summarizeTokens(tokenSamples) {
  const rank = (map) =>
    Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .map(([value, count]) => ({ value, count }));

  return {
    colors: rank(tokenSamples.colors),
    fonts: rank(tokenSamples.fonts),
    borders: rank(tokenSamples.borders),
  };
}

async function captureAssets(page, networkAssets) {
  const domAssets = await page.evaluate(() => {
    const images = Array.from(document.images).map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }));
    const videos = Array.from(document.querySelectorAll('video, video source'))
      .map((el) => ({ src: el.currentSrc || el.getAttribute('src') || '' }))
      .filter((v) => v.src);

    const fontFaces = [];
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (rule instanceof CSSFontFaceRule) {
            fontFaces.push({
              fontFamily: rule.style.getPropertyValue('font-family'),
              src: rule.style.getPropertyValue('src'),
            });
          }
        }
      } catch {
        // Cross-origin stylesheet — cssRules isn't readable; skip it.
      }
    }

    const googleFontLinks = Array.from(
      document.querySelectorAll('link[href*="fonts.googleapis.com"], link[href*="fonts.gstatic.com"]'),
    ).map((link) => link.getAttribute('href'));

    // Many WordPress themes (this one included) implement most photography as inline
    // `background-image` styles rather than `<img>` tags — those are invisible to the
    // `document.images` pass above, so walk every element's computed style too.
    function describeElement(el) {
      const classes = el.className && el.className.toString ? el.className.toString().trim().split(/\s+/).slice(0, 3).join('.') : '';
      const id = el.id ? `#${el.id}` : '';
      return `${el.tagName.toLowerCase()}${id}${classes ? '.' + classes : ''}`;
    }

    const seenBackgroundUrls = new Set();
    const backgroundImages = [];
    for (const el of document.querySelectorAll('body *')) {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (!bg || bg === 'none') continue;
      for (const match of bg.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
        const url = match[1];
        if (!url || url.startsWith('data:') || seenBackgroundUrls.has(url)) continue;
        seenBackgroundUrls.add(url);
        backgroundImages.push({ url, selector: describeElement(el) });
      }
    }

    return { images, videos, fontFaces, googleFontLinks, backgroundImages };
  });

  return {
    images: domAssets.images,
    backgroundImages: domAssets.backgroundImages,
    videos: domAssets.videos,
    fonts: { selfHosted: domAssets.fontFaces, googleFontLinks: domAssets.googleFontLinks },
    network: networkAssets,
  };
}

async function captureConsentBanner(page) {
  return page.evaluate(() => {
    const pattern = /cookie|consent|gdpr/i;
    const candidates = Array.from(document.querySelectorAll('body *')).filter((el) => {
      const idAndClass = `${el.id ?? ''} ${el.className?.toString?.() ?? ''}`;
      if (!pattern.test(idAndClass) && !pattern.test(el.textContent ?? '')) return false;
      const style = window.getComputedStyle(el);
      return style.position === 'fixed' || style.position === 'sticky';
    });

    if (candidates.length === 0) {
      return { found: false };
    }

    const el = candidates.reduce((largest, current) =>
      current.textContent.length > largest.textContent.length ? current : largest,
    );
    const buttons = Array.from(el.querySelectorAll('button, a[role="button"], a'))
      .map((b) => b.textContent?.trim())
      .filter(Boolean);

    return { found: true, html: el.outerHTML, text: el.textContent?.trim(), buttons };
  });
}

async function captureForms(page, site) {
  const formsMeta = await page.evaluate(() => {
    const confirmationPattern = /thank|success|confirm/i;

    function labelFor(field) {
      if (field.id) {
        const label = document.querySelector(`label[for="${CSS.escape(field.id)}"]`);
        if (label) return label.textContent?.trim() ?? null;
      }
      const parentLabel = field.closest('label');
      if (parentLabel) return parentLabel.textContent?.trim() ?? null;
      return field.getAttribute('aria-label') || field.getAttribute('placeholder') || null;
    }

    return Array.from(document.forms).map((form, index) => {
      const fields = Array.from(form.querySelectorAll('input, select, textarea'))
        .filter((field) => field.type !== 'hidden' && field.type !== 'submit' && field.type !== 'button')
        .map((field) => ({
          name: field.getAttribute('name'),
          type: field.tagName === 'SELECT' ? 'select' : field.tagName === 'TEXTAREA' ? 'textarea' : field.type,
          label: labelFor(field),
          required: field.required,
        }));

      const confirmationCandidates = Array.from(form.parentElement?.querySelectorAll('*') ?? [])
        .filter((el) => confirmationPattern.test(el.className?.toString?.() ?? '') || confirmationPattern.test(el.id ?? ''))
        .map((el) => ({ html: el.outerHTML, text: el.textContent?.trim() }));

      return {
        index,
        id: form.id || null,
        action: form.getAttribute('action'),
        method: form.getAttribute('method'),
        fields,
        confirmationMarkupObserved: confirmationCandidates.length > 0,
        confirmationCandidates,
      };
    });
  });

  // Safety: a live form is only ever submitted when the site config explicitly opts in
  // AND supplies safe test values per form. Both must be present — this is opt-in twice over.
  if (site.capture?.allowLiveFormSubmissionTest && site.capture?.formTestData) {
    for (const formMeta of formsMeta) {
      const testData = site.capture.formTestData[formMeta.id ?? ''] ?? site.capture.formTestData[String(formMeta.index)];
      if (!testData?.fields) continue;

      try {
        const formLocator = page.locator('form').nth(formMeta.index);
        for (const [name, value] of Object.entries(testData.fields)) {
          await formLocator.locator(`[name="${name}"]`).fill(String(value));
        }
        await formLocator.locator('[type="submit"], button:not([type="button"])').first().click();
        await page.waitForTimeout(1500);

        formMeta.liveSubmissionTest = {
          attempted: true,
          confirmationHtmlAfterSubmit: await page.evaluate(
            (idx) => document.forms[idx]?.parentElement?.outerHTML ?? null,
            formMeta.index,
          ),
        };
      } catch (error) {
        formMeta.liveSubmissionTest = { attempted: true, error: error.message };
      }
    }
  }

  return formsMeta;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
