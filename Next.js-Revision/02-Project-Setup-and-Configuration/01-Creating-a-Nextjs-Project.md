# Creating a Next.js Project

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover prerequisites, create-next-app, TypeScript, App Router, linting, package managers, and first run.

## How it fits into the app

Treat setup as reproducible project configuration: dependencies, scripts, compiler options, environment values, and framework settings must describe the same app.

Development and production use different execution paths. A production workflow normally builds optimized output before starting it; settings may apply at build time or runtime.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Create a playground

```tsx
npx create-next-app@latest nextjs-playground
cd nextjs-playground
npm run dev
npm run build
npm run start
```

Check the current installation guide for Node.js requirements and generated scripts. Production `start` normally follows a successful build.

## Tradeoffs to recognize

Explicit config improves repeatability but adds assumptions to maintain during upgrades.

## Common failure modes for this area

- Check the current Next.js installation guide for supported Node.js versions and flags.
- Do not assume local environment variables or scripts exist unchanged in CI/production.

## Apply it

1. Remove one required env variable and inspect the failure.
2. Run a production build; compare the result with the dev server.

**Topic prompt:** Creating a Next.js Project: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Check the current Next.js installation guide for supported Node.js versions and flags.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/installation)
- [API reference](https://nextjs.org/docs/app/api-reference)
