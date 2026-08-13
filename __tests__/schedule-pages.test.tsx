import { render, screen } from '@testing-library/react'
import ScheduleA, { metadata as metaA } from '@/app/(main)/schedule-a/page'
import ScheduleB, { metadata as metaB } from '@/app/(main)/schedule-b/page'
import ScheduleC, { metadata as metaC } from '@/app/(main)/schedule-c/page'

describe('/schedule-a', () => {
  it('renders the booking calendar without a page heading', () => {
    render(<ScheduleA />)
    expect(
      screen.getByRole('region', { name: /free tax strategy consultation/i })
    ).toBeInTheDocument()
    expect(screen.getByTitle(/free tax strategy consultation calendar/i)).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metaA.title).toBe('string')
    expect((metaA.title as string).length).toBeGreaterThan(0)
  })
})

describe('/schedule-b', () => {
  it('renders the booking calendar without a page heading', () => {
    render(<ScheduleB />)
    expect(
      screen.getByRole('region', { name: /^tax strategy consultation$/i })
    ).toBeInTheDocument()
    expect(screen.getByTitle(/^tax strategy consultation calendar$/i)).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metaB.title).toBe('string')
    expect((metaB.title as string).length).toBeGreaterThan(0)
  })
})

describe('/schedule-c', () => {
  it('renders the booking calendar without a page heading', () => {
    render(<ScheduleC />)
    expect(
      screen.getByRole('region', { name: /^tax strategy consultation$/i })
    ).toBeInTheDocument()
    expect(screen.getByTitle(/^tax strategy consultation calendar$/i)).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument()
  })

  it('exports a non-empty title', () => {
    expect(typeof metaC.title).toBe('string')
    expect((metaC.title as string).length).toBeGreaterThan(0)
  })
})
