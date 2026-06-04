import { render, screen } from '@testing-library/react'
import BookingConfirmedPage, { metadata } from '@/app/(minimal)/booking-confirmed/page'

describe('BookingConfirmedPage', () => {
  it('mounts without error', () => {
    render(<BookingConfirmedPage />)
  })

  it('renders a confirmation heading', () => {
    render(<BookingConfirmedPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders a Vidalytics embed placeholder', () => {
    const { container } = render(<BookingConfirmedPage />)
    expect(container.querySelector('iframe')).toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metadata.title).toBe('string')
    expect((metadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof metadata.description).toBe('string')
    expect((metadata.description as string)!.length).toBeGreaterThan(0)
  })
})
