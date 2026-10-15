# Sitemaps, Robots and Canonical URLs

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover sitemap.ts, robots.ts, canonical links, and crawl controls.

## Operational or user-facing behavior

Metadata should describe the real page a crawler/share preview will receive. Dynamic routes need stable titles, canonical URLs, and useful content.

Static `metadata` fits known values; `generateMetadata` derives values from route data. Metadata file conventions can expose sitemap/robots/social assets.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

Article example: each slug needs a specific title, canonical URL, share image, sitemap entry when public, and intentional not-found behavior.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Server-generated metadata improves discoverability but needs careful missing-record and duplicate-URL handling.

## Common failure modes for this area

- Do not block important pages unintentionally or treat robots.txt as access control.
- Robots directives are not access control; public/canonical URLs need a consistent policy.

## Apply it

1. Create metadata for a dynamic record and a missing slug.
2. Check canonical URL and image reachability.

**Topic prompt:** Sitemaps, Robots and Canonical URLs: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Do not block important pages unintentionally or treat robots.txt as access control.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [API reference](https://nextjs.org/docs/app/api-reference)
