import {
  Briefcase,
  DollarSign,
  FileText,
  Shield,
  Users,
  Waypoints,
  type LucideIcon,
} from 'lucide-react'
import { HERITAGE_SERVICES, HERITAGE_SERVICES_INTRO } from '@/lib/heritage-content'

const SERVICE_ICONS: Record<(typeof HERITAGE_SERVICES)[number]['icon'], LucideIcon> = {
  chart: FileText,
  layers: Users,
  shield: Briefcase,
  clock: DollarSign,
  grid: Waypoints,
  headset: Shield,
}

export function HeritageServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="border-t border-border bg-background px-6 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <p
          id="services-heading"
          data-reveal
          className="max-w-5xl font-heading text-2xl font-semibold leading-snug tracking-tight text-foreground md:text-3xl lg:text-[2rem] lg:leading-snug"
        >
          {HERITAGE_SERVICES_INTRO.lead}{' '}
          <span className="font-semibold">{HERITAGE_SERVICES_INTRO.emphasis}</span>{' '}
          {HERITAGE_SERVICES_INTRO.trail}
        </p>

        <ul className="grid list-none gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HERITAGE_SERVICES.map(({ title, body, icon }, index) => {
            const Icon = SERVICE_ICONS[icon]

            return (
              <li
                key={title}
                data-reveal
                data-reveal-delay={String(Math.min(index + 1, 6))}
                className="space-y-4 rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold tracking-tight">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
