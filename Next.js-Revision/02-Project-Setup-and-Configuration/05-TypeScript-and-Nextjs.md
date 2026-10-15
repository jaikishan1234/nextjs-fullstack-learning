# TypeScript and Next.js

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover generated types, tsconfig, typed route parameters, component props, API payloads, and the difference between static typing and runtime validation.

## How it fits into the app

Treat setup as reproducible project configuration: dependencies, scripts, compiler options, environment values, and framework settings must describe the same app.

Development and production use different execution paths. A production workflow normally builds optimized output before starting it; settings may apply at build time or runtime.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Async route params in Next.js 16

```tsx
// app/products/[id]/page.tsx
type Props = { params: Promise<{ id: string }> };
export default async function Page({ params }: Props) {
  const { id } = await params;
  return <h1>Product {id}</h1>;
}
```

This types framework input; it does not prove that the record exists or that the caller is authorized.

## Tradeoffs to recognize

Explicit config improves repeatability but adds assumptions to maintain during upgrades.

## Common failure modes for this area

- TypeScript does not validate untrusted input at runtime.
- Do not assume local environment variables or scripts exist unchanged in CI/production.

## Apply it

1. Remove one required env variable and inspect the failure.
2. Run a production build; compare the result with the dev server.

**Topic prompt:** TypeScript and Next.js: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

TypeScript does not validate untrusted input at runtime.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/installation)
- [API reference](https://nextjs.org/docs/app/api-reference)
