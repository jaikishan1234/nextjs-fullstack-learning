# Deployment Troubleshooting

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Cover build logs, runtime logs, missing env vars, database connectivity, asset paths, and caching.

## Operational or user-facing behavior

A local app is not production-ready until build, runtime config, network access, DB connections, cache behavior, and observability work in the target environment.

`next build` creates optimized output; a Node server or host runs it. Docker needs the artifacts/dependencies required by the chosen output mode, and deployment secrets must be configured separately.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

Runtime failure example: build passes, deployed app cannot connect to DB. Check runtime env, TLS/network allowlist, pool size, and host logs.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Managed hosting reduces operations work; self-hosting adds responsibility for scaling, shared caching, TLS/proxy, process health, and logs.

## Common failure modes for this area

- Reproduce with production build settings and inspect the actual deployed environment.
- A successful dev run does not prove the production build/runtime/environment works.

## Apply it

1. Build and smoke-test the production app/image.
2. Simulate a missing env variable and DB network failure.

**Topic prompt:** Deployment Troubleshooting: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Reproduce with production build settings and inspect the actual deployed environment.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/deploying)
- [API reference](https://nextjs.org/docs/app/api-reference)
