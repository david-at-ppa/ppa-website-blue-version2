import type { Metadata } from 'next'
import { ScheduleCalendar } from '@/components/schedule-calendar'

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Book your tax strategy consultation with Prime Path Advisory.',
}

export default function ScheduleAPage() {
  return (
    <ScheduleCalendar
      calendar="consult"
      title="Tax Strategy Consultation"
      regionLabel="tax strategy consultation"
    />
  )
}
