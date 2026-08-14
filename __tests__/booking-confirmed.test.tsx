import { render, screen } from '@testing-library/react'
import BookingConfirmedPage, { metadata } from '@/app/(main)/booking-confirmed/page'
import MainLayout from '@/app/(main)/layout'

vi.mock('next/navigation', () => ({
  usePathname: () => '/booking-confirmed',
}))

describe('BookingConfirmedPage', () => {
  it('mounts without error', () => {
    render(<BookingConfirmedPage />)
  })

  it('renders a confirmation heading', () => {
    render(<BookingConfirmedPage />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Thank you - your consultation is booked' })
    ).toBeInTheDocument()
  })

  it('renders the intro copy', () => {
    render(<BookingConfirmedPage />)
    expect(
      screen.getByText(/Your confirmation and calendar invite are in your inbox/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/Watch the videos below before we meet/i)).toBeInTheDocument()
  })

  it('renders the primary video section', () => {
    render(<BookingConfirmedPage />)
    expect(screen.getByRole('heading', { level: 2, name: 'Watch this before your call' })).toBeInTheDocument()
  })

  it('renders prep video sections with headings and subtext', () => {
    render(<BookingConfirmedPage />)
    expect(screen.getByRole('heading', { level: 2, name: 'What happens on the call' })).toBeInTheDocument()
    expect(
      screen.getByText(
        'A quick overview of how the 30 minutes are structured and what you can expect from our team.'
      )
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'What to bring' })).toBeInTheDocument()
    expect(
      screen.getByText(
        'Nothing. No spreadsheets, no prep work. Just show up and we will walk through your situation together.'
      )
    ).toBeInTheDocument()
  })

  it('renders all three Vidalytics embed placeholders', () => {
    const { container } = render(<BookingConfirmedPage />)
    const embeds = container.querySelectorAll('[id^="vidalytics_embed_"]')
    expect(embeds).toHaveLength(3)
  })

  it('renders the before-we-talk FAQ answers inline', () => {
    render(<BookingConfirmedPage />)
    expect(screen.getByRole('heading', { level: 2, name: 'Before we talk' })).toBeInTheDocument()
    expect(screen.getByText('Is this a sales call?')).toBeInTheDocument()
    expect(
      screen.getByText(/No\. It's a 30-minute conversation to look at your situation/)
    ).toBeVisible()
    expect(screen.queryByRole('button', { name: 'Is this a sales call?' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More questions? Read our full FAQ' })).toHaveAttribute(
      'href',
      '/faqs'
    )
  })

  it('renders the closing block below the FAQ', () => {
    render(<BookingConfirmedPage />)
    expect(screen.getByRole('heading', { level: 2, name: "That's it, you're set" })).toBeInTheDocument()
    expect(
      screen.getByText(
        "You'll get reminder texts and emails before your call. If anything comes up, just reply to one of them."
      )
    ).toBeInTheDocument()
  })

  it('renders inside the main site chrome without a book-a-call CTA', () => {
    render(
      <MainLayout>
        <BookingConfirmedPage />
      </MainLayout>
    )
    expect(screen.getByRole('link', { name: /prime path advisory/i })).toBeInTheDocument()
    expect(screen.getByText('© 2026 Prime Path Advisory. All rights reserved.')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /book a call/i })).not.toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metadata.title).toBe('string')
    expect((metadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof metadata.description).toBe('string')
    expect((metadata.description as string)!.length).toBeGreaterThan(0)
  })

  it('is not indexed by search engines', () => {
    expect(metadata.robots).toEqual({ index: false })
  })
})
