# ADR 0004: Build the qualification flow as a custom Next.js step

**Date:** 2026-06-03  
**Status:** Accepted  
**Updated:** 2026-08-13

## Context

Before a lead reaches the booking calendar, they must answer an income qualification question. This question routes them to different GHL calendars (or a disqualification message). This logic could have been built inside GHL's funnel builder or as a pre-step on a GHL page.

## Decision

Build the income question as a custom React component in Next.js in the home `#assessment` section (`HeritageIncomeAssessmentSection`).

- Under $1M → show disqualification copy inline on `/`
- $1M–$2M → navigate to `/schedule-a` (Free Tax Strategy Consultation calendar)
- $2M–$4M → navigate to `/schedule-b` (Tax Strategy Consultation calendar)
- $4M+ → navigate to `/schedule-c` (Tax Strategy Consultation calendar)

All site CTAs point to `/#assessment`. The old `/book` path permanently redirects to `/#assessment`. GHL redirects booked leads to `/booking-confirmed`.

## Consequences

- Full control over the qualification UI on the marketing home page
- Calendars get a full-width dedicated route instead of sitting in a side card
- Separate schedule URLs support ad tracking and future calendar divergence (`/schedule-b` vs `/schedule-c`)
- Income routing logic lives in `lib/booking.ts` (`getScheduleRoute`)
- GHL workflows are unaffected; they fire on booking events regardless of what embeds the calendar widget
