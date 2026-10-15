# Streaming Server Rendering

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain sending shell and ready segments progressively, browser behavior, and latency tradeoffs.

## Execution and data flow

Suspense is for waiting; error boundaries are for supported render failures. Put boundaries around independently useful UI.

When a subtree suspends, React can show fallback UI while ready output streams. `loading.tsx` supplies a segment-level fallback; nested `<Suspense>` can isolate data sections.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Dashboard example: account balance is quick but activity analytics are slow. Render the important summary without waiting for every analytics panel.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Fine-grained boundaries improve time-to-useful-content but can fragment the interface or cause layout shifts if poorly designed.

## Common failure modes for this area

- Streaming support and practical behavior can depend on runtime and hosting.
- Suspense handles waiting; error boundaries handle supported render failures.

## Apply it

1. Put a slow panel behind a Suspense boundary.
2. Verify fallback layout and error behavior.

**Topic prompt:** Streaming Server Rendering: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Streaming support and practical behavior can depend on runtime and hosting.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming)
- [API reference](https://nextjs.org/docs/app/api-reference)
