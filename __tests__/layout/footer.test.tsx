import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/footer'

describe('Footer', () => {
  it('renders the PPA brand', () => {
    render(<Footer />)
    expect(screen.getByText('Prime Path Advisory')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /reviews/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders legal links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /disclosures/i })).toBeInTheDocument()
  })

  it('renders copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 prime path advisory/i)).toBeInTheDocument()
  })
})
