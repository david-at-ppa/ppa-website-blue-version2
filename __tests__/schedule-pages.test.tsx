import { render, screen } from '@testing-library/react'
import ScheduleA, { metadata as metaA } from '@/app/(main)/schedule-a/page'
import ScheduleB, { metadata as metaB } from '@/app/(main)/schedule-b/page'
import ScheduleC, { metadata as metaC } from '@/app/(main)/schedule-c/page'

describe('/schedule-a', () => {
  it('renders the Free Tax Strategy Consultation calendar', () => {
    render(<ScheduleA />)
    expect(
      screen.getByRole('region', { name: /free tax strategy consultation/i })
    ).toBeInTheDocument()
    expect(screen.getByTitle(/free tax strategy consultation calendar/i)).toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metaA.title).toBe('string')
    expect((metaA.title as string).length).toBeGreaterThan(0)
  })
})

describe('/schedule-b', () => {
  it('renders the Tax Strategy Consultation calendar', () => {
    render(<ScheduleB />)
    expect(
      screen.getByRole('region', { name: /^tax strategy consultation$/i })
    ).toBeInTheDocument()
    expect(screen.getByTitle(/^tax strategy consultation calendar$/i)).toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metaB.title).toBe('string')
    expect((metaB.title as string).length).toBeGreaterThan(0)
  })
})

describe('/schedule-c', () => {
  it('renders the Tax Strategy Consultation calendar', () => {
    render(<ScheduleC />)
    expect(
      screen.getByRole('region', { name: /^tax strategy consultation$/i })
    ).toBeInTheDocument()
    expect(screen.getByTitle(/^tax strategy consultation calendar$/i)).toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metaC.title).toBe('string')
    expect((metaC.title as string).length).toBeGreaterThan(0)
  })
})
