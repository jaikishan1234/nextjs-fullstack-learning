# Package Scripts and Development Server

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain dev, build, start, lint/type-check scripts, environment setup, and production workflow.

## How it fits into the app

Treat setup as reproducible project configuration: dependencies, scripts, compiler options, environment values, and framework settings must describe the same app.

Development and production use different execution paths. A production workflow normally builds optimized output before starting it; settings may apply at build time or runtime.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Worked scenario

CI failure example: compare Node version, package lockfile, env variable names/scopes, config types, and production build before editing application logic.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Explicit config improves repeatability but adds assumptions to maintain during upgrades.

## Common failure modes for this area

- A production start normally requires a successful build first.
- Do not assume local environment variables or scripts exist unchanged in CI/production.

## Apply it

1. Remove one required env variable and inspect the failure.
2. Run a production build; compare the result with the dev server.

**Topic prompt:** Package Scripts and Development Server: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

A production start normally requires a successful build first.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/installation)
- [API reference](https://nextjs.org/docs/app/api-reference)
