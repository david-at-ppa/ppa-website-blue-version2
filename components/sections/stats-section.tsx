import { cn } from '@/lib/utils'

export type StatItem = {
  figure: string
  label: string
  sub: string
}

const STATS: StatItem[] = [
  { figure: '$47M+', label: 'saved across 140+ clients', sub: 'Verified by independent CPA' },
  { figure: '$312k', label: 'avg. annual savings', sub: "In client's first year" },
  { figure: '4.9★', label: '164 client reviews', sub: 'Google + Clutch' },
  { figure: '8 yrs', label: 'in private practice', sub: 'Est. 2024 · Los Angeles' },
]

type StatsSectionProps = {
  stats?: readonly StatItem[]
}

export function StatsSection({ stats = STATS }: StatsSectionProps) {
  const columns = stats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'

  return (
    <section aria-label="Client outcomes" className="bg-background py-24 px-6">
      <ul className={cn('max-w-5xl mx-auto grid grid-cols-2 gap-10 list-none', columns)}>
        {stats.map(({ figure, label, sub }, index) => (
          <li
            key={label}
            data-reveal
            data-reveal-delay={String(Math.min(index + 1, stats.length))}
            className="text-center space-y-1"
          >
            <p className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-primary">
              {figure}
            </p>
            <p className="text-sm text-foreground">{label}</p>
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {sub}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
