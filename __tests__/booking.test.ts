import {
  getBookingOutcome,
  getIncomeValue,
  getScheduleRoute,
  isScheduleRoute,
} from '@/lib/booking'

describe('getBookingOutcome', () => {
  it('answer a → disqualified', () => {
    expect(getBookingOutcome('a')).toBe('disqualified')
  })

  it('answer b → free-consult', () => {
    expect(getBookingOutcome('b')).toBe('free-consult')
  })

  it('answer c → consult', () => {
    expect(getBookingOutcome('c')).toBe('consult')
  })

  it('answer d → consult', () => {
    expect(getBookingOutcome('d')).toBe('consult')
  })
})

describe('getScheduleRoute', () => {
  it('answer a → null (disqualified, stay on home)', () => {
    expect(getScheduleRoute('a')).toBeNull()
  })

  it('answer b → /schedule-a', () => {
    expect(getScheduleRoute('b')).toBe('/schedule-a')
  })

  it('answer c → /schedule-b', () => {
    expect(getScheduleRoute('c')).toBe('/schedule-b')
  })

  it('answer d → /schedule-c', () => {
    expect(getScheduleRoute('d')).toBe('/schedule-c')
  })
})

describe('getIncomeValue', () => {
  it('answer b → $1M - $2M for GHL income prefill', () => {
    expect(getIncomeValue('b')).toBe('$1M - $2M')
  })

  it('answer c → $2M - $4M for GHL income prefill', () => {
    expect(getIncomeValue('c')).toBe('$2M - $4M')
  })

  it('answer d → $4M+ for GHL income prefill', () => {
    expect(getIncomeValue('d')).toBe('$4M+')
  })

  it('answer a → Less than $1M', () => {
    expect(getIncomeValue('a')).toBe('Less than $1M')
  })
})

describe('isScheduleRoute', () => {
  it('returns true for schedule booking routes', () => {
    expect(isScheduleRoute('/schedule-a')).toBe(true)
    expect(isScheduleRoute('/schedule-b')).toBe(true)
    expect(isScheduleRoute('/schedule-c')).toBe(true)
  })

  it('returns false for other routes', () => {
    expect(isScheduleRoute('/')).toBe(false)
    expect(isScheduleRoute('/booking-confirmed')).toBe(false)
  })
})
