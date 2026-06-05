import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ScrollRevealInit } from '@/components/scroll-reveal'
import { VidalyticsEmbed } from '@/components/vidalytics-embed'

export const metadata: Metadata = {
  title: 'Prime Path Advisory — Tax Strategy for High-Income Earners',
  description:
    'Proactive tax strategy for tech founders, operators, and high-RSU earners making $1M–$10M+. Stop losing 45–52% of your income.',
}

function HeroSection() {
  return (
    <section
      data-reveal
      aria-labelledby="hero-heading"
      className="py-32 px-6 text-center"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">
          12 client spots open · Q2 2026
        </p>
        <h1
          id="hero-heading"
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight"
        >
          Save $100k+ on your taxes{' '}
          <span className="text-[#B08628]">this year.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We help tech founders, operators, and high-RSU earners making $1M–$10M+ a year save on
          taxes. Stop losing 45–52% of your gross income — with a real strategy, designed,
          defensible, and deliberately done by experts.
        </p>
        <div className="flex flex-col items-center gap-3 pt-2">
          <Link href="/book" className={cn(buttonVariants({ size: 'lg' }))}>
            Book your free strategy call →
          </Link>
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            30-minute call · no obligation · audited savings projection
          </p>
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section data-reveal aria-label="Founder video" className="px-6 pb-20">
      <div className="max-w-3xl mx-auto space-y-6">
        <VidalyticsEmbed embedId="Cw2MFuq5vWpV54b7" accountId="UJ6_PCbU" />
        <blockquote className="text-center">
          <p className="text-muted-foreground text-sm italic">
            "Most advisors react in April. We plan in October — that's where the savings live."
          </p>
          <footer className="mt-2 font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">
            — David Tran · Founder &amp; CEO
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

function GuaranteeSection() {
  return (
    <section data-reveal aria-labelledby="guarantee-heading" className="py-6 px-6">
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-12 text-center space-y-4">
        <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">Our Guarantee</p>
        <h2
          id="guarantee-heading"
          className="font-heading text-3xl md:text-4xl font-semibold tracking-tight"
        >
          No tax savings? Pay nothing.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
          If you don't get at least 3× our fee in year one, you walk away with our service — 100%
          free.
        </p>
        <Link
          href="/disclosures"
          className="inline-block font-sans text-xs font-medium uppercase tracking-widest text-[#B08628] hover:underline"
        >
          Read the fine print →
        </Link>
      </div>
    </section>
  )
}

const CLIENT_LOGOS = ['Stripe', 'Meta', 'Google', 'Anthropic', 'OpenAI', 'Airbnb', 'Coinbase']

function ClientLogosSection() {
  return (
    <section
      data-reveal
      aria-label="Companies our clients work at"
      className="py-16 px-6 border-y border-border"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <p className="text-center font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Our clients work at
        </p>
        <ul className="flex items-center justify-center flex-wrap gap-8 md:gap-12 list-none">
          {CLIENT_LOGOS.map((name) => (
            <li
              key={name}
              className="font-semibold text-sm tracking-wide text-muted-foreground/50"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const STATS = [
  { figure: '$47M+', label: 'saved across 140+ clients', sub: 'Verified by independent CPA' },
  { figure: '$312k', label: 'avg. annual savings', sub: "In client's first year" },
  { figure: '4.9★', label: '164 client reviews', sub: 'Google + Clutch' },
  { figure: '8 yrs', label: 'in private practice', sub: 'Est. 2024 · Los Angeles' },
]

function StatsSection() {
  return (
    <section data-reveal aria-label="Client outcomes" className="py-24 px-6">
      <ul className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 list-none">
        {STATS.map(({ figure, label, sub }) => (
          <li key={label} className="text-center space-y-1">
            <p className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-[#B08628]">
              {figure}
            </p>
            <p className="text-sm text-foreground">{label}</p>
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-muted-foreground">{sub}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const WHY_PILLARS = [
  {
    num: '01',
    title: 'Proactive, not reactive',
    body: 'Strategy designed throughout the year — not summarized in April. By the time most clients file, the savings are already locked in.',
  },
  {
    num: '02',
    title: 'Built for W-2 earners',
    body: 'The myth that high-W-2 earners have no options is the most expensive belief in personal finance. Every strategy we deploy is legal, documented, and IRS-defensible.',
  },
  {
    num: '03',
    title: 'One team of experts',
    body: 'Tax attorneys, CPAs, and wealth strategists working from the same plan — not against each other.',
  },
]

function WhySection() {
  return (
    <section
      data-reveal
      aria-labelledby="why-heading"
      className="py-24 px-6 bg-card"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">
            Our approach
          </p>
          <h2
            id="why-heading"
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            If you earn $1M+,<br />
            you're <span className="text-[#B08628]">overpaying.</span><br />
            We fix that.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most high-earning professionals have a great accountant and a terrible tax outcome. The
            reason is structural: compliance and strategy are different jobs, and your CPA was hired
            to do the first one. We do the second — proactively, year-round, with a team built
            specifically for high-income W-2 earners.
          </p>
        </div>
        <ol className="space-y-10 list-none">
          {WHY_PILLARS.map(({ num, title, body }) => (
            <li key={num} className="space-y-2">
              <p className="font-sans text-xs font-medium text-[#B08628]">{num}</p>
              <h3 className="font-heading font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const PROCESS_STEPS = [
  {
    num: '01',
    phase: 'Audit',
    title: 'Diagnostic',
    body: 'Complete review of your current position, returns, and entity structure. We quantify the savings on the table — in dollars — before you commit to anything.',
  },
  {
    num: '02',
    phase: 'Design',
    title: 'Strategy',
    body: 'Our advisory team designs a coordinated multi-year plan. Every strategy is selected for compatibility, audit defensibility, and compounding effect over time.',
  },
  {
    num: '03',
    phase: 'Implement',
    title: 'Execution',
    body: 'Entity formation, qualified plans, transactional structuring, election filings — handled end-to-end. Every step documented to a standard that protects you for a decade.',
  },
  {
    num: '04',
    phase: 'Optimize',
    title: 'Ongoing',
    body: "Tax law evolves; so does your income. Quarterly check-ins, midyear projections, and full annual re-strategy keep your plan compounding for as long as we're engaged.",
  },
]

function ProcessSection() {
  return (
    <section data-reveal aria-labelledby="process-heading" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">
            How it works
          </p>
          <h2
            id="process-heading"
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Four steps. One outcome:{' '}
            <span className="text-[#B08628]">you stop overpaying.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Diagnose. Design. Implement. Optimize. Every step is built around your specific income,
            equity, and residency — not a template.
          </p>
        </div>
        <ol className="grid md:grid-cols-2 gap-6 list-none">
          {PROCESS_STEPS.map(({ num, phase, title, body }) => (
            <li key={num} className="space-y-3 border border-border rounded-lg p-8">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs font-medium text-[#B08628]">{num}</span>
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {phase}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section
      data-reveal
      aria-labelledby="founder-heading"
      className="py-24 px-6 bg-card"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">Founder</p>
          <h2
            id="founder-heading"
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Why I built{' '}
            <span className="text-[#B08628]">Prime Path.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I spent a decade as a senior software engineer at Uber watching colleagues — people
              earning $1M and well into seven figures — hand a third of their income to the IRS and
              never question whether it had to be that way.
            </p>
            <p>
              So I went deep on the tax code. Treated it like an engineering problem: predictable
              inputs, optimizable outputs. The strategies that came out of that work are now deployed
              across every Prime Path engagement — and they've kept hundreds of millions of dollars
              in the hands of the people who earned them.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="border border-border rounded-lg p-8 space-y-6">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">
              David Tran · Founder &amp; CEO
            </p>
            <dl className="space-y-4">
              <div>
                <dt className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Background
                </dt>
                <dd className="mt-1 text-sm">Sr. Engineer, Uber</dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Credentials
                </dt>
                <dd className="mt-1 text-sm">EA · Tax Strategist</dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Founded
                </dt>
                <dd className="mt-1 text-sm">2023</dd>
              </div>
            </dl>
          </div>
          <blockquote className="border-l-2 border-[#B08628] pl-6">
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              "Most advisors react in April. We plan in October — that's where the savings live."
            </p>
            <footer className="mt-3 font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">
              — David Tran · Founder &amp; CEO
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section
      data-reveal
      aria-labelledby="cta-heading"
      className="py-32 px-6 text-center bg-[#111111] text-white"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#B08628]">Get started</p>
        <h2
          id="cta-heading"
          className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
        >
          Stop overpaying.<br />
          <span className="text-[#B08628]">Start optimizing.</span>
        </h2>
        <p className="text-white/60 leading-relaxed">
          Book a free 30-minute strategy call with a senior advisor. We'll quantify what your
          current position is costing you and outline the path forward — whether or not you choose
          to engage us.
        </p>
        <div className="flex flex-col items-center gap-3 pt-2">
          <Link
            href="/book"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-white text-foreground hover:bg-white/90'
            )}
          >
            Book your strategy call →
          </Link>
          <p className="font-sans text-xs text-white/50">
            ✓ No obligation &nbsp;·&nbsp; ✓ Senior advisor only &nbsp;·&nbsp; ✓ Fully confidential
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <HeroSection />
      <VideoSection />
      <GuaranteeSection />
      <ClientLogosSection />
      <StatsSection />
      <WhySection />
      <ProcessSection />
      <FounderSection />
      <CtaSection />
    </>
  )
}
