# JavaScript Bundles and Code Splitting

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain client module graph, route splitting, dependency cost, and bundle analysis.

## Operational or user-facing behavior

Measure first and identify whether the bottleneck is network, server, database, JavaScript bundle, hydration, images, or layout shifts.

Use browser traces, network waterfalls, React profiling, server timings, and database query plans. Server Components can reduce client JS but do not fix slow external dependencies by themselves.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

Performance example: LCP is poor but client navigation is smooth. Measure the hero image/server response separately from route JS and interaction cost.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Optimization shifts costs between build, server, network, and browser. Measure again after each change.

## Common failure modes for this area

- Large client boundaries can pull many dependencies into the browser.
- Measure the actual bottleneck before adding memoization or lazy loading.

## Apply it

1. Capture a baseline trace before changing code.
2. Connect each metric symptom to evidence and then re-measure.

**Topic prompt:** JavaScript Bundles and Code Splitting: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Large client boundaries can pull many dependencies into the browser.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/optimizing)
- [API reference](https://nextjs.org/docs/app/api-reference)
