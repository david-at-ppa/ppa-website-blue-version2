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

  it('renders at least one Vimeo embed placeholder', () => {
    render(<Services />)
    const placeholders = screen.getAllByRole('img', { name: /video placeholder/i })
    expect(placeholders.length).toBeGreaterThanOrEqual(1)
  })

  it('renders at least one CTA link to /book', () => {
    render(<Services />)
    const bookLinks = screen.getAllByRole('link').filter(
      (link) => link.getAttribute('href') === '/book'
    )
    expect(bookLinks.length).toBeGreaterThanOrEqual(1)
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
