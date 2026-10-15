# Time-Based and On-Demand Revalidation

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Compare time-based revalidation and explicit invalidation after mutations; discuss freshness tradeoffs.

## Execution and data flow

Never say “Next.js caches everything” or “caches nothing” without naming version, cache model, API, and config.

The prior App Router model separates request memoization, Data Cache, Full Route Cache, and Router Cache. Next.js 16 also introduces Cache Components behind `cacheComponents`; that model has directives such as `use cache` and APIs such as `cacheLife`.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Stale-data example: database update succeeded, but route navigation still shows the old title. Name each relevant cache layer before choosing invalidation.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Caching improves latency but creates freshness/invalidation responsibilities. Policy should follow data volatility and user expectations.

## Common failure modes for this area

- Do not promise immediate global consistency without understanding the selected API and deployment cache.
- Name the cache model and layer rather than saying “the cache is stale”.

## Apply it

1. Identify the cache model and all relevant layers for one route.
2. Test data update + invalidation + hard reload + client navigation.

**Topic prompt:** Time-Based and On-Demand Revalidation: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Version warning: the prior caching model and Cache Components model are different. Next.js 16 introduced Cache Components behind `cacheComponents`; check your project setting before relying on cache defaults.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/caching)
- [API reference](https://nextjs.org/docs/app/api-reference)
