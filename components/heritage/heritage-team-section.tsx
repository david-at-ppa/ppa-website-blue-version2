import Image from 'next/image'

const TEAM_MEMBERS = [
  {
    name: 'Deen Cadi',
    title: 'Senior Tax Advisor',
    image: {
      src: '/images/team/deen-cadi.png',
      alt: 'Deen Cadi, Senior Tax Advisor at Prime Path Advisory',
    },
    body: [
      'Deen builds and reviews the strategies. CPA, Master\'s in Law & Accounting from LSE, and 20+ years across complex filings - entity structuring, multi-year compliance, amended returns, the situations most preparers hand back.',
      'He\'s the one who decides whether a strategy actually holds up for your specific situation, and he stays on your file through filing. On VIP engagements, he\'s in the room.',
    ],
  },
  {
    name: 'Marlon Bell',
    title: 'Tax Advisor & Reviewer',
    image: {
      src: '/images/team/marlon-bell-closeup.png',
      alt: 'Marlon Bell, Tax Advisor & Reviewer at Prime Path Advisory',
    },
    body: [
      'Marlon reviews every return before it\'s filed - and he spent his career inside the IRS before joining us. That means your return gets read the way an examiner would read it, before anyone at the IRS ever sees it.',
      'He records a walkthrough of what he checked and why, so you\'re not just told it\'s clean - you can watch the review.',
    ],
  },
] as const

function TeamMemberPhoto({ image }: { image: { src: string; alt: string } }) {
  return (
    <div className="relative size-20 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="80px"
        className="object-cover object-top"
      />
    </div>
  )
}

export function HeritageTeamSection() {
  return (
    <section aria-labelledby="team-heading" className="px-6 py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div data-reveal className="space-y-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
            The team behind the plan
          </p>
          <h2
            id="team-heading"
            className="font-heading text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Every return is reviewed twice before it&apos;s filed
          </h2>
        </div>

        <ul className="grid list-none gap-6 md:grid-cols-2">
          {TEAM_MEMBERS.map(({ name, title, image, body }, index) => (
            <li
              key={name}
              data-reveal
              data-reveal-delay={String(Math.min(index + 1, 4))}
              className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <TeamMemberPhoto image={image} />
                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{name}</h3>
                  <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
                    {title}
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                {body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
