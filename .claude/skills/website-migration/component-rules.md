# Component Architecture Rules

`packages/base-ui` is the shared UI source of truth.

For every repeated pattern:

1. Search base-ui first.
2. Reuse before creating.
3. Prefer composition and variants over near-duplicate components.
4. Do not move site-specific business/content logic into base-ui.
5. Keep base-ui independent of a specific site's content and configuration.

A component should normally be shared when it is a generic UI primitive or there is credible reuse across multiple sites. Do not optimize for maximum extraction during the first site; optimize for clean, reusable abstractions.

## Styling must use design tokens, not hardcoded values

`packages/base-ui` components must render via Tailwind utility classes bound to a site's `@theme` CSS custom properties (`bg-primary`, `text-ink`, `border-border`, `font-heading`, etc. — see `apps/anscollc/app/globals.css` for the token names in use). Do not introduce a new hardcoded hex color or `font-family` value in a base-ui component — every color/font a component needs should already be one of the tokens a site's `globals.css` defines (generated from that site's `tokens.json`, per `website-discovery.md`). This is what lets the same shared component render correctly with each site's captured visual identity.

## Reuse before duplicating: consent and form-confirmation patterns

Before adding new cookie-consent or form-confirmation code, check for and use:

- `CookieConsent` (`packages/base-ui/src/cookie-consent.tsx`) — wire it in only when a site's `consent.json` capture has `found: true`; pass the captured copy/button labels as props rather than inventing them. Do not add a banner when the source doesn't have one.
- `MigratedForm` (`packages/base-ui/src/migrated-form.tsx`) — wraps a form's fields, renders the shared `Button` as the submit control, and swaps to a confirmation view on submit. Pass the source's actual confirmation copy from `forms.json`'s `confirmationCandidates` when available; when it isn't, use a clearly-flagged placeholder (see the `TODO(migration)` comment convention in `apps/anscollc/components/generated/contact-form.tsx`) and record it as an open item in the migration report, not as a fact.
