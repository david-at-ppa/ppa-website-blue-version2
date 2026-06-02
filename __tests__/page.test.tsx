import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Root route', () => {
  it('renders without error', () => {
    render(<Home />)
    expect(document.body).toBeTruthy()
  })

  it('renders the PPA logo mark and wordmark', () => {
    render(<Home />)
    expect(screen.getByRole('img', { name: /prime path advisory logo/i })).toBeInTheDocument()
    expect(screen.getByText('Prime Path')).toBeInTheDocument()
    expect(screen.getByText('ADVISORY')).toBeInTheDocument()
  })

  it('renders a shadcn/ui Button', () => {
    render(<Home />)
    expect(screen.getByRole('button', { name: /book a call/i })).toBeInTheDocument()
  })
})
