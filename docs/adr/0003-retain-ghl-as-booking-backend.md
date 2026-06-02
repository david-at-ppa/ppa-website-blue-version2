# ADR 0003: Retain GoHighLevel (GHL) as the booking backend

**Date:** 2026-06-03  
**Status:** Accepted

## Context

Prime Path Advisory already runs its sales pipeline, CRM, calendar, and automated follow-up workflows inside GoHighLevel. Alternatives considered: Calendly, Cal.com, a custom-built booking form.

## Decision

Keep GHL as the booking backend. Embed GHL calendar iframes inside the custom `/book` page built in Next.js. GHL handles scheduling, reminders, and CRM downstream of booking.

## Consequences

- No migration of existing sales workflows or CRM data
- The website does not own or store booking data — GHL does
- GHL calendar embeds are not fully customisable (name/phone/email fields are fixed)
- Replacing GHL in the future would require migrating workflows and CRM data — a separate project
- CAPI server-side events are handled by GHL workflows; the website only needs client-side tracking scripts
