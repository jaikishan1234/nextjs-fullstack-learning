# Optimistic UI

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain immediate provisional updates, rollback/error handling, and when eventual confirmation is needed.

## Execution and data flow

A robust form uses client feedback for usability and server validation for correctness/security.

Named controls produce `FormData`; actions parse and validate values. Pending hooks provide feedback; optimistic UI predicts the result and must reconcile on failure.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Optimistic UI needs reconciliation

```tsx
"use client";
import { useOptimistic } from "react";
const [optimisticDone, setOptimisticDone] = useOptimistic(done, (_old, next: boolean) => next);
// Set a temporary value when submitting; show/recover from a server error if it fails.
```

Optimistic state is a prediction, not the source of truth. Handle rejection, timeout, and conflicting updates.

## Tradeoffs to recognize

Native actions support progressive enhancement; complex client state adds richer UX and additional failure states.

## Common failure modes for this area

- Optimistic UI must reconcile with server truth when a mutation fails.
- Client validation improves UX but is not the server’s trust boundary.

## Apply it

1. Test invalid input and pending UI.
2. Make an optimistic change fail and reconcile it.

**Topic prompt:** Optimistic UI: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Optimistic UI must reconcile with server truth when a mutation fails.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/forms)
- [API reference](https://nextjs.org/docs/app/api-reference)
