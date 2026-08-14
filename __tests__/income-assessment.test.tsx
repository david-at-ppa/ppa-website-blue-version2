import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeritageIncomeAssessmentSection } from '@/components/heritage/heritage-income-assessment-section'
import { GHL_INCOME_PARAM } from '@/lib/attribution'

const { push } = vi.hoisted(() => ({ push: vi.fn() }))

function mockStorage(): Storage {
  const store = new Map<string, string>()
  return {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => store.set(key, value),
    removeItem: (key: string) => store.delete(key),
    clear: () => store.clear(),
    key: (index: number) => [...store.keys()][index] ?? null,
    get length() {
      return store.size
    },
  }
}

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push }),
  usePathname: () => '/',
}))

describe('Income assessment', () => {
  beforeEach(() => {
    push.mockClear()
    vi.stubGlobal('localStorage', mockStorage())
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the updated assessment copy on load', () => {
    render(<HeritageIncomeAssessmentSection />)
    expect(screen.getByText(/free 30-minute strategy call/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /one question\. then pick a time\./i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/answer one question to see if we're a fit/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/selective and confidential - \$1m\+ earners only/i)).toBeInTheDocument()
    expect(screen.getByText(/no obligation, and nothing to prepare/i)).toBeInTheDocument()
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
    expect(
      screen.getByRole('heading', { name: /we're not the right fit yet/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/come back when you cross that line/i)).toBeInTheDocument()
    expect(screen.queryByText(/business/i)).not.toBeInTheDocument()
  })

  it('selecting under $1M shows no calendar and does not navigate', async () => {
    const { container } = render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /less than \$1,000,000/i }))
    expect(container.querySelector('iframe')).not.toBeInTheDocument()
    expect(push).not.toHaveBeenCalled()
  })

  it('selecting $1M-$2M navigates to /schedule-a with income for GHL prefill', async () => {
    localStorage.setItem('utm_source', 'facebook')
    localStorage.setItem('fbclid', 'abc123')
    render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /\$1,000,000 - \$2,000,000/i }))

    const pushed = push.mock.calls[0][0] as string
    const [pathname, query = ''] = pushed.split('?')
    const params = new URLSearchParams(query)

    expect(pathname).toBe('/schedule-a')
    expect(params.get('utm_source')).toBe('facebook')
    expect(params.get('fbclid')).toBe('abc123')
    expect(params.get(GHL_INCOME_PARAM)).toBe('$1M - $2M')
  })

  it('selecting $2M-$4M navigates to /schedule-b with income for GHL prefill', async () => {
    render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /\$2,000,000 - \$4,000,000/i }))

    const pushed = push.mock.calls[0][0] as string
    const params = new URLSearchParams(pushed.split('?')[1] ?? '')

    expect(pushed.startsWith('/schedule-b')).toBe(true)
    expect(params.get(GHL_INCOME_PARAM)).toBe('$2M - $4M')
  })

  it('selecting $4M+ navigates to /schedule-c with income for GHL prefill', async () => {
    render(<HeritageIncomeAssessmentSection />)
    await userEvent.click(screen.getByRole('button', { name: /\$4,000,000\+/i }))

    const pushed = push.mock.calls[0][0] as string
    const params = new URLSearchParams(pushed.split('?')[1] ?? '')

    expect(pushed.startsWith('/schedule-c')).toBe(true)
    expect(params.get(GHL_INCOME_PARAM)).toBe('$4M+')
  })
})
