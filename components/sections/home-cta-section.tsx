import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LARGE_CTA_LABEL, SMALL_CTA_LABEL } from '@/lib/cta-labels'

export function HomeCtaSection() {
  return (
    <section
      data-reveal
      aria-labelledby="cta-heading"
      className="py-32 px-6 text-center bg-[#111111] text-white"
    >
      <div className="max-w-2xl mx-auto space-y-6">
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
        <p className="text-white/60 leading-relaxed">
          Book a free 30-minute discovery call with our team. We&apos;ll quantify what your current
          position is costing you and outline the path forward - whether or not you choose to engage
          us.
        </p>
        <div className="flex flex-col items-center gap-3 pt-2">
          <Link
            href="/book"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-white text-foreground hover:bg-white/90'
            )}
          >
            {LARGE_CTA_LABEL}
          </Link>
          <p className="font-sans text-xs text-white/50">
            ✓ No obligation &nbsp;·&nbsp; ✓ Discovery call first &nbsp;·&nbsp; ✓ Fully confidential
          </p>
        </div>
      </div>
    </section>
  )
}
