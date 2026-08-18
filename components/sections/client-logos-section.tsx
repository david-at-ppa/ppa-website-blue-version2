import { cn } from '@/lib/utils'

const CLIENT_LOGOS = [
  { name: 'Alphabet', src: '/logos/alphabet.svg' },
  { name: 'Meta', src: '/logos/meta.svg' },
  { name: 'Netflix', src: '/logos/netflix.svg' },
  { name: 'Uber', src: '/logos/uber.svg' },
  { name: 'Apple', src: '/logos/apple.svg' },
  { name: 'Nvidia', src: '/logos/nvidia.svg' },
  { name: 'Amazon', src: '/logos/amazon.svg' },
  { name: 'DoorDash', src: '/logos/doordash.svg' },
  { name: 'LinkedIn', src: '/logos/linkedin.svg' },
  { name: 'Broadcom', src: '/logos/broadcom.svg' },
  { name: 'Stripe', src: '/logos/stripe.svg' },
  { name: 'eBay', src: '/logos/ebay.svg' },
  { name: 'Oracle', src: '/logos/oracle.svg' },
  { name: 'Coinbase', src: '/logos/coinbase.svg' },
  { name: 'Adobe', src: '/logos/adobe.svg' },
  { name: 'Delta', src: '/logos/delta.svg' },
  { name: 'Microsoft', src: '/logos/microsoft.svg' },
  { name: 'Intuit', src: '/logos/intuit.svg' },
  { name: 'Salesforce', src: '/logos/salesforce.svg' },
] as const

export type ClientLogo = {
  name: string
  src: string
}

const LOGO_CLASS = 'h-10 md:h-11 w-auto'
const LOGO_SIZE = 44

function ClientLogoImage({ name, src }: ClientLogo) {
  const className = name === 'Google' ? 'h-8 md:h-9 w-auto' : LOGO_CLASS

  return (
    // eslint-disable-next-line @next/next/no-img-element -- brand SVG logos
    <img
      src={src}
      alt={name}
      width={LOGO_SIZE}
      height={LOGO_SIZE}
      className={className}
      draggable={false}
    />
  )
}

function LogoRow({ suffix, logos }: { suffix: string; logos: readonly ClientLogo[] }) {
  return (
    <>
      {logos.map(({ name, src }) => (
        <li key={`${name}-${suffix}`} className="flex shrink-0 items-center px-10 md:px-16">
          <ClientLogoImage name={name} src={src} />
        </li>
      ))}
    </>
  )
}

type ClientLogosSectionProps = {
  animated?: boolean
  logos?: readonly ClientLogo[]
  eyebrow?: string
  heading?: string
  subtext?: string
  className?: string
  surface?: 'default' | 'navy'
}

export function ClientLogosSection({
  animated = true,
  logos = CLIENT_LOGOS,
  eyebrow,
  heading,
  subtext,
  className,
  surface = 'default',
}: ClientLogosSectionProps) {
  const isNavy = surface === 'navy'
  return (
    <section
      data-reveal
      aria-label="Companies our clients work with"
      className={cn('py-16', isNavy && 'heritage-surface-navy', className)}
    >
      <div className="space-y-10">
        {eyebrow && heading ? (
          <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
            <h2 className="font-heading text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl lg:text-[2rem] lg:leading-snug">
              {heading}
            </h2>
            {subtext ? (
              <p className="text-lg leading-relaxed text-muted-foreground">{subtext}</p>
            ) : null}
          </div>
        ) : (
          <p className="mx-auto max-w-2xl px-6 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            We work with high-income earners at the world&apos;s leading organizations
          </p>
        )}

        {animated ? (
          <>
            <ul className="hidden motion-reduce:flex flex-wrap items-center justify-center gap-x-14 gap-y-8 list-none px-6">
              {logos.map(({ name, src }) => (
                <li key={name}>
                  <ClientLogoImage name={name} src={src} />
                </li>
              ))}
            </ul>

            <div
              className="relative overflow-hidden logo-marquee-mask motion-reduce:hidden"
              aria-label="Company logos"
            >
              <div className="flex w-max animate-logo-marquee">
                <ul className="flex items-center list-none">
                  <LogoRow suffix="a" logos={logos} />
                </ul>
                <ul className="flex items-center list-none" aria-hidden="true">
                  <LogoRow suffix="b" logos={logos} />
                </ul>
              </div>
            </div>
          </>
        ) : (
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-8 list-none px-6 md:gap-x-14">
            {logos.map(({ name, src }) => (
              <li key={name}>
                <ClientLogoImage name={name} src={src} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
