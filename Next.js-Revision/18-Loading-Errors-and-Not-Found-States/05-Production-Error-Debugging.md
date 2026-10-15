# Production Error Debugging

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain structured logs, correlation IDs, redaction, source maps policy, and reproduction.

## Operational or user-facing behavior

Pending, empty/not-found, forbidden, recoverable failure, and unexpected error are distinct outcomes and deserve different UX.

`loading.tsx` establishes a loading boundary; `error.tsx` is a client error boundary; `not-found.tsx` and `notFound()` handle not-found control flow.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

Report page example: distinguish loading, no report, forbidden report, and temporary provider failure; these are not one generic error state.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Boundaries localize failures, but too broad a boundary hides context and too narrow a boundary can create inconsistent screens.

## Common failure modes for this area

- Never log passwords, tokens, or sensitive personal data.
- Do not expose stack traces or raw internal exceptions in user-facing error UI.

## Apply it

1. Design distinct pending, absent, forbidden, and unexpected-failure states.
2. Test retry behavior for safe and unsafe operations.

**Topic prompt:** Production Error Debugging: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Never log passwords, tokens, or sensitive personal data.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/error-handling)
- [API reference](https://nextjs.org/docs/app/api-reference)
