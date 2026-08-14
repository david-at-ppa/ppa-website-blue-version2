import type { Metadata } from 'next'
import { BookingConfirmedContent } from '@/components/booking-confirmed/booking-confirmed-content'

export const metadata: Metadata = {
  title: "You're Booked",
  description: 'Your strategy call is booked. Here is what to expect next.',
  robots: {
    index: false,
  },
}

export default function BookingConfirmedPage() {
  return <BookingConfirmedContent />
}
