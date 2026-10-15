# Route Resolution and Matching

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain matching specificity, static versus dynamic routes, conflicts, and practical URL mapping exercises.

## How it fits into the app

The App Router maps filesystem conventions to URL segments. Folders organize the route tree; special files assign behavior to segments.

`page.tsx` defines route UI, `layout.tsx` composes persistent UI, and files such as `loading.tsx`, `error.tsx`, `not-found.tsx`, and `route.ts` provide specialized behavior.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Worked scenario

Route tree example: `/dashboard/settings` needs shared dashboard navigation plus settings-specific tabs; locate each layout at the common route depth.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Convention-based routing is predictable, but duplicate effective URLs and mixed Router paradigms cause confusion.

## Common failure modes for this area

- Avoid overlapping route definitions that make intent ambiguous.
- A plain folder is not a route until a route convention file defines it.

## Apply it

1. Predict the URL for every file in a route tree.
2. Add one dynamic segment and type its params.

**Topic prompt:** Route Resolution and Matching: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Avoid overlapping route definitions that make intent ambiguous.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing)
- [API reference](https://nextjs.org/docs/app/api-reference)
