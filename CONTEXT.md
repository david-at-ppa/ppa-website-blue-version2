# Prime Path Advisory — Domain Context

## Design Direction
**Premium/modern**: White (`#ffffff`) background with black (`#111111`) text and gold (`#B08628`) as primary accent. Bold typography. Signals exclusivity and wealth. The final CTA section uses a black (`#111111`) background for contrast. Card/alternate sections use light gray (`#f5f5f5`). Target audience: $1M+ earners who expect a high-end experience. Reference design: `claude-design-export/prime-path-gold.pdf`.

All copy in the initial build is placeholder. Real stats, testimonials, and claims will be replaced before launch.

## Glossary

### Lead
A prospective client who has landed on the website. Leads are high-income earners making at least $1M annually, typically W-2 executives, tech workers, doctors, lawyers, or business owners. Primary geographic focus is California, though the firm serves clients across many US states. They are skeptical and research thoroughly before committing.

### Closer
A sales team member at Prime Path Advisory who conducts discovery/sales calls with leads. The website exists primarily to get leads onto a call with a closer.

### Booking
The act of a lead scheduling a call with a closer. This is the primary conversion event on the website. Before reaching the calendar, leads pass through a qualification step (see **Qualification Flow**). All CTA buttons on the site link to `/book`. The `/book` page is a focused, distraction-free page — no full site nav, no competing content — used for both organic traffic and direct ad links.

### Qualification Flow
A single income question shown before any calendar is displayed. Routes leads to different outcomes based on annual income:

| Answer | Income bracket | Outcome |
|---|---|---|
| a | Less than $1M | Disqualification message — no calendar shown |
| b | $1M – $2M | "Free Tax Strategy Consultation" calendar (round robin: Joseph Alexander, Lance Armour, Ahmed R) |
| c | $2M – $4M | "Tax Strategy Consultation" calendar (round robin: Lance Armour, Ahmed R) |
| d | $4M+ | "Tax Strategy Consultation" calendar (round robin: Lance Armour, Ahmed R) |

Built as a custom step in Next.js — income answer controls which GHL calendar embed (or disqualification copy) is shown. GHL handles scheduling, reminders, and CRM downstream.

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
