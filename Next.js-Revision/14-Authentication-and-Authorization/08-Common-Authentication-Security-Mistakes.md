# Common Authentication Security Mistakes

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover trusting client roles, weak cookie flags, missing CSRF considerations, leaking tokens, and missing resource checks.

## Execution and data flow

Authentication asks who the caller is; authorization asks whether they can perform an action on this resource. Both matter at protected data/mutation boundaries.

Resolve identity from a verified session, then check role, ownership, or policy before every protected read/write. A page redirect is not enough.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Multi-user example: two users can sign in but must not read each other’s invoices; enforce ownership at the query/mutation boundary.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Auth libraries reduce implementation risk, but domain-specific permissions and data exposure remain application responsibilities.

## Common failure modes for this area

- Security must be enforced server-side for every sensitive operation.
- A user being authenticated does not imply they own every requested resource.

## Apply it

1. Test valid login, expired session, and authenticated wrong-owner access.
2. Explain why hiding a button does not protect a mutation.

**Topic prompt:** Common Authentication Security Mistakes: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Security must be enforced server-side for every sensitive operation.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/authentication)
- [API reference](https://nextjs.org/docs/app/api-reference)
