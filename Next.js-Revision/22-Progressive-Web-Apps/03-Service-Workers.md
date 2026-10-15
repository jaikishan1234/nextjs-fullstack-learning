# Service Workers

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain registration, lifecycle, scope, fetch events, and update behavior.

## Operational or user-facing behavior

A PWA uses browser capabilities such as a manifest and service worker; Next.js does not automatically make every app offline-ready.

The manifest provides installation metadata; the service worker can intercept requests and manage caches. The app still needs an offline UX and update strategy.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

PWA example: after deployment, offline launch shows old JavaScript. Inspect worker lifecycle, cache versions, activation behavior, and rollback strategy.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Offline support improves resilience, but creates cache invalidation, update, and sensitive-data risks.

## Common failure modes for this area

- Service workers require HTTPS in production except localhost development.
- Installability does not automatically provide offline behavior or safe cache updates.

## Apply it

1. Test first install, offline launch, worker update, and rollback.
2. Explain which caches may contain sensitive data.

**Topic prompt:** Service Workers: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Service workers require HTTPS in production except localhost development.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [API reference](https://nextjs.org/docs/app/api-reference)
