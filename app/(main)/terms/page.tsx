import type { Metadata } from 'next'
import { TermsContent } from './terms-content'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms governing use of the Prime Path Advisory website, including bookings, communications, and acceptable use.',
}

export default function Terms() {
  return (
    <section data-reveal aria-label="Terms of service" className="py-24 px-6">
      <div className="mx-auto max-w-[720px] space-y-8">
        <div className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Legal</p>
          <h1 className="text-4xl font-normal tracking-tight">Terms of Service</h1>
        </div>
        <TermsContent />
      </div>
    </section>
  )
}
