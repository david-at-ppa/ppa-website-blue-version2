import { render, screen } from '@testing-library/react'
import About, { metadata } from '@/app/(main)/about/page'

describe('About page', () => {
  it('renders without error', () => {
    render(<About />)
    expect(document.body).toBeTruthy()
  })

  it('renders the founder section', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: /founder/i })).toBeInTheDocument()
  })

  it('renders the team section', () => {
    render(<About />)
    expect(screen.getByRole('region', { name: /our team/i })).toBeInTheDocument()
  })

  it('renders team member names', () => {
    render(<About />)
    expect(screen.getByText(/joseph alexander/i)).toBeInTheDocument()
    expect(screen.getByText(/lance armour/i)).toBeInTheDocument()
    expect(screen.getByText(/ahmed r/i)).toBeInTheDocument()
  })

  it('renders a Vimeo embed placeholder', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /video placeholder/i })).toBeInTheDocument()
  })

  it('renders at least one CTA link to /book', () => {
    render(<About />)
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
