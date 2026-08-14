import type { ScheduleRoute } from '@/lib/booking'

export type GhlCalendarKey = 'free-consult' | 'consult'

type GhlCalendarEmbed = {
  src: string
  iframeId: string
}

// Duplicate closers calendars for the new website (Test Calendars - New Website group).
// Production embed IDs for go-live are in docs/ghl-calendar-widgets.md.
export const GHL_CALENDARS: Record<GhlCalendarKey, GhlCalendarEmbed> = {
  consult: {
    src: 'https://api.leadconnectorhq.com/widget/booking/9L6Yedcg1xZlD5ExaApt',
    iframeId: '1Nv2lPX235JiIMdm8ttX_1786729723440',
  },
  'free-consult': {
    src: 'https://api.leadconnectorhq.com/widget/booking/jLNV5rRri3UXWt5aPTaF',
    iframeId: '1Nv2lPX235JiIMdm8ttX_1786729750775',
  },
}

export const SCHEDULE_ROUTE_CALENDAR: Record<ScheduleRoute, GhlCalendarKey> = {
  '/schedule-a': 'consult',
  '/schedule-b': 'free-consult',
  '/schedule-c': 'free-consult',
}
