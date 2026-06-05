import type { Metadata } from 'next'
import { ScrollRevealInit } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Disclosures - Prime Path Advisory',
  description: 'Important disclosures from Prime Path Advisory regarding our advisory services.',
}

function DisclosuresSection() {
  return (
    <section data-reveal aria-label="Disclosures" className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Legal</p>
          <h1 className="text-4xl font-semibold tracking-tight">Disclosures</h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Full disclosures copy will be provided by the client before launch. This page is a placeholder.
        </p>
      </div>
    </section>
  )
}

export default function Disclosures() {
  return (
    <>
      <ScrollRevealInit />
      <DisclosuresSection />
    </>
  )
}
