import { render, screen } from '@testing-library/react'
import BookingConfirmedPage, { metadata } from '@/app/(main)/booking-confirmed/page'
import MainLayout from '@/app/(main)/layout'

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
    expect(container.querySelector('[id^="vidalytics_embed_"]')).toBeInTheDocument()
  })

  it('renders inside the main site chrome', () => {
    render(
      <MainLayout>
        <BookingConfirmedPage />
      </MainLayout>
    )
    expect(screen.getByRole('link', { name: /prime path advisory/i })).toBeInTheDocument()
    expect(screen.getByText('© 2026 Prime Path Advisory. All rights reserved.')).toBeInTheDocument()
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
