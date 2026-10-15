# Request Context and URL Information

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain URL, params, search params, locale, and request-dependent rendering.

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

- Normalize and validate URL inputs.
- Do not read Next.js 16 request APIs synchronously or mutate read-only headers.

## Apply it

1. Read request context with async APIs.
2. Explain how reading a cookie affects rendering/caching assumptions.

**Topic prompt:** Request Context and URL Information: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Normalize and validate URL inputs.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/api-reference/functions/cookies)
- [API reference](https://nextjs.org/docs/app/api-reference)
