'use client'

import { useEffect } from 'react'
import { GHL_CALENDARS, type GhlCalendarKey } from '@/lib/ghl-calendars'

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
  calendar,
  title,
  regionLabel,
}: {
  calendar: GhlCalendarKey
  title: string
  regionLabel: string
}) {
  const { src, iframeId } = GHL_CALENDARS[calendar]

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-10">
      <section aria-label={regionLabel} className="w-full">
        <iframe
          title={`${title} calendar`}
          src={src}
          id={iframeId}
          className="min-h-[720px] w-full border-0"
          scrolling="no"
        />
        <GhlScript />
      </section>
    </div>
  )
}
