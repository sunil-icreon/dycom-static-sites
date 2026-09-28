import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// tools/site-capture/src/lib -> tools/site-capture/src -> tools/site-capture -> tools -> repo root
export const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..');

export async function loadSiteConfig(siteId) {
  const configPath = path.join(REPO_ROOT, 'migration', 'sites', `${siteId}.json`);
  const raw = await fs.readFile(configPath, 'utf8');
  const site = JSON.parse(raw);
  if (!site.sourceUrl) {
    throw new Error(`Site config ${configPath} is missing sourceUrl`);
  }
  return site;
}

export function routeToDirName(routePath) {
  if (routePath === '/') return 'home';
  return routePath.replace(/^\//, '').replace(/\//g, '__') || 'home';
}
