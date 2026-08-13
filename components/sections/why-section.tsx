const WHY_PILLARS = [
  {
    num: '01',
    title: 'Proactive, not reactive',
    body: 'Strategy designed throughout the year - not summarized in April. By the time most clients file, the savings are already locked in.',
  },
  {
    num: '02',
    title: 'Built for W-2 earners',
    body: 'The myth that high-W-2 earners have no options is the most expensive belief in personal finance. Every strategy we deploy is legal, documented, and IRS-defensible.',
  },
  {
    num: '03',
    title: 'One team of experts',
    body: 'Tax attorneys, CPAs, and wealth strategists working from the same plan - not against each other.',
  },
]

export function WhySection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div data-reveal className="space-y-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
            Our approach
          </p>
          <h2
            id="why-heading"
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            If you earn $1M+,
            <br />
            you&apos;re <span className="text-primary">overpaying.</span>
            <br />
            We fix that.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Most high-earning professionals have a great accountant and a terrible tax outcome. The
            reason is structural: compliance and strategy are different jobs, and your CPA was hired
            to do the first one. We do the second - proactively, year-round, with a team built
            specifically for high-income W-2 earners.
          </p>
        </div>
        <ol className="space-y-10 list-none">
          {WHY_PILLARS.map(({ num, title, body }, index) => (
            <li
              key={num}
              data-reveal
              data-reveal-delay={String(Math.min(index + 1, 4))}
              className="space-y-2"
            >
              <p className="font-sans text-xs font-medium text-primary">{num}</p>
              <h3 className="font-heading font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
