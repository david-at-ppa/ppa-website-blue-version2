import type { Metadata } from 'next'
import BookingFlow from '@/components/booking-flow'

export const metadata: Metadata = {
  title: 'Book a Strategy Call | Prime Path Advisory',
  description: 'Find out if you qualify for a complimentary tax strategy consultation.',
}

export default function BookPage() {
  return <BookingFlow />
}
