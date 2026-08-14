import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/footer'

describe('Footer', () => {
  it('renders the PPA brand', () => {
    render(<Footer />)
    expect(screen.getByText('Prime Path Advisory')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /about us/i })).toHaveAttribute('href', '/about-us')
    expect(screen.getByRole('link', { name: /how it works/i })).toHaveAttribute(
      'href',
      '/how-it-works'
    )
    expect(screen.getByRole('link', { name: /faqs/i })).toHaveAttribute('href', '/faqs')
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '/contact')
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

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute(
      'href',
      'https://web.facebook.com/profile.php?id=61580548472482'
    )
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute(
      'href',
      'https://www.instagram.com/david.tran.tax.advisor/'
    )
    expect(screen.getByRole('link', { name: /youtube/i })).toHaveAttribute(
      'href',
      'https://www.youtube.com/@david-tran-tax-advisor'
    )
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/davidtran2015/'
    )
  })
})
