# HTTP Methods and Status Codes

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain GET, POST, PUT, PATCH, DELETE, idempotency, safe methods, and common status codes.

## Execution and data flow

A Route Handler is an explicit HTTP boundary: method, validation, authorization, response shape, status code, and caching are deliberate API design choices.

A `route.ts` exports functions named after HTTP methods and uses Web Request/Response APIs or Next-specific helpers. It does not automatically define a complete REST contract.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Status choices

| Situation | Typical status |
|---|---|
| Resource created | 201 |
| Successful response | 200 |
| Invalid request | 400 |
| Unauthenticated | 401 |
| Disallowed | 403 (or policy-specific 404) |
| Missing resource | 404 |
| Unexpected server failure | 500 |

GET should be safe; PUT is generally idempotent replacement; PATCH modifies selected fields; POST often creates or starts work.

## Tradeoffs to recognize

APIs are reusable by other clients, but you must design auth, errors, rate limiting, and method semantics.

## Common failure modes for this area

- Use status codes that reflect the actual outcome; avoid returning 200 for every error.
- Define status codes and error response shape instead of returning success for all outcomes.

## Apply it

1. Design statuses for invalid input, unauthenticated call, wrong owner, and creation.
2. Write a stable JSON error envelope.

**Topic prompt:** HTTP Methods and Status Codes: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Use status codes that reflect the actual outcome; avoid returning 200 for every error.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/api-reference/file-conventions/route)
- [API reference](https://nextjs.org/docs/app/api-reference)
