'use client'

import { useEffect } from 'react'

export function HeritageHtmlTheme({ fontClassName }: { fontClassName: string }) {
  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', 'heritage')
    html.classList.add(fontClassName)
    return () => {
      html.removeAttribute('data-theme')
      html.classList.remove(fontClassName)
    }
  }, [fontClassName])

  return null
}
