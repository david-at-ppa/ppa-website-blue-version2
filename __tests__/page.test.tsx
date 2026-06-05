import { render, screen, within } from '@testing-library/react'
import Home, { metadata } from '@/app/(main)/page'

describe('Home page', () => {
  it('renders without error', () => {
    render(<Home />)
    expect(document.body).toBeTruthy()
  })

  it('renders the hero heading', () => {
    render(<Home />)
    expect(
      screen.getByRole('heading', { name: /save \$100k\+ on your taxes this year/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('renders a book CTA in the hero', () => {
    render(<Home />)
    const hero = screen.getByRole('heading', { name: /save \$100k\+ on your taxes this year/i, level: 1 })
      .closest('section')!
    expect(
      within(hero).getByRole('link', { name: /book your free strategy call/i })
    ).toBeInTheDocument()
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

  it('renders the guarantee section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /no tax savings\? pay nothing/i })).toBeInTheDocument()
  })

  it('renders the stats section', () => {
    render(<Home />)
    expect(screen.getByRole('region', { name: /client outcomes/i })).toBeInTheDocument()
  })

  it('renders the process section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /you stop overpaying/i })).toBeInTheDocument()
  })

  it('renders the founder section', () => {
    render(<Home />)
    expect(screen.getByRole('region', { name: /founder/i })).toBeInTheDocument()
  })

  describe('hero section', () => {
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
