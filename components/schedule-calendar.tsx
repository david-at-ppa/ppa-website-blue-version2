'use client'

import { useEffect } from 'react'

// Testing: all schedule routes use JP's personal calendar so test bookings
// don't disturb closers. Production calendar IDs are in docs/ghl-calendar-widgets.md.
const GHL_CALENDAR_SRC =
  'https://api.leadconnectorhq.com/widget/booking/2AHs8LOXnqUN4v40s0ki'
const GHL_CALENDAR_IFRAME_ID = '2AHs8LOXnqUN4v40s0ki_1780695434810'

function GhlScript() {
  useEffect(() => {
    if (document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) return
    const s = document.createElement('script')
    s.src = 'https://link.msgsndr.com/js/form_embed.js'
    s.type = 'text/javascript'
    document.body.appendChild(s)
  }, [])
  return null
}

export function ScheduleCalendar({
  title,
  regionLabel,
}: {
  title: string
  regionLabel: string
}) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-16">
      <section aria-label={regionLabel} className="w-full">
        <h1 className="mb-8 text-center font-heading text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>
        <iframe
          title={`${title} calendar`}
          src={GHL_CALENDAR_SRC}
          id={GHL_CALENDAR_IFRAME_ID}
          className="h-[700px] w-full border-0"
          scrolling="no"
        />
        <GhlScript />
      </section>
    </div>
  )
}
