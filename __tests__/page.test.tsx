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
      screen.getByRole('heading', {
        name: /you earn \$1m\+\. your cpa files\. nobody plans\./i,
        level: 1,
      })
    ).toBeInTheDocument()
  })

  it('renders a book CTA in the hero that targets the assessment', () => {
    render(<Home />)
    const hero = screen
      .getByRole('heading', {
        name: /you earn \$1m\+\. your cpa files\. nobody plans\./i,
        level: 1,
      })
      .closest('section')!
    const cta = within(hero).getByRole('link', {
      name: /book your free 30-minute strategy call/i,
    })
    expect(cta.getAttribute('href')).toMatch(/#assessment$/)
  })

  it('renders the income assessment section', () => {
    render(<Home />)
    expect(document.getElementById('assessment')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /one question\. then pick a time\./i })
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

  it('does not render the stats section', () => {
    render(<Home />)
    expect(screen.queryByRole('region', { name: /client outcomes/i })).not.toBeInTheDocument()
  })

  it('renders the client logos heading', () => {
    render(<Home />)
    expect(screen.getByText(/where our clients work/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /trusted by high earners at the companies everyone knows/i,
      })
    ).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<Home />)
    expect(screen.getByText(/do not lose another tax year/i)).toBeInTheDocument()
    expect(screen.getByText(/proactive tax planning & education/i)).toBeInTheDocument()
    expect(screen.getByText(/priority support & defense/i)).toBeInTheDocument()
  })

  it('does not render the process section', () => {
    render(<Home />)
    expect(screen.queryByRole('heading', { name: /you stop overpaying/i })).not.toBeInTheDocument()
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
