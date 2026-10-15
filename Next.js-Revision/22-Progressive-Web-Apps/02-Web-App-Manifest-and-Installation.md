# Web App Manifest and Installation

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain manifest fields, icons, display mode, start URL, and installation requirements.

## Operational or user-facing behavior

A PWA uses browser capabilities such as a manifest and service worker; Next.js does not automatically make every app offline-ready.

The manifest provides installation metadata; the service worker can intercept requests and manage caches. The app still needs an offline UX and update strategy.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Next.js manifest convention

```tsx
// app/manifest.ts
import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Task Board", short_name: "Tasks", start_url: "/", display: "standalone", icons: [{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }] };
}
```

Make sure icon paths exist and test installability in target browsers; an installable PWA is not automatically offline-ready.

## Tradeoffs to recognize

Offline support improves resilience, but creates cache invalidation, update, and sensitive-data risks.

## Common failure modes for this area

- Test installability in target browsers and devices.
- Installability does not automatically provide offline behavior or safe cache updates.

## Apply it

1. Test first install, offline launch, worker update, and rollback.
2. Explain which caches may contain sensitive data.

**Topic prompt:** Web App Manifest and Installation: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Test installability in target browsers and devices.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [API reference](https://nextjs.org/docs/app/api-reference)
