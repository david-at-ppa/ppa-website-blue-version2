'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { HeritageCheckIcon, HeritageChevronIcon } from '@/components/heritage/heritage-icons'
import { HERITAGE_INCOME_OPTIONS } from '@/lib/heritage-content'
import { getScheduleRoute, type BookingAnswer } from '@/lib/booking'

const ASSESSMENT_BULLETS = [
  'Typical savings of $150K-$350K+ per year',
  'Selective and confidential - $1M+ earners only',
  'No obligation, and nothing to prepare',
] as const

export function HeritageIncomeAssessmentSection() {
  const router = useRouter()
  const [disqualified, setDisqualified] = useState(false)

  function handleAnswer(answer: BookingAnswer) {
    const route = getScheduleRoute(answer)
    if (!route) {
      setDisqualified(true)
      return
    }
    router.push(route)
  }

  return (
    <section
      id="assessment"
      aria-labelledby="assessment-heading"
      className="bg-background px-6 pb-16 pt-8 lg:pb-24 lg:pt-12"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal className="min-w-0 space-y-6 text-center lg:text-left">
          <p className="inline-flex items-center gap-3 font-sans text-xs font-medium uppercase tracking-widest text-primary">
            <span
              className="h-px w-7 bg-gradient-to-r from-primary to-transparent"
              aria-hidden="true"
            />
            Free 30-minute strategy call
          </p>
          <h2
            id="assessment-heading"
            className="font-heading text-4xl font-semibold tracking-tight md:text-5xl"
          >
            One question. Then pick a time.
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Answer one question to see if we&apos;re a fit. If we are, you&apos;ll book a 30-minute call
            with our team to walk through where your current setup is costing you.
          </p>
          <ul className="mx-auto flex max-w-xl flex-col gap-3 text-left lg:mx-0">
            {ASSESSMENT_BULLETS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <HeritageCheckIcon className="mt-0.5 size-5 shrink-0 text-[var(--heritage-green)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          data-reveal-delay="1"
          className="mx-auto w-full min-w-0 max-w-lg rounded-[22px] border border-border bg-card p-6 shadow-sm sm:p-8 lg:mx-0 lg:max-w-none"
        >
          {disqualified ? (
            <section aria-label="not qualified">
              <h3 className="font-heading text-2xl font-normal tracking-tight">
                We&apos;re not the right fit yet.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our strategies need $1M+ in annual income to be worth the setup. Come back when you cross
                that line - we&apos;d like to help then.
              </p>
            </section>
          ) : (
            <>
              <h3 className="font-heading text-2xl font-normal tracking-tight">
                What is your annual income?
              </h3>
              <ul className="mt-6 grid list-none gap-3">
                {HERITAGE_INCOME_OPTIONS.map(({ label, answer }) => (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => handleAnswer(answer)}
                      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-border bg-secondary px-5 py-4 text-left text-[15.5px] font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      <span>{label}</span>
                      <HeritageChevronIcon className="size-[18px] shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Your answer stays confidential.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
