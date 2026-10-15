# next/image

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain Image component sizing, responsive behavior, priority/loading choices, and alt text.

## Operational or user-facing behavior

Assets affect payload size, layout stability, security, and caching. Optimize delivery while keeping alt text meaningful and remote sources restricted.

`public/` files use root-relative URLs; `next/image` handles responsive image delivery; `next/font` supports font optimization. Remote images require deliberate host configuration.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Reserve layout space for an image

```tsx
import Image from "next/image";
export function ProductImage() {
  return <Image src="/products/shoe.jpg" alt="Blue running shoe" width={640} height={480} />;
}
```

For `fill`, constrain and position the parent. Choose alt text according to the image purpose.

## Tradeoffs to recognize

Optimization reduces bytes and layout shift but introduces config and platform considerations.

## Common failure modes for this area

- Supply dimensions or fill/layout constraints to prevent layout shift.
- Public assets are public, and remote image sources must be explicitly trusted.

## Apply it

1. Test asset URL in production and inspect network headers.
2. Check responsive dimensions, alt text, and remote host allowlist.

**Topic prompt:** next/image: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Supply dimensions or fill/layout constraints to prevent layout shift.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/getting-started/images-and-fonts)
- [API reference](https://nextjs.org/docs/app/api-reference)
