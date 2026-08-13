'use client'

import Link from 'next/link'
import { HeritageCheckIcon } from '@/components/heritage/heritage-icons'
import { VidalyticsEmbed } from '@/components/vidalytics-embed'

const ACCOUNT_ID = 'UJ6_PCbU'

const PRIMARY_VIDEO = {
  embedId: 'hp9ccM_x28NGicwA',
  title: 'Watch this before your call',
} as const

const PREP_VIDEOS = [
  {
    title: 'What happens on the call',
    description:
      'A quick overview of how the 30 minutes are structured and what you can expect from our team.',
    embedId: '3EA0sYnUj4pJ9AkK',
  },
  {
    title: 'What to bring',
    description:
      'The documents and details that help us assess your situation and make the conversation as useful as possible.',
    embedId: '9ENFo7wy7kIwKj4S',
  },
] as const

const BEFORE_WE_TALK_FAQ = [
  {
    question: 'Is this a sales call?',
    answer:
      "No. It's a 30-minute conversation to look at your situation and see if there's a real opportunity worth exploring. If there's a fit, we'll explain what working together looks like. If there isn't, you'll still leave with clarity.",
  },
  {
    question: "What if this doesn't work for me?",
    answer:
      "It might not. Some situations don't have meaningful opportunities to save, and if that's the case we'll tell you directly. We'd rather lose your business than waste your time on a strategy that doesn't move the needle.",
  },
  {
    question: 'How much work is this on my end?',
    answer:
      'Very little. This is a done-for-you advisory service and about 95% of the work is handled by our team. Your job is to make decisions. Our job is to execute.',
  },
] as const

export function BookingConfirmedContent() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20">
      <section className="w-full max-w-2xl text-center">
        <div
          className="mx-auto mb-4 flex size-10 items-center justify-center rounded-full bg-[var(--heritage-green)] text-[var(--heritage-green-foreground)]"
          aria-hidden="true"
        >
          <HeritageCheckIcon className="size-5" />
        </div>

        <h1 className="font-heading mb-4 text-3xl font-semibold">Your call is confirmed</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Your confirmation and calendar invite are in your inbox. Watch the short video below so
          you get the most out of your call.
        </p>

        <div className="mb-12 text-left">
          <h2 className="font-heading mb-4 text-center text-xl font-semibold">
            {PRIMARY_VIDEO.title}
          </h2>
          <VidalyticsEmbed
            embedId={PRIMARY_VIDEO.embedId}
            accountId={ACCOUNT_ID}
            className="w-full max-w-full min-w-0"
          />
        </div>

        <div className="space-y-12 border-t border-border pt-12 text-left">
          {PREP_VIDEOS.map((video, index) => (
            <section
              key={video.embedId}
              aria-labelledby={`prep-video-${index}-heading`}
              className={index > 0 ? 'border-t border-border pt-12' : undefined}
            >
              <h2
                id={`prep-video-${index}-heading`}
                className="font-heading mb-3 text-center text-xl font-semibold"
              >
                {video.title}
              </h2>
              <p className="mb-6 text-center text-base leading-relaxed text-muted-foreground">
                {video.description}
              </p>
              <VidalyticsEmbed
                embedId={video.embedId}
                accountId={ACCOUNT_ID}
                autoplay={false}
                className="w-full max-w-full min-w-0"
              />
            </section>
          ))}

          <section aria-labelledby="before-we-talk-heading" className="border-t border-border pt-12">
            <h2
              id="before-we-talk-heading"
              className="font-heading mb-6 text-center text-lg font-semibold text-foreground/90"
            >
              Before we talk
            </h2>
            <dl className="space-y-6">
              {BEFORE_WE_TALK_FAQ.map((item) => (
                <div key={item.question}>
                  <dt className="font-heading text-base font-semibold">{item.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-center">
              <Link
                href="/faqs"
                className="text-sm text-primary underline-offset-4 hover:underline md:text-base"
              >
                More questions? Read our full FAQ
              </Link>
            </p>
          </section>

          <section
            aria-labelledby="closing-heading"
            className="border-t border-border pt-12 text-center"
          >
            <h2 id="closing-heading" className="font-heading mb-4 text-xl font-semibold">
              That&apos;s it, you&apos;re set
            </h2>
            <p className="text-lg text-muted-foreground">
              You&apos;ll get reminder texts and emails before your call. If anything comes up, just
              reply to one of them.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
