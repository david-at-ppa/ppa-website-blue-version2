import { getBookingOutcome, getScheduleRoute, isScheduleRoute } from '@/lib/booking'

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
