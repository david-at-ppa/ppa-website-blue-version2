import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Prime Path Advisory',
  description: 'Privacy policy for Prime Path Advisory. How we collect, use, and protect your information.',
}

function PrivacySection() {
  return (
    <section data-reveal aria-label="Privacy policy" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Legal</p>
          <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Full privacy policy copy will be provided by the client before launch. This page is a placeholder.
        </p>
      </div>
    </section>
  )
}

export default function Privacy() {
  return <PrivacySection />
}
