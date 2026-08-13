import { buttonVariants } from '@/components/ui/button'
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link'
import { cn } from '@/lib/utils'
import { HERITAGE_ASSESSMENT_LINK, HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'
import { VidalyticsEmbed } from '@/components/vidalytics-embed'
import { HeritageHomeSections } from '@/components/heritage/heritage-home-sections'
import { HeritageIncomeAssessmentSection } from '@/components/heritage/heritage-income-assessment-section'

function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-background px-6 py-20 lg:py-28"
    >
      <div
        className="heritage-hero-grid pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)] lg:gap-14">
        <div data-reveal className="min-w-0 space-y-6 text-center lg:text-left">
          <h1
            id="hero-heading"
            className="font-heading text-[2.625rem] font-semibold leading-[1.1] tracking-tight text-balance break-words sm:text-5xl sm:leading-none md:text-6xl lg:text-6xl xl:text-7xl"
          >
            You earn $1M+. Your CPA files.{' '}
            <span className="text-primary">Nobody plans.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
            Year-round tax strategy for founders, executives, and high-RSU earners making $1M+.
            Designed, implemented, and filed by our team - not a PDF of ideas you have to go execute
            yourself.
          </p>
          <div className="flex w-full flex-col items-center gap-3 pt-2 lg:items-stretch">
            <SmoothScrollLink
              href={HERITAGE_ASSESSMENT_LINK}
              scrollTargetId={HERITAGE_ASSESSMENT_ID}
              className={cn(buttonVariants({ variant: 'heritage', size: 'lg' }), 'w-full')}
            >
              Book your free 30-minute strategy call →
            </SmoothScrollLink>
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
              30-minute call · No obligation · Nothing to prepare
            </p>
          </div>
        </div>

        <div
          data-reveal
          data-reveal-delay="1"
          className="mx-auto w-full min-w-0 max-w-xl space-y-6 lg:mx-0 lg:max-w-none"
        >
          <VidalyticsEmbed
            embedId="Cw2MFuq5vWpV54b7"
            accountId="UJ6_PCbU"
            className="w-full max-w-full min-w-0"
          />
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary text-center lg:text-left">
            David Tran · Founder &amp; CEO
          </p>
        </div>
      </div>
    </section>
  )
}

export function HeritageHome() {
  return (
    <>
      <HeroSection />
      <HeritageIncomeAssessmentSection />
      <HeritageHomeSections />
    </>
  )
}
