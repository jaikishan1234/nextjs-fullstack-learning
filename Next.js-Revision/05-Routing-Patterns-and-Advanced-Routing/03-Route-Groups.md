# Route Groups

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain (group) folders, organization without URL changes, multiple layouts, and collision risks.

## How it fits into the app

Advanced routing changes matching and composition, not the need to validate URL input or handle direct entry.

Dynamic segments expose route params; catch-all segments collect path pieces; groups organize without changing URLs; parallel slots render independent sections; intercepting routes can support modal navigation.

For this topic, trace the URL or UI from convention to rendered output. Be explicit about whether the logic runs during build, on a server request, or in the browser.

## Worked scenario

Modal example: clicking a photo from a feed should open a modal, but pasting the same URL into a new tab should render a standalone page.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Expressive routing helps complex UX but needs explicit defaults and direct-navigation testing.

## Common failure modes for this area

- Route groups are not URL segments.
- Direct URL entry and client navigation can render different route compositions; test both.

## Apply it

1. Predict params for static, dynamic, catch-all, and optional catch-all URLs.
2. Test advanced route behavior on client navigation and refresh.

**Topic prompt:** Route Groups: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Route groups are not URL segments.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing)
- [API reference](https://nextjs.org/docs/app/api-reference)
