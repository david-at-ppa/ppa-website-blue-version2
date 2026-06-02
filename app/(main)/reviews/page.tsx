import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ScrollRevealInit } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Client Reviews — Prime Path Advisory',
  description: 'See what high-income business owners say about working with Prime Path Advisory.',
}

const TESTIMONIALS = [
  {
    quote: 'Prime Path Advisory found $340K in strategies our CPA had missed for three years running. The ROI is absurd. Placeholder copy.',
    name: 'Michael T.',
    title: 'E-commerce founder, $4.2M revenue',
  },
  {
    quote: 'We restructured our entities in Q1 and saved more in year one than we paid the team in three years. Placeholder copy.',
    name: 'Sarah K.',
    title: 'Real estate investor, 22 doors',
  },
  {
    quote: 'The quarterly reviews alone are worth the fee. They stay ahead of every law change before it hits my return. Placeholder copy.',
    name: 'James L.',
    title: 'Agency owner, $2.1M revenue',
  },
  {
    quote: 'I\'ve been with three other advisory firms. None of them were this proactive or this specific. Placeholder copy.',
    name: 'Elena M.',
    title: 'Med-spa operator, multi-location',
  },
  {
    quote: 'We implemented a cost seg study and a defined benefit plan in the same year. Saved $280K. Placeholder copy.',
    name: 'Tom R.',
    title: 'Contractor, $3.8M revenue',
  },
  {
    quote: 'They designed a strategy around our exit plan 18 months out. No other firm thinks that far ahead. Placeholder copy.',
    name: 'Nina P.',
    title: 'SaaS founder, pre-exit',
  },
]

const STATS = [
  { figure: '$2.4M+', label: 'In tax savings delivered' },
  { figure: '94%', label: 'Client retention rate' },
  { figure: '11 days', label: 'Average onboarding time' },
  { figure: '$340K', label: 'Average first-year savings' },
]

function HeroSection() {
  return (
    <section data-reveal aria-labelledby="reviews-heading" className="flex flex-col items-center justify-center min-h-[40vh] text-center px-6 gap-6">
      <div className="max-w-3xl space-y-5">
        <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">Client results</p>
        <h1 id="reviews-heading" className="text-5xl font-semibold tracking-tight">What Our Clients Say</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Real outcomes from business owners who stopped overpaying in taxes. Placeholder copy.
        </p>
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

function TestimonialsSection() {
  return (
    <section data-reveal aria-label="Testimonials" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">Reviews</p>
          <h2 className="text-3xl font-semibold tracking-tight">Client testimonials</h2>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
          {TESTIMONIALS.map(({ quote, name, title }) => (
            <li key={name} className="border border-border rounded-lg p-6 space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-sm">{name}</p>
                <p className="text-xs text-muted-foreground">{title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section data-reveal aria-labelledby="reviews-cta-heading" className="py-24 px-6 text-center border-t border-border">
      <h2 id="reviews-cta-heading" className="text-3xl font-semibold tracking-tight">Ready to see results like these?</h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        Book a strategy call and start your own success story.
      </p>
      <Link href="/book" className={cn(buttonVariants(), 'mt-8')}>
        Book a Call
      </Link>
    </section>
  )
}

export default function Reviews() {
  return (
    <>
      <ScrollRevealInit />
      <HeroSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}
