'use client'

import Link from 'next/link'
import type { ComponentProps } from 'react'

type SmoothScrollLinkProps = ComponentProps<typeof Link> & {
  scrollTargetId?: string
}

export function SmoothScrollLink({
  href,
  scrollTargetId,
  onClick,
  ...props
}: SmoothScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || !scrollTargetId) return

    const hrefString = typeof href === 'string' ? href : href.pathname ?? ''
    const isTargetLink =
      hrefString === `#${scrollTargetId}` || hrefString.endsWith(`#${scrollTargetId}`)

    if (!isTargetLink) return

    const target = document.getElementById(scrollTargetId)
    if (!target) return

    event.preventDefault()

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })

    window.history.pushState(null, '', `#${scrollTargetId}`)
  }

  return <Link href={href} onClick={handleClick} {...props} />
}
