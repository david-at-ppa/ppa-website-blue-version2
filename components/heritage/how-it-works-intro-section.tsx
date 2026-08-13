import { HOW_IT_WORKS_INTRO } from '@/lib/heritage-content'

export function HowItWorksIntroSection() {
  return (
    <section aria-labelledby="how-it-works-intro-heading" className="px-6 py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <h1
          id="how-it-works-intro-heading"
          data-reveal
          className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
        >
          {HOW_IT_WORKS_INTRO.heading}
        </h1>
        <div data-reveal data-reveal-delay="1" className="space-y-6 leading-relaxed text-muted-foreground">
          {HOW_IT_WORKS_INTRO.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
