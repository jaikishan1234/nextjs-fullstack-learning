# Hydration and Hydration Errors

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain matching server HTML with client React output and common mismatch sources: time, randomness, invalid HTML, browser-only values.

## How it fits into the app

Rendering concerns when HTML/data is produced and reused. One route can combine cached data, request-specific values, streamed regions, and client interactions.

Static rendering can create reusable output; dynamic rendering uses request-time context; streaming delivers ready regions earlier; hydration attaches client behavior to server-rendered markup.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Initial markup must be deterministic

```tsx
// Avoid using current time/random values in the initial render when server and client can differ.
// Render a stable initial value, then update browser-specific display in useEffect if needed.
```

Check invalid HTML nesting, locale/time differences, randomness, and browser-only reads before suppressing a hydration warning.

## Tradeoffs to recognize

Static output scales well; dynamic output supports personalization; streaming improves perceived latency. Freshness and deterministic initial output remain important.

## Common failure modes for this area

- Make the initial render deterministic; do not use suppressHydrationWarning to hide a structural bug.
- State the freshness and personalization requirement before assigning a rendering label.

## Apply it

1. State freshness/personalization requirements before choosing a strategy.
2. Create one hydration mismatch and explain the deterministic fix.

**Topic prompt:** Hydration and Hydration Errors: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Make the initial render deterministic; do not use suppressHydrationWarning to hide a structural bug.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/rendering)
- [API reference](https://nextjs.org/docs/app/api-reference)
