# /analyze-site

Analyze one configured site without implementing it.

Usage:

```text
/analyze-site <site-id>
```

Run `node tools/site-capture/src/capture.mjs <site-id>` to capture the source site (screenshots, design tokens, assets, cookie-consent, forms — see `.claude/skills/website-migration/website-discovery.md`), then return the discovered route inventory, common UI patterns, design tokens/fonts, assets, cookie-consent findings, form inventory, and migration risks. Do not modify application code.
