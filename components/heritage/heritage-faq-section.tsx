import { HERITAGE_FAQ, HERITAGE_FAQ_INTRO } from '@/lib/heritage-content'
import { HeritageFaqAccordion } from '@/components/heritage/heritage-faq-accordion'

export function HeritageFaqSection({ pageHeading = false }: { pageHeading?: boolean }) {
  const HeadingTag = pageHeading ? 'h1' : 'h2'

  return (
    <section aria-labelledby="faq-heading" className="bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl space-y-10">
        <header data-reveal className="space-y-3 text-center">
          <HeadingTag
            id="faq-heading"
            className="font-heading text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {HERITAGE_FAQ_INTRO.heading}
          </HeadingTag>
          <p className="text-lg text-muted-foreground">{HERITAGE_FAQ_INTRO.subheading}</p>
        </header>

        <div data-reveal data-reveal-delay="1">
          <HeritageFaqAccordion items={HERITAGE_FAQ} />
        </div>
      </div>
    </section>
  )
}
