# Caching Overview

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Map request memoization, Data Cache, Full Route Cache, and client Router Cache conceptually; distinguish persistence and scope.

## Execution and data flow

Never say “Next.js caches everything” or “caches nothing” without naming version, cache model, API, and config.

The prior App Router model separates request memoization, Data Cache, Full Route Cache, and Router Cache. Next.js 16 also introduces Cache Components behind `cacheComponents`; that model has directives such as `use cache` and APIs such as `cacheLife`.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Name the cache layer

| Layer | Question it answers |
|---|---|
| Request memoization | Was equivalent work deduplicated in a render? |
| Data Cache | Is a server data result reused persistently? |
| Full Route Cache | Is rendered route output reused? |
| Router Cache | Is the browser reusing route segments? |
| Cache Components | Is code explicitly cached with `use cache`? |

The active model depends on Next.js version and `cacheComponents` config; do not mix prior-model rules and Cache Components semantics.

## Tradeoffs to recognize

Caching improves latency but creates freshness/invalidation responsibilities. Policy should follow data volatility and user expectations.

## Common failure modes for this area

- Cache behavior changes between Next.js versions and depends on APIs and configuration.
- Name the cache model and layer rather than saying “the cache is stale”.

## Apply it

1. Identify the cache model and all relevant layers for one route.
2. Test data update + invalidation + hard reload + client navigation.

**Topic prompt:** Caching Overview: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Version warning: the prior caching model and Cache Components model are different. Next.js 16 introduced Cache Components behind `cacheComponents`; check your project setting before relying on cache defaults.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/caching)
- [API reference](https://nextjs.org/docs/app/api-reference)
