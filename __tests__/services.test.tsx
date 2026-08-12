import { render, screen } from '@testing-library/react'
import Services, { metadata } from '@/app/(main)/services/page'

describe('Services page', () => {
  it('renders without error', () => {
    render(<Services />)
    expect(document.body).toBeTruthy()
  })

  it('renders the services section', () => {
    render(<Services />)
    expect(screen.getByRole('region', { name: /our services/i })).toBeInTheDocument()
  })

  it('does not render the process section', () => {
    render(<Services />)
    expect(screen.queryByRole('heading', { name: /you stop overpaying/i })).not.toBeInTheDocument()
  })

  it('renders at least one Vidalytics embed placeholder', () => {
    render(<Services />)
    const placeholders = screen.getAllByRole('img', { name: /video placeholder/i })
    expect(placeholders.length).toBeGreaterThanOrEqual(1)
  })

  it('renders at least one CTA that targets the assessment', () => {
    render(<Services />)
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
