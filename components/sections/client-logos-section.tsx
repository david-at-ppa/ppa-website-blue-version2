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

const LOGO_CLASS = 'h-10 md:h-11 w-auto'
const LOGO_SIZE = 44

function LogoRow({ suffix }: { suffix: string }) {
  return (
    <>
      {CLIENT_LOGOS.map(({ name, src }) => (
        <li key={`${name}-${suffix}`} className="flex shrink-0 items-center px-10 md:px-16">
          {/* eslint-disable-next-line @next/next/no-img-element -- brand SVG logos */}
          <img
            src={src}
            alt={name}
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className={LOGO_CLASS}
            draggable={false}
          />
        </li>
      ))}
    </>
  )
}

export function ClientLogosSection() {
  return (
    <section
      data-reveal
      aria-label="Companies our clients work with"
      className="py-16 border-y border-border"
    >
      <div className="space-y-10">
        <p className="text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-6 leading-relaxed">
          We work with high-income earners at the world&apos;s leading organizations
        </p>

        <ul className="hidden motion-reduce:flex flex-wrap items-center justify-center gap-x-14 gap-y-8 list-none px-6">
          {CLIENT_LOGOS.map(({ name, src }) => (
            <li key={name}>
              {/* eslint-disable-next-line @next/next/no-img-element -- brand SVG logos */}
              <img
                src={src}
                alt={name}
                width={LOGO_SIZE}
                height={LOGO_SIZE}
                className={LOGO_CLASS}
                draggable={false}
              />
            </li>
          ))}
        </ul>

        <div
          className="relative overflow-hidden logo-marquee-mask motion-reduce:hidden"
          aria-label="Company logos"
        >
          <div className="flex w-max animate-logo-marquee">
            <ul className="flex items-center list-none">
              <LogoRow suffix="a" />
            </ul>
            <ul className="flex items-center list-none" aria-hidden="true">
              <LogoRow suffix="b" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
