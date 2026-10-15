# Server Functions and Client Calls

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain defining server functions, passing references to Client Components, and serializable arguments/results.

## Execution and data flow

A Server Action is a server-side mutation function callable from UI. Treat it as an invocable boundary, not a private function protected by its location.

Actions accept arguments/FormData, validate input, authenticate, authorize the target resource, perform the write, then revalidate or redirect as appropriate.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Form example: do not trust a hidden `ownerId`; derive the current user from a verified session and validate the requested resource on the server.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Actions integrate with forms; Route Handlers better suit explicit HTTP contracts, webhooks, and external clients.

## Common failure modes for this area

- Never assume an action is protected merely because its code runs on the server.
- A Server Action still needs runtime validation, authentication, and authorization.

## Apply it

1. Add runtime validation and auth/resource ownership checks to a form action.
2. Try invalid and manipulated fields.

**Topic prompt:** Server Functions and Client Calls: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Never assume an action is protected merely because its code runs on the server.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/updating-data)
- [API reference](https://nextjs.org/docs/app/api-reference)
