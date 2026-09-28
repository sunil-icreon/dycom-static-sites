---
name: website-migration
description: Rebuild or refresh one running website at a time as a Next.js application in the pnpm + Turborepo monorepo. Use when migrating a live website into apps/<site-id>, regenerating scraped pages, reusing or extending packages/base-ui, configuring static rendering, and validating the generated application.
---

# Website Migration Skill

## Purpose

Rebuild one running website at a time as a Next.js application inside this pnpm + Turborepo monorepo.

The source website is authoritative for generated page content. Re-running the migration intentionally regenerates and overwrites generated pages with the latest source content.

## Inputs

- Site ID, e.g. `site-01`
- `migration/sites/<site-id>.json`
- Existing monorepo state
- Live source website configured by `sourceUrl`

## Required workflow

1. Load and validate the site configuration.
2. Confirm the target app path is inside `apps/`.
3. Inspect the existing app and `packages/base-ui` before writing code.
4. Run `tools/site-capture` (`node tools/site-capture/src/capture.mjs <site-id>`) to deterministically capture the source site — screenshots at three viewports, computed-style/token samples, DOM snapshots, an asset manifest, cookie-consent detection, and a form inventory. See `website-discovery.md`. Do not substitute freeform browsing for this step when browser automation is available.
5. Create/update the site's Next.js app using the App Router.
6. Use static rendering by default. Do not introduce dynamic rendering unless the source behavior requires it.
7. Prefer Server Components. Add `"use client"` only when interaction requires it (this includes the cookie-consent banner and form confirmation state, which are inherently client-side).
8. Use `next/link` for internal navigation and `next/image` for local/remote images when appropriate.
9. Reuse existing `packages/base-ui` components whenever they fit, including `CookieConsent` and `MigratedForm` (see `component-rules.md`).
10. If a new component is clearly generic and likely reusable across sites, propose/add it to `packages/base-ui`; otherwise keep it site-local.
11. Generate the site's design tokens (`app/globals.css`) and font loading from `migration/captures/<site-id>/tokens.json` — do not hand-pick colors/fonts from memory or screenshots. See "Visual fidelity" below.
12. Generated page implementations belong under the app's generated area and may be replaced on later runs.
13. Never overwrite manually maintained files under `components/custom`, `lib/custom`, or other explicitly protected paths.
14. New source pages must be created.
15. Existing generated pages must be overwritten with the latest scraped implementation.
16. Source pages no longer discovered should be reported. Do not delete them unless the site config explicitly enables deletion.
17. Ensure the root `package.json` has `dev:<site-id>` and `build:<site-id>` convenience scripts that run `turbo run dev`/`turbo run build` filtered to that app's package name (e.g. `"dev:anscollc": "turbo run dev --filter=@repo/anscollc"`, `"build:anscollc": "turbo run build --filter=@repo/anscollc"`). Add them if missing; update them if the app's package name changed.
18. Run formatting, lint/typecheck, and production build after migration.
19. Validate internal routes, links, images, static rendering, and visual fidelity (see `validation-rules.md`) — run `node tools/site-capture/src/diff.mjs <site-id> --base-url=<url>` against the built app before calling the migration complete.
20. Write a migration report under `migration/reports/<site-id>.md`, including the visual-diff summary.

## Generated vs custom boundary

Treat these as generated/replaceable:

- `apps/<site-id>/app/**/page.tsx`
- `apps/<site-id>/components/generated/**`
- migration-generated asset files under the configured generated asset directory

Treat these as protected unless explicitly requested:

- `apps/<site-id>/components/custom/**`
- manually authored app infrastructure
- environment/configuration files
- `packages/base-ui` components that were not created by the current migration

When uncertain, preserve the file and report the conflict.

## Page mapping

Map source URLs to App Router routes deterministically:

- `/` -> `app/page.tsx`
- `/about` -> `app/about/page.tsx`
- `/products/widget` -> `app/products/widget/page.tsx`

Do not create a catch-all route merely to avoid creating individual page components. Each discovered page should have an explicit page component unless the site architecture genuinely requires a parameterized route.

## Content fidelity

The migrated site must be an exact replica of the source in appearance and behavior, not just an approximation. Preserve, where applicable:

- visible text, headings and hierarchy, links and destinations, metadata, semantic structure
- **typography**: font family, size, weight, and line-height for body text and each heading level, sourced from `tokens.json`, not guessed
- **color palette**: background, surface, text, muted-text, border, and brand/accent colors, sourced from `tokens.json`
- **images and video**, exactly as displayed (dimensions, cropping, captions/alt text) — see `nextjs-rules.md` for hosting
- **responsive behavior**: layout, navigation, and typography changes across the mobile/tablet/desktop breakpoints captured by `tools/site-capture`
- **cookie-consent banner**: presence, copy, button labels, placement, and dismiss-persistence behavior, when `consent.json` shows one was observed on the source (see `component-rules.md` — do not add one when none was observed)
- **form confirmation states**: the same success/confirmation UI the source shows after submit, sourced from `forms.json`
- **interactive states**: hover/focus/open states for menus and other interactive elements

Do not copy analytics, tracking scripts, third-party marketing tags, unsafe inline scripts, or source-site implementation details unless explicitly required.

## Visual fidelity

A page is not done until it has been compared against the source, not just visually inspected by eye:

- Design tokens for a site live in `apps/<site-id>/app/globals.css` as `@theme` CSS custom properties, generated from `migration/captures/<site-id>/tokens.json`. `packages/base-ui` components consume these via `var(--color-*)`/`var(--font-*)`-backed Tailwind utility classes — never hardcode a color/font that a captured token already covers.
- Font loading uses `next/font/google` when the captured font is a Google Font, or `next/font/local` (downloading the actual font file) when self-hosted.
- Run `node tools/site-capture/src/diff.mjs <site-id> --base-url=<url of the built app>` before calling a migration complete. A page/viewport combination failing its `visualDiffThresholdPercent` (default 2%, in the site config's `capture` block) must be investigated and either fixed or explicitly called out as a warning with a reason (e.g. a known-dynamic region like a rotating carousel or a live date).

## Shared component rules

Before creating a new UI component:

1. Search `packages/base-ui`.
2. Reuse an existing component if it matches.
3. If the component differs only by content or presentation variants, extend the shared component rather than duplicating it.
4. Add to `base-ui` only when the abstraction is generic and useful beyond one site.
5. Keep strongly site-specific components local.

Avoid a base-ui namespace polluted with site-specific names.

## Re-run semantics

A normal migration run is a refresh run.

- Source page exists + generated target exists -> replace target.
- Source page exists + target missing -> create target.
- Source page no longer exists + target exists -> report as removed-source candidate; do not delete by default.

Do not spend effort on fine-grained source hashes or DOM diffs unless explicitly requested. The desired behavior is deterministic regeneration from the current source.

## Completion criteria

Do not call the migration complete until:

- all discovered source pages have a target route or an explicit migration exception;
- generated pages use Next.js conventions;
- shared components were inspected before local duplication;
- root `package.json` has current `dev:<site-id>`/`build:<site-id>` scripts for the app;
- `pnpm typecheck` and `pnpm build` pass for the affected app/workspace;
- `tools/site-capture`'s `diff.mjs` has been run against the built app and its `summary.md` is within the configured threshold (or failures are explicitly explained in the report);
- migration report lists warnings, skipped items, removed-source candidates, and the visual-diff report path.
