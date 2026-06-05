const STATS = [
  { figure: '$47M+', label: 'saved across 140+ clients', sub: 'Verified by independent CPA' },
  { figure: '$312k', label: 'avg. annual savings', sub: "In client's first year" },
  { figure: '4.9★', label: '164 client reviews', sub: 'Google + Clutch' },
  { figure: '8 yrs', label: 'in private practice', sub: 'Est. 2024 · Los Angeles' },
]

export function StatsSection() {
  return (
    <section aria-label="Client outcomes" className="py-24 px-6">
      <ul className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 list-none">
        {STATS.map(({ figure, label, sub }, index) => (
          <li
            key={label}
            data-reveal
            data-reveal-delay={String(Math.min(index + 1, 4))}
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
