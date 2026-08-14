import { render, screen } from '@testing-library/react'
import MainLayout from '@/app/(main)/layout'

describe('Layout split', () => {
  it('main layout renders the site header', () => {
    render(<MainLayout>content</MainLayout>)
    expect(screen.getByRole('link', { name: /prime path advisory/i })).toBeInTheDocument()
  })

  it('main layout renders the footer', () => {
    render(<MainLayout>content</MainLayout>)
    expect(screen.getByText('© 2026 Prime Path Advisory. All rights reserved.')).toBeInTheDocument()
  })

  it('main layout renders footer legal links', () => {
    render(<MainLayout>content</MainLayout>)
    expect(screen.getByRole('link', { name: /privacy policy/i })).toHaveAttribute('href', '/privacy')
    expect(screen.getByRole('link', { name: /terms of service/i })).toHaveAttribute('href', '/terms')
    expect(screen.getByRole('link', { name: /disclosures/i })).toHaveAttribute('href', '/disclosures')
  })
})
