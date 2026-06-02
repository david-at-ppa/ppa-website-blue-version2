import { render, screen } from '@testing-library/react'
import Home from '@/app/(main)/page'

describe('Home page', () => {
  it('renders without error', () => {
    render(<Home />)
    expect(document.body).toBeTruthy()
  })

  it('renders the hero heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /keep more of what you earn/i })).toBeInTheDocument()
  })

  it('renders a Book a Call CTA', () => {
    render(<Home />)
    expect(screen.getByRole('link', { name: /book a call/i })).toBeInTheDocument()
  })
})
