#!/usr/bin/env node
// Pixel-diffs a running migrated app against the screenshots captured from the source
// site by capture.mjs. Requires the built app already running (see README) — this script
// does not manage the app's build/start lifecycle.
import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

import { loadSiteConfig, REPO_ROOT, routeToDirName } from './lib/site-config.mjs';
import { VIEWPORTS } from './lib/viewports.mjs';
import { gotoSettled } from './lib/navigation.mjs';

const DEFAULT_THRESHOLD_PERCENT = 2;

async function main() {
  const siteId = process.argv[2];
  const baseUrlArg = process.argv.find((arg) => arg.startsWith('--base-url='));
  if (!siteId || !baseUrlArg) {
    console.error('Usage: node diff.mjs <site-id> --base-url=http://localhost:3000');
    console.error('Start the built app first, e.g.: pnpm build:<site-id> && pnpm --filter <package-name> start');
    process.exit(1);
  }
  const baseUrl = baseUrlArg.slice('--base-url='.length).replace(/\/+$/, '');

  const site = await loadSiteConfig(siteId);
  const thresholdPercent = site.capture?.visualDiffThresholdPercent ?? DEFAULT_THRESHOLD_PERCENT;

  const captureDir = path.join(REPO_ROOT, 'migration', 'captures', siteId);
  const routesFile = path.join(captureDir, 'routes.json');
  let routes;
  try {
    ({ routes } = JSON.parse(await fs.readFile(routesFile, 'utf8')));
  } catch {
    console.error(`No capture found at ${captureDir} — run capture.mjs ${siteId} first.`);
    process.exit(1);
  }

  const reportDir = path.join(REPO_ROOT, 'migration', 'reports', `${siteId}-visual-diff`);
  await fs.rm(reportDir, { recursive: true, force: true });
  await fs.mkdir(reportDir, { recursive: true });

  const browser = await chromium.launch();
  const results = [];

  try {
    const page = await browser.newPage();
    for (const routePath of routes) {
      const routeDirName = routeToDirName(routePath);
      const sourceRouteDir = path.join(captureDir, routeDirName);

      for (const viewport of VIEWPORTS) {
        const result = await diffOneRoute({ page, routePath, viewport, sourceRouteDir, baseUrl, reportDir, routeDirName, thresholdPercent });
        results.push(result);
      }
    }
  } finally {
    await browser.close();
  }

  const summary = {
    siteId,
    baseUrl,
    thresholdPercent,
    generatedAt: new Date().toISOString(),
    overallPass: results.every((r) => r.pass),
    results,
  };

  await fs.writeFile(path.join(reportDir, 'summary.json'), JSON.stringify(summary, null, 2));
  await fs.writeFile(path.join(reportDir, 'summary.md'), renderMarkdown(summary));

  console.log(`Visual diff report: ${reportDir}`);
  if (!summary.overallPass) {
    console.log('One or more pages exceed the visual fidelity threshold — see summary.md');
    process.exitCode = 1;
  }
}

async function diffOneRoute({ page, routePath, viewport, sourceRouteDir, baseUrl, reportDir, routeDirName, thresholdPercent }) {
  const sourcePngPath = path.join(sourceRouteDir, `screenshot-${viewport.name}.png`);
  let sourceBuffer;
  try {
    sourceBuffer = await fs.readFile(sourcePngPath);
  } catch {
    return { route: routePath, viewport: viewport.name, pass: false, error: 'missing source screenshot' };
  }

  await page.setViewportSize({ width: viewport.width, height: viewport.height });
  const targetUrl = `${baseUrl}${routePath}`;
  try {
    await gotoSettled(page, targetUrl);
  } catch (error) {
    return { route: routePath, viewport: viewport.name, pass: false, error: `failed to load ${targetUrl}: ${error.message}` };
  }
  const builtBuffer = await page.screenshot({ fullPage: true });

  const diffResult = diffPngBuffers(sourceBuffer, builtBuffer);
  const diffFileName = `${routeDirName}-${viewport.name}.png`;
  await fs.writeFile(path.join(reportDir, diffFileName), diffResult.diffPng);

  return {
    route: routePath,
    viewport: viewport.name,
    mismatchPercent: diffResult.mismatchPercent,
    // The full-canvas mismatchPercent above pads the shorter image, so once heights differ by more
    // than a few px it stops being a meaningful signal (the padded gap alone dominates the score, and
    // any vertical misalignment cascades into a near-total mismatch for everything below it). This is
    // the same pixelmatch comparison but cropped to the region both screenshots actually share — a
    // much more honest read on whether the overlapping content is actually visually aligned.
    croppedMismatchPercent: diffResult.croppedMismatchPercent,
    heightDeltaPercent: diffResult.heightDeltaPercent,
    dimensionMismatch: diffResult.dimensionMismatch,
    sourceSize: diffResult.sourceSize,
    builtSize: diffResult.builtSize,
    pass: !diffResult.dimensionMismatch && diffResult.mismatchPercent <= thresholdPercent,
    diffImage: `migration/reports/${path.basename(reportDir)}/${diffFileName}`,
  };
}

