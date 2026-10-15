# Redirects, Rewrites and Headers

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Compare redirects visible to clients, rewrites that preserve the URL, and response/request headers.

## Execution and data flow

In Next.js 16, the convention is named Proxy (`proxy.ts`); older tutorials may call it Middleware. Use it for lightweight request rules, not as the only security gate.

Proxy can redirect, rewrite, adjust headers, or respond. `config.matcher` limits which requests run through it. Critical permission checks belong near data and mutations.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Worked scenario

Request example: redirect unauthenticated dashboard visits cheaply but leave the final permission check next to protected data and mutations.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Central interception helps broad path rules, but misconfigured matchers can skip requests and extra work adds latency.

## Common failure modes for this area

- Do not use rewrites as an authorization boundary.
- Proxy routing behavior is not a replacement for resource-level authorization.

## Apply it

1. Add a narrow Proxy matcher.
2. Prove that direct server operations still enforce permissions.

**Topic prompt:** Redirects, Rewrites and Headers: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Do not use rewrites as an authorization boundary.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/proxy)
- [API reference](https://nextjs.org/docs/app/api-reference)
