# Image Optimization and Remote Images

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain remotePatterns, format/size optimization, caching, and trust considerations.

## Operational or user-facing behavior

Assets affect payload size, layout stability, security, and caching. Optimize delivery while keeping alt text meaningful and remote sources restricted.

`public/` files use root-relative URLs; `next/image` handles responsive image delivery; `next/font` supports font optimization. Remote images require deliberate host configuration.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

Deployment failure example: remote catalog images work locally but fail in production. Check allowlist, URL/path, HTTPS, dimensions, and network status.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Optimization reduces bytes and layout shift but introduces config and platform considerations.

## Common failure modes for this area

- Allowlist trusted remote image hosts.
- Public assets are public, and remote image sources must be explicitly trusted.

## Apply it

1. Test asset URL in production and inspect network headers.
2. Check responsive dimensions, alt text, and remote host allowlist.

**Topic prompt:** Image Optimization and Remote Images: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Allowlist trusted remote image hosts.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/images-and-fonts)
- [API reference](https://nextjs.org/docs/app/api-reference)
