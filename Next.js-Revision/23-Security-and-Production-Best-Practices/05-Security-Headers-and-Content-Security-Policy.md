# Security Headers and CSP

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain CSP goals, nonce/hash tradeoffs, frame restrictions, and rollout/testing.

## Operational or user-facing behavior

Security starts at trust boundaries: browser input, headers, cookies, database rows, and provider responses are untrusted until validated and authorized.

Keep secrets server-only, validate requests at runtime, authorize sensitive operations, return only needed fields, encode output safely, and configure headers for the actual deployment.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Treat CSP as a rollout, not a paste-in snippet

```tsx
Policy concepts to assess:
- default-src 'self'
- object-src 'none'
- base-uri 'self'
- frame-ancestors 'none'
A real policy may require script nonces/hashes and trusted provider sources.
```

Test scripts, styles, images, fonts, analytics, and embedded content in report-only mode before enforcement.

## Tradeoffs to recognize

Defense in depth adds checks but is safer than treating a UI convention as a security guarantee.

## Common failure modes for this area

- A restrictive CSP needs testing; do not paste a policy without understanding required sources.
- TypeScript and CORS are not replacements for runtime validation and server authorization.

## Apply it

1. Attempt a cross-user request by changing an ID.
2. Trace a secret from environment through imports to the client bundle.

**Topic prompt:** Security Headers and CSP: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

A restrictive CSP needs testing; do not paste a policy without understanding required sources.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/data-security)
- [API reference](https://nextjs.org/docs/app/api-reference)
