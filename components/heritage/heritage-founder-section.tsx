import Image from 'next/image'

export function HeritageFounderSection() {
  return (
    <section aria-label="Founder" className="bg-background px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2 md:items-stretch">
        <div data-reveal className="flex flex-col justify-center space-y-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
            Founder
          </p>
          <h2
            id="founder-heading"
            className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Why I built <span className="text-primary">Prime Path Advisory.</span>
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I spent a decade as a senior software engineer at Uber watching colleagues - people
              earning $1M and well into seven figures - hand a third of their income to the IRS and
              never question whether it had to be that way.
            </p>
            <p>
              So I went deep on the tax code. Treated it like an engineering problem: predictable
              inputs, optimizable outputs. The strategies that came out of that work are now deployed
              across every Prime Path Advisory engagement - and they&apos;ve kept hundreds of millions
              of dollars in the hands of the people who earned them.
            </p>
          </div>
        </div>

        <div
          data-reveal
          data-reveal-delay="1"
          className="flex flex-col gap-6 md:h-full md:min-h-0"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card md:aspect-auto md:min-h-0 md:flex-1">
            <Image
              src="/images/team/david-tran.png"
              alt="David Tran, Founder and CEO of Prime Path Advisory"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="object-cover object-top"
              priority
            />
          </div>
          <p className="shrink-0 font-sans text-xs font-medium uppercase tracking-widest text-primary">
            David Tran · Founder &amp; CEO
          </p>

          <blockquote className="shrink-0 border-l-2 border-primary pl-6">
            <p className="text-sm italic leading-relaxed text-muted-foreground">
              &ldquo;Most advisors react in April. We plan in October - that&apos;s where the savings
              live.&rdquo;
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
