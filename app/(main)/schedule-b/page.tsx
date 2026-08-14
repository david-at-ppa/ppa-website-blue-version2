import type { Metadata } from 'next'
import { ScheduleCalendar } from '@/components/schedule-calendar'

export const metadata: Metadata = {
  title: 'Free Tax Strategy Consultation | Prime Path Advisory',
  description: 'Book your free tax strategy consultation with Prime Path Advisory.',
}

export default function ScheduleBPage() {
  return (
    <ScheduleCalendar
      calendar="free-consult"
      title="Free Tax Strategy Consultation"
      regionLabel="free tax strategy consultation"
    />
  )
}
