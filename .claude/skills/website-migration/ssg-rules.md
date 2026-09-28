# Static Rendering Rules

The default migration target is statically rendered Next.js pages.

The agent should verify that migrated pages can be generated at build time. If source content requires runtime access, isolate that data dependency and report it rather than silently making the entire route dynamic.

Future ISR/revalidation should be possible without restructuring the page components.
