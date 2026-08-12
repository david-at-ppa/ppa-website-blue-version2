import { render, screen } from '@testing-library/react'
import Reviews, { metadata } from '@/app/(main)/reviews/page'

describe('Reviews page', () => {
  it('renders without error', () => {
    render(<Reviews />)
    expect(document.body).toBeTruthy()
  })

  it('renders the testimonials section', () => {
    render(<Reviews />)
    expect(screen.getByRole('region', { name: /testimonials/i })).toBeInTheDocument()
  })

  it('renders the outcome stats section', () => {
    render(<Reviews />)
    expect(screen.getByRole('region', { name: /client outcomes/i })).toBeInTheDocument()
  })

  it('renders at least one CTA that targets the assessment', () => {
    render(<Reviews />)
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

    it('exports a non-empty description', () => {
      expect(typeof metadata.description).toBe('string')
      expect((metadata.description as string)!.length).toBeGreaterThan(0)
    })
  })
})
