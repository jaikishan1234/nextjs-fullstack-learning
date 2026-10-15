# Data Loading Patterns

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover pagination, filtering, sorting, incremental sections, loading UI, and URL-driven state.

## Execution and data flow

Data fetching is a dependency and latency problem: parallelize independent work and keep privileged data access on the server.

Async Server Components can await `fetch` or a server-only data function. `Promise.all` starts independent requests together; serial awaits create a waterfall.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Latency example: profile and unread-count reads are independent; a report query that needs the organization ID from the profile is dependent.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Server fetching reduces client round trips and protects credentials, but slow data sources still require timeouts, caching decisions, or streaming boundaries.

## Common failure modes for this area

- Validate page sizes and sort fields on the server.
- Check HTTP status and response shape; fetch resolving does not itself mean the HTTP status is successful.

## Apply it

1. Compare independent reads sequentially and in parallel.
2. Handle a non-2xx response, timeout, and invalid provider payload.

**Topic prompt:** Data Loading Patterns: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Validate page sizes and sort fields on the server.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/fetching-data)
- [API reference](https://nextjs.org/docs/app/api-reference)
