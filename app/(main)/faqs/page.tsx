import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQs — Prime Path Advisory',
  description: 'Frequently asked questions about Prime Path Advisory and our tax strategy services.',
}

export default function Faqs() {
  return (
    <section aria-label="FAQs" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight">FAQs</h1>
        <p className="mt-4 text-muted-foreground">Coming soon.</p>
      </div>
    </section>
  )
}
