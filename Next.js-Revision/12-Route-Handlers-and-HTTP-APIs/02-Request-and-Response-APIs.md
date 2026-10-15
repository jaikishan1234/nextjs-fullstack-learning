# Request and Response APIs

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain JSON parsing, URL/query access, headers, cookies, response construction, and NextRequest/NextResponse when needed.

## Execution and data flow

A Route Handler is an explicit HTTP boundary: method, validation, authorization, response shape, status code, and caching are deliberate API design choices.

A `route.ts` exports functions named after HTTP methods and uses Web Request/Response APIs or Next-specific helpers. It does not automatically define a complete REST contract.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Webhook example: provider may send the same event twice. Verify signature, persist an idempotency key, respond intentionally, and log failures safely.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

APIs are reusable by other clients, but you must design auth, errors, rate limiting, and method semantics.

## Common failure modes for this area

- Check the current signatures and asynchronous request APIs for the selected version.
- Define status codes and error response shape instead of returning success for all outcomes.

## Apply it

1. Design statuses for invalid input, unauthenticated call, wrong owner, and creation.
2. Write a stable JSON error envelope.

**Topic prompt:** Request and Response APIs: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Check the current signatures and asynchronous request APIs for the selected version.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/api-reference/file-conventions/route)
- [API reference](https://nextjs.org/docs/app/api-reference)
