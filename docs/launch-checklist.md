# Launch Checklist

Every item below must be replaced and verified before the site goes live. Nothing ships with a placeholder unchecked.

## Tracking

- [x] Meta Pixel ID — replace placeholder in root layout (`app/layout.tsx`)
- [x] Hyros script snippet — replace placeholder in root layout (`app/layout.tsx`)
- [~] GA4 measurement ID — deferred post-launch (account not yet set up; placeholder script remains inert until a real ID is added)

## GHL Calendar Embeds

Currently using **JP's test calendar** for both outcomes during QA. Before go-live, swap `GHL_CALENDAR_SRC` in `components/booking-flow.tsx` back to the production IDs in `docs/ghl-calendar-widgets.md`.

- [ ] Free Tax Strategy Consultation calendar embed code — `/book`, answer b (`components/booking-flow.tsx`)
- [ ] Tax Strategy Consultation calendar embed code — `/book`, answers c/d (`components/booking-flow.tsx`)

## Vidalytics Embeds

- [x] Founder hero video — homepage (`app/(main)/page.tsx`)
- [x] What to expect video — `/booking-confirmed` (`app/(minimal)/booking-confirmed/page.tsx`) — 3 videos: Booking Confirmation, What Happens on the Call, What to Bring on the Call

---

**Sign-off:** David has reviewed and confirmed every item above before go-live.
