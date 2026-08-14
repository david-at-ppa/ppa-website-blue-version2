import type { Metadata } from 'next'
import { buttonVariants } from '@/components/ui/button'
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link'
import { cn } from '@/lib/utils'
import { LARGE_CTA_LABEL } from '@/lib/cta-labels'
import { HERITAGE_ASSESSMENT_ID, HERITAGE_ASSESSMENT_LINK } from '@/lib/heritage-content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Prime Path Advisory. Book a strategy call or reach us directly.',
}

function ContactSection() {
  return (
    <section aria-label="Contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div data-reveal className="space-y-3">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Get in touch</p>
          <h1 className="text-4xl font-semibold tracking-tight">Contact us</h1>
          <p className="text-muted-foreground leading-relaxed max-w-xl">
            Have questions? We would love to hear from you. Reach out and a member of our team will be in touch shortly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div data-reveal data-reveal-delay="1" className="space-y-6">
            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary mb-1">Email</p>
              <a
                href="mailto:team@primepathadvisory.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                team@primepathadvisory.com
              </a>
            </div>
          </div>
          <div data-reveal data-reveal-delay="2" className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Ready to explore what proactive tax strategy can do for your business? Book a call directly - no obligation.
            </p>
            <SmoothScrollLink
              href={HERITAGE_ASSESSMENT_LINK}
              scrollTargetId={HERITAGE_ASSESSMENT_ID}
              className={cn(buttonVariants({ variant: 'heritage', size: 'lg' }))}
            >
              {LARGE_CTA_LABEL}
            </SmoothScrollLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Contact() {
  return <ContactSection />
}
