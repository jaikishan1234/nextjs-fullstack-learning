# Parallel and Sequential Data Fetching

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Compare Promise.all with sequential awaits and discuss dependencies, error behavior, and latency.

## Execution and data flow

Data fetching is a dependency and latency problem: parallelize independent work and keep privileged data access on the server.

Async Server Components can await `fetch` or a server-only data function. `Promise.all` starts independent requests together; serial awaits create a waterfall.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Start independent work together

```tsx
const [profile, alerts, recommendations] = await Promise.all([
  getProfile(userId), getAlerts(userId), getRecommendations(userId)
]);
```

Only parallelize work that is independent. `Promise.all` rejects if one promise rejects; use separate boundaries or settled results if partial success is meaningful.

## Tradeoffs to recognize

Server fetching reduces client round trips and protects credentials, but slow data sources still require timeouts, caching decisions, or streaming boundaries.

## Common failure modes for this area

- Parallelize independent work; sequence only when later work needs earlier results.
- Check HTTP status and response shape; fetch resolving does not itself mean the HTTP status is successful.

## Apply it

1. Compare independent reads sequentially and in parallel.
2. Handle a non-2xx response, timeout, and invalid provider payload.

**Topic prompt:** Parallel and Sequential Data Fetching: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Parallelize independent work; sequence only when later work needs earlier results.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/fetching-data)
- [API reference](https://nextjs.org/docs/app/api-reference)
