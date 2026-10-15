# Project Structure

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain app/, public/, src/, package.json, tsconfig.json, next.config.ts, and colocated files. Distinguish framework conventions from optional organization choices.

## How it fits into the app

Treat setup as reproducible project configuration: dependencies, scripts, compiler options, environment values, and framework settings must describe the same app.

Development and production use different execution paths. A production workflow normally builds optimized output before starting it; settings may apply at build time or runtime.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Typical structure

```tsx
app/
  layout.tsx
  page.tsx
  products/page.tsx
  products/[productId]/page.tsx
components/product-card.tsx
lib/data-access/products.ts
public/logo.svg
next.config.ts
```

Only convention filenames define route behavior; ordinary components and data modules are organizational choices.

## Tradeoffs to recognize

Explicit config improves repeatability but adds assumptions to maintain during upgrades.

## Common failure modes for this area

- Only route convention files have special meaning; ordinary folders are organizational.
- Do not assume local environment variables or scripts exist unchanged in CI/production.

## Apply it

1. Remove one required env variable and inspect the failure.
2. Run a production build; compare the result with the dev server.

**Topic prompt:** Project Structure: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Only route convention files have special meaning; ordinary folders are organizational.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/installation)
- [API reference](https://nextjs.org/docs/app/api-reference)
