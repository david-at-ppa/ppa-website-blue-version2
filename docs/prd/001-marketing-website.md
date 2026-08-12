# PRD: Prime Path Advisory marketing website

> GitHub issue: david-at-ppa/ppa-website#1

## Problem Statement

Prime Path Advisory's current website is built inside GoHighLevel, which limits design quality, brand control, and the ability to present a premium experience appropriate for $1M+ earners. The site cannot support SEO-driven organic traffic, does not reflect the firm's positioning, and gives leads no confidence before they commit to booking a call.

## Solution

A new marketing website — a purpose-built authority site — that positions Prime Path Advisory as a premium tax advisory firm, guides high-income leads through a qualification flow, and books them onto a strategy call with a closer. The site is built in Next.js, deployed to Vercel, and retains GoHighLevel as the booking backend.

## User Stories

**Lead — discovery and trust**

1. As a lead, I want to land on a visually premium homepage, so that I immediately trust that this firm operates at my level.
2. As a lead, I want to see the firm's core value proposition above the fold, so that I can decide within seconds whether to keep reading.
3. As a lead, I want to see stats about client outcomes, so that I have concrete evidence the firm delivers results.
4. As a lead, I want to read about the firm's approach and process, so that I understand how they work before committing to a call.
5. As a lead, I want to read about the founder, so that I feel I'm dealing with a credible expert, not a faceless company.
6. As a lead, I want to see the team's bios and photos, so that I know who I'll be speaking with.
7. As a lead, I want to see client testimonials and reviews, so that I can verify others at my income level have had good experiences.
8. As a lead, I want to read a full reviews page, so that I can do thorough due diligence before booking.
9. As a lead, I want to see a breakdown of the firm's services, so that I understand what they actually do.
10. As a lead, I want to watch a founder video, so that I can hear directly from the person behind the firm.
11. As a lead, I want a clear FAQ section, so that my objections are addressed before I book.
12. As a lead, I want multiple CTAs across every page linking to `/#assessment`, so that I can convert whenever I'm ready.
13. As a lead, I want the site to load and render well on mobile, so that I can research on my phone.
14. As a lead, I want smooth scroll-reveal animations on the homepage, so that the browsing experience feels polished and premium.

**Lead — booking flow**

15. As a lead arriving at the home assessment, I want the income question and calendar on the same page as the marketing story, so that I can qualify and book without leaving `/`.
16. As a lead, I want to be asked a single income qualification question before seeing any calendar, so that I understand this firm is selective.
17. As a lead earning less than $1M annually, I want to see a respectful disqualification message, so that I understand I am not the right fit now but may be in future.
18. As a lead earning $1M–$2M annually, I want to see a Free Tax Strategy Consultation calendar, so that I can book a no-cost discovery call.
19. As a lead earning $2M–$4M annually, I want to see a Tax Strategy Consultation calendar, so that I can book directly with a senior closer.
20. As a lead earning $4M+ annually, I want to see a Tax Strategy Consultation calendar, so that I can book directly with a senior closer.
21. As a lead, I want to pick a time slot on the GHL calendar embed, so that I can schedule a call without any friction.
22. As a lead, I want to be redirected to `/booking-confirmed` after scheduling, so that I know my booking was successful.
23. As a lead on `/booking-confirmed`, I want to see a confirmation message and a Vidalytics video about what to expect, so that I arrive on the call prepared.
24. As a lead, I want to receive GHL-automated reminders after booking, so that I do not forget the call.
25. As a lead following an old `/book` link (ads/CRM), I want to land on `/#assessment`, so that campaigns keep working after the dedicated book route is removed.

**Lead — contact and legal**

26. As a lead, I want a contact page with a way to reach the firm, so that I can ask questions before committing to a booking.
27. As a lead, I want to access Privacy Policy, Terms, and Disclosures pages, so that I can verify the firm meets regulatory and legal standards.

**Closer**

28. As a closer, I want leads arriving on calls to be pre-qualified at $1M+ income, so that I do not spend time on leads outside the firm's target.
29. As a closer, I want the round-robin calendar to distribute $1M–$2M leads across Joseph, Lance, and Ahmed, so that call volume is shared fairly.
30. As a closer, I want $2M+ leads routed only to Lance and Ahmed, so that the most valuable opportunities go to senior closers.
31. As a closer, I want GHL to handle all reminders and pipeline updates, so that my workflow is unaffected by the new site.

**David (site owner)**

32. As David, I want the site deployed to `www.primepathadvisory.com` on Vercel, so that deployment is simple and reliable.
33. As David, I want tracking scripts (Meta Pixel, Hyros, GA4) in the site-wide layout, so that all pages are tracked from day one.
34. As David, I want all tracking script IDs to be placeholders during the build, so that I can swap in real IDs before launch without code changes.
35. As David, I want GHL calendar embed codes to be placeholders during the build, so that I can swap in real embeds before launch.
36. As David, I want Vidalytics embed links to be placeholders during the build, so that I can add real videos before launch.
37. As David, I want a before-launch checklist that lists every placeholder, so that nothing ships with fake content.
38. As David, I want the site to use shadcn/ui components, so that the UI is consistent and maintainable.
39. As David, I want the logo to be an inline SVG, so that it can be swapped for a commissioned logo later without changing the codebase.

## Implementation Decisions

**Framework and deployment**
- Next.js App Router with TypeScript. Deployed to Vercel. (ADR 0002)
- Styling via Tailwind CSS with shadcn/ui components.
- Fonts: Inter Tight (body/UI), Cormorant Garamond (display/headings), JetBrains Mono (accents). Loaded via Next.js font system.

