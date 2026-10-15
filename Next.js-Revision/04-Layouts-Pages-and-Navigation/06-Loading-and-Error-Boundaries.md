# Loading and Error Boundaries

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain loading.tsx and error.tsx placement, Suspense behavior, retry/reset, and segment-level boundaries.

## How it fits into the app

Pages define route content; layouts define persistent shared structure; templates intentionally remount; links enable client-side transitions.

The active route composes from root layout through nested layouts to a page. Shared segments can persist during navigation, and loading/error files establish segment boundaries.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Worked scenario

State example: dashboard selection should survive sibling-page navigation, while entering a fresh editor may need a remount/reset.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Persistence maintains context; remounting resets state. Choose intentionally rather than assuming every navigation recreates the whole tree.

## Common failure modes for this area

- An error boundary does not catch every possible error, including failures outside its React subtree.
- Do not assume shared layouts remount on every sibling navigation.

## Apply it

1. Choose layout versus template for a state-persistence scenario.
2. Test Link navigation and direct URL loading.

**Topic prompt:** Loading and Error Boundaries: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

An error boundary does not catch every possible error, including failures outside its React subtree.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- [API reference](https://nextjs.org/docs/app/api-reference)
