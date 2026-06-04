import { render, screen } from '@testing-library/react'
import Home, { metadata } from '@/app/(main)/page'

describe('Home page', () => {
  it('renders without error', () => {
    render(<Home />)
    expect(document.body).toBeTruthy()
  })

  it('renders the hero heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /keep more of what you earn/i, level: 1 })).toBeInTheDocument()
  })

  it('renders a Book a Call CTA', () => {
    render(<Home />)
    expect(screen.getByRole('link', { name: /book a call/i })).toBeInTheDocument()
  })

  it('renders at least two CTA links to /book', () => {
    render(<Home />)
    const bookLinks = screen.getAllByRole('link').filter(
      (link) => link.getAttribute('href') === '/book'
    )
    expect(bookLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('marks key sections with data-reveal for scroll animations', () => {
    render(<Home />)
    const revealTargets = document.querySelectorAll('[data-reveal]')
    expect(revealTargets.length).toBeGreaterThanOrEqual(3)
  })

  describe('FAQ section', () => {
    it('renders the FAQ region', () => {
      render(<Home />)
      expect(screen.getByRole('region', { name: /frequently asked questions/i })).toBeInTheDocument()
    })

    it('renders at least one question', () => {
      render(<Home />)
      const faqs = screen.getAllByRole('heading', { level: 3 })
      expect(faqs.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders the process section', () => {
    render(<Home />)
    expect(screen.getByRole('region', { name: /our process/i })).toBeInTheDocument()
  })

  it('renders the stats section', () => {
    render(<Home />)
    expect(screen.getByRole('region', { name: /client outcomes/i })).toBeInTheDocument()
  })

  describe('hero section', () => {
    it('renders the value proposition', () => {
      render(<Home />)
      expect(screen.getByText(/proactive tax strategy/i)).toBeInTheDocument()
    })

    it('renders a Vidalytics embed', () => {
      render(<Home />)
      expect(document.getElementById('vidalytics_embed_Cw2MFuq5vWpV54b7')).toBeInTheDocument()
    })
  })

  describe('metadata', () => {
    it('exports a non-empty title', () => {
      expect(typeof metadata.title).toBe('string')
      expect((metadata.title as string).length).toBeGreaterThan(0)
    })

    it('exports a non-empty description', () => {
      expect(typeof metadata.description).toBe('string')
      expect((metadata.description as string)!.length).toBeGreaterThan(0)
    })
  })
})
