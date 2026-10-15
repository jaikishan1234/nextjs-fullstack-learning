# Request API Version Considerations

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Provide a migration checklist for asynchronous cookies, headers, params, and searchParams signatures.

## Execution and data flow

Cookies and headers are request context, not global constants. In Next.js 16, request APIs are asynchronous.

`await cookies()` reads incoming cookie state; mutation belongs in a Server Function or Route Handler. `await headers()` returns read-only headers. `params` and page `searchParams` are Promise-based too.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Context example: locale comes from URL, theme from cookie, request ID from header. Classify which are user input and what they imply for rendering.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Request context enables personalization but can make generic prerendering inappropriate. Forwarded headers are trustworthy only under a known proxy setup.

## Common failure modes for this area

- Do not mix old synchronous examples with newer version assumptions.
- Do not read Next.js 16 request APIs synchronously or mutate read-only headers.

## Apply it

1. Read request context with async APIs.
2. Explain how reading a cookie affects rendering/caching assumptions.

**Topic prompt:** Request API Version Considerations: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

In Next.js 16, request-time APIs such as `cookies()`, `headers()`, `params`, and page `searchParams` are asynchronous; Middleware is now called Proxy. Confirm all signatures against the version 16 upgrade guide.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/api-reference/functions/cookies)
- [API reference](https://nextjs.org/docs/app/api-reference)
