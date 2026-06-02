import { getBookingOutcome } from '@/lib/booking'

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
