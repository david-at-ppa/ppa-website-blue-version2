import type { Metadata } from 'next'
import { VidalyticsEmbed } from '@/components/vidalytics-embed'

export const metadata: Metadata = {
  title: 'Booking Confirmed | Prime Path Advisory',
  description: 'Your strategy call is booked. Here is what to expect next.',
}

const ACCOUNT_ID = 'UJ6_PCbU'

export default function BookingConfirmedPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <section className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-semibold mb-4">You&rsquo;re booked!</h1>
        <p className="text-lg text-gray-600 mb-12">
          Check your email for confirmation details. Watch the videos below to know
          exactly what to expect on your call.
        </p>

        <div className="space-y-12 text-left">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Booking Confirmation</h2>
            <VidalyticsEmbed embedId="hp9ccM_x28NGicwA" accountId={ACCOUNT_ID} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">What Happens on the Call</h2>
            <VidalyticsEmbed embedId="3EA0sYnUj4pJ9AkK" accountId={ACCOUNT_ID} />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">What to Bring on the Call</h2>
            <VidalyticsEmbed embedId="9ENFo7wy7kIwKj4S" accountId={ACCOUNT_ID} />
          </div>
        </div>
      </section>
    </main>
  )
}
