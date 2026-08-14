import type { ScheduleRoute } from '@/lib/booking'

export type GhlCalendarKey = 'free-consult' | 'consult'

type GhlCalendarEmbed = {
  src: string
  iframeId: string
}

// Production embed IDs from docs/ghl-calendar-widgets.md
export const GHL_CALENDARS: Record<GhlCalendarKey, GhlCalendarEmbed> = {
  'free-consult': {
    src: 'https://api.leadconnectorhq.com/widget/booking/y0C0fmCrsbf0kJpBIc7B',
    iframeId: 'AKBNcJbVOUtg20XpUOKA_1780605077371',
  },
  consult: {
    src: 'https://api.leadconnectorhq.com/widget/booking/xzowzy5hi2CKDCENA4CS',
    iframeId: 'AKBNcJbVOUtg20XpUOKA_1780605264420',
  },
}

export const SCHEDULE_ROUTE_CALENDAR: Record<ScheduleRoute, GhlCalendarKey> = {
  '/schedule-a': 'free-consult',
  '/schedule-b': 'consult',
  '/schedule-c': 'consult',
}
