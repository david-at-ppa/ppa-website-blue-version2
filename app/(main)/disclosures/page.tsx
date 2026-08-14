import type { Metadata } from 'next'
import { DisclosuresContent } from './disclosures-content'

export const metadata: Metadata = {
  title: 'Disclosures | Prime Path Advisory',
  description:
    'Important disclosures about Prime Path Advisory marketing, educational content, testimonials, and service limits.',
}

export default function Disclosures() {
  return (
    <section data-reveal aria-label="Disclosures" className="py-24 px-6">
      <div className="mx-auto max-w-[720px] space-y-8">
        <div className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Legal</p>
          <h1 className="text-4xl font-normal tracking-tight">Disclosures</h1>
        </div>
        <DisclosuresContent />
      </div>
    </section>
  )
}
