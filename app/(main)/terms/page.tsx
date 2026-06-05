import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Prime Path Advisory',
  description: 'Terms of service for Prime Path Advisory. The conditions governing use of our services.',
}

function TermsSection() {
  return (
    <section data-reveal aria-label="Terms of service" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Legal</p>
          <h1 className="text-4xl font-semibold tracking-tight">Terms of Service</h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Full terms of service copy will be provided by the client before launch. This page is a placeholder.
        </p>
      </div>
    </section>
  )
}

export default function Terms() {
  return <TermsSection />
}
