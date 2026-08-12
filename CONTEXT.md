# Prime Path Advisory — Domain Context

## Design Direction
**Heritage**: Cream (`#F7F4ED`) background with forest (`#1A241B`) text and bronze (`#9A7B3D`) as primary accent. Fraunces for headings; forest-green pill CTAs. Soft ambient washes instead of flat white/black marketing slabs. Target audience: $1M+ earners who expect a high-end experience. Canonical look applied sitewide via `data-theme="heritage"`.

All copy in the initial build is placeholder. Real stats, testimonials, and claims will be replaced before launch.

## Glossary

### Lead
A prospective client who has landed on the website. Leads are high-income earners making at least $1M annually, typically W-2 executives, tech workers, doctors, lawyers, or business owners. Primary geographic focus is California, though the firm serves clients across many US states. They are skeptical and research thoroughly before committing.

### Closer
A sales team member at Prime Path Advisory who conducts discovery/sales calls with leads. The website exists primarily to get leads onto a call with a closer.

### Booking
The act of a lead scheduling a call with a closer. This is the primary conversion event on the website. Before reaching the calendar, leads pass through a qualification step on the home page (see **Qualification Flow**). All CTA buttons on the site link to `/#assessment`. Legacy `/book` URLs permanently redirect to `/#assessment` for ads and old links.

### Qualification Flow
A single income question in the home `#assessment` section. Routes leads based on annual income:

| Answer | Income bracket | Outcome |
|---|---|---|
| a | Less than $1M | Disqualification message inline on `/` — no calendar |
| b | $1M – $2M | Navigate to `/schedule-a` — "Free Tax Strategy Consultation" calendar |
| c | $2M – $4M | Navigate to `/schedule-b` — "Tax Strategy Consultation" calendar |
| d | $4M+ | Navigate to `/schedule-c` — "Tax Strategy Consultation" calendar |

Built as a custom step in Next.js on the home page. Qualified leads book on dedicated schedule routes; GHL handles scheduling, reminders, CRM, and redirect to `/booking-confirmed`.

### Closer
A sales team member who conducts discovery/sales calls with qualified leads. Current closers: Joseph Alexander, Lance Armour, Ahmed R. Joseph, Lance, and Ahmed handle $1M–$2M leads; Lance and Ahmed handle $2M+ leads.

### Authority Site
The website's architecture: a marketing site with a dominant primary CTA ("Book a Call"). All pages funnel toward the Booking action. A blog/articles section for SEO is planned for a future phase but is not in the initial build.

### Blog / Articles
Deferred to a future phase. Not in the initial build. Purpose when added: SEO-driven organic traffic targeting the $1M+ audience, and building authority/trust with leads who research before booking.

### Logo
SVG mark of two opposing arrows (one dark/cream, one gold) with "Prime Path / ADVISORY" wordmark. Reference: `claude-design-export/prime-path-gold.pdf`. Used as the starting logo — can be swapped for a commissioned logo later without changing the codebase.

### Tracking & Attribution
Three tracking scripts added to the site-wide `<head>` in `layout.tsx`:
- **Meta Pixel** (client-side only — CAPI server-side events are handled by GHL workflows, not the website)
- **Hyros** (attribution tracking)
- **Google Analytics 4**

All three use placeholder script snippets during the build. Real IDs/snippets are swapped in before launch. GHL workflows fire independently and are not affected by the new site.

### Video Hosting
Videos are hosted on Vidalytics and embedded on the site via Vidalytics embed links. No video files are stored in the codebase. Placeholder embeds used during build — real Vidalytics links swapped in before launch. Videos appear on: Home (founder hero video), About (why choose PPA), Services (service explanations), and /booking-confirmed (what to expect / how to prepare for the call).

### Blog / CMS
Deferred. No blog and no CMS in the initial build. The site launches as a pure marketing/booking site. Blog can be added in a future phase if SEO content becomes a priority.

### GoHighLevel (GHL)
The existing CRM and calendar platform. Retained as the booking backend. The GHL calendar widget is embedded in the new website. GHL handles scheduling, reminders, and the sales pipeline downstream of booking.

Production calendar embed codes live in `docs/ghl-calendar-widgets.md`:
- **Free Tax Strategy Consultation** — answer b ($1M–$2M)
- **Tax Strategy Consultation** — answers c/d ($2M+)

**Testing calendar:** During development and QA, all schedule routes in `components/schedule-calendar.tsx` point to **JP's calendar** (`2AHs8LOXnqUN4v40s0ki`) so test bookings do not disturb closer round-robin calendars. Swap back to the production embed IDs before launch (see launch checklist). `/schedule-a` uses the free-consult production calendar; `/schedule-b` and `/schedule-c` use the consult production calendar (same embed until they diverge).
