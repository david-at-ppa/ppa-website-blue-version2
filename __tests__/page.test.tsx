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

  it('renders a book CTA in the hero that targets the assessment', () => {
    render(<Home />)
    const hero = screen
      .getByRole('heading', { name: /save \$100k\+ on your taxes this year/i, level: 1 })
      .closest('section')!
    const cta = within(hero).getByRole('link', { name: /book your free strategy call/i })
    expect(cta.getAttribute('href')).toMatch(/#assessment$/)
  })

  it('renders the income assessment section', () => {
    render(<Home />)
    expect(document.getElementById('assessment')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /see how much you could be saving/i })
    ).toBeInTheDocument()
  })

  it('does not render the guarantee section', () => {
    render(<Home />)
    expect(
      screen.queryByRole('heading', { name: /no tax savings\? pay nothing/i })
    ).not.toBeInTheDocument()
  })

  it('does not render the founder section on home', () => {
    render(<Home />)
    expect(screen.queryByRole('region', { name: /founder/i })).not.toBeInTheDocument()
  })

  it('marks key sections with data-reveal for scroll animations', () => {
    render(<Home />)
    const revealTargets = document.querySelectorAll('[data-reveal]')
    expect(revealTargets.length).toBeGreaterThanOrEqual(3)
  })

  it('renders the stats section', () => {
    render(<Home />)
    expect(screen.getByRole('region', { name: /client outcomes/i })).toBeInTheDocument()
  })

  it('renders the process section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /you stop overpaying/i })).toBeInTheDocument()
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
