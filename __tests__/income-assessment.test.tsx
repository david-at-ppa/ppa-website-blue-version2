import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeritageIncomeAssessmentSection } from '@/components/heritage/heritage-income-assessment-section'

const { push } = vi.hoisted(() => ({ push: vi.fn() }))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
  usePathname: () => '/',
}))

describe('Income assessment', () => {
  beforeEach(() => {
    push.mockClear()
  })

  it('renders the income question on load', () => {
    render(<HeritageIncomeAssessmentSection />)
    expect(
      screen.getByRole('heading', { name: /what is your annual income/i })
    ).toBeInTheDocument()
  })

  it('renders four answer buttons on load', () => {
    render(<HeritageIncomeAssessmentSection />)
    expect(screen.getAllByRole('button')).toHaveLength(4)
  })

  it('selecting under $1M shows the disqualification message', async () => {
    render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /less than \$1,000,000/i }))
    expect(screen.getByRole('region', { name: /not qualified/i })).toBeInTheDocument()
  })

  it('selecting under $1M shows no calendar and does not navigate', async () => {
    const { container } = render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /less than \$1,000,000/i }))
    expect(container.querySelector('iframe')).not.toBeInTheDocument()
    expect(push).not.toHaveBeenCalled()
  })

  it('selecting $1M–$2M navigates to /schedule-a', async () => {
    render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /\$1,000,000 – \$2,000,000/i }))
    expect(push).toHaveBeenCalledWith('/schedule-a')
  })

  it('selecting $2M–$4M navigates to /schedule-b', async () => {
    render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /\$2,000,000 – \$4,000,000/i }))
    expect(push).toHaveBeenCalledWith('/schedule-b')
  })

  it('selecting $4M+ navigates to /schedule-c', async () => {
    render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /\$4,000,000\+/i }))
    expect(push).toHaveBeenCalledWith('/schedule-c')
  })
})
