import { render, screen } from '@testing-library/react'
import MainLayout from '@/app/(main)/layout'
import MinimalLayout from '@/app/(minimal)/layout'

describe('Layout split', () => {
  it('main layout renders the site header', () => {
    render(<MainLayout>content</MainLayout>)
    expect(screen.getByRole('link', { name: /prime path advisory/i })).toBeInTheDocument()
  })

  it('main layout renders the footer', () => {
    render(<MainLayout>content</MainLayout>)
    expect(screen.getByText('© 2026 Prime Path Advisory. All rights reserved.')).toBeInTheDocument()
  })

  it('minimal layout has no site header', () => {
    render(<MinimalLayout>content</MinimalLayout>)
    expect(screen.queryByRole('link', { name: /prime path advisory/i })).not.toBeInTheDocument()
  })

  it('minimal layout renders children', () => {
    render(<MinimalLayout>content</MinimalLayout>)
    expect(screen.getByText('content')).toBeInTheDocument()
  })
})
