import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LARGE_CTA_LABEL, SMALL_CTA_LABEL } from '@/lib/cta-labels'
import { ScrollRevealInit } from '@/components/scroll-reveal'
import { VidalyticsEmbed } from '@/components/vidalytics-embed'
import { GuaranteeSection } from '@/components/sections/guarantee-section'
import { ClientLogosSection } from '@/components/sections/client-logos-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ProcessSection } from '@/components/sections/process-section'
import { FounderSection } from '@/components/sections/founder-section'
import { HomeCtaSection } from '@/components/sections/home-cta-section'

export const metadata: Metadata = {
  title: 'Prime Path Advisory - Tax Strategy for High-Income Earners',
  description:
    'Proactive tax strategy for tech founders, operators, and high-RSU earners making $1M-$10M+. Stop losing 45-52% of your income.',
}

function HeroSection() {
  return (
    <section
      data-reveal
      aria-labelledby="hero-heading"
      className="py-20 lg:py-28 px-6 pb-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.28fr] gap-12 lg:gap-14 items-start">
        <div className="space-y-6 text-center lg:text-left">
          <h1
            id="hero-heading"
            className="font-heading text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-semibold leading-none tracking-tight"
          >
            Save $100k+ on your taxes{' '}
            <span className="text-primary">this year.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
            We help tech founders, operators, and high-RSU earners making $1M-$10M+ a year save on
            taxes. Stop losing 45-52% of your gross income - with a real strategy, designed,
            defensible, and deliberately done by experts.
          </p>
          <div className="flex w-full flex-col items-center gap-3 pt-2 lg:items-stretch">
            <Link
              href="/book"
              className={cn(buttonVariants({ size: 'lg' }), 'w-full')}
            >
              {LARGE_CTA_LABEL}
            </Link>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
              30-minute call · no obligation · audited savings projection
            </p>
          </div>
        </div>

        <div className="space-y-6 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0">
          <VidalyticsEmbed
            embedId="Cw2MFuq5vWpV54b7"
            accountId="UJ6_PCbU"
            className="w-full"
          />
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary text-center lg:text-left">
            David Tran · Founder &amp; CEO
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
      <GuaranteeSection />
      <ClientLogosSection />
      <StatsSection />
      <ProcessSection />
      <FounderSection />
      <HomeCtaSection />
    </>
  )
}
