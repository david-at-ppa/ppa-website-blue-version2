import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link'
import { cn } from '@/lib/utils'
import { SMALL_CTA_LABEL } from '@/lib/cta-labels'
import type { VariantProps } from 'class-variance-authority'

const QUICK_LINKS = [
  { href: '/about-us', label: 'About Us' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/disclosures', label: 'Disclosures' },
]

type FooterLink = { href: string; label: string }

type FooterProps = {
  ctaHref?: string
  ctaScrollTarget?: string
  ctaVariant?: VariantProps<typeof buttonVariants>['variant']
  quickLinks?: readonly FooterLink[]
  legalAsText?: boolean
}

export function Footer({
  ctaHref = '/#assessment',
  ctaScrollTarget = 'assessment',
  ctaVariant = 'heritage',
  quickLinks = QUICK_LINKS,
  legalAsText = false,
}: FooterProps) {
  const CtaLink = ctaScrollTarget ? SmoothScrollLink : Link
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-semibold tracking-tight">Prime Path Advisory</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tax strategy for high-income earners.
              </p>
            </div>
            <CtaLink
              href={ctaHref}
              scrollTargetId={ctaScrollTarget}
              className={cn(buttonVariants({ variant: ctaVariant, size: 'sm' }), 'w-fit')}
            >
              {SMALL_CTA_LABEL}
            </CtaLink>
          </div>

          {/* Quick links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Quick Links
            </p>
            <nav aria-label="Quick links" className="flex flex-col gap-2">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Legal
            </p>
            {legalAsText ? (
              <ul aria-label="Legal" className="flex list-none flex-col gap-2">
                {LEGAL_LINKS.map(({ label }) => (
                  <li key={label} className="text-sm text-muted-foreground">
                    {label}
                  </li>
                ))}
              </ul>
            ) : (
              <nav aria-label="Legal" className="flex flex-col gap-2">
                {LEGAL_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-foreground">
            © 2026 Prime Path Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
