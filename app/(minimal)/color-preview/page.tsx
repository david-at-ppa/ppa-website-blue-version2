import type { Metadata } from 'next'
import { ThemePreviewPanel } from '@/components/color-preview/theme-preview-panel'
import { COLOR_THEMES } from '@/lib/color-themes'

export const metadata: Metadata = {
  title: 'Color theme preview — Prime Path Advisory',
  description: 'Internal side-by-side comparison of home page color themes.',
  robots: { index: false, follow: false },
}

export default function ColorPreviewPage() {
  return (
    <div className="min-h-screen bg-card">
      <header className="border-b border-border bg-background px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Internal preview
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Home page color options
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
            Each column shows the same home page sections with a different accent color. Scroll
            horizontally to compare all options side by side.
          </p>
        </div>
      </header>

      <div className="overflow-x-auto px-6 py-8">
        <div className="mx-auto flex max-w-7xl gap-6 pb-4">
          {COLOR_THEMES.map((theme) => (
            <ThemePreviewPanel key={theme.id} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  )
}
