import { fireEvent, render, screen } from '@testing-library/react'
import { ScheduleCalendar } from '@/components/schedule-calendar'
import { GHL_CALENDARS } from '@/lib/ghl-calendars'

const searchParams = vi.hoisted(() => ({ current: new URLSearchParams() }))

vi.mock('next/navigation', () => ({
  usePathname: () => '/schedule-a',
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
  useSearchParams: () => searchParams.current,
}))

describe('ScheduleCalendar layout', () => {
  beforeEach(() => {
    searchParams.current = new URLSearchParams()
  })
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

  it('loads the tax strategy consultation calendar embed', () => {
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

  it('appends schedule page query params to the GHL calendar iframe src', () => {
    searchParams.current = new URLSearchParams('utm_source=facebook&income=$1M - $2M')

    const { container } = render(
      <ScheduleCalendar
        calendar="consult"
        title="Tax Strategy Consultation"
        regionLabel="booking calendar"
      />
    )

    const iframe = container.querySelector('iframe')
    const src = iframe?.getAttribute('src') ?? ''
    const url = new URL(src)

    expect(url.searchParams.get('utm_source')).toBe('facebook')
    expect(url.searchParams.get('income')).toBe('$1M - $2M')
  })

  it('loads the free consult calendar embed for schedule-b and schedule-c', () => {
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
