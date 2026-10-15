# Middleware and Request Interception

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain request interception, matching, redirects, rewrites, headers, and the current Next.js 16 terminology/conventions.

## Execution and data flow

In Next.js 16, the convention is named Proxy (`proxy.ts`); older tutorials may call it Middleware. Use it for lightweight request rules, not as the only security gate.

Proxy can redirect, rewrite, adjust headers, or respond. `config.matcher` limits which requests run through it. Critical permission checks belong near data and mutations.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Next.js 16 Proxy convention

```tsx
// proxy.ts
import { NextResponse, type NextRequest } from "next/server";
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/legacy")) {
    return NextResponse.redirect(new URL("/docs", request.url));
  }
  return NextResponse.next();
}
export const config = { matcher: ["/legacy/:path*"] };
```

Older versions used `middleware.ts`. Keep Proxy lightweight, and enforce final authorization inside protected data/actions.

## Tradeoffs to recognize

Central interception helps broad path rules, but misconfigured matchers can skip requests and extra work adds latency.

## Common failure modes for this area

- Verify current convention names in the official documentation; migration details are version-sensitive.
- Proxy routing behavior is not a replacement for resource-level authorization.

## Apply it

1. Add a narrow Proxy matcher.
2. Prove that direct server operations still enforce permissions.

**Topic prompt:** Middleware and Request Interception: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

In Next.js 16, request-time APIs such as `cookies()`, `headers()`, `params`, and page `searchParams` are asynchronous; Middleware is now called Proxy. Confirm all signatures against the version 16 upgrade guide.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/proxy)
- [API reference](https://nextjs.org/docs/app/api-reference)
