# Next.js-Revision

A practical learning, reference, debugging, architecture, and interview-preparation repository for **Next.js 16.x with the App Router**.

## Purpose

This repository builds on existing JavaScript, React, TypeScript, Node.js, HTTP, database, and Docker knowledge. It focuses on what Next.js adds: file-system routing, Server and Client Components, rendering, caching, data access, mutations, production concerns, and architectural decisions.

## Version target and compatibility

- Primary target: Next.js 16.x, App Router.
- Examples use TypeScript where appropriate.
- APIs and defaults can change between major/minor releases. Check the exact installed version and the official docs before copying version-sensitive code.
- In particular, verify caching defaults, asynchronous request APIs, request interception conventions, Server Actions, and experimental features.
- These notes are learning material, not a claim that every illustrative snippet is a complete production system.

## Prerequisites

- Node.js version supported by the selected Next.js release.
- npm, pnpm, yarn, or another supported package manager.
- Familiarity with JavaScript, React, TypeScript, HTTP, and basic database concepts.
- A code editor and terminal.

## Suggested learning order

1. Fundamentals and project setup.
2. App Router, pages/layouts, and routing patterns.
3. Server/Client Components and rendering.
4. Data fetching, caching, streaming, and Suspense.
5. Server Actions, Route Handlers, forms, authentication, and data access.
6. Loading/error states, SEO, assets, performance, and PWAs.
7. Security, deployment, testing, advanced concepts, and projects.
8. Interview preparation alongside each topic—not only at the end.

## How to study each section

1. Read the core explanation.
2. Draw the data/request flow in your own words.
3. Recreate the example in a scratch app.
4. Change one thing and predict the result before running it.
5. Debug a failure and record the root cause.
6. Answer the interview prompt aloud in 30–90 seconds.
7. Revisit the official documentation when an API or default is version-sensitive.

## Running examples

The examples in this repository are primarily snippets and focused patterns, not one giant runnable application. To experiment:

```bash
npx create-next-app@latest nextjs-playground
cd nextjs-playground
npm run dev
```

Choose TypeScript and App Router when prompted. Check the official installation page for current requirements and options. Copy one example at a time into the appropriate file path, adapt its imports/types, and run a production build before considering it complete.

## Complete folder index

### 01-Nextjs-Fundamentals
- [What Is Next.js?](01-Nextjs-Fundamentals/01-What-is-Nextjs.md)
- [React vs Next.js](01-Nextjs-Fundamentals/02-React-vs-Nextjs.md)
- [Why Next.js Exists](01-Nextjs-Fundamentals/03-Why-Nextjs-Exists.md)
- [Next.js Architecture Overview](01-Nextjs-Fundamentals/04-Nextjs-Architecture-Overview.md)
- [Rendering and Request Lifecycle](01-Nextjs-Fundamentals/05-Nextjs-Rendering-and-Request-Lifecycle.md)

### 02-Project-Setup-and-Configuration
- [Creating a Next.js Project](02-Project-Setup-and-Configuration/01-Creating-a-Nextjs-Project.md)
- [Project Structure](02-Project-Setup-and-Configuration/02-Project-Structure.md)
- [Package Scripts and Development Server](02-Project-Setup-and-Configuration/03-Package-Scripts-and-Development-Server.md)
- [Next Config and Framework Configuration](02-Project-Setup-and-Configuration/04-Next-Config-and-Framework-Configuration.md)
- [TypeScript and Next.js](02-Project-Setup-and-Configuration/05-TypeScript-and-Nextjs.md)
- [Environment Variables](02-Project-Setup-and-Configuration/06-Environment-Variables.md)

### 03-App-Router-Fundamentals
- [App Router Overview](03-App-Router-Fundamentals/01-App-Router-Overview.md)
- [The App Directory](03-App-Router-Fundamentals/02-The-App-Directory.md)
- [Page and Layout Conventions](03-App-Router-Fundamentals/03-Page-and-Layout-Conventions.md)
- [Route Segments](03-App-Router-Fundamentals/04-Route-Segments.md)
- [Route Resolution and Matching](03-App-Router-Fundamentals/05-Route-Resolution-and-Matching.md)

