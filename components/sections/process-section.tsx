const PROCESS_STEPS = [
  {
    num: '01',
    phase: 'Audit',
    title: 'Diagnostic',
    body: 'Complete review of your current position, returns, and entity structure. We quantify the savings on the table - in dollars - before you commit to anything.',
  },
  {
    num: '02',
    phase: 'Design',
    title: 'Strategy',
    body: 'Our advisory team designs a coordinated multi-year plan. Every strategy is selected for compatibility, audit defensibility, and compounding effect over time.',
  },
  {
    num: '03',
    phase: 'Implement',
    title: 'Execution',
    body: 'Entity formation, qualified plans, transactional structuring, election filings - handled end-to-end. Every step documented to a standard that protects you for a decade.',
  },
  {
    num: '04',
    phase: 'Optimize',
    title: 'Ongoing',
    body: "Tax law evolves; so does your income. Quarterly check-ins, midyear projections, and full annual re-strategy keep your plan compounding for as long as we're engaged.",
  },
]

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="py-24 px-6 bg-muted border-t border-border"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <div data-reveal className="space-y-4">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
            How it works
          </p>
          <h2
            id="process-heading"
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Four steps. One outcome:{' '}
            <span className="text-primary">you stop overpaying.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Diagnose. Design. Implement. Optimize. Every step is built around your specific income,
            equity, and residency - not a template.
          </p>
        </div>
        <ol className="grid md:grid-cols-2 gap-6 list-none">
          {PROCESS_STEPS.map(({ num, phase, title, body }, index) => (
            <li
              key={num}
              data-reveal
              data-reveal-delay={String(Math.min(index + 1, 4))}
              className="space-y-3 rounded-lg bg-primary/5 p-8"
            >
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs font-medium text-primary">{num}</span>
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {phase}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