**Design direction**
- Heritage theme: cream (`#F7F4ED`) background, forest text (`#1A241B`), bronze primary (`#9A7B3D`), Fraunces headings, forest-green pill CTAs. Applied sitewide via `data-theme="heritage"`.
- Scroll-reveal fade-in animations on scroll throughout the homepage.

**Routing and pages**
Routes in scope: `/`, `/about`, `/services`, `/reviews`, `/booking-confirmed`, `/contact`, `/privacy`, `/terms`, `/disclosures`.
- Marketing pages and `/booking-confirmed` share the full heritage layout (header + footer).
- `/book` is removed; it permanently redirects to `/#assessment`.
- `/heritage` and `/heritage/about` are removed; they permanently redirect to `/` and `/about`.
- Mobile navigation: hamburger icon → full-screen slide-in drawer.

**Qualification flow**
- Built as a custom React component in the home `#assessment` section. (ADR 0004)
- A single income question with four answer options (a–d) is shown on page load.
- The selected answer determines which GHL calendar iframe variant is rendered inline, or hides the calendar and shows disqualification copy.
- Income routing:

| Answer | Income bracket | Outcome |
|---|---|---|
| a | Less than $1M | Disqualification message — no calendar |
| b | $1M–$2M | Free Tax Strategy Consultation calendar |
| c | $2M–$4M | Tax Strategy Consultation calendar |
| d | $4M+ | Tax Strategy Consultation calendar |

- Both GHL calendar embeds are placeholder iframes during the build. Real embed codes swapped in before launch.
- GHL handles the redirect to `/booking-confirmed` after scheduling.
- All CTAs point to `/#assessment`.

**Booking backend**
- GoHighLevel retained as the booking, CRM, and reminder platform. (ADR 0003)
- The website embeds GHL calendar iframes. GHL workflows fire on booking events and are independent of the website.
- CAPI server-side events are handled by GHL workflows — nothing to build on the website side.

**Tracking**
- Meta Pixel, Hyros, and GA4 scripts added to the root layout `<head>` as client-side only scripts.
- All three use placeholder IDs/snippets during the build.

**Video**
- Vidalytics embeds on: Home (founder hero), About (why choose PPA), Services (service explanations), `/booking-confirmed` (what to expect).
- No video files stored in the codebase. Placeholder embed links during build.

**Content**
- All copy, stats, testimonials, team photos, and legal text are placeholder during the build. (ADR 0006)
- Real content provided by the client and swapped in before launch.

**Logo**
- Inline SVG — two opposing arrows (cream/dark + green) with "Prime Path / ADVISORY" wordmark. Swappable without codebase changes.

## Testing Decisions

Good tests assert observable external behavior, not implementation details. A test should remain valid when internal code is refactored, and should break only when real behavior changes.

**Seam 1 — Qualification flow routing logic (unit)**
The income answer → outcome mapping is pure business logic. Test as a function: given answer `a`, `b`, `c`, or `d`, assert the correct outcome (disqualification state, or which calendar variant is active). This is the highest-value test in the codebase — it encodes a business rule that closers depend on.

**Seam 2 — Page smoke tests (integration)**
Each of the ten routes renders without error. No assertions on copy or visual layout — just that the page mounts successfully. Protects against broken imports or missing components silently crashing a page.

**Seam 3 — Tracking script presence (integration)**
The root layout `<head>` contains all three tracking script placeholders (Meta Pixel, Hyros, GA4). Asserts the tracking architecture is wired up — not that the scripts work (that requires real IDs).

**Seam 4 — Home assessment hosts qualification (integration)**
The home `#assessment` section asks the income question and shows the matching calendar or disqualification outcome. Legacy `/book` redirects to `/#assessment`.

**Seam 5 — SEO metadata per page (integration)**
Each route has a non-empty `<title>` tag and `<meta name="description">` content. Asserts the minimum SEO baseline — not copy quality, just presence.

**Seam 6 — Mobile navigation (integration)**
The hamburger icon is present in the header on small viewports. Interacting with it opens the Sheet drawer. Tapping a nav link closes the drawer. Asserts the mobile nav flow works end-to-end without testing internal component state.

No prior art exists in the codebase — the project is not yet scaffolded. Vitest + React Testing Library is the recommended test setup, consistent with the Next.js + TypeScript stack.

## Out of Scope

- **Blog and CMS** — deferred to a future phase. No `/blog` routes, no Sanity integration. (ADR 0001)
- **Real content** — placeholder copy, stats, testimonials, photos, embed codes, and tracking IDs are intentional during build. Swapped in pre-launch.
- **GHL workflow configuration** — GHL reminders, pipeline stages, and CAPI events are managed inside GHL, not the website.
- **Custom calendar UI** — GHL calendar embed handles scheduling UX. The website only controls which embed is shown.
- **Server-side tracking / CAPI** — handled by GHL workflows. Not a website concern.
- **Commissioned logo** — the inline SVG logo is a placeholder. A commissioned logo can be swapped in later.
- **Legal copy** — Privacy, Terms, and Disclosures pages are placeholder shells. Real legal text provided before launch.

## Further Notes

- The reference mockup (`claude-design-export/`) covers all pages and is the source of truth for layout and component structure. The colour scheme is inverted from the mockup (dark-first).
- The before-launch checklist in `docs/research/grilling-session-2026-06-01-website-foundation.md` defines every placeholder that must be replaced before going live. This is a hard gate — the site must not launch with placeholder tracking IDs or unverified claims (FTC/regulatory risk for a CA-based tax advisory firm).
- Six architectural decisions are recorded in `docs/adr/` (ADRs 0001–0006). Any agent implementing this PRD should read the ADRs before starting.