### 04-Layouts-Pages-and-Navigation
- [page.tsx](04-Layouts-Pages-and-Navigation/01-Page-tsx.md)
- [layout.tsx](04-Layouts-Pages-and-Navigation/02-Layout-tsx.md)
- [template.tsx](04-Layouts-Pages-and-Navigation/03-Template-tsx.md)
- [Link and Client-Side Navigation](04-Layouts-Pages-and-Navigation/04-Link-and-Client-Side-Navigation.md)
- [Nested Layouts](04-Layouts-Pages-and-Navigation/05-Nested-Layouts.md)
- [Loading and Error Boundaries](04-Layouts-Pages-and-Navigation/06-Loading-and-Error-Boundaries.md)

### 05-Routing-Patterns-and-Advanced-Routing
- [Dynamic Routes](05-Routing-Patterns-and-Advanced-Routing/01-Dynamic-Routes.md)
- [Catch-All and Optional Catch-All Routes](05-Routing-Patterns-and-Advanced-Routing/02-Catch-All-and-Optional-Catch-All-Routes.md)
- [Route Groups](05-Routing-Patterns-and-Advanced-Routing/03-Route-Groups.md)
- [Private Folders](05-Routing-Patterns-and-Advanced-Routing/04-Private-Folders.md)
- [Parallel Routes](05-Routing-Patterns-and-Advanced-Routing/05-Parallel-Routes.md)
- [Intercepting Routes](05-Routing-Patterns-and-Advanced-Routing/06-Intercepting-Routes.md)
- [Route Params and Search Params](05-Routing-Patterns-and-Advanced-Routing/07-Route-Params-and-Search-Params.md)

### 06-React-Server-and-Client-Components
- [Server Components](06-React-Server-and-Client-Components/01-Server-Components.md)
- [Client Components](06-React-Server-and-Client-Components/02-Client-Components.md)
- [Server vs Client Components](06-React-Server-and-Client-Components/03-Server-vs-Client-Components.md)
- [Client Boundaries and Module Graph](06-React-Server-and-Client-Components/04-Client-Boundaries-and-Module-Graph.md)
- [Serialization and Serializable Props](06-React-Server-and-Client-Components/05-Serialization-and-Serializable-Props.md)
- [Composition and Component Patterns](06-React-Server-and-Client-Components/06-Composition-and-Component-Patterns.md)
- [Context and State in Next.js](06-React-Server-and-Client-Components/07-Context-and-State-in-Nextjs.md)

### 07-Rendering-Strategies
- [Rendering Overview](07-Rendering-Strategies/01-Rendering-Overview.md)
- [Client-Side Rendering](07-Rendering-Strategies/02-Client-Side-Rendering.md)
- [Server-Side Rendering](07-Rendering-Strategies/03-Server-Side-Rendering.md)
- [Static Rendering](07-Rendering-Strategies/04-Static-Rendering.md)
- [Incremental Static Regeneration](07-Rendering-Strategies/05-Incremental-Static-Regeneration.md)
- [Streaming and Suspense](07-Rendering-Strategies/06-Streaming-and-Suspense.md)
- [Hydration and Hydration Errors](07-Rendering-Strategies/07-Hydration-and-Hydration-Errors.md)
- [Choosing a Rendering Strategy](07-Rendering-Strategies/08-Choosing-a-Rendering-Strategy.md)

### 08-Data-Fetching-and-Async-Workflows
- [Data Fetching Overview](08-Data-Fetching-and-Async-Workflows/01-Data-Fetching-Overview.md)
- [Fetch on the Server](08-Data-Fetching-and-Async-Workflows/02-Fetch-on-the-Server.md)
- [Parallel and Sequential Data Fetching](08-Data-Fetching-and-Async-Workflows/03-Parallel-and-Sequential-Data-Fetching.md)
- [Request Waterfalls](08-Data-Fetching-and-Async-Workflows/04-Request-Waterfalls.md)
- [Direct Database Access](08-Data-Fetching-and-Async-Workflows/05-Direct-Database-Access.md)
- [Third-Party APIs](08-Data-Fetching-and-Async-Workflows/06-Third-Party-APIs.md)
- [Data Loading Patterns](08-Data-Fetching-and-Async-Workflows/07-Data-Loading-Patterns.md)

### 09-Caching-and-Revalidation
- [Caching Overview](09-Caching-and-Revalidation/01-Caching-Overview.md)
- [Request Memoization](09-Caching-and-Revalidation/02-Request-Memoization.md)
- [Data Fetching Cache](09-Caching-and-Revalidation/03-Data-Fetching-Cache.md)
- [Full Route Cache](09-Caching-and-Revalidation/04-Full-Route-Cache.md)
- [Router Cache](09-Caching-and-Revalidation/05-Router-Cache.md)
- [Revalidation and Cache Invalidation](09-Caching-and-Revalidation/06-Revalidation-and-Cache-Invalidation.md)
- [Time-Based and On-Demand Revalidation](09-Caching-and-Revalidation/07-Time-Based-and-On-Demand-Revalidation.md)
- [Caching Version Differences](09-Caching-and-Revalidation/08-Caching-Version-Differences.md)

