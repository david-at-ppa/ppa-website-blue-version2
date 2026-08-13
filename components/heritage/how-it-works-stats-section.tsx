import { cn } from '@/lib/utils'
import { HOW_IT_WORKS_STATS } from '@/lib/heritage-content'

export function HowItWorksStatsSection() {
  return (
    <section aria-label="Firm outcomes" className="px-6 py-12 lg:py-14">
      <ul className="mx-auto grid max-w-5xl list-none gap-10 md:grid-cols-3 md:gap-0">
        {HOW_IT_WORKS_STATS.map(({ figure, label }, index) => (
          <li
            key={label}
            data-reveal
            data-reveal-delay={String(index + 1)}
            className={cn(
              'space-y-1 px-4 text-center',
              index > 0 && 'md:border-l md:border-border'
            )}
          >
            <p className="font-heading text-4xl font-semibold tracking-tight text-primary md:text-5xl">
              {figure}
            </p>
            <p className="text-sm text-muted-foreground">{label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
