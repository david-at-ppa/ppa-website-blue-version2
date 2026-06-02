import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ScrollRevealInit } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'About — Prime Path Advisory',
  description: 'Meet the team behind Prime Path Advisory — tax strategists for high-income earners.',
}

function FounderSection() {
  return (
    <section data-reveal aria-label="Founder" className="py-24 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div
          role="img"
          aria-label="Founder photo placeholder"
          className="aspect-square bg-muted rounded-lg flex items-center justify-center"
        >
          <span className="text-muted-foreground text-sm">Photo — coming soon</span>
        </div>
        <div className="space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">Founder</p>
          <h2 className="text-3xl font-semibold tracking-tight">David Tran</h2>
          <p className="text-muted-foreground leading-relaxed">
            David founded Prime Path Advisory after seeing too many high-income business owners leave six figures on the table every year. He specialises in proactive tax strategy for entrepreneurs earning $1M+. Placeholder bio copy.
          </p>
        </div>
      </div>
    </section>
  )
}

const TEAM = [
  { name: 'Joseph Alexander', role: 'Senior Tax Strategist' },
  { name: 'Lance Armour', role: 'Wealth Planning Advisor' },
  { name: 'Ahmed R', role: 'Tax Research Analyst' },
]

function TeamSection() {
  return (
    <section data-reveal aria-label="Our team" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">The team</p>
          <h2 className="text-3xl font-semibold tracking-tight">People behind the strategy</h2>
        </div>
        <ul className="grid md:grid-cols-3 gap-10 list-none">
          {TEAM.map(({ name, role }) => (
            <li key={name} className="space-y-4">
              <div
                role="img"
                aria-label={`${name} photo placeholder`}
                className="aspect-square bg-muted rounded-lg flex items-center justify-center"
              >
                <span className="text-muted-foreground text-sm">Photo — coming soon</span>
              </div>
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function WhySection() {
  return (
    <section data-reveal aria-label="Why choose PPA" className="py-24 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[#0d7c54]">Why us</p>
          <h2 className="text-3xl font-semibold tracking-tight">Why choose Prime Path Advisory</h2>
        </div>
        <div
          role="img"
          aria-label="Video placeholder"
          className="w-full aspect-video bg-muted rounded-lg flex items-center justify-center"
        >
          <span className="text-muted-foreground text-sm">Vimeo embed — coming soon</span>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center">
          We are not a tax prep firm. We are a strategy firm. Everything we do is designed to keep more money in your hands before the year closes. Placeholder copy.
        </p>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section data-reveal aria-labelledby="about-cta-heading" className="py-24 px-6 text-center">
      <h2 id="about-cta-heading" className="text-3xl font-semibold tracking-tight">Ready to work with us?</h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        Book a strategy call and see what proactive tax planning can do for your business.
      </p>
      <Link href="/book" className={cn(buttonVariants(), 'mt-8')}>
        Book a Call
      </Link>
    </section>
  )
}

export default function About() {
  return (
    <>
      <ScrollRevealInit />
      <FounderSection />
      <TeamSection />
      <WhySection />
      <CtaSection />
    </>
  )
}
