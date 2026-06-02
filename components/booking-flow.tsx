'use client'

import { useState } from 'react'
import { getBookingOutcome, type BookingAnswer, type BookingOutcome } from '@/lib/booking'

const ANSWERS: { value: BookingAnswer; label: string }[] = [
  { value: 'a', label: 'Less than $1M' },
  { value: 'b', label: '$1M–$2M' },
  { value: 'c', label: '$2M–$4M' },
  { value: 'd', label: '$4M+' },
]

export default function BookingFlow() {
  const [outcome, setOutcome] = useState<BookingOutcome | null>(null)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {!outcome && (
        <section aria-labelledby="qualification-heading">
          <h1 id="qualification-heading" className="text-2xl font-semibold mb-8 text-center">
            What is your approximate annual business income?
          </h1>
          <ul className="flex flex-col gap-4" role="list">
            {ANSWERS.map(({ value, label }) => (
              <li key={value}>
                <button
                  onClick={() => setOutcome(getBookingOutcome(value))}
                  className="w-full text-left px-6 py-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {outcome === 'disqualified' && (
        <section aria-label="not qualified" className="max-w-lg text-center">
          <p className="text-lg">
            Thank you for your interest. Our services are designed for businesses generating
            $1M or more in annual revenue. We encourage you to revisit us as your business
            grows.
          </p>
        </section>
      )}

      {outcome === 'free-consult' && (
        <section aria-label="free tax strategy consultation" className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4 text-center">Free Tax Strategy Consultation</h2>
          <iframe
            title="Free Tax Strategy Consultation calendar"
            src=""
            className="w-full h-[600px] border-0"
          />
        </section>
      )}

      {outcome === 'consult' && (
        <section aria-label="tax strategy consultation" className="w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4 text-center">Tax Strategy Consultation</h2>
          <iframe
            title="Tax Strategy Consultation calendar"
            src=""
            className="w-full h-[600px] border-0"
          />
        </section>
      )}
    </main>
  )
}
