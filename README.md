# Website Migration Monorepo

A pnpm + Turborepo starter for rebuilding existing websites as statically generated Next.js applications, with reusable UI in `packages/base-ui` and Claude Code automation for one-site-at-a-time migration.

## Structure

```text
apps/
  site-01/                 # one Next.js app per source website
packages/
  base-ui/                 # shared UI components
.claude/
  skills/website-migration/
  agents/
  commands/
migration/
  sites/                   # one configuration file per source site
```

## Prerequisites

- Node.js 20+
- pnpm 10+
- Claude Code

## Install

```bash
pnpm install
pnpm dev
```

## Claude Code

The primary workflow is:

```text
/migrate-site site-01
```

Each run treats the live source website as authoritative for generated pages. Existing generated pages are regenerated/overwritten with the latest scraped content; new pages are created. Manually maintained files under `components/custom` are not overwritten.

See `.claude/skills/website-migration/SKILL.md` and `.claude/commands/migrate-site.md`.

## Adding a website

1. Add `migration/sites/<site-id>.json`.
2. Add `apps/<site-id>/` using the Next.js app template.
3. Run `/migrate-site <site-id>`.

The initial scaffold includes `site-01` as an example.
