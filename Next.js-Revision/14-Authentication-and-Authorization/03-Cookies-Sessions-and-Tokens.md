# Cookies, Sessions and Tokens

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Compare opaque sessions, signed tokens, cookie flags, expiration, revocation, and storage tradeoffs.

## Execution and data flow

Authentication asks who the caller is; authorization asks whether they can perform an action on this resource. Both matter at protected data/mutation boundaries.

Resolve identity from a verified session, then check role, ownership, or policy before every protected read/write. A page redirect is not enough.

Identify caller-controlled input, server-side validation, identity, resource-level authorization, data operation, and response/cache effect. Do not collapse those into one step.

## Session cookie options

(await cookies()).set("session", sessionId, {
  httpOnly: true, secure: process.env.NODE_ENV === "production",
  sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 7
});

This is not a complete auth system. Rotate sessions after login, define expiry/revocation, and assess CSRF for the app’s cookie usage.

## Tradeoffs to recognize

Auth libraries reduce implementation risk, but domain-specific permissions and data exposure remain application responsibilities.

## Common failure modes for this area

- Prefer HttpOnly, Secure, and suitable SameSite settings for session cookies.
- A user being authenticated does not imply they own every requested resource.

## Apply it

1. Test valid login, expired session, and authenticated wrong-owner access.
2. Explain why hiding a button does not protect a mutation.

**Topic prompt:** Cookies, Sessions and Tokens: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Prefer HttpOnly, Secure, and suitable SameSite settings for session cookies.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/authentication)
- [API reference](https://nextjs.org/docs/app/api-reference)
