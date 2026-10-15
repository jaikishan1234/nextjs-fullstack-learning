# Server Components

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain server execution, direct data access, reduced client JavaScript, and limits such as no browser event handlers.

## How it fits into the app

Choose a component boundary based on capabilities and data access. Server Components are useful for server-side work; Client Components own browser interactivity.

`use client` marks a client entry point, and reachable imports join the client module graph. Server Components can fetch private data and compose rendered children into client shells.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Server-side data access

```tsx
import "server-only";
export default async function Dashboard() {
  const user = await requireCurrentUser();
  const summary = await getDashboardSummary(user.id);
  return <h1>Welcome, {summary.displayName}</h1>;
}
```

Server Components can await server data but do not own state/effects/event handlers. A component boundary is not a substitute for authorization inside the data layer.

## Tradeoffs to recognize

Narrow client boundaries reduce browser JavaScript and keep secrets on the server, but serialization and composition need care.

## Common failure modes for this area

- Server Components are the App Router default unless a client boundary applies.
- Do not import secret-bearing/server-only code into the client module graph.

## Apply it

1. Move one interactive control behind a client boundary.
2. Inspect imports and props that cross the boundary.

**Topic prompt:** Server Components: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Server Components are the App Router default unless a client boundary applies.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [API reference](https://nextjs.org/docs/app/api-reference)
