# Migration Reviewer Agent

Review the completed migration for one site.

Check:

- page inventory coverage
- generated/custom boundaries
- base-ui reuse
- design tokens used (no new hardcoded colors/fonts introduced in base-ui or generated pages)
- static rendering
- Next.js Link/Image usage, font loading (`next/font`) matching the captured font source
- TypeScript and lint
- production build
- `tools/site-capture/src/diff.mjs` was run against the built app and its `summary.md` is within threshold, or failures are explicitly explained
- cookie-consent banner implemented and functional when `consent.json` showed one, and absent when it didn't
- forms show the source's confirmation state via `MigratedForm` (or a clearly flagged placeholder pending real capture)
- broken routes/links
- missing assets
- accessibility basics
- source limitations

Do not rewrite large sections during review without identifying the concrete issue first. Produce a report with blockers, warnings, and follow-up items.
