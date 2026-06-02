import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ScrollRevealInit } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Prime Path Advisory — Tax Strategy for High-Income Earners',
  description: 'Proactive tax strategy for business owners earning $1M+. Keep more of what you earn.',
}

function HeroSection() {
  return (
    <section data-reveal aria-labelledby="hero-heading" className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 gap-8">
      <div className="max-w-3xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">Tax strategy for the top 1%</p>
        <h1 id="hero-heading" className="text-5xl font-semibold tracking-tight">Keep More of What You Earn</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Proactive tax strategy for business owners earning $1M+. Placeholder copy.
        </p>
        <Link href="/book" className={cn(buttonVariants(), 'mt-2')}>
          Book a Call
        </Link>
      </div>
      <div
        role="img"
        aria-label="Video placeholder"
        className="w-full max-w-2xl aspect-video bg-muted rounded-lg flex items-center justify-center"
      >
        <span className="text-muted-foreground text-sm">Vimeo embed — coming soon</span>
      </div>
    </section>
  )
}

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery call', body: 'We map your current structure and identify your biggest tax exposures. Placeholder copy.' },
  { step: '02', title: 'Strategy build', body: 'We design a multi-year tax plan tailored to your business model. Placeholder copy.' },
  { step: '03', title: 'Implementation', body: 'We work alongside your CPA to execute every strategy with precision. Placeholder copy.' },
  { step: '04', title: 'Ongoing review', body: 'Quarterly check-ins ensure the strategy stays ahead of tax law changes. Placeholder copy.' },
]

const STATS = [
  { figure: '$2.4M+', label: 'In tax savings delivered' },
  { figure: '94%', label: 'Client retention rate' },
  { figure: '11 days', label: 'Average onboarding time' },
  { figure: '$1M+', label: 'Minimum client revenue' },
]

function ProcessSection() {
  return (
    <section data-reveal aria-label="Our process" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">How it works</p>
          <h2 className="text-3xl font-semibold tracking-tight">Our process</h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-10 list-none">
          {PROCESS_STEPS.map(({ step, title, body }) => (
            <li key={step} className="space-y-3">
              <p className="font-mono text-xs text-[#0d7c54]">{step}</p>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section data-reveal aria-label="Client outcomes" className="py-20 px-6 border-y border-border">
      <ul className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 list-none">
        {STATS.map(({ figure, label }) => (
          <li key={label} className="text-center space-y-2">
            <p className="text-4xl font-semibold tracking-tight text-[#0d7c54]">{figure}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const FAQS = [
  {
    q: 'Who is Prime Path Advisory for?',
    a: 'Business owners and entrepreneurs with $1M+ in annual revenue who want to stop overpaying in taxes. Placeholder copy.',
  },
  {
    q: 'How is this different from hiring a CPA?',
    a: 'CPAs file your taxes. We design the strategy before the year ends so there is nothing left to find on the return. Placeholder copy.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Most clients identify six-figure savings opportunities within the first 30 days. Placeholder copy.',
  },
  {
    q: 'What does engagement look like?',
    a: 'A dedicated advisor, quarterly strategy reviews, and direct access whenever you need it. Placeholder copy.',
  },
]

function FaqSection() {
  return (
    <section data-reveal aria-label="Frequently asked questions" className="py-24 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">FAQ</p>
          <h2 className="text-3xl font-semibold tracking-tight">Common questions</h2>
        </div>
        <dl className="space-y-10">
          {FAQS.map(({ q, a }) => (
            <div key={q}>
              <dt>
                <h3 className="text-base font-semibold">{q}</h3>
              </dt>
              <dd className="mt-2 text-muted-foreground text-sm leading-relaxed">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section data-reveal aria-labelledby="cta-heading" className="py-24 px-6 text-center">
      <h2 id="cta-heading" className="text-3xl font-semibold tracking-tight">Ready to keep more of what you earn?</h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        Schedule a strategy call and see what proactive tax planning can do for your business.
      </p>
      <Link href="/book" className={cn(buttonVariants(), 'mt-8')}>
        Book a Strategy Call
      </Link>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <HeroSection />
      <StatsSection />
      <ProcessSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