function diffPngBuffers(sourceBuffer, builtBuffer) {
  const sourcePng = PNG.sync.read(sourceBuffer);
  const builtPng = PNG.sync.read(builtBuffer);

  const width = Math.max(sourcePng.width, builtPng.width);
  const height = Math.max(sourcePng.height, builtPng.height);
  const dimensionMismatch = sourcePng.width !== builtPng.width || sourcePng.height !== builtPng.height;

  const a = padPng(sourcePng, width, height);
  const b = padPng(builtPng, width, height);
  const diff = new PNG({ width, height });

  const mismatchedPixels = pixelmatch(a.data, b.data, diff.data, width, height, { threshold: 0.1 });
  const totalPixels = width * height;

  const cropWidth = Math.min(sourcePng.width, builtPng.width);
  const cropHeight = Math.min(sourcePng.height, builtPng.height);
  const aCropped = cropPng(sourcePng, cropWidth, cropHeight);
  const bCropped = cropPng(builtPng, cropWidth, cropHeight);
  const croppedMismatchedPixels = pixelmatch(aCropped.data, bCropped.data, null, cropWidth, cropHeight, { threshold: 0.1 });

  return {
    diffPng: PNG.sync.write(diff),
    mismatchPercent: Number(((mismatchedPixels / totalPixels) * 100).toFixed(2)),
    croppedMismatchPercent: Number(((croppedMismatchedPixels / (cropWidth * cropHeight)) * 100).toFixed(2)),
    heightDeltaPercent: Number(((Math.abs(sourcePng.height - builtPng.height) / sourcePng.height) * 100).toFixed(2)),
    dimensionMismatch,
    sourceSize: { width: sourcePng.width, height: sourcePng.height },
    builtSize: { width: builtPng.width, height: builtPng.height },
  };
}

function padPng(png, width, height) {
  if (png.width === width && png.height === height) return png;
  const padded = new PNG({ width, height });
  PNG.bitblt(png, padded, 0, 0, png.width, png.height, 0, 0);
  return padded;
}

function cropPng(png, width, height) {
  if (png.width === width && png.height === height) return png;
  const cropped = new PNG({ width, height });
  PNG.bitblt(png, cropped, 0, 0, width, height, 0, 0);
  return cropped;
}

function renderMarkdown(summary) {
  const rows = summary.results
    .map((r) =>
      r.error
        ? `| ${r.route} | ${r.viewport} | - | - | - | ERROR: ${r.error} |`
        : `| ${r.route} | ${r.viewport} | ${r.mismatchPercent}% | ${r.croppedMismatchPercent}% | ${r.heightDeltaPercent}% | ${r.pass ? 'PASS' : 'FAIL'}${r.dimensionMismatch ? ' (dimension mismatch)' : ''} |`,
    )
    .join('\n');

  return [
    `# Visual diff report: ${summary.siteId}`,
    '',
    `Base URL: ${summary.baseUrl}`,
    `Threshold: ${summary.thresholdPercent}%`,
    `Generated: ${summary.generatedAt}`,
    `Overall: ${summary.overallPass ? 'PASS' : 'FAIL'}`,
    '',
    '`Mismatch` pads the shorter screenshot and diffs the full canvas — once heights differ it stops being a meaningful number (the pad itself, plus any cascading vertical misalignment, dominates the score). `Cropped mismatch` diffs only the region both screenshots share, so it isolates whether the overlapping content is actually visually aligned. `Height delta` is how far apart the two page heights are, as a % of the source height — the real measure of remaining content-depth gap.',
    '',
    '| Route | Viewport | Mismatch (padded) | Cropped mismatch | Height delta | Result |',
    '| --- | --- | --- | --- | --- | --- |',
    rows,
    '',
  ].join('\n');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
