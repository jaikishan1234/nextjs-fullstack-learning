# Production Readiness Checklist

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Provide an actionable checklist for auth, secrets, logging, caching, tests, monitoring, deployment, and recovery.

## Operational or user-facing behavior

Security starts at trust boundaries: browser input, headers, cookies, database rows, and provider responses are untrusted until validated and authorized.

Keep secrets server-only, validate requests at runtime, authorize sensitive operations, return only needed fields, encode output safely, and configure headers for the actual deployment.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

Data exposure example: an ORM object includes internal fields that UI does not need. Narrow the database projection and create a UI-safe DTO.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Defense in depth adds checks but is safer than treating a UI convention as a security guarantee.

## Common failure modes for this area

- Treat security and reliability as ongoing practices.
- TypeScript and CORS are not replacements for runtime validation and server authorization.

## Apply it

1. Attempt a cross-user request by changing an ID.
2. Trace a secret from environment through imports to the client bundle.

**Topic prompt:** Production Readiness Checklist: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Treat security and reliability as ongoing practices.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/data-security)
- [API reference](https://nextjs.org/docs/app/api-reference)
