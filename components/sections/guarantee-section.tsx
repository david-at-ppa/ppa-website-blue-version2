export function GuaranteeSection() {
  return (
    <section
      data-reveal
      aria-labelledby="guarantee-heading"
      className="bg-foreground text-background py-16 lg:py-20 px-6"
    >
      <div className="max-w-7xl mx-auto space-y-3 text-left">
        <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
          Our Guarantee
        </p>
        <h2
          id="guarantee-heading"
          className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          No tax savings? Pay nothing.
        </h2>
        <p className="text-base md:text-lg text-background/70 max-w-2xl leading-relaxed">
          If you don&apos;t get at least 3× our fee in year one, you walk away with our service - 100%
          free.
        </p>
      </div>
    </section>
  )
}
