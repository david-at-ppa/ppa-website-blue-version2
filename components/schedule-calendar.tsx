'use client'

import { useEffect, useState } from 'react'
import { GHL_CALENDARS, type GhlCalendarKey } from '@/lib/ghl-calendars'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

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
  const [isLoaded, setIsLoaded] = useState(false)
  const { src, iframeId } = GHL_CALENDARS[calendar]

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-10">
      <section aria-label={regionLabel} className="w-full">
        <div
          aria-busy={!isLoaded}
          aria-live="polite"
          className="relative min-h-[720px] w-full"
        >
          {!isLoaded ? (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-xl border border-border/50 bg-background px-6 text-center">
              <span className="sr-only">Loading booking calendar</span>
              <Skeleton className="absolute inset-0 rounded-xl" />
              <p className="relative text-sm font-medium text-foreground">
                Loading available times…
              </p>
              <p className="relative text-xs text-muted-foreground">
                This can take a few seconds while we load the calendar.
              </p>
            </div>
          ) : null}
          <iframe
            title={`${title} calendar`}
            src={src}
            id={iframeId}
            onLoad={() => setIsLoaded(true)}
            className={cn(
              'min-h-[720px] w-full border-0 transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            scrolling="no"
          />
        </div>
        <GhlScript />
      </section>
    </div>
  )
}