### 10-Streaming-and-Suspense
- [Suspense Fundamentals](10-Streaming-and-Suspense/01-Suspense-Fundamentals.md)
- [Streaming Server Rendering](10-Streaming-and-Suspense/02-Streaming-Server-Rendering.md)
- [Loading UI and Skeletons](10-Streaming-and-Suspense/03-Loading-UI-and-Skeletons.md)
- [Streaming Data-Dependent UI](10-Streaming-and-Suspense/04-Streaming-Data-Dependent-UI.md)
- [Error Boundaries and Suspense](10-Streaming-and-Suspense/05-Error-Boundaries-and-Suspense.md)

### 11-Server-Actions-and-Mutations
- [Server Actions Fundamentals](11-Server-Actions-and-Mutations/01-Server-Actions-Fundamentals.md)
- [Server Functions and Client Calls](11-Server-Actions-and-Mutations/02-Server-Functions-and-Client-Calls.md)
- [Form Mutations and Progressive Enhancement](11-Server-Actions-and-Mutations/03-Form-Mutations-and-Progressive-Enhancement.md)
- [Validation and Error Handling](11-Server-Actions-and-Mutations/04-Validation-and-Error-Handling.md)
- [Authentication and Authorization in Mutations](11-Server-Actions-and-Mutations/05-Authentication-and-Authorization-in-Mutations.md)
- [Mutation Revalidation and Redirects](11-Server-Actions-and-Mutations/06-Mutation-Revalidation-and-Redirects.md)

### 12-Route-Handlers-and-HTTP-APIs
- [Route Handlers Fundamentals](12-Route-Handlers-and-HTTP-APIs/01-Route-Handlers-Fundamentals.md)
- [Request and Response APIs](12-Route-Handlers-and-HTTP-APIs/02-Request-and-Response-APIs.md)
- [HTTP Methods and Status Codes](12-Route-Handlers-and-HTTP-APIs/03-HTTP-Methods-and-Status-Codes.md)
- [Validation and Error Responses](12-Route-Handlers-and-HTTP-APIs/04-Validation-and-Error-Responses.md)
- [REST API Design and Integration](12-Route-Handlers-and-HTTP-APIs/05-REST-API-Design-and-Integration.md)
- [Route Handlers vs Server Actions](12-Route-Handlers-and-HTTP-APIs/06-Route-Handlers-vs-Server-Actions.md)

### 13-Forms-Validation-and-Optimistic-UI
- [Forms in Next.js](13-Forms-Validation-and-Optimistic-UI/01-Forms-in-Nextjs.md)
- [Server and Client Form Handling](13-Forms-Validation-and-Optimistic-UI/02-Server-and-Client-Form-Handling.md)
- [Form State and Pending States](13-Forms-Validation-and-Optimistic-UI/03-Form-State-and-Pending-States.md)
- [Server-Side Validation](13-Forms-Validation-and-Optimistic-UI/04-Server-Side-Validation.md)
- [Optimistic UI](13-Forms-Validation-and-Optimistic-UI/05-Optimistic-UI.md)
- [Accessible Form Errors](13-Forms-Validation-and-Optimistic-UI/06-Accessible-Form-Errors.md)

### 14-Authentication-and-Authorization
- [Authentication vs Authorization](14-Authentication-and-Authorization/01-Authentication-vs-Authorization.md)
- [Authentication Architecture](14-Authentication-and-Authorization/02-Authentication-Architecture.md)
- [Cookies, Sessions and Tokens](14-Authentication-and-Authorization/03-Cookies-Sessions-and-Tokens.md)
- [Login and Logout Flows](14-Authentication-and-Authorization/04-Login-and-Logout-Flows.md)
- [Protected Routes and Server Authorization](14-Authentication-and-Authorization/05-Protected-Routes-and-Server-Authorization.md)
- [Role-Based and Resource-Based Access Control](14-Authentication-and-Authorization/06-Role-Based-and-Resource-Based-Access-Control.md)
- [Authentication Libraries and Integration](14-Authentication-and-Authorization/07-Authentication-Libraries-and-Integration.md)
- [Common Authentication Security Mistakes](14-Authentication-and-Authorization/08-Common-Authentication-Security-Mistakes.md)

