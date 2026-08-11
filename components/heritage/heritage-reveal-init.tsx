'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function HeritageRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const reducedMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const reveal = (el: HTMLElement) => {
      el.classList.add('in')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    elements.forEach((el) => {
      if (reducedMotion) {
        reveal(el)
      } else {
        observer.observe(el)
      }
    })

    const header = document.querySelector<HTMLElement>('.site-header')
    const onScroll = () => {
      if (!header) return
      header.classList.toggle('scrolled', window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [pathname])

  return null
}
