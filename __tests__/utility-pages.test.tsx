import { render, screen } from '@testing-library/react'
import Contact, { metadata as contactMetadata } from '@/app/(main)/contact/page'
import Privacy, { metadata as privacyMetadata } from '@/app/(main)/privacy/page'
import Terms, { metadata as termsMetadata } from '@/app/(main)/terms/page'
import Disclosures, { metadata as disclosuresMetadata } from '@/app/(main)/disclosures/page'

describe('Contact page', () => {
  it('renders without error', () => {
    render(<Contact />)
    expect(document.body).toBeTruthy()
  })

  it('exports a non-empty title', () => {
    expect(typeof contactMetadata.title).toBe('string')
    expect((contactMetadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof contactMetadata.description).toBe('string')
    expect((contactMetadata.description as string)!.length).toBeGreaterThan(0)
  })

  it('has a section with data-reveal', () => {
    render(<Contact />)
    expect(screen.getByRole('region', { name: /contact/i })).toHaveAttribute('data-reveal')
  })

  it('renders a CTA link to /book', () => {
    render(<Contact />)
    const bookLinks = screen.getAllByRole('link').filter(
      (link) => link.getAttribute('href') === '/book'
    )
    expect(bookLinks.length).toBeGreaterThanOrEqual(1)
  })
})

describe('Privacy page', () => {
  it('renders without error', () => {
    render(<Privacy />)
    expect(document.body).toBeTruthy()
  })

  it('exports a non-empty title', () => {
    expect(typeof privacyMetadata.title).toBe('string')
    expect((privacyMetadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof privacyMetadata.description).toBe('string')
    expect((privacyMetadata.description as string)!.length).toBeGreaterThan(0)
  })

  it('has a section with data-reveal', () => {
    render(<Privacy />)
    expect(screen.getByRole('region', { name: /privacy/i })).toHaveAttribute('data-reveal')
  })
})

describe('Terms page', () => {
  it('renders without error', () => {
    render(<Terms />)
    expect(document.body).toBeTruthy()
  })

  it('exports a non-empty title', () => {
    expect(typeof termsMetadata.title).toBe('string')
    expect((termsMetadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof termsMetadata.description).toBe('string')
    expect((termsMetadata.description as string)!.length).toBeGreaterThan(0)
  })

  it('has a section with data-reveal', () => {
    render(<Terms />)
    expect(screen.getByRole('region', { name: /terms/i })).toHaveAttribute('data-reveal')
  })
})

describe('Disclosures page', () => {
  it('renders without error', () => {
    render(<Disclosures />)
    expect(document.body).toBeTruthy()
  })

  it('exports a non-empty title', () => {
    expect(typeof disclosuresMetadata.title).toBe('string')
    expect((disclosuresMetadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof disclosuresMetadata.description).toBe('string')
    expect((disclosuresMetadata.description as string)!.length).toBeGreaterThan(0)
  })

  it('has a section with data-reveal', () => {
    render(<Disclosures />)
    expect(screen.getByRole('region', { name: /disclosures/i })).toHaveAttribute('data-reveal')
  })
})
