# Next.js 16 Version Notes

These notes target the App Router in Next.js 16.x. Exact behavior can depend on the installed version, runtime, host, and `next.config.ts`.

## Version-sensitive details

- **Async request APIs:** `cookies()`, `headers()`, `draftMode()`, route `params`, and page `searchParams` must be accessed asynchronously in Next.js 16. The synchronous compatibility from earlier releases has been removed.
- **Proxy naming:** The request-interception convention formerly called Middleware is named Proxy starting in Next.js 16 and uses `proxy.ts`. Use Proxy for lightweight request rules; it is not a complete authentication or authorization system.
- **Caching models:** The prior App Router caching model and Cache Components are distinct. Cache Components were introduced in Next.js 16 behind the `cacheComponents` flag. Do not mix their caching explanations or defaults.
- **Fetch caching:** Avoid blanket statements about whether `fetch` is cached by default. State version, configuration, rendering behavior, and explicit cache/revalidation settings.
- **Server Actions:** Treat actions as callable mutation boundaries and validate, authenticate, and authorize inside protected operations.

## Official sources

- [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
- [Fetch API](https://nextjs.org/docs/app/api-reference/functions/fetch)
- [Caching without Cache Components](https://nextjs.org/docs/app/guides/caching-without-cache-components)
- [Cache Components](https://nextjs.org/docs/app/getting-started/cache-components)
- [cookies()](https://nextjs.org/docs/app/api-reference/functions/cookies)
- [headers()](https://nextjs.org/docs/app/api-reference/functions/headers)
- [Proxy](https://nextjs.org/docs/app/getting-started/proxy)

Examples are instructional patterns. Compile and test them inside the installed version and target runtime before using them in production.
