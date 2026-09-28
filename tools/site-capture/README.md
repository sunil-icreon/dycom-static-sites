# @repo/site-capture

Deterministic fidelity tooling used by the `website-migration` skill. Two scripts:

- **`capture.mjs <site-id>`** — crawls the live source site (`migration/sites/<site-id>.json`) and records, per discovered route, at three viewports (375/768/1440):
  - full-page screenshots
  - computed-style samples (color, background, border color/width, font family/size/weight/line-height/letter-spacing) for representative elements — aggregated into `tokens.json`
  - a rendered DOM snapshot and an asset manifest (`<img>` images, CSS `background-image` panels — common in theme-driven sites where most photography isn't in `<img>` tags — video, self-hosted `@font-face` rules, Google Fonts links, and the actual image/video/font network requests observed)
  - cookie-consent banner detection (markup, copy, button labels)
  - a form inventory (fields, labels, required flags, and any confirmation/success markup already present in the DOM)

  Output goes to `migration/captures/<site-id>/`.

- **`diff.mjs <site-id> --base-url=<url>`** — re-screenshots the same routes/viewports against a *running* migrated app and pixel-diffs each one against the corresponding capture. Requires the app to already be built and served — this script does not manage that lifecycle:

  ```sh
  pnpm build:<site-id>
  pnpm --filter <package-name> start &   # or: pnpm dev:<site-id>
  node tools/site-capture/src/diff.mjs <site-id> --base-url=http://localhost:3000
  ```

  Output goes to `migration/reports/<site-id>-visual-diff/` (diff images plus `summary.json`/`summary.md`). Reports three numbers per route/viewport: the padded full-canvas mismatch % (pass/fail is based on this + the threshold), a `croppedMismatchPercent` diffed only over the region both screenshots share (meaningful even when heights differ — isolates whether the overlapping content is visually aligned), and `heightDeltaPercent` (how far apart the two page heights are, as % of source height — the real measure of remaining content-depth gap). Exits non-zero if any page exceeds the configured threshold.

## One-time setup

```sh
pnpm install
pnpm --filter @repo/site-capture exec playwright install chromium
```

## Site config options (`migration/sites/<site-id>.json`, under `capture`)

- `maxPages` — crawl cap (default 60).
- `routes` — explicit route list, skips crawling if provided.
- `visualDiffThresholdPercent` — max acceptable mismatch per page/viewport (default 2).
- `allowLiveFormSubmissionTest` (default `false`) — **must** be paired with `formTestData` (per form, keyed by form `id` or index, with a `fields` map of safe test values) before `capture.mjs` will ever click submit on a form on the *live* source site. Without both set, forms are inventoried but never submitted — submitting a live production form can trigger real emails/notifications to the site owner.
