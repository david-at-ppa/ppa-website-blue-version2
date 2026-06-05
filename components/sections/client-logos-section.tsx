const CLIENT_LOGOS = ['Stripe', 'Meta', 'Google', 'Anthropic', 'OpenAI', 'Airbnb', 'Coinbase']

export function ClientLogosSection() {
  return (
    <section
      data-reveal
      aria-label="Companies our clients work at"
      className="py-16 px-6 border-y border-border"
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <p className="text-center font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Our clients work at
        </p>
        <ul className="flex items-center justify-center flex-wrap gap-8 md:gap-12 list-none">
          {CLIENT_LOGOS.map((name) => (
            <li
              key={name}
              className="font-semibold text-sm tracking-wide text-muted-foreground/50"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
