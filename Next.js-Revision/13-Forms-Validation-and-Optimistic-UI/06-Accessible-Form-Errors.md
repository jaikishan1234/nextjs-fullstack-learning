# Accessible Form Errors

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover labels, required indicators, error summaries, aria-describedby, focus management, and status announcements.

## Execution and data flow

A robust form uses client feedback for usability and server validation for correctness/security.

Named controls produce `FormData`; actions parse and validate values. Pending hooks provide feedback; optimistic UI predicts the result and must reconcile on failure.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Optimistic task edit example: title appears saved immediately, but the server rejects it as too long. Explain rollback, field error, and accessible feedback.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Native actions support progressive enhancement; complex client state adds richer UX and additional failure states.

## Common failure modes for this area

- Do not communicate errors through color alone.
- Client validation improves UX but is not the server’s trust boundary.

## Apply it

1. Test invalid input and pending UI.
2. Make an optimistic change fail and reconcile it.

**Topic prompt:** Accessible Form Errors: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Do not communicate errors through color alone.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/forms)
- [API reference](https://nextjs.org/docs/app/api-reference)
