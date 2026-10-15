# Link and Client-Side Navigation

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain next/link, client navigation, prefetching, scroll behavior, useRouter from next/navigation, and accessibility.

## How it fits into the app

Pages define route content; layouts define persistent shared structure; templates intentionally remount; links enable client-side transitions.

The active route composes from root layout through nested layouts to a page. Shared segments can persist during navigation, and loading/error files establish segment boundaries.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Declarative navigation

```tsx
import Link from "next/link";
export function ProductLink({ id }: { id: string }) {
  return <Link href={`/products/${id}`}>View product</Link>;
}
```

Use `Link` for ordinary navigation. `useRouter` from `next/navigation` is for imperative client transitions after interactions.

## Tradeoffs to recognize

Persistence maintains context; remounting resets state. Choose intentionally rather than assuming every navigation recreates the whole tree.

## Common failure modes for this area

- Use Link for ordinary navigation; programmatic navigation is for interaction-driven transitions.
- Do not assume shared layouts remount on every sibling navigation.

## Apply it

1. Choose layout versus template for a state-persistence scenario.
2. Test Link navigation and direct URL loading.

**Topic prompt:** Link and Client-Side Navigation: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Use Link for ordinary navigation; programmatic navigation is for interaction-driven transitions.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
- [API reference](https://nextjs.org/docs/app/api-reference)
