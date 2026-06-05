import type { Metadata } from 'next'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ScrollRevealInit } from '@/components/scroll-reveal'

export const metadata: Metadata = {
  title: 'Contact — Prime Path Advisory',
  description: 'Get in touch with Prime Path Advisory. Book a strategy call or reach us directly.',
}

function ContactSection() {
  return (
    <section data-reveal aria-label="Contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#0d7c54]">Get in touch</p>
          <h1 className="text-4xl font-semibold tracking-tight">Contact us</h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Have questions? We would love to hear from you. Reach out and a member of our team will be in touch shortly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#0d7c54] mb-1">Email</p>
              <p className="text-muted-foreground">hello@primepathadvisory.com</p>
            </div>
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#0d7c54] mb-1">Phone</p>
              <p className="text-muted-foreground">Placeholder — coming soon</p>
            </div>
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-[#0d7c54] mb-1">Location</p>
              <p className="text-muted-foreground">Placeholder — coming soon</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Ready to explore what proactive tax strategy can do for your business? Book a call directly — no obligation.
            </p>
            <Link href="/book" className={cn(buttonVariants({ size: 'lg' }))}>
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return (
    <>
      <ScrollRevealInit />
      <ContactSection />
    </>
  )
}
