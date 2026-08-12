import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '@/components/layout/header'

describe('Header', () => {
  it('renders the PPA logo as a home link', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /prime path advisory/i })).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /reviews/i })).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: /book a call/i })
    expect(cta).toBeInTheDocument()
    expect(cta.getAttribute('href')).toMatch(/#assessment$/)
  })

  it('renders a hamburger button for mobile nav', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('clicking the hamburger opens the mobile nav drawer', async () => {
    render(<Header />)
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('clicking a nav link inside the drawer closes it', async () => {
    render(<Header />)
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    const dialog = screen.getByRole('dialog')
    await userEvent.click(within(dialog).getByRole('link', { name: /about/i }))
    expect(dialog).not.toBeInTheDocument()
  })
})
