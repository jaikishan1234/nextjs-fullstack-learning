# Next.js Core Interview Questions

> Interview practice · Next.js 16.x App Router. State the version/configuration assumption when behavior is version-sensitive.

## What the interviewer is testing

Provide core definition, framework-versus-library, use cases, tradeoffs, and spoken answers.

## Primary drill

What is Next.js, and when would you choose it over React + Vite? Include routing, rendering/server capabilities, and one tradeoff.

## Answer outline

A useful spoken answer normally covers the following, in this order:
1. **Definition:** What problem does the concept solve?
2. **Mechanism:** What runs, what inputs/data cross the boundary, and what Next.js/React provides?
3. **Example:** Use one real route, form, data flow, or deployment scenario.
4. **Tradeoff:** Mention freshness, complexity, security, latency, or browser-JavaScript cost.
5. **Failure mode:** Say what can go wrong and how you would test it.

## Follow-up prompts

- What changes if the data is personalized or must be fresh for every request?
- Where would you enforce authorization if the caller bypasses the UI?
- What does the answer depend on in Next.js 16, the deployment runtime, or configuration?

## Weak answer to avoid

Concise answers are easier to follow; use depth when it answers a follow-up instead of listing everything at once.

## References

- [Next.js documentation](https://nextjs.org/docs/app)
- [Next.js 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16)
