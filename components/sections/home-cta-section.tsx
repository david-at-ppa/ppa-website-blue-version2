import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link'
import { cn } from '@/lib/utils'
import { LARGE_CTA_LABEL } from '@/lib/cta-labels'

export function HomeCtaSection({
  ctaHref = '/#assessment',
  ctaScrollTarget = 'assessment',
  ctaVariant = 'heritage',
}: {
  ctaHref?: string
  ctaScrollTarget?: string
  ctaVariant?: 'default' | 'heritage'
}) {
  const CtaLink = ctaScrollTarget ? SmoothScrollLink : Link
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-20 px-6 text-center lg:py-24"
    >
      <div className="max-w-2xl mx-auto space-y-6">
        <div data-reveal className="space-y-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
            Get started
          </p>
          <h2
            id="cta-heading"
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Stop overpaying.
            <br />
            <span className="text-primary">Start optimizing.</span>
          </h2>
        </div>
        <p data-reveal data-reveal-delay="1" className="text-muted-foreground leading-relaxed">
          Book a free 30-minute discovery call with our team. We&apos;ll quantify what your current
          position is costing you and outline the path forward - whether or not you choose to engage
          us.
        </p>
        <div
          data-reveal
          data-reveal-delay="2"
          className="flex flex-col items-center gap-3 pt-2"
        >
          <CtaLink
            href={ctaHref}
            scrollTargetId={ctaScrollTarget}
            className={cn(buttonVariants({ variant: ctaVariant, size: 'lg' }))}
          >
            {LARGE_CTA_LABEL}
          </CtaLink>
          <p className="font-sans text-xs text-muted-foreground">
            ✓ No obligation · ✓ Discovery call first · ✓ Fully confidential
          </p>
        </div>
      </div>
    </section>
  )
}
