# Route Segments

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain static, dynamic, catch-all, optional catch-all, route groups, and URL-to-folder mapping.

## How it fits into the app

The App Router maps filesystem conventions to URL segments. Folders organize the route tree; special files assign behavior to segments.

`page.tsx` defines route UI, `layout.tsx` composes persistent UI, and files such as `loading.tsx`, `error.tsx`, `not-found.tsx`, and `route.ts` provide specialized behavior.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## URL mapping

```tsx
app/blog/page.tsx                 -> /blog
app/blog/[slug]/page.tsx          -> /blog/my-post
app/docs/[...parts]/page.tsx      -> /docs/a/b/c
app/(marketing)/pricing/page.tsx  -> /pricing
```

Group folders in parentheses do not contribute to the URL; dynamic segments appear in params.

## Tradeoffs to recognize

Convention-based routing is predictable, but duplicate effective URLs and mixed Router paradigms cause confusion.

## Common failure modes for this area

- Parentheses in route groups do not appear in the URL.
- A plain folder is not a route until a route convention file defines it.

## Apply it

1. Predict the URL for every file in a route tree.
2. Add one dynamic segment and type its params.

**Topic prompt:** Route Segments: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Parentheses in route groups do not appear in the URL.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing)
- [API reference](https://nextjs.org/docs/app/api-reference)
