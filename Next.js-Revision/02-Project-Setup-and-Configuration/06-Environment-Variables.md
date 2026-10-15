# Environment Variables

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain .env files, process.env, NEXT_PUBLIC_ exposure, server-only secrets, deployment settings, and build-time versus runtime considerations.

## How it fits into the app

Treat setup as reproducible project configuration: dependencies, scripts, compiler options, environment values, and framework settings must describe the same app.

Development and production use different execution paths. A production workflow normally builds optimized output before starting it; settings may apply at build time or runtime.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Server-only secret access

```tsx
import "server-only";
export function databaseUrl() {
  const value = process.env.DATABASE_URL;
  if (!value) throw new Error("DATABASE_URL is missing");
  return value;
}
```

Never put secrets in `NEXT_PUBLIC_` variables; those are intended to be client-visible.

## Tradeoffs to recognize

Explicit config improves repeatability but adds assumptions to maintain during upgrades.

## Common failure modes for this area

- Never prefix secrets with NEXT_PUBLIC_; values with that prefix can be included in client bundles.
- Do not assume local environment variables or scripts exist unchanged in CI/production.

## Apply it

1. Remove one required env variable and inspect the failure.
2. Run a production build; compare the result with the dev server.

**Topic prompt:** Environment Variables: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Never prefix secrets with NEXT_PUBLIC_; values with that prefix can be included in client bundles.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/installation)
- [API reference](https://nextjs.org/docs/app/api-reference)
