import type { Metadata } from 'next'
import { PrivacyContent } from './privacy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Prime Path Advisory collects, uses, and shares personal information.',
}

export default function Privacy() {
  return (
    <section data-reveal aria-label="Privacy policy" className="py-24 px-6">
      <div className="mx-auto max-w-[720px] space-y-8">
        <div className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Legal</p>
          <h1 className="text-4xl font-normal tracking-tight">Privacy Policy</h1>
        </div>
        <PrivacyContent />
      </div>
    </section>
  )
}
