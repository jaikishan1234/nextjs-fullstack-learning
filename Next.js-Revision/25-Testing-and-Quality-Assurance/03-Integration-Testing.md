# Integration Testing

> **Target:** Next.js 16.x App Router. These notes focus on the named concept; exact behavior can depend on version, configuration, runtime, and host.

## The concept in this file

Explain testing database/data-access integration, route logic, and service contracts.

## Operational or user-facing behavior

Test each layer at the boundary it owns: pure logic with unit tests, layer interactions with integration tests, and important user journeys in a browser.

Unit/component tests are fast and focused; integration tests verify combined contracts; E2E tests exercise navigation, forms, authentication, and real browser behavior.

Define the observable success state and at least one failure state. Check the behavior in a production build as well as development when the runtime or caching model matters.

## Worked scenario

Test gap example: all unit tests pass but one user can change another user’s record. Add integration/E2E coverage for wrong-owner denial.

Use this as a design exercise: identify the input, execution boundary, data dependency, failure behavior, and observable result before reaching for an API.

## Tradeoffs to recognize

Mocks speed tests but can hide broken contracts; E2E tests are realistic but slower and more brittle.

## Common failure modes for this area

- Use isolated test data and clean up reliably.
- A test suite consisting only of mocked unit tests can miss integration and permission failures.

## Apply it

1. Write one component test and one authorization integration test.
2. Name what should be mocked and what contract must stay real.

**Topic prompt:** Integration Testing: explain the runtime behavior and draw the boundary between this feature and the adjacent feature it is commonly confused with.

## Version note

Use isolated test data and clean up reliably.

## Official reference

- [Next.js documentation](https://nextjs.org/docs/app/guides/testing)
- [API reference](https://nextjs.org/docs/app/api-reference)
