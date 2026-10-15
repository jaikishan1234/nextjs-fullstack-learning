# Request Waterfalls

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain serial dependency chains, how to identify them, and how to restructure work.

## Execution and data flow

Data fetching is a dependency and latency problem: parallelize independent work and keep privileged data access on the server.

Async Server Components can await `fetch` or a server-only data function. `Promise.all` starts independent requests together; serial awaits create a waterfall.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Avoid serial waits for independent reads

```tsx
// Serial: latency adds up
const profile = await getProfile(userId);
const alerts = await getAlerts(userId);
// Parallel, if independent:
const [p, a] = await Promise.all([getProfile(userId), getAlerts(userId)]);
```

Three independent calls of 250 ms can cost around 750 ms serially, versus roughly the slowest call when parallelized, ignoring overhead.

## Tradeoffs to recognize

Server fetching reduces client round trips and protects credentials, but slow data sources still require timeouts, caching decisions, or streaming boundaries.

## Common failure modes for this area

- Avoid accidental await-in-loop patterns for independent requests.
- Check HTTP status and response shape; fetch resolving does not itself mean the HTTP status is successful.

## Apply it

1. Compare independent reads sequentially and in parallel.
2. Handle a non-2xx response, timeout, and invalid provider payload.

**Topic prompt:** Request Waterfalls: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Avoid accidental await-in-loop patterns for independent requests.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/fetching-data)
- [API reference](https://nextjs.org/docs/app/api-reference)
