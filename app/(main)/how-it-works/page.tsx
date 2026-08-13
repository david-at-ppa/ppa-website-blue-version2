import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How It Works — Prime Path Advisory',
  description: 'Learn how Prime Path Advisory helps high-income earners reduce their tax burden.',
}

export default function HowItWorks() {
  return (
    <section aria-label="How it works" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight">How It Works</h1>
        <p className="mt-4 text-muted-foreground">Coming soon.</p>
      </div>
    </section>
  )
}
