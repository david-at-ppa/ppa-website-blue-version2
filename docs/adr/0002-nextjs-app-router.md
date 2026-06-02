# ADR 0002: Next.js (App Router) + TypeScript as the framework

**Date:** 2026-06-03  
**Status:** Accepted

## Context

The site needs SSR/SSG for SEO, a blog-ready architecture for a future phase, easy Vercel deployment, and a framework David can work in with Claude Code assistance. Alternatives considered: Remix, Astro, plain React + Vite.

## Decision

Use Next.js with the App Router and TypeScript. Deploy to Vercel.

## Consequences

- App Router is the current Next.js standard; Pages Router is legacy
- TypeScript catches errors early and improves AI-assisted development
- Vercel + Next.js is a zero-config deployment pairing
- Astro would have been lighter but offers less flexibility for dynamic routes (booking flow, future blog)
- Remix was not chosen — no meaningful advantage over Next.js for this use case