### 15-Middleware-and-Request-Interception
- [Middleware and Request Interception](15-Middleware-and-Request-Interception/01-Middleware-and-Request-Interception.md)
- [Request Matching and Configuration](15-Middleware-and-Request-Interception/02-Request-Matching-and-Configuration.md)
- [Redirects, Rewrites and Headers](15-Middleware-and-Request-Interception/03-Redirects-Rewrites-and-Headers.md)
- [Authorization and Execution Environment](15-Middleware-and-Request-Interception/04-Authorization-and-Execution-Environment.md)
- [Middleware vs Other Server Mechanisms](15-Middleware-and-Request-Interception/05-Middleware-vs-Other-Server-Mechanisms.md)

### 16-Database-Integration-and-Data-Access
- [Database Integration Architecture](16-Database-Integration-and-Data-Access/01-Database-Integration-Architecture.md)
- [PostgreSQL Integration](16-Database-Integration-and-Data-Access/02-PostgreSQL-Integration.md)
- [MongoDB Integration](16-Database-Integration-and-Data-Access/03-MongoDB-Integration.md)
- [ORMs and Prisma Integration](16-Database-Integration-and-Data-Access/04-ORMs-and-Prisma-Integration.md)
- [Connection Pooling and Serverless Considerations](16-Database-Integration-and-Data-Access/05-Connection-Pooling-and-Serverless-Considerations.md)
- [Data Access Layers and Repository Patterns](16-Database-Integration-and-Data-Access/06-Data-Access-Layers-and-Repository-Patterns.md)
- [Database Errors and Transactions](16-Database-Integration-and-Data-Access/07-Database-Errors-and-Transactions.md)

### 17-Cookies-Headers-and-Request-Context
- [Cookies API](17-Cookies-Headers-and-Request-Context/01-Cookies-API.md)
- [Headers API](17-Cookies-Headers-and-Request-Context/02-Headers-API.md)
- [Request Context and URL Information](17-Cookies-Headers-and-Request-Context/03-Request-Context-and-URL-Information.md)
- [Redirects and Not Found Mechanisms](17-Cookies-Headers-and-Request-Context/04-Redirects-and-Not-Found-Mechanisms.md)
- [Request API Version Considerations](17-Cookies-Headers-and-Request-Context/05-Request-API-Version-Considerations.md)

### 18-Loading-Errors-and-Not-Found-States
- [loading.tsx](18-Loading-Errors-and-Not-Found-States/01-Loading-tsx.md)
- [error.tsx and Error Boundaries](18-Loading-Errors-and-Not-Found-States/02-Error-tsx-and-Error-Boundaries.md)
- [Not Found and Global Error Handling](18-Loading-Errors-and-Not-Found-States/03-Not-Found-and-Global-Error-Handling.md)
- [Error Recovery and Retry](18-Loading-Errors-and-Not-Found-States/04-Error-Recovery-and-Retry.md)
- [Production Error Debugging](18-Loading-Errors-and-Not-Found-States/05-Production-Error-Debugging.md)

### 19-SEO-and-Metadata
- [Metadata API](19-SEO-and-Metadata/01-Metadata-API.md)
- [Static and Dynamic Metadata](19-SEO-and-Metadata/02-Static-and-Dynamic-Metadata.md)
- [Open Graph and Social Previews](19-SEO-and-Metadata/03-Open-Graph-and-Social-Previews.md)
- [Sitemaps, Robots and Canonical URLs](19-SEO-and-Metadata/04-Sitemaps-Robots-and-Canonical-URLs.md)
- [SEO for Dynamic Routes](19-SEO-and-Metadata/05-SEO-for-Dynamic-Routes.md)

### 20-Images-Fonts-and-Static-Assets
- [Static Assets and Public Directory](20-Images-Fonts-and-Static-Assets/01-Static-Assets-and-Public-Directory.md)
- [next/image](20-Images-Fonts-and-Static-Assets/02-Next-Image.md)
- [Image Optimization and Remote Images](20-Images-Fonts-and-Static-Assets/03-Image-Optimization-and-Remote-Images.md)
- [Font Optimization](20-Images-Fonts-and-Static-Assets/04-Font-Optimization.md)
- [Asset Caching and Common Mistakes](20-Images-Fonts-and-Static-Assets/05-Asset-Caching-and-Common-Mistakes.md)

