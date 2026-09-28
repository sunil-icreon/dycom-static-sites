# Next.js Implementation Rules

- Use the App Router.
- Prefer Server Components.
- Use static rendering for migrated pages.
- Use `next/link` for internal navigation.
- Use `next/image` for images when it is technically appropriate. Keep proxying images and video to the source's CDN (`images.remotePatterns` in `next.config.ts`, plain `<video src>`/`<source src>` for video) rather than vendoring binaries into the app.
- Load fonts with `next/font`: `next/font/google` when `tokens.json`/`assets.json` show a Google Font (`fonts.googleapis.com`/`fonts.gstatic.com` links), `next/font/local` (with the actual font file downloaded from the source) when a self-hosted `@font-face` was captured. Do not fall back to a generic system-font stack when the source actually loads a specific webfont.
- Keep page components explicit and route-aligned.
- Avoid unnecessary client-side state/effects — this doesn't apply to the cookie-consent banner or form confirmation state, which are inherently client-side (`localStorage` and submit-triggered UI transitions) and should use `"use client"` components (`CookieConsent`, `MigratedForm`) as documented in `component-rules.md`.
- Avoid the Next.js server APIs `headers()`, `cookies()`, uncached request APIs, or other dynamic triggers unless required, to keep pages statically renderable. This is about the server-side request APIs, not about client-side cookies/`localStorage` — a consent banner reading/writing its choice via `localStorage` in a client component does not make a route dynamic.
- Keep future ISR support straightforward by isolating data/content loading from page presentation.
