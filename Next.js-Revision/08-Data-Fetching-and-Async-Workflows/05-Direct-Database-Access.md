# Direct Database Access

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain calling a server-only data-access layer from Server Components, connection lifecycle, authorization, and error boundaries.

## Execution and data flow

Data fetching is a dependency and latency problem: parallelize independent work and keep privileged data access on the server.

Async Server Components can await `fetch` or a server-only data function. `Promise.all` starts independent requests together; serial awaits create a waterfall.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Server-only data-access function

```tsx
import "server-only";
export async function listProjectsForUser(userId: string) {
  return db.project.findMany({
    where: { ownerId: userId },
    select: { id: true, name: true, updatedAt: true }
  });
}
```

Filter by ownership and return a narrow projection; never import the database client into browser-reachable code.

## Tradeoffs to recognize

Server fetching reduces client round trips and protects credentials, but slow data sources still require timeouts, caching decisions, or streaming boundaries.

## Common failure modes for this area

- Never connect to a database directly from browser code.
- Check HTTP status and response shape; fetch resolving does not itself mean the HTTP status is successful.

## Apply it

1. Compare independent reads sequentially and in parallel.
2. Handle a non-2xx response, timeout, and invalid provider payload.

**Topic prompt:** Direct Database Access: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Never connect to a database directly from browser code.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/fetching-data)
- [API reference](https://nextjs.org/docs/app/api-reference)
