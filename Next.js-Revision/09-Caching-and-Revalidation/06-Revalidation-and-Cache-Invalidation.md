# Revalidation and Cache Invalidation

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain path/tag invalidation, stale content, mutation workflows, and invalidation scope.

## Execution and data flow

Never say “Next.js caches everything” or “caches nothing” without naming version, cache model, API, and config.

The prior App Router model separates request memoization, Data Cache, Full Route Cache, and Router Cache. Next.js 16 also introduces Cache Components behind `cacheComponents`; that model has directives such as `use cache` and APIs such as `cacheLife`.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Invalidate after a successful mutation

```tsx
"use server";
import { revalidatePath } from "next/cache";
export async function renameProject(id: string, name: string) {
  await renameProjectForCurrentUser(id, name); // validates session + ownership
  revalidatePath(`/projects/${id}`);
}
```

Invalidate only after the write succeeds. For tagged data, check current `revalidateTag`/`updateTag` semantics.

## Tradeoffs to recognize

Caching improves latency but creates freshness/invalidation responsibilities. Policy should follow data volatility and user expectations.

## Common failure modes for this area

- Choose path invalidation for route-oriented updates and tags for shared data relationships when supported.
- Name the cache model and layer rather than saying “the cache is stale”.

## Apply it

1. Identify the cache model and all relevant layers for one route.
2. Test data update + invalidation + hard reload + client navigation.

**Topic prompt:** Revalidation and Cache Invalidation: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Version warning: the prior caching model and Cache Components model are different. Next.js 16 introduced Cache Components behind `cacheComponents`; check your project setting before relying on cache defaults.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/caching)
- [API reference](https://nextjs.org/docs/app/api-reference)
