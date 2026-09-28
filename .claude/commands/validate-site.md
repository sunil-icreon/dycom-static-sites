# /validate-site

Validate one migrated site.

Usage:

```text
/validate-site <site-id>
```

Run typecheck/build and inspect route coverage, static rendering assumptions, internal links, assets, and generated/custom boundaries. Run `node tools/site-capture/src/diff.mjs <site-id> --base-url=<url of the running built app>` and record its pass/fail summary — visual comparison is mandatory (see `.claude/skills/website-migration/validation-rules.md`), not optional. Write/update the site's migration report, including the visual-diff report path.
