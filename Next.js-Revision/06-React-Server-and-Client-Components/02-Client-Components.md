# Client Components

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain 'use client', state, effects, event handlers, browser APIs, and bundle implications.

## How it fits into the app

Choose a component boundary based on capabilities and data access. Server Components are useful for server-side work; Client Components own browser interactivity.

`use client` marks a client entry point, and reachable imports join the client module graph. Server Components can fetch private data and compose rendered children into client shells.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Interactive control

```tsx
"use client";
import { useState } from "react";
export function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);
  return <button onClick={() => setQuantity(q => q + 1)}>Quantity: {quantity}</button>;
}
```

A Client Component can still contribute to initial server-rendered HTML; it adds client-side JavaScript for interactivity.

## Tradeoffs to recognize

Narrow client boundaries reduce browser JavaScript and keep secrets on the server, but serialization and composition need care.

## Common failure modes for this area

- A Client Component can still contribute to initial server-rendered HTML; client means it participates in client-side interactivity.
- Do not import secret-bearing/server-only code into the client module graph.

## Apply it

1. Move one interactive control behind a client boundary.
2. Inspect imports and props that cross the boundary.

**Topic prompt:** Client Components: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

A Client Component can still contribute to initial server-rendered HTML; client means it participates in client-side interactivity.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [API reference](https://nextjs.org/docs/app/api-reference)
