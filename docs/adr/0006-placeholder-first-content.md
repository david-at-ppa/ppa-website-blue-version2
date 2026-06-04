# ADR 0006: Build with placeholder content; swap real content before launch

**Date:** 2026-06-03  
**Status:** Accepted

## Context

Real stats, testimonials, team photos, tracking IDs, Vidalytics links, GHL calendar embed codes, and legal copy are not available at build time. Waiting for all assets before starting development would block progress.

## Decision

Build the entire site with placeholder content drawn from the mockup. Real content is swapped in as a pre-launch step, not during development. The before-launch checklist in `docs/research/grilling-session-2026-06-01-website-foundation.md` defines every placeholder that must be replaced.

## Consequences

- Development can proceed immediately without waiting for client assets
- There is a hard pre-launch gate: the site must not go live with placeholder tracking IDs, fake testimonials, or unverified claims (FTC/regulatory risk)
- Any developer picking up the project must know placeholders are intentional — not missing or broken
- Real GHL calendar embed codes and Vidalytics links are the last things added before launch
