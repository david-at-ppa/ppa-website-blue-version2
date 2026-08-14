import { fireEvent, render, screen } from '@testing-library/react'
import { ScheduleCalendar } from '@/components/schedule-calendar'
import { GHL_CALENDARS } from '@/lib/ghl-calendars'

describe('ScheduleCalendar layout', () => {
  it('uses a wide container so the GHL widget can render horizontally', () => {
    const { container } = render(
      <ScheduleCalendar
        calendar="free-consult"
        title="Free Tax Strategy Consultation"
        regionLabel="booking calendar"
      />
    )

    expect(container.firstChild).toHaveClass('max-w-6xl')
  })

  it('gives the iframe enough height for the desktop booking layout', () => {
    const { container } = render(
      <ScheduleCalendar
        calendar="free-consult"
        title="Free Tax Strategy Consultation"
        regionLabel="booking calendar"
      />
    )

    expect(container.querySelector('iframe')).toHaveClass('min-h-[720px]')
  })

  it('loads the free consult calendar embed for schedule-a', () => {
    const { container } = render(
      <ScheduleCalendar
        calendar="free-consult"
        title="Free Tax Strategy Consultation"
        regionLabel="booking calendar"
      />
    )

    const iframe = container.querySelector('iframe')
    expect(iframe).toHaveAttribute('src', GHL_CALENDARS['free-consult'].src)
    expect(iframe).toHaveAttribute('id', GHL_CALENDARS['free-consult'].iframeId)
  })

  it('loads the consult calendar embed for schedule-b and schedule-c', () => {
    const { container } = render(
      <ScheduleCalendar
        calendar="consult"
        title="Tax Strategy Consultation"
        regionLabel="booking calendar"
      />
    )

    const iframe = container.querySelector('iframe')
    expect(iframe).toHaveAttribute('src', GHL_CALENDARS.consult.src)
    expect(iframe).toHaveAttribute('id', GHL_CALENDARS.consult.iframeId)
  })

  it('shows a loading notice until the calendar iframe finishes loading', () => {
    const { container } = render(
      <ScheduleCalendar
        calendar="free-consult"
        title="Free Tax Strategy Consultation"
        regionLabel="booking calendar"
      />
    )

    expect(screen.getByText(/loading available times/i)).toBeInTheDocument()
    expect(screen.getByText(/this can take a few seconds/i)).toBeInTheDocument()

    const iframe = container.querySelector('iframe')
    expect(iframe).not.toBeNull()
    fireEvent.load(iframe!)

    expect(screen.queryByText(/loading available times/i)).not.toBeInTheDocument()
  })
})
