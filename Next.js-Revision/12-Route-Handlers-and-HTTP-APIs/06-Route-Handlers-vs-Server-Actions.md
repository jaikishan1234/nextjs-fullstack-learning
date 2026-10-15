# Route Handlers vs Server Actions

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Compare browser form mutations, programmatic API consumers, webhooks, and external integrations.

## Execution and data flow

A Route Handler is an explicit HTTP boundary: method, validation, authorization, response shape, status code, and caching are deliberate API design choices.

A `route.ts` exports functions named after HTTP methods and uses Web Request/Response APIs or Next-specific helpers. It does not automatically define a complete REST contract.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Choose by consumer

| Requirement | Natural fit |
|---|---|
| UI form mutation | Server Action |
| Partner/public HTTP API | Route Handler |
| Webhook | Route Handler |
| Server Component database read | Direct data-access call |
| Browser polling endpoint | Route Handler/service endpoint |

Both actions and handlers need validation and authorization. Use the mechanism that matches the caller and contract.

## Tradeoffs to recognize

APIs are reusable by other clients, but you must design auth, errors, rate limiting, and method semantics.

## Common failure modes for this area

- Use Route Handlers for explicit HTTP APIs and Server Actions for UI-oriented mutations when appropriate.
- Define status codes and error response shape instead of returning success for all outcomes.

## Apply it

1. Design statuses for invalid input, unauthenticated call, wrong owner, and creation.
2. Write a stable JSON error envelope.

**Topic prompt:** Route Handlers vs Server Actions: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Use Route Handlers for explicit HTTP APIs and Server Actions for UI-oriented mutations when appropriate.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/api-reference/file-conventions/route)
- [API reference](https://nextjs.org/docs/app/api-reference)
