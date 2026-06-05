import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LARGE_CTA_LABEL } from '@/lib/cta-labels'
import { FounderSection } from '@/components/sections/founder-section'
import { WhySection } from '@/components/sections/why-section'

export const metadata: Metadata = {
  title: 'About - Prime Path Advisory',
  description: 'Meet the team behind Prime Path Advisory - tax strategists for high-income earners.',
}

function CtaSection() {
  return (
    <section data-reveal aria-labelledby="about-cta-heading" className="py-24 px-6 text-center">
      <h2 id="about-cta-heading" className="font-heading text-3xl font-semibold tracking-tight">
        Ready to work with us?
      </h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        Book a discovery call and see what proactive tax planning can do for your business.
      </p>
      <Link href="/book" className={cn(buttonVariants({ size: 'lg' }), 'mt-8')}>
        {LARGE_CTA_LABEL}
      </Link>
    </section>
  )
}

export default function About() {
  return (
    <>
      <FounderSection />
      <WhySection />
      <CtaSection />
    </>
  )
}
