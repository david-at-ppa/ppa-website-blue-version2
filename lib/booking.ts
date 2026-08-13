export type BookingAnswer = 'a' | 'b' | 'c' | 'd'
export type BookingOutcome = 'disqualified' | 'free-consult' | 'consult'
export type ScheduleRoute = '/schedule-a' | '/schedule-b' | '/schedule-c'

export const SCHEDULE_ROUTES: readonly ScheduleRoute[] = [
  '/schedule-a',
  '/schedule-b',
  '/schedule-c',
]

export function isScheduleRoute(pathname: string): pathname is ScheduleRoute {
  return (SCHEDULE_ROUTES as readonly string[]).includes(pathname)
}

export function getBookingOutcome(answer: BookingAnswer): BookingOutcome {
  if (answer === 'a') return 'disqualified'
  if (answer === 'b') return 'free-consult'
  return 'consult'
}

export function getScheduleRoute(answer: BookingAnswer): ScheduleRoute | null {
  if (answer === 'a') return null
  if (answer === 'b') return '/schedule-a'
  if (answer === 'c') return '/schedule-b'
  return '/schedule-c'
}
