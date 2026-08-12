'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { HERITAGE_ASSESSMENT_ID } from '@/lib/heritage-content'

export function HeritageAssessmentHashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/heritage') return
    if (window.location.hash !== `#${HERITAGE_ASSESSMENT_ID}`) return

    const target = document.getElementById(HERITAGE_ASSESSMENT_ID)
    if (!target) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [pathname])

  return null
}
