# React vs Next.js

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

React is a UI library; Next.js is a framework built around React. Compare routing, rendering, data fetching, server capabilities, conventions, deployment, and flexibility.

## How it fits into the app

Think of Next.js as the application framework around React: routing, server execution, rendering, assets, and deployment conventions fit together.

A request may use prerendered output, request-time rendering, or client navigation. Route matching and rendering are separate steps, and responses may stream.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## React component versus application framework

```tsx
// reusable React component
export function Greeting({ name }: { name: string }) {
  return <h1>Hello, {name}</h1>;
}
// A Next.js route imports and composes the component from app/page.tsx
```

React provides the component model; Next.js supplies app-level routing, server/client rendering conventions, build output, and deployment integration.

## Tradeoffs to recognize

The framework reduces integration work but introduces conventions and server/client boundaries a browser-only React SPA may not need.

## Common failure modes for this area

- Avoid saying Next.js replaces React: Next.js uses React and adds application-level conventions.
- Do not equate framework-managed rendering with automatic performance, SEO, or security.

## Apply it

1. Compare Next.js with React/Vite for a public site and a private tool.
2. Draw which work happens in the browser versus on the server.

**Topic prompt:** React vs Next.js: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Avoid saying Next.js replaces React: Next.js uses React and adds application-level conventions.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app)
- [API reference](https://nextjs.org/docs/app/api-reference)
