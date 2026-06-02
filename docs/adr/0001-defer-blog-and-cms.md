# ADR 0001: Defer blog and CMS to a future phase

**Date:** 2026-06-03  
**Status:** Accepted

## Context

The original project plan included a blog/articles section powered by Sanity CMS to drive SEO traffic. Sanity would have required creating and maintaining a separate SaaS account, a Studio deployment, and CMS-specific Next.js integration.

The blog's SEO benefit only materialises once content is actively published. Launching with blog infrastructure but no content adds complexity and cost with no immediate return.

## Decision

Ship the initial site as a pure marketing and booking site with no blog and no CMS. Remove `/blog` and `/blog/[slug]` routes from scope. Do not add Sanity or any other CMS dependency.

## Consequences

- Simpler codebase and faster initial build
- No Sanity account, Studio deployment, or CMS integration to maintain
- No organic SEO traffic at launch — acceptable given the primary channel is paid/direct
- Blog can be added in a future phase; Sanity remains the preferred CMS when that happens (web-based editor suits non-developer team members)
