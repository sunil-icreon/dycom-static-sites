# Website Discovery Guidance

Discover only the configured source website and its internal links unless the site configuration explicitly permits external sources.

## Run the capture tool, don't freeform-browse

Discovery is driven by `tools/site-capture` (`node tools/site-capture/src/capture.mjs <site-id>`, documented in `tools/site-capture/README.md`), not by an agent browsing the site ad hoc. Freeform browsing/crawling should only be used as a fallback when browser automation genuinely isn't available in the current environment — record that limitation in the migration report rather than silently reverting to it.

The tool writes, per discovered route, to `migration/captures/<site-id>/<route>/`:

- `screenshot-mobile.png` / `screenshot-tablet.png` / `screenshot-desktop.png` — full-page screenshots at 375/768/1440px
- `styles-<viewport>.json` — computed-style samples (color, background, font family/size/weight/line-height/letter-spacing) for representative elements at each viewport
- `dom.html` — the rendered DOM snapshot
- `assets.json` — `<img>` images, CSS `background-image` panels (many theme-driven sites implement most photography this way, not as `<img>` tags — check `backgroundImages`, not just `images`, before assuming a page has few photos), video, self-hosted `@font-face` rules, Google Fonts links, and the actual image/video/font network requests observed while loading the page
- `consent.json` — cookie-consent banner markup/copy/buttons, or `{"found": false}` if none was detected
- `forms.json` — form field inventory (name/type/label/required) and any confirmation/success markup already present in the DOM (a live source form is never submitted unless the site config explicitly opts in — see the tool's README)

And at the site level: `migration/captures/<site-id>/tokens.json` (aggregated color/font samples across all captured routes, ranked by frequency — the basis for the app's design tokens) and `routes.json` (the discovered route list).

## Consume the artifacts

- Page structure, content, navigation, and metadata come from `dom.html` and the route list — the same as before.
- Typography and color tokens come from `tokens.json`, not from eyeballing a screenshot or reusing values from a different site.
- The image/video/font inventory comes from `assets.json`.
- Whether to add a cookie-consent banner, and what it should say, comes from `consent.json` — do not add one when `found` is `false`.
- Form confirmation states come from `forms.json`'s `confirmationCandidates`; if empty, flag the confirmation copy as a placeholder needing verification rather than inventing final copy.

Do not copy executable third-party scripts into the migrated application.

If browser automation is unavailable and discovery falls back to raw HTML/manual inspection, prefer rendered/browser-visible structure over raw HTML when JavaScript changes the final page, and record the limitation in the migration report rather than inventing content.
