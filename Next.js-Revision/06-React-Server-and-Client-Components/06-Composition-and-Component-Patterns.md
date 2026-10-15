# Composition and Component Patterns

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover server-rendered children passed into client shells, slots, provider placement, and splitting interactive islands.

## How it fits into the app

Choose a component boundary based on capabilities and data access. Server Components are useful for server-side work; Client Components own browser interactivity.

`use client` marks a client entry point, and reachable imports join the client module graph. Server Components can fetch private data and compose rendered children into client shells.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Worked scenario

Component example: database-backed article body plus interactive rating widget; keep the article server-side and isolate rating state in a client child.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Narrow client boundaries reduce browser JavaScript and keep secrets on the server, but serialization and composition need care.

## Common failure modes for this area

- A Client Component should not import a Server Component as though it can execute it on the server; compose through props/children.
- Do not import secret-bearing/server-only code into the client module graph.

## Apply it

1. Move one interactive control behind a client boundary.
2. Inspect imports and props that cross the boundary.

**Topic prompt:** Composition and Component Patterns: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

A Client Component should not import a Server Component as though it can execute it on the server; compose through props/children.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [API reference](https://nextjs.org/docs/app/api-reference)
