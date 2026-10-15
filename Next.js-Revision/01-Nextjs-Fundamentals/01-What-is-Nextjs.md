# What Is Next.js?

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Define Next.js as a React framework for building web applications. Explain routing, server rendering, build tooling, data access boundaries, deployment options, and the difference between framework features and React itself.

## How it fits into the app

Think of Next.js as the application framework around React: routing, server execution, rendering, assets, and deployment conventions fit together.

A request may use prerendered output, request-time rendering, or client navigation. Route matching and rendering are separate steps, and responses may stream.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## A tiny App Router page

```tsx
// app/page.tsx — Server Component by default
export default function HomePage() {
  return <main><h1>My product</h1><p>Route UI lives in a file-system route.</p></main>;
}
```

A file under `app/` defines route UI; this is a framework convention, not a custom React router setup.

## Tradeoffs to recognize

The framework reduces integration work but introduces conventions and server/client boundaries a browser-only React SPA may not need.

## Common failure modes for this area

- Use Next.js when its routing and server capabilities solve real needs; a simpler client-rendered React app can be preferable for a small, purely client-side interface.
- Do not equate framework-managed rendering with automatic performance, SEO, or security.

## Apply it

1. Compare Next.js with React/Vite for a public site and a private tool.
2. Draw which work happens in the browser versus on the server.

**Topic prompt:** What Is Next.js?: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Use Next.js when its routing and server capabilities solve real needs; a simpler client-rendered React app can be preferable for a small, purely client-side interface.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app)
- [API reference](https://nextjs.org/docs/app/api-reference)
