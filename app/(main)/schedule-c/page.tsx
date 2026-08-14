import type { Metadata } from 'next'
import { ScheduleCalendar } from '@/components/schedule-calendar'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Book your free tax strategy consultation with Prime Path Advisory.',
}

export default function ScheduleCPage() {
  return (
    <ScheduleCalendar
      calendar="free-consult"
      title="Free Tax Strategy Consultation"
      regionLabel="free tax strategy consultation"
    />
  )
}
