# Catch-All and Optional Catch-All Routes

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Compare [...slug] with [[...slug]], URL examples, and use cases such as documentation paths.

## How it fits into the app

Advanced routing changes matching and composition, not the need to validate URL input or handle direct entry.

Dynamic segments expose route params; catch-all segments collect path pieces; groups organize without changing URLs; parallel slots render independent sections; intercepting routes can support modal navigation.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Catch-all arrays

```tsx
// app/docs/[...slug]/page.tsx
type Props = { params: Promise<{ slug: string[] }> };
export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <p>{slug.join(" / ")}</p>;
}
```

For `[[...slug]]`, the param can be absent at the base path and the type must reflect that.

## Tradeoffs to recognize

Expressive routing helps complex UX but needs explicit defaults and direct-navigation testing.

## Common failure modes for this area

- Catch-all matching has distinct behavior for the base path.
- Direct URL entry and client navigation can render different route compositions; test both.

## Apply it

1. Predict params for static, dynamic, catch-all, and optional catch-all URLs.
2. Test advanced route behavior on client navigation and refresh.

**Topic prompt:** Catch-All and Optional Catch-All Routes: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Catch-all matching has distinct behavior for the base path.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing)
- [API reference](https://nextjs.org/docs/app/api-reference)
