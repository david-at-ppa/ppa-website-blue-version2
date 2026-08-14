import type { Metadata } from 'next'
import { buttonVariants } from '@/components/ui/button'
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link'
import { cn } from '@/lib/utils'
import { LARGE_CTA_LABEL } from '@/lib/cta-labels'
import { HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'
import { HeritageFounderSection } from '@/components/heritage/heritage-founder-section'
import { HeritageTeamSection } from '@/components/heritage/heritage-team-section'
import { WhySection } from '@/components/sections/why-section'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Meet the team behind Prime Path Advisory - tax strategists for high-income earners.',
}

function CtaSection() {
  return (
    <section
      data-reveal
      aria-labelledby="about-cta-heading"
      className="px-6 py-24 text-center"
    >
      <h2 id="about-cta-heading" className="font-heading text-3xl font-semibold tracking-tight">
        Ready to work with us?
      </h2>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        Book a discovery call and see what proactive tax planning can do for your business.
      </p>
      <SmoothScrollLink
        href={HERITAGE_ASSESSMENT_LINK}
        scrollTargetId={HERITAGE_ASSESSMENT_ID}
        className={cn(buttonVariants({ variant: 'heritage', size: 'lg' }), 'mt-8')}
      >
        {LARGE_CTA_LABEL}
      </SmoothScrollLink>
    </section>
  )
}

export default function AboutUs() {
  return (
    <>
      <HeritageFounderSection />
      <HeritageTeamSection />
      <WhySection />
      <CtaSection />
    </>
  )
}
