export function FounderSection() {
  return (
    <section
      data-reveal
      aria-label="Founder"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">Founder</p>
          <h2
            id="founder-heading"
            className="font-heading text-4xl md:text-5xl font-semibold tracking-tight leading-tight"
          >
            Why I built <span className="text-primary">Prime Path.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I spent a decade as a senior software engineer at Uber watching colleagues - people
              earning $1M and well into seven figures - hand a third of their income to the IRS and
              never question whether it had to be that way.
            </p>
            <p>
              So I went deep on the tax code. Treated it like an engineering problem: predictable
              inputs, optimizable outputs. The strategies that came out of that work are now deployed
              across every Prime Path engagement - and they&apos;ve kept hundreds of millions of dollars
              in the hands of the people who earned them.
            </p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="border border-border rounded-lg p-8 space-y-6">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
              David Tran · Founder &amp; CEO
            </p>
            <dl className="space-y-4">
              <div>
                <dt className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Background
                </dt>
                <dd className="mt-1 text-sm">Sr. Engineer, Uber</dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Credentials
                </dt>
                <dd className="mt-1 text-sm">EA · Tax Strategist</dd>
              </div>
              <div>
                <dt className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Founded
                </dt>
                <dd className="mt-1 text-sm">2023</dd>
              </div>
            </dl>
          </div>
          <blockquote className="border-l-2 border-primary pl-6">
            <p className="text-sm italic text-muted-foreground leading-relaxed">
              &ldquo;Most advisors react in April. We plan in October - that&apos;s where the savings live.&rdquo;
            </p>
            <footer className="mt-3 font-sans text-xs font-medium uppercase tracking-widest text-primary">
              - David Tran · Founder &amp; CEO
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