### 21-Performance-and-Optimization
- [Performance Fundamentals](21-Performance-and-Optimization/01-Performance-Fundamentals.md)
- [JavaScript Bundles and Code Splitting](21-Performance-and-Optimization/02-JavaScript-Bundles-and-Code-Splitting.md)
- [Dynamic Imports and Lazy Loading](21-Performance-and-Optimization/03-Dynamic-Imports-and-Lazy-Loading.md)
- [Core Web Vitals](21-Performance-and-Optimization/04-Core-Web-Vitals.md)
- [Server and Client Performance](21-Performance-and-Optimization/05-Server-and-Client-Performance.md)
- [Data Fetching and Rendering Optimization](21-Performance-and-Optimization/06-Data-Fetching-and-Rendering-Optimization.md)
- [Performance Profiling and Debugging](21-Performance-and-Optimization/07-Performance-Profiling-and-Debugging.md)

### 22-Progressive-Web-Apps
- [PWA Fundamentals](22-Progressive-Web-Apps/01-PWA-Fundamentals.md)
- [Web App Manifest and Installation](22-Progressive-Web-Apps/02-Web-App-Manifest-and-Installation.md)
- [Service Workers](22-Progressive-Web-Apps/03-Service-Workers.md)
- [Offline Caching Strategies](22-Progressive-Web-Apps/04-Offline-Caching-Strategies.md)
- [PWA Updates and Production Considerations](22-Progressive-Web-Apps/05-PWA-Updates-and-Production-Considerations.md)

### 23-Security-and-Production-Best-Practices
- [Next.js Security Fundamentals](23-Security-and-Production-Best-Practices/01-Nextjs-Security-Fundamentals.md)
- [Environment Secrets and Server-Only Code](23-Security-and-Production-Best-Practices/02-Environment-Secrets-and-Server-Only-Code.md)
- [Authentication, Authorization and Data Exposure](23-Security-and-Production-Best-Practices/03-Authentication-Authorization-and-Data-Exposure.md)
- [XSS, CSRF and Input Validation](23-Security-and-Production-Best-Practices/04-XSS-CSRF-and-Input-Validation.md)
- [Security Headers and CSP](23-Security-and-Production-Best-Practices/05-Security-Headers-and-Content-Security-Policy.md)
- [Production Readiness Checklist](23-Security-and-Production-Best-Practices/06-Production-Readiness-Checklist.md)

### 24-Deployment-and-Hosting
- [Production Build and Start](24-Deployment-and-Hosting/01-Production-Build-and-Start.md)
- [Vercel Deployment](24-Deployment-and-Hosting/02-Vercel-Deployment.md)
- [Self Hosting and Node.js](24-Deployment-and-Hosting/03-Self-Hosting-and-Nodejs.md)
- [Docker and Next.js](24-Deployment-and-Hosting/04-Docker-and-Nextjs.md)
- [Environment Variables and Deployment](24-Deployment-and-Hosting/05-Environment-Variables-and-Deployment.md)
- [Deployment Troubleshooting](24-Deployment-and-Hosting/06-Deployment-Troubleshooting.md)

### 25-Testing-and-Quality-Assurance
- [Testing Next.js Applications](25-Testing-and-Quality-Assurance/01-Testing-Nextjs-Applications.md)
- [Unit and Component Testing](25-Testing-and-Quality-Assurance/02-Unit-and-Component-Testing.md)
- [Integration Testing](25-Testing-and-Quality-Assurance/03-Integration-Testing.md)
- [End-to-End Testing](25-Testing-and-Quality-Assurance/04-End-to-End-Testing.md)
- [Mocking Server Dependencies](25-Testing-and-Quality-Assurance/05-Mocking-Server-Dependencies.md)
- [Testing Forms and Authentication](25-Testing-and-Quality-Assurance/06-Testing-Forms-and-Authentication.md)

