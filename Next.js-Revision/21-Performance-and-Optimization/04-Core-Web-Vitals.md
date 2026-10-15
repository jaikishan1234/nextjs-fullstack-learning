# Core Web Vitals

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain LCP, INP, CLS, what influences them, and how to measure real-user performance.

## Operational or user-facing behavior

Measure first and identify whether the bottleneck is network, server, database, JavaScript bundle, hydration, images, or layout shifts.

Use browser traces, network waterfalls, React profiling, server timings, and database query plans. Server Components can reduce client JS but do not fix slow external dependencies by themselves.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Map symptom to evidence

```tsx
LCP high -> investigate main image, server response, render-blocking resources
INP high -> profile event handlers and long tasks
CLS high -> inspect unsized images, fonts, injected content
```

These are hypotheses, not diagnoses; use field metrics and traces to confirm the bottleneck.

## Tradeoffs to recognize

Optimization shifts costs between build, server, network, and browser. Measure again after each change.

## Common failure modes for this area

- Use field and lab data together; scores can differ.
- Measure the actual bottleneck before adding memoization or lazy loading.

## Apply it

1. Capture a baseline trace before changing code.
2. Connect each metric symptom to evidence and then re-measure.

**Topic prompt:** Core Web Vitals: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Use field and lab data together; scores can differ.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/optimizing)
- [API reference](https://nextjs.org/docs/app/api-reference)
