import { render } from '@testing-library/react'
import { ScheduleCalendar } from '@/components/schedule-calendar'

describe('ScheduleCalendar layout', () => {
  it('uses a wide container so the GHL widget can render horizontally', () => {
    const { container } = render(
      <ScheduleCalendar title="Free Tax Strategy Consultation" regionLabel="booking calendar" />
    )

    expect(container.firstChild).toHaveClass('max-w-6xl')
  })

  it('gives the iframe enough height for the desktop booking layout', () => {
    const { container } = render(
      <ScheduleCalendar title="Free Tax Strategy Consultation" regionLabel="booking calendar" />
    )

    expect(container.querySelector('iframe')).toHaveClass('min-h-[720px]')
  })
})
