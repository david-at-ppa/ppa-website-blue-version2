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

  it('does not render the team section', () => {
    render(<About />)
    expect(screen.queryByRole('region', { name: /our team/i })).not.toBeInTheDocument()
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
