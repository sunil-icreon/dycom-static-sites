# Claude Code migration automation

The migration is intentionally one-site-at-a-time.

Primary command:

```text
/migrate-site site-01
```

Refresh semantics:

- generated pages are overwritten from the latest source;
- new pages are created;
- removed source pages are reported, not deleted by default;
- protected/custom files are preserved.
