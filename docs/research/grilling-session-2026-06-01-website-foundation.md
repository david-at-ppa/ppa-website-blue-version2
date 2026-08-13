# Prime Path Advisory — Website Project Briefing

> This document is a handoff for any agent picking up this project with a fresh context window. Read this first, then read `CONTEXT.md` at the repo root for the domain glossary.

---

## What this project is

A new marketing website for **Prime Path Advisory**, a tax advisory firm based in Los Angeles, CA targeting high-income earners ($1M+ annually). The current website is a funnel built inside GoHighLevel (GHL). The goal is to replace it with a professional, full-featured marketing site that:

1. Drives leads to book a strategy call with a closer (primary conversion goal)
2. Publishes SEO-optimised blog/article content to attract organic traffic
3. Reflects a premium brand positioning appropriate for $1M+ earners

The owner is **David Tran** (david@primepathadvisory.com), a self-taught developer who works with Claude Code. Explanations should avoid deep technical assumptions.

---

## Key reference files in this repo

| File | Purpose |
|---|---|
| `CONTEXT.md` | Domain glossary — canonical terms, booking flow, design direction. Read this. |
| `claude-design-export/index.html` | Full HTML mockup of the homepage with all copy, styles, and layout. The build is based on this. |
| `claude-design-export/` | Full design export — all pages (about, services, blog, contact, reviews, thank-you), screenshots, and brand assets |
| `claude-design-export/uploads/` | Brand kit PDFs and other uploaded assets |

---

## Tech stack (locked in)

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS + shadcn/ui |
| CMS | Sanity Studio (for blog — non-developer team publishes via web UI) |
| Deployment | Vercel — primary domain `www.primepathadvisory.com` |
| Fonts | Inter Tight + Cormorant Garamond + JetBrains Mono (from mockup) |
| Video | Vimeo embeds (placeholder links during build) |
| Analytics | GA4 placeholder config (real ID added before launch) |
| Tracking | Meta Pixel + Hyros scripts in `<head>` (placeholders during build) |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, approach, process, founder, team, services overview, case study, reviews teaser, FAQ, CTA |
| `/about-us` | Team bios, firm story, why choose PPA, Vimeo video |
| `/how-it-works` | Process overview (placeholder during build) |
| `/faqs` | Frequently asked questions (placeholder during build) |
| `/book` | Qualification + booking page (see booking flow below) |
| `/booking-confirmed` | Post-booking confirmation + Vimeo video (what to expect, how to prepare) |
| `/contact` | Contact page |
| `/privacy` | Placeholder legal page |
| `/terms` | Placeholder legal page |
| `/disclosures` | Placeholder legal page (regulatory requirement for tax advisors in CA) |

---

## Booking flow (critical — read carefully)

All CTA buttons across the site link to `/book`. This page is a focused, distraction-free qualification + booking experience.

**Flow:**
1. Lead lands on `/book`
2. Shown a single income question: *"What is your annual income?"*
3. Based on answer, one of three outcomes:

| Answer | Income | Outcome |
|---|---|---|
| a | Less than $1M | Disqualification message — no calendar shown. Copy: "We typically work with earners of $1M+, please keep us in mind as your income grows." |
| b | $1M – $2M | GHL calendar: **"Free Tax Strategy Consultation"** (round robin: Joseph Alexander, Lance Armour, Ahmed R) |
| c | $2M – $4M | GHL calendar: **"Tax Strategy Consultation"** (round robin: Lance Armour, Ahmed R) |
| d | $4M+ | GHL calendar: **"Tax Strategy Consultation"** (round robin: Lance Armour, Ahmed R) |

4. Lead picks a time slot on the GHL calendar widget
5. GHL collects name, phone, email (built into the widget — not customisable)
6. GHL redirects to `/booking-confirmed` on the site

**Implementation:** The income question is built custom in Next.js. The answer controls which GHL calendar iframe embed is shown (or hides the calendar and shows disqualification copy). Both GHL calendar embeds are placeholder iframes during the build.

**GHL workflows are not affected.** They fire on booking events inside GHL, independent of what site embeds the widget.

---

## Design direction

- **Predominantly dark** — near-black (`#0a0a0a`) backgrounds, with light sections used sparingly for contrast
- **Primary accent:** green (`#0d7c54`)
- **Reference mockup:** `claude-design-export/index.html` — note the mockup itself is light-first; the build inverts this to dark-first
- **Logo:** SVG of two opposing arrows (one dark/cream, one green) + "Prime Path / ADVISORY" wordmark. Defined inline in the mockup. Swappable later.
- **Animations:** Scroll-reveal fade-in on scroll (matching mockup behaviour)
- **Mobile nav:** Hamburger → full-screen slide-in drawer (shadcn/ui Sheet component)

---

## Copy & content status

All copy in the initial build is **placeholder** — taken from the mockup. Real stats, testimonials, team photos, and legal copy will be provided by the client before launch.

**Before-launch checklist:**
- [ ] Replace all placeholder stats with verified figures
- [ ] Replace placeholder testimonials with real client quotes
- [ ] Add real team photos (mockup uses initials)
- [ ] Add real Vimeo embed links for all videos
- [ ] Add real GHL calendar embed codes (both calendars)
- [ ] Add real GA4 Measurement ID
- [ ] Add real Meta Pixel script
- [ ] Add real Hyros script
- [ ] Add real legal copy (Privacy, Terms, Disclosures)
- [ ] Verify all claims for FTC/regulatory compliance

---

## Tracking & integrations

- **Meta Pixel** — client-side script in `<head>` (placeholder). CAPI server-side events are handled by GHL workflows — nothing to build on the website side.
- **Hyros** — attribution tracking script in `<head>` (placeholder)
- **GA4** — analytics script in `<head>` (placeholder)
- All three go in the root `layout.tsx`

---

## What has NOT been done yet

- No Next.js project scaffolded yet
- No Sanity project created yet
- No PRD written yet

**Recommended next step:** Run `/to-prd` to generate the Product Requirements Document, then scaffold the Next.js project.

---

## Suggested skills for the next session

| Skill | When to use |
|---|---|
| `/to-prd` | Run this first — generates the full PRD from the decisions in this doc and `CONTEXT.md` |
| `/prototype` | If you want to test the qualification flow or any UI before committing to the full build |
| `/tdd` | When building individual components (booking flow, blog, etc.) |
| `/run` | To start the dev server and verify the site visually |
| `/verify` | To confirm a feature works correctly in the browser before marking done |
| `/code-review` | Before any PR or deployment |
