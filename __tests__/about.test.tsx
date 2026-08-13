import { render, screen } from '@testing-library/react'
import About, { metadata } from '@/app/(main)/about-us/page'

describe('About Us page', () => {
  it('renders without error', () => {
    render(<About />)
    expect(document.body).toBeTruthy()
  })

  it('renders the founder section', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: /founder/i })).toBeInTheDocument()
  })

  it('renders the approach section', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /overpaying/i })).toBeInTheDocument()
  })

  it('renders the team section', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', { name: /every return is reviewed twice before it's filed/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /deen cadi/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /marlon bell/i })).toBeInTheDocument()
  })

  it('renders at least one CTA that targets the assessment', () => {
    render(<About />)
    const assessmentLinks = screen.getAllByRole('link').filter((link) =>
      (link.getAttribute('href') ?? '').endsWith('#assessment')
    )
    expect(assessmentLinks.length).toBeGreaterThanOrEqual(1)
  })

  describe('metadata', () => {
    it('exports a non-empty title', () => {
      expect(typeof metadata.title).toBe('string')
      expect((metadata.title as string).length).toBeGreaterThan(0)
    })

    it('exports a title that references About Us', () => {
      expect(metadata.title).toMatch(/about us/i)
    })

    it('exports a non-empty description', () => {
      expect(typeof metadata.description).toBe('string')
      expect((metadata.description as string)!.length).toBeGreaterThan(0)
    })
  })
})
