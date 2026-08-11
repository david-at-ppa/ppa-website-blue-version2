import { buttonVariants } from '@/components/ui/button'
import { LogoMark } from '@/components/logo-mark'
import { cn } from '@/lib/utils'
import { LARGE_CTA_LABEL } from '@/lib/cta-labels'
import type { ColorTheme } from '@/lib/color-themes'

export function ThemePreviewPanel({ theme }: { theme: ColorTheme }) {
  return (
    <article
      data-theme={theme.id}
      className="flex w-[min(100%,380px)] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm"
    >
      <header className="border-b border-border bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <span
            className="size-4 shrink-0 rounded-full border border-border"
            style={{ backgroundColor: theme.primary }}
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="font-semibold text-sm text-foreground">{theme.label}</p>
            <p className="font-mono text-xs text-muted-foreground">{theme.primary}</p>
          </div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{theme.description}</p>
      </header>

      <div className="flex flex-col">
        {/* Mini header */}
        <div className="flex items-center justify-between border-b border-border/40 px-4 py-3">
          <div className="flex items-center gap-2">
            <LogoMark className="h-5 w-auto" />
            <span className="text-xs font-semibold tracking-tight">Prime Path Advisory</span>
          </div>
          <span
            className={cn(
              buttonVariants({ size: 'xs' }),
              'pointer-events-none px-3 py-1.5 text-xs'
            )}
          >
            Book
          </span>
        </div>

        {/* Hero */}
        <section className="px-4 py-8 text-center">
          <h2 className="font-heading text-3xl font-semibold leading-none tracking-tight">
            Save $100k+ on your taxes{' '}
            <span className="text-primary">this year.</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Proactive tax strategy for high-income earners making $1M+ annually.
          </p>
          <div className="mt-4 flex justify-center">
            <span
              className={cn(
                buttonVariants({ size: 'sm' }),
                'pointer-events-none'
              )}
            >
              {LARGE_CTA_LABEL}
            </span>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 gap-4 px-4 py-6">
          <div className="text-center space-y-1">
            <p className="font-heading text-3xl font-semibold tracking-tight text-primary">$47M+</p>
            <p className="text-xs text-foreground">saved across clients</p>
          </div>
          <div className="text-center space-y-1">
            <p className="font-heading text-3xl font-semibold tracking-tight text-primary">$312k</p>
            <p className="text-xs text-foreground">avg. annual savings</p>
          </div>
        </section>

        {/* Guarantee band */}
        <section className="bg-foreground px-4 py-6 text-background">
          <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-primary">
            Our Guarantee
          </p>
          <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
            No tax savings? Pay nothing.
          </h3>
          <p className="mt-2 text-xs text-background/70 leading-relaxed">
            If you don&apos;t get at least 3× our fee in year one, you walk away free.
          </p>
        </section>

        {/* Process card */}
        <section className="border-t border-border bg-muted px-4 py-6">
          <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-primary">
            How it works
          </p>
          <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">
            Four steps. One outcome:{' '}
            <span className="text-primary">you stop overpaying.</span>
          </h3>
          <div className="mt-4 rounded-lg border border-border bg-primary/5 p-3">
            <p className="font-sans text-[10px] font-medium text-primary">01 · Audit</p>
            <p className="mt-1 text-sm font-medium">Diagnostic</p>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              We quantify the savings on the table before you commit.
            </p>
          </div>
        </section>

        {/* CTA footer */}
        <section className="bg-foreground px-4 py-8 text-center text-background">
          <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-primary">
            Get started
          </p>
          <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
            Stop overpaying.
            <br />
            <span className="text-primary">Start optimizing.</span>
          </h3>
          <div className="mt-4 flex justify-center">
            <span
              className={cn(
                buttonVariants({ size: 'sm' }),
                'pointer-events-none bg-background text-foreground hover:bg-background/90'
              )}
            >
              {LARGE_CTA_LABEL}
            </span>
          </div>
        </section>
      </div>
    </article>
  )
}
