# /migrate-site

Migrate or refresh one configured website.

Usage:

```text
/migrate-site <site-id>
```

Example:

```text
/migrate-site site-01
```

## Execution contract

1. Load `migration/sites/<site-id>.json`.
2. Validate that the site is enabled and its `sourceUrl` is reachable.
3. Inspect the existing target app and shared `packages/base-ui`.
4. Invoke the website-analyzer workflow to discover the current source site.
5. Invoke the component-architect workflow to determine reusable UI.
6. Invoke the page-migrator workflow to create/update the target Next.js pages.
7. Treat generated pages as replaceable migration output: existing generated pages are overwritten with the latest scraped content.
8. Create newly discovered pages.
9. Report source pages that disappeared; do not delete them unless `deleteRemovedPages` is true.
10. Never overwrite protected custom components or unrelated app infrastructure.
11. Ensure root `package.json` has `dev:<site-id>` / `build:<site-id>` scripts (`turbo run dev|build --filter=<app-package-name>`); add or update them as needed.
12. Run validation and production build for the affected app, then `node tools/site-capture/src/diff.mjs <site-id> --base-url=<url>` against the built app (see `.claude/skills/website-migration/validation-rules.md`) — this is required, not optional, before the migration is considered done.
13. Write `migration/reports/<site-id>.md` containing:
    - source URL
    - run timestamp
    - discovered routes
    - created pages
    - overwritten pages
    - removed-source candidates
    - shared components reused/created
    - design tokens/fonts applied (and their source: `tokens.json`/`assets.json`)
    - cookie-consent banner status (observed on source and implemented / not observed on source)
    - form confirmation states implemented (and whether copy came from a real capture or a flagged placeholder)
    - assets copied/updated
    - validation results
    - visual-diff report path and pass/fail summary
    - warnings/limitations

## Important

Do not attempt to migrate all configured sites. This command operates on exactly one site ID per invocation.
