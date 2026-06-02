import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BookPage, { metadata } from '@/app/(minimal)/book/page'

describe('BookPage', () => {
  it('renders the income question on load', () => {
    render(<BookPage />)
    expect(screen.getByRole('heading', { name: /what is your.*annual.*income/i })).toBeInTheDocument()
  })

  it('renders four answer buttons on load', () => {
    render(<BookPage />)
    expect(screen.getAllByRole('button')).toHaveLength(4)
  })

  it('selecting answer a shows the disqualification message', async () => {
    render(<BookPage />)
    await userEvent.click(screen.getByRole('button', { name: /less than \$1m/i }))
    expect(screen.getByRole('region', { name: /not qualified/i })).toBeInTheDocument()
  })

  it('selecting answer a shows no calendar', async () => {
    const { container } = render(<BookPage />)
    await userEvent.click(screen.getByRole('button', { name: /less than \$1m/i }))
    expect(container.querySelector('iframe')).not.toBeInTheDocument()
  })

  it('selecting answer b shows the Free Tax Strategy Consultation calendar', async () => {
    render(<BookPage />)
    await userEvent.click(screen.getByRole('button', { name: /\$1m–\$2m/i }))
    expect(screen.getByRole('region', { name: /free tax strategy consultation/i })).toBeInTheDocument()
  })

  it('selecting answer c shows the Tax Strategy Consultation calendar', async () => {
    render(<BookPage />)
    await userEvent.click(screen.getByRole('button', { name: /\$2m–\$4m/i }))
    expect(screen.getByRole('region', { name: /^tax strategy consultation$/i })).toBeInTheDocument()
  })

  it('selecting answer d shows the Tax Strategy Consultation calendar', async () => {
    render(<BookPage />)
    await userEvent.click(screen.getByRole('button', { name: /\$4m\+/i }))
    expect(screen.getByRole('region', { name: /^tax strategy consultation$/i })).toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metadata.title).toBe('string')
    expect((metadata.title as string).length).toBeGreaterThan(0)
  })

  it('exports a non-empty description', () => {
    expect(typeof metadata.description).toBe('string')
    expect((metadata.description as string)!.length).toBeGreaterThan(0)
  })
})
