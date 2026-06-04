import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ScrollRevealInit } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Services — Prime Path Advisory',
  description: 'Tax strategy services for high-income business owners — proactive planning, entity structuring, and more.',
}

const SERVICES = [
  {
    title: 'Proactive Tax Planning',
    body: 'We design a forward-looking tax strategy before year-end so there are no surprises on your return. Placeholder copy.',
  },
  {
    title: 'Entity Structuring',
    body: 'The right business structure can save six figures annually. We audit your current setup and recommend changes. Placeholder copy.',
  },
  {
    title: 'Real Estate Tax Strategy',
    body: 'From cost segregation to 1031 exchanges, we ensure your real estate holdings are fully tax-efficient. Placeholder copy.',
  },
  {
    title: 'Retirement & Wealth Planning',
    body: 'We integrate tax-advantaged retirement vehicles into your broader wealth strategy. Placeholder copy.',
  },
]

function HeroSection() {
  return (
    <section data-reveal aria-labelledby="services-heading" className="flex flex-col items-center justify-center min-h-[50vh] text-center px-6 gap-8">
      <div className="max-w-3xl space-y-6">
        <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">What we do</p>
        <h1 id="services-heading" className="text-5xl font-semibold tracking-tight">Tax Strategy That Pays For Itself</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Comprehensive tax strategy for business owners earning $1M+. Placeholder copy.
        </p>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section data-reveal aria-label="Our services" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">Services</p>
          <h2 className="text-3xl font-semibold tracking-tight">What we offer</h2>
        </div>
        <ul className="grid md:grid-cols-2 gap-12 list-none">
          {SERVICES.map(({ title, body }) => (
            <li key={title} className="space-y-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              <div
                role="img"
                aria-label="Video placeholder"
                className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">Vidalytics embed — coming soon</span>
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
    <section data-reveal aria-labelledby="services-cta-heading" className="py-24 px-6 text-center">
      <h2 id="services-cta-heading" className="text-3xl font-semibold tracking-tight">See what we can save you</h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        Book a strategy call and find out exactly where you're overpaying.
      </p>
      <Link href="/book" className={cn(buttonVariants(), 'mt-8')}>
        Book a Call
      </Link>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <ScrollRevealInit />
      <HeroSection />
      <ServicesSection />
      <CtaSection />
    </>
  )
}
