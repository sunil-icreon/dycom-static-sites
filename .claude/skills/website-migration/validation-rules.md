# Validation Rules

After generation:

1. Run typecheck.
2. Run lint if configured.
3. Run a production build for the affected app.
4. Verify every discovered route maps to a page.
5. Verify internal links point to valid migrated routes where possible.
6. Verify images/assets resolve.
7. Check that generated pages remain statically renderable.
8. Run the visual-diff comparison (mandatory, not optional — see below).
9. Record warnings and source limitations.

## Visual comparison is mandatory

Do not claim visual equivalence without actually comparing the pages. Run:

```sh
pnpm build:<site-id>
pnpm --filter <package-name> start &   # or: pnpm dev:<site-id>
node tools/site-capture/src/diff.mjs <site-id> --base-url=http://localhost:3000
```

This re-screenshots every route captured by `capture.mjs` against the running migrated app, at the same three viewports, and pixel-diffs each pair. It writes `migration/reports/<site-id>-visual-diff/summary.md` (and `summary.json`) with a per-page/per-viewport mismatch percentage and diff images.

A page/viewport passes when its mismatch is at or below the site's `capture.visualDiffThresholdPercent` (default 2%) and there is no dimension mismatch (a differing full-page height/width between source and built screenshots almost always means missing or extra content, not an acceptable rendering difference). Do not silently accept a failing page — either fix it or record it as an explicit, justified warning (e.g. a source element that is inherently non-deterministic, like a rotating carousel frame or a live timestamp) in the migration report, alongside the report path.

Only skip this step, and say so explicitly in the migration report, when browser/screenshot tooling is genuinely unavailable in the current environment.
