# ADR 0004: Build the qualification flow as a custom Next.js step

**Date:** 2026-06-03  
**Status:** Accepted

## Context

Before a lead reaches the booking calendar, they must answer an income qualification question. This question routes them to different GHL calendars (or a disqualification message). This logic could have been built inside GHL's funnel builder or as a pre-step on a GHL page.

## Decision

Build the income question as a custom React component in Next.js on the `/book` route. The answer controls which GHL calendar iframe is rendered (or hides the calendar and shows disqualification copy).

## Consequences

- Full control over the UI — matches the site's design system exactly
- The `/book` page is distraction-free (no site nav) and can be used for both organic traffic and direct ad links
- Income routing logic lives in the codebase, not inside GHL — easier to change without touching GHL workflows
- GHL workflows are unaffected; they fire on booking events regardless of what embeds the calendar widget
- Both GHL calendar embed codes are placeholders during the build; real codes swapped in before launch
