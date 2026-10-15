# Server Actions Fundamentals

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain server functions, 'use server', invocation, mutation use cases, and security boundaries.

## Execution and data flow

A Server Action is a server-side mutation function callable from UI. Treat it as an invocable boundary, not a private function protected by its location.

Actions accept arguments/FormData, validate input, authenticate, authorize the target resource, perform the write, then revalidate or redirect as appropriate.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Validate before mutating

```tsx
"use server";
export async function createNote(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  if (title.length < 3 || title.length > 120) return { error: "Invalid title" };
  const user = await requireCurrentUser();
  await createNoteForUser({ title, userId: user.id });
  return { ok: true };
}
```

Arguments are caller input, not proof of identity or permission. The data layer should enforce the domain rule too.

## Tradeoffs to recognize

Actions integrate with forms; Route Handlers better suit explicit HTTP contracts, webhooks, and external clients.

## Common failure modes for this area

- A Server Action is an entry point that must be treated like an externally invocable endpoint.
- A Server Action still needs runtime validation, authentication, and authorization.

## Apply it

1. Add runtime validation and auth/resource ownership checks to a form action.
2. Try invalid and manipulated fields.

**Topic prompt:** Server Actions Fundamentals: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

A Server Action is an entry point that must be treated like an externally invocable endpoint.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/updating-data)
- [API reference](https://nextjs.org/docs/app/api-reference)
