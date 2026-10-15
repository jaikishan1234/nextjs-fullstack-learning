# Fetch on the Server

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain async Server Components, fetch options, errors, response parsing, and cache configuration as version-sensitive behavior.

## Execution and data flow

Data fetching is a dependency and latency problem: parallelize independent work and keep privileged data access on the server.

Async Server Components can await `fetch` or a server-only data function. `Promise.all` starts independent requests together; serial awaits create a waterfall.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Explicit server fetch behavior

```tsx
const response = await fetch(`https://api.example.com/posts/${id}`, {
  cache: "no-store",
  signal: AbortSignal.timeout(5000)
});
if (!response.ok) throw new Error(`Provider returned ${response.status}`);
const post = await response.json();
```

The TypeScript type alone does not validate external JSON. Check status, timeout, response shape, and current cache defaults.

## Tradeoffs to recognize

Server fetching reduces client round trips and protects credentials, but slow data sources still require timeouts, caching decisions, or streaming boundaries.

## Common failure modes for this area

- Do not assume every fetch is cached by default; set intended cache/revalidation semantics explicitly.
- Check HTTP status and response shape; fetch resolving does not itself mean the HTTP status is successful.

## Apply it

1. Compare independent reads sequentially and in parallel.
2. Handle a non-2xx response, timeout, and invalid provider payload.

**Topic prompt:** Fetch on the Server: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Do not assume every fetch is cached by default; set intended cache/revalidation semantics explicitly.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/fetching-data)
- [API reference](https://nextjs.org/docs/app/api-reference)
