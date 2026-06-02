export type BookingAnswer = 'a' | 'b' | 'c' | 'd'
export type BookingOutcome = 'disqualified' | 'free-consult' | 'consult'

export function getBookingOutcome(answer: BookingAnswer): BookingOutcome {
  if (answer === 'a') return 'disqualified'
  if (answer === 'b') return 'free-consult'
  return 'consult'
}