### 26-Advanced-Nextjs-Concepts
- [Compilation and Build Pipeline](26-Advanced-Nextjs-Concepts/01-Nextjs-Compilation-and-Build-Pipeline.md)
- [Turbopack and Bundling](26-Advanced-Nextjs-Concepts/02-Turbopack-and-Bundling.md)
- [Advanced Rendering and Cache Interactions](26-Advanced-Nextjs-Concepts/03-Advanced-Rendering-and-Cache-Interactions.md)
- [Request Lifecycle and Execution Boundaries](26-Advanced-Nextjs-Concepts/04-Request-Lifecycle-and-Execution-Boundaries.md)
- [Internationalization and Routing](26-Advanced-Nextjs-Concepts/05-Internationalization-and-Routing.md)
- [Feature Flags and Progressive Rollouts](26-Advanced-Nextjs-Concepts/06-Feature-Flags-and-Progressive-Rollouts.md)
- [Architecture Decisions and Tradeoffs](26-Advanced-Nextjs-Concepts/07-Architecture-Decisions-and-Tradeoffs.md)

### 27-Real-World-Projects-and-Architecture
- [Full-Stack Application Architecture](27-Real-World-Projects-and-Architecture/01-Full-Stack-Application-Architecture.md)
- [Authentication and Dashboard Architecture](27-Real-World-Projects-and-Architecture/02-Authentication-and-Dashboard-Architecture.md)
- [CRUD Application with PostgreSQL](27-Real-World-Projects-and-Architecture/03-CRUD-Application-with-PostgreSQL.md)
- [Content Platform with Search and Pagination](27-Real-World-Projects-and-Architecture/04-Content-Platform-with-Search-and-Pagination.md)
- [File Upload and Storage Architecture](27-Real-World-Projects-and-Architecture/05-File-Upload-and-Storage-Architecture.md)
- [Production Architecture and Tradeoffs](27-Real-World-Projects-and-Architecture/06-Production-Architecture-and-Tradeoffs.md)

### 28-Interview-Preparation
- [Next.js Core Interview Questions](28-Interview-Preparation/01-Nextjs-Core-Interview-Questions.md)
- [Architecture and Routing Questions](28-Interview-Preparation/02-Architecture-and-Routing-Questions.md)
- [Server and Client Components Questions](28-Interview-Preparation/03-Server-and-Client-Components-Questions.md)
- [Rendering and Hydration Questions](28-Interview-Preparation/04-Rendering-and-Hydration-Questions.md)
- [Data Fetching and Caching Questions](28-Interview-Preparation/05-Data-Fetching-and-Caching-Questions.md)
- [Server Actions and Route Handlers Questions](28-Interview-Preparation/06-Server-Actions-and-Route-Handlers-Questions.md)
- [Authentication and Security Questions](28-Interview-Preparation/07-Authentication-and-Security-Questions.md)
- [Performance and Deployment Questions](28-Interview-Preparation/08-Performance-and-Deployment-Questions.md)
- [TypeScript and React Integration Questions](28-Interview-Preparation/09-TypeScript-and-React-Integration-Questions.md)
- [Code-Based Interview Questions](28-Interview-Preparation/10-Code-Based-Interview-Questions.md)
- [Scenario-Based Interview Questions](28-Interview-Preparation/11-Scenario-Based-Interview-Questions.md)
- [Debugging and Troubleshooting Questions](28-Interview-Preparation/12-Debugging-and-Troubleshooting-Questions.md)
- [Why Questions and Deep Follow-Ups](28-Interview-Preparation/13-Why-Questions-and-Deep-Follow-Ups.md)
- [Common Mistakes and Interview Traps](28-Interview-Preparation/14-Common-Mistakes-and-Interview-Traps.md)
- [Quick Revision and Last-Minute Checklist](28-Interview-Preparation/15-Quick-Revision-and-Last-Minute-Checklist.md)
- [Next.js Glossary](28-Interview-Preparation/16-Nextjs-Glossary.md)

## Recommended practice workflow

- Keep experiments separate from your main projects.
- Write down the observed behavior and the Next.js version.
- Test happy path, invalid input, missing data, and authorization failures.
- Avoid committing secrets or `.env` files.
- Prefer explicit cache/revalidation choices when freshness matters.
- Add automated tests for important behavior.

## Interview workflow

For each concept, practice: **definition → how it works → realistic example → tradeoff → failure mode**. Use the interview section to test recall, but return to the topic notes when you cannot explain the mechanism.

## Official resources

- [Next.js documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [Getting started](https://nextjs.org/docs/app/getting-started)
- [API reference](https://nextjs.org/docs/app/api-reference)
- [Next.js Learn](https://nextjs.org/learn)

## Scope and maintenance

All 28 curriculum folders are included in this archive. Individual topic files now use topic-specific mechanisms, examples, pitfalls, and exercises rather than repeating the same generic sections. Re-check official documentation when upgrading Next.js, React, or related tooling.
