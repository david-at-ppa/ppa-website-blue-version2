import Link from 'next/link'
import { VidalyticsEmbed } from '@/components/vidalytics-embed'
import { HeritageFaq } from '@/components/heritage/heritage-faq'
import { HeritageCheckIcon, HeritageChevronIcon } from '@/components/heritage/heritage-icons'
import {
  HERITAGE_INCOME_OPTIONS,
  HERITAGE_OUTCOMES,
  HERITAGE_SERVICES,
  HERITAGE_TRUSTED_ORGS,
} from '@/lib/heritage-content'

function ServiceIcon({ type }: { type: (typeof HERITAGE_SERVICES)[number]['icon'] }) {
  const props = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7 }
  switch (type) {
    case 'chart':
      return (
        <svg {...props}>
          <path d="M3 3v18h18" strokeLinecap="round" />
          <path d="M7 14l3-4 3 3 5-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...props}>
          <path d="M12 3v18M5 8l7-5 7 5M5 8v8l7 5 7-5V8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M9 4v16" strokeLinecap="round" />
        </svg>
      )
    case 'headset':
      return (
        <svg {...props}>
          <path
            d="M4 13a8 8 0 0116 0v4a2 2 0 01-2 2h-1v-6h3M4 13v4a2 2 0 002 2h1v-6H4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}

const PROCESS_STEPS = [
  {
    idx: '01',
    title: 'Analyze',
    body: 'We analyze your current tax situation and identify the leaks costing you money today.',
  },
  {
    idx: '02',
    title: 'Design',
    body: 'We design a customized tax strategy to legally minimize your liability around your income and entities.',
  },
  {
    idx: '03',
    title: 'Execute',
    body: 'We execute the strategy, ensuring everything is compliant, documented, and optimized.',
  },
  {
    idx: '04',
    title: 'Monitor',
    body: 'We monitor and adjust your plan year-round as laws and your income change—so you stay ahead.',
  },
] as const

const TESTIMONIALS = [
  {
    quote:
      'This platform has completely transformed how we manage our marketing campaigns. The ease of use and powerful features have made a significant impact on our ROI.',
    initials: 'ZB',
    name: 'Zara Bush',
    role: 'Marketing Director',
  },
  {
    quote:
      "The automation capabilities are incredible. We've saved countless hours and improved our customer engagement significantly.",
    initials: 'AS',
    name: 'Ashwin Santiago',
    role: 'CEO & Founder',
  },
  {
    quote:
      'The analytics and reporting features give us insights we never had before. Our conversion rates have improved by 40%.',
    initials: 'KS',
    name: 'Kaden Scott',
    role: 'Sales Manager',
  },
] as const

export function HeritageHome() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-inner">
          <div className="badge" style={{ marginBottom: 26 }}>
            <span className="dot" />
            7,000+ Tax Strategies Executed Across Our Network
          </div>
          <h1 className="h1 display">
            Earning&nbsp;$1M+ and&nbsp;still <span className="gold-text">overpaying</span> in&nbsp;taxes?
          </h1>
          <p className="lede">
            See how much you could legally save with a proactive tax strategy for W-2 earners.
            High-income earners do not need another stack of tax forms. They need a real plan that
            puts more money back in their pocket every single year.
          </p>

          <div className="vsl reveal">
            <div className="vsl-badge">
              <span className="badge">
                <span className="dot" />
                Watch: How It Works
              </span>
            </div>
            <div className="vsl-inner">
              <VidalyticsEmbed
                embedId="Cw2MFuq5vWpV54b7"
                accountId="UJ6_PCbU"
                className="!rounded-none !overflow-visible"
              />
            </div>
          </div>

          <div className="hero-actions">
            <Link href="#assessment" className="btn btn-gold btn-lg">
              Get Your Free 30 Min Consultation <span className="arrow">→</span>
            </Link>
            <ul className="trust-bullets">
              <li>
                <HeritageCheckIcon /> 300%+ Avg. ROI on Tax Strategy
              </li>
              <li>
                <HeritageCheckIcon /> 100% Full Audit Protection
              </li>
              <li>
                <HeritageCheckIcon /> Industry-Leading 0.01% Audit Rate
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="assessment" style={{ paddingTop: 'clamp(32px,5vw,56px)' }}>
        <div className="wrap">
          <div className="split" style={{ alignItems: 'center' }}>
            <div className="reveal">
              <span className="eyebrow">Book Your Free Tax Savings Assessment</span>
              <h2 className="h2 display">See how much you could be saving.</h2>
              <p className="text-2" style={{ marginTop: 16 }}>
                Answer one quick question to start your free 30-minute consultation. If we&apos;re a
                fit, we&apos;ll map out exactly how much you could legally keep every year.
              </p>
              <ul
                className="trust-bullets"
                style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 12, marginTop: 24 }}
              >
                <li>
                  <HeritageCheckIcon /> Typical savings of $150K–$350K+ per year
                </li>
                <li>
                  <HeritageCheckIcon /> Confidential &amp; selective — W-2 earners $700K+
                </li>
                <li>
                  <HeritageCheckIcon /> No obligation, no last-minute surprises
                </li>
              </ul>
            </div>

            <div className="qual reveal">
              <div className="step-count">Free Tax Savings Assessment</div>
              <h3>What is your annual income?</h3>
              <div className="opt-list">
                {HERITAGE_INCOME_OPTIONS.map(({ label, href }) => (
                  <Link key={label} className="opt" href={href}>
                    {label}
                    <HeritageChevronIcon />
                  </Link>
                ))}
              </div>
              <p className="text-3" style={{ fontSize: 12, textAlign: 'center', margin: '18px 0 0' }}>
                Select your income to continue to booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: 'clamp(20px,4vw,40px)' }}>
        <div className="stats reveal">
          <div className="stat">
            <div className="num">7,000+</div>
            <div className="lbl">Tax Strategies</div>
          </div>
          <div className="stat">
            <div className="num">0.01%</div>
            <div className="lbl">Audit Rate</div>
          </div>
          <div className="stat">
            <div className="num">300%+</div>
            <div className="lbl">Avg. ROI</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="marquee-head">
            Trusted by execs, directors, and high earners at the world&apos;s leading organizations
          </p>
          <div className="logo-strip reveal">
            {HERITAGE_TRUSTED_ORGS.map((org) => (
              <span key={org} className="org">
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="services">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">What We Do</span>
            <h2 className="h2 display">
              What Prime Path Advisory does for
              <br />
              high-income W-2 professionals.
            </h2>
            <p>
              A done-for-you tax optimization firm built for the way high earners actually live:
              proactive planning, expert execution, and year-round protection.
            </p>
          </div>

          <div className="grid grid-3">
            {HERITAGE_SERVICES.map((service) => (
              <article key={service.title} className="card reveal">
                <div className="ico">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">The Strategy Advantage</span>
            <h2 className="h2 display">
              Proactive strategy compounds your after-tax wealth, year over year.
            </h2>
            <p className="text-2" style={{ marginTop: 18 }}>
              The most powerful strategies are set up during the year—not at filing time. Every tax
              year you wait is savings you can&apos;t get back. A coordinated plan around your income,
              entities, and investments keeps more of what you earn working for you.
            </p>
            <div className="pill-row" style={{ marginTop: 26 }}>
              <span className="pill">
                <HeritageCheckIcon /> Set up during the year
              </span>
              <span className="pill">
                <HeritageCheckIcon /> Fully compliant
              </span>
              <span className="pill">
                <HeritageCheckIcon /> Documented &amp; defensible
              </span>
            </div>
          </div>

          <div className="chart-card reveal">
            <div className="chart-head">
              <span className="t">After-tax wealth over time</span>
              <span className="tag">Illustrative</span>
            </div>
            <h4>The cost of waiting</h4>
            <svg
              viewBox="0 0 480 240"
              width="100%"
              role="img"
              aria-label="Chart comparing after-tax wealth with and without proactive tax strategy"
            >
              <defs>
                <linearGradient id="heritage-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#C9A24B" stopOpacity="0.28" />
                  <stop offset="1" stopColor="#C9A24B" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="heritage-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#C9A24B" />
                  <stop offset="1" stopColor="#E4C77D" />
                </linearGradient>
              </defs>
              <g stroke="var(--line-faint)" strokeWidth="1">
                <line x1="0" y1="60" x2="480" y2="60" />
                <line x1="0" y1="120" x2="480" y2="120" />
                <line x1="0" y1="180" x2="480" y2="180" />
              </g>
              <path
                d="M0 200 C120 194 260 188 480 176"
                fill="none"
                stroke="var(--track)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />
              <path d="M0 200 C140 190 300 120 480 26 L480 240 L0 240 Z" fill="url(#heritage-area)" />
              <path
                d="M0 200 C140 190 300 120 480 26"
                fill="none"
                stroke="url(#heritage-line)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="480" cy="26" r="4.5" fill="#E4C77D" />
              <text x="4" y="214" fill="#83807A" fontSize="12" fontFamily="Inter">
                Today
              </text>
              <text x="415" y="214" fill="#83807A" fontSize="12" fontFamily="Inter">
                Year 10+
              </text>
            </svg>
            <div className="chart-legend">
              <span>
                <i style={{ background: 'linear-gradient(90deg,#C9A24B,#E4C77D)' }} />
                With proactive strategy
              </span>
              <span>
                <i style={{ background: 'var(--track)' }} />
                Without planning
              </span>
            </div>
            <p className="chart-note">
              Illustrative only. Individual results depend on income structure and strategies applied.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: 820 }}>
            <span className="eyebrow">The Gap We Close</span>
            <h2 className="h2 display">Your accountant files. We make sure you never overpay again.</h2>
          </div>
          <div className="split" style={{ alignItems: 'start' }}>
            <div className="prose reveal">
              <p>
                Most high-income earners only hear from their accountant at tax time. They get a clean
                return, but almost no proactive guidance on how to legally reduce what they pay. Nobody
                is walking them through options, and they do not have hours to dig through the tax code
                or worry if they are applying strategies correctly. <strong>We bridge that gap.</strong>
              </p>
              <p>
                We are a done-for-you tax optimization firm for W-2 professionals earning $700K or more.
                Instead of leaving you to research complex ideas on your own, we uncover the legal
                strategies you did not know existed, then design and implement a coordinated plan around
                your income, entities, and investment goals.
              </p>
            </div>
            <div className="prose reveal">
              <p>
                Your role — review simple recommendations, choose what fits, and let us do the rest.
                Done-for-you implementation, documentation, and ongoing adjustments as laws and your
                income change.
              </p>
              <p
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.3rem',
                  color: 'var(--text)',
                  lineHeight: 1.4,
                  borderLeft: '2px solid var(--gold)',
                  paddingLeft: 22,
                  marginTop: 26,
                }}
              >
                Typical clients save $150K–$350K+ per year with fully compliant strategies, centralized
                under one team that responds within 2 business days.
              </p>
              <Link href="#assessment" className="btn btn-gold" style={{ marginTop: 26 }}>
                Get Your Free 30 Min Consultation <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center-line">How It Works</span>
            <h2 className="h2 display">A permanent system to keep more of your income.</h2>
            <p>
              This isn&apos;t a one-time fix or cookie-cutter tax filing. We engineer a system that
              works for life—and adjust it year-round to keep you ahead.
            </p>
          </div>

          <div className="timeline reveal">
            <div className="timeline-track" />
            <div className="steps">
              {PROCESS_STEPS.map((step) => (
                <div key={step.idx} className="step">
                  <div className="node" />
                  <div className="idx">{step.idx}</div>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">Representative Outcomes</span>
            <h2 className="h2 display">What proactive strategy looks like in practice.</h2>
            <p>
              Illustrative of the results we design for high-income W-2 professionals. Exact savings
              depend on your income structure and how much is currently unoptimized.
            </p>
          </div>
          <div className="grid grid-3">
            {HERITAGE_OUTCOMES.map((outcome) => (
              <div key={outcome.tag} className="outcome reveal">
                <span className="tag">{outcome.tag}</span>
                <div className="big">{outcome.figure}</div>
                <p>{outcome.body}</p>
              </div>
            ))}
          </div>
          <p className="text-3" style={{ fontSize: 13, marginTop: 24 }}>
            Figures are representative examples for illustration and are not a guarantee of results.
          </p>
        </div>
      </section>

      <section className="section" id="team">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">The Team</span>
            <h2 className="h2 display">Senior practitioners behind every strategy.</h2>
          </div>

          <div className="team-member reveal">
            <div className="portrait">
              <span className="mono">DT</span>
              <div className="role-tab">
                <div className="nm">David Tran</div>
                <div className="rl">Chief Tax Advisor · Founder</div>
              </div>
            </div>
            <div className="team-body">
              <span className="eyebrow">Meet David Tran</span>
              <h3 className="h3">From senior software engineer at Uber to founding Prime Path.</h3>
              <div className="credential">
                <span className="pill">Ex-Uber Senior Software Engineer</span>
                <span className="pill">Tax Strategy Specialist</span>
              </div>
              <div className="prose">
                <p>
                  I know what it feels like to work hard, build success, and still feel like you&apos;re
                  getting robbed by the tax system.
                </p>
                <p>
                  My parents were refugees from the Vietnam War. They had to start over from nothing and
                  spent decades working just to survive. No one taught them how to navigate taxes, build
                  wealth, or create financial freedom. They had to figure it out the hard way. I saw the
                  system drain them of their potential. And I swore that I would never let it do the same
                  to me.
                </p>
                <p>
                  I spent years mastering tax strategy—not just how to file taxes, but how to build a
                  system where I (and my clients) could keep millions more in their own pockets. I left my
                  career as a senior software engineer at Uber to launch this firm, because I saw
                  something shocking: the vast majority of high-income professionals—tech workers,
                  salespeople, doctors, lawyers, business owners—are bleeding money unnecessarily. They
                  think their only option is to pay whatever the IRS tells them to pay.
                </p>
              </div>
            </div>
          </div>

          <div className="team-member reverse reveal">
            <div className="portrait">
              <span className="mono">DC</span>
              <div className="role-tab">
                <div className="nm">Deen Cadi</div>
                <div className="rl">Senior Wealth Advisor</div>
              </div>
            </div>
            <div className="team-body">
              <span className="eyebrow">The Engine Behind Our Strategies</span>
              <h3 className="h3">Tax strategy through a corporate-finance lens.</h3>
              <div className="credential">
                <span className="pill">CPA</span>
                <span className="pill">LSE — Master&apos;s, Law &amp; Accounting</span>
                <span className="pill">BBA, UMass Amherst</span>
              </div>
              <div className="prose">
                <p>
                  Success creates complexity. And complexity, without the right strategy, creates
                  unnecessary tax exposure.
                </p>
                <p>
                  Deen works exclusively with our VIP clients because his approach goes far beyond
                  traditional advisory. With a background spanning tax, corporate finance, and private
                  equity, he doesn&apos;t just look at a return — he looks at the entire financial
                  architecture behind it. He understands that every tax decision impacts something bigger:
                  cash flow, income trajectory, long-term wealth building, and optionality.
                </p>
                <p>
                  That perspective allows him to integrate business and personal financial strategy into
                  one cohesive plan. Nothing fragmented. Nothing reactive. Every move is deliberate. For
                  our highest-level clients, that level of precision isn&apos;t optional. It&apos;s
                  required.
                </p>
              </div>
            </div>
          </div>

          <div className="team-member reveal">
            <div className="portrait">
              <span className="mono">SS</span>
              <div className="role-tab">
                <div className="nm">Smit Shah</div>
                <div className="rl">Tax Advisor</div>
              </div>
            </div>
            <div className="team-body">
              <span className="eyebrow">Precision &amp; Execution</span>
              <h3 className="h3">Tax planning that feels strategic—not like damage control.</h3>
              <div className="credential">
                <span className="pill">CA</span>
                <span className="pill">CPA</span>
              </div>
              <div className="prose">
                <p>
                  Smit brings a disciplined, technical, and deeply analytical approach to tax advisory.
                  As a CA and CPA, he works closely with clients to align accounting, tax strategy, and
                  financial decision-making into one coordinated system. His focus isn&apos;t just
                  compliance. It&apos;s clarity.
                </p>
                <p>
                  Smit understands that real tax strategy supports cash flow, protects growth, and
                  reinforces long-term financial goals. He integrates detailed accounting insight with
                  practical execution, ensuring decisions made today strengthen financial positioning
                  tomorrow. Because for high earners, small mistakes compound — and well-structured
                  decisions do too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <blockquote className="quote-lead reveal" style={{ maxWidth: 900, marginBottom: 56 }}>
            &ldquo;The most powerful strategies are set up during the year, not at filing time. Start now
            so you do not lose another tax year to overpaying just because nobody told you what is
            possible.&rdquo;
            <span className="who">Lila A. — Brooklyn, NY</span>
          </blockquote>

          <div className="sec-head reveal">
            <span className="eyebrow">What Our Clients Say</span>
          </div>
          <div className="grid grid-3">
            {TESTIMONIALS.map((item) => (
              <figure key={item.initials} className="tcard reveal">
                <div className="stars" aria-label="5 stars">
                  ★★★★★
                </div>
                <p>&ldquo;{item.quote}&rdquo;</p>
                <figcaption className="by">
                  <span className="av">{item.initials}</span>
                  <span>
                    <span className="nm">{item.name}</span>
                    <br />
                    <span className="rl">{item.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="sec-head center reveal">
            <span className="eyebrow center-line">Frequently Asked Questions</span>
            <h2 className="h2 display">Everything you need to know.</h2>
          </div>
          <HeritageFaq />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band reveal">
            <span className="eyebrow center-line">Book Your Free Tax Savings Assessment</span>
            <h2 className="h2 display">Stop overpaying. Start keeping more of what you earn.</h2>
            <p className="lede">
              Answer one question to begin your free 30-minute consultation. If we&apos;re a fit,
              we&apos;ll map out exactly how much you could be saving.
            </p>
            <Link href="#assessment" className="btn btn-gold btn-lg">
              Start My Assessment <span className="arrow">→</span>
            </Link>
            <p className="text-3" style={{ fontSize: 13, marginTop: 20 }}>
              Confidential · Selective intake · For W-2 professionals earning $700K+
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
