# Cookies API

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain reading cookies and permitted mutation contexts, options, and version-aware asynchronous APIs.

## Execution and data flow

Cookies and headers are request context, not global constants. In Next.js 16, request APIs are asynchronous.

`await cookies()` reads incoming cookie state; mutation belongs in a Server Function or Route Handler. `await headers()` returns read-only headers. `params` and page `searchParams` are Promise-based too.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Async cookies API

```tsx
import { cookies } from "next/headers";
export default async function PreferencesPage() {
  const store = await cookies();
  const theme = store.get("theme")?.value ?? "system";
  return <p>Theme: {theme}</p>;
}
```

Read in a Server Component; set/delete in a Server Function or Route Handler where response headers can be changed.

## Tradeoffs to recognize

Request context enables personalization but can make generic prerendering inappropriate. Forwarded headers are trustworthy only under a known proxy setup.

## Common failure modes for this area

- Verify current cookie API signatures in official docs.
- Do not read Next.js 16 request APIs synchronously or mutate read-only headers.

## Apply it

1. Read request context with async APIs.
2. Explain how reading a cookie affects rendering/caching assumptions.

**Topic prompt:** Cookies API: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

In Next.js 16, request-time APIs such as `cookies()`, `headers()`, `params`, and page `searchParams` are asynchronous; Middleware is now called Proxy. Confirm all signatures against the version 16 upgrade guide.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/api-reference/functions/cookies)
- [API reference](https://nextjs.org/docs/app/api-reference)
