'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { SmoothScrollLink } from '@/components/ui/smooth-scroll-link'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from '@/components/social-icons'
import { cn } from '@/lib/utils'
import { SMALL_CTA_LABEL } from '@/lib/cta-labels'
import { isScheduleRoute } from '@/lib/booking'
import type { VariantProps } from 'class-variance-authority'
import type { ComponentType, SVGProps } from 'react'

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

const SOCIAL_LINKS: readonly {
  href: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}[] = [
  {
    href: 'https://web.facebook.com/profile.php?id=61580548472482',
    label: 'Facebook',
    icon: FacebookIcon,
  },
  {
    href: 'https://www.instagram.com/david.tran.tax.advisor/',
    label: 'Instagram',
    icon: InstagramIcon,
  },
  {
    href: 'https://www.youtube.com/@david-tran-tax-advisor',
    label: 'YouTube',
    icon: YoutubeIcon,
  },
  {
    href: 'https://www.linkedin.com/in/davidtran2015/',
    label: 'LinkedIn',
    icon: LinkedinIcon,
  },
]

type FooterLink = { href: string; label: string }

type FooterProps = {
  ctaHref?: string
  ctaScrollTarget?: string
  ctaVariant?: VariantProps<typeof buttonVariants>['variant']
  quickLinks?: readonly FooterLink[]
  hideCtaOnPaths?: readonly string[]
  onDark?: boolean
}

function SocialLinks({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <nav aria-label="Social media" className={cn('flex items-center gap-5', className)}>
      {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn(
            'transition-colors',
            onDark
              ? 'text-white/70 hover:text-white'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Icon className="size-5" />
        </a>
      ))}
    </nav>
  )
}

export function Footer({
  ctaHref = '/#assessment',
  ctaScrollTarget = 'assessment',
  ctaVariant = 'heritage',
  quickLinks = QUICK_LINKS,
  hideCtaOnPaths = ['/booking-confirmed'],
  onDark = true,
}: FooterProps) {
  const pathname = usePathname()
  const isBookingFocused = isScheduleRoute(pathname)
  const showCta = !hideCtaOnPaths.includes(pathname) && !isBookingFocused
  const CtaLink = ctaScrollTarget ? SmoothScrollLink : Link

  if (isBookingFocused) {
    return (
      <footer className={cn(onDark && 'heritage-surface-navy border-t border-white/10')}>
        <div className="mx-auto max-w-6xl px-6 py-8">
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {LEGAL_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm transition-colors',
                  onDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
          <SocialLinks className="mt-4 justify-center" onDark={onDark} />
          <p
            className={cn(
              'mt-4 text-center text-xs',
              onDark ? 'text-white/60' : 'text-muted-foreground'
            )}
          >
            © 2026 Prime Path Advisory. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }

  return (
    <footer className={cn(onDark && 'heritage-surface-navy border-t border-white/10')}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className={cn('font-semibold tracking-tight', onDark && 'text-white')}>
                Prime Path Advisory
              </p>
              <p
                className={cn(
                  'mt-1 text-sm',
                  onDark ? 'text-white/72' : 'text-muted-foreground'
                )}
              >
                Tax strategy for high-income earners.
              </p>
            </div>
            <SocialLinks onDark={onDark} />
            {showCta ? (
              <CtaLink
                href={ctaHref}
                scrollTargetId={ctaScrollTarget}
                className={cn(buttonVariants({ variant: ctaVariant, size: 'sm' }), 'w-fit')}
              >
                {SMALL_CTA_LABEL}
              </CtaLink>
            ) : null}
          </div>

          {/* Quick links */}
          <div>
            <p
              className={cn(
                'mb-4 text-xs font-semibold uppercase tracking-widest',
                onDark ? 'text-white/60' : 'text-muted-foreground'
              )}
            >
              Quick Links
            </p>
            <nav aria-label="Quick links" className="flex flex-col gap-2">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'text-sm transition-colors',
                    onDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal links */}
          <div>
            <p
              className={cn(
                'mb-4 text-xs font-semibold uppercase tracking-widest',
                onDark ? 'text-white/60' : 'text-muted-foreground'
              )}
            >
              Legal
            </p>
            <nav aria-label="Legal" className="flex flex-col gap-2">
              {LEGAL_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    'text-sm transition-colors',
                    onDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6">
          <p className={cn('text-xs', onDark ? 'text-white/60' : 'text-muted-foreground')}>
            © 2026 Prime Path Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
