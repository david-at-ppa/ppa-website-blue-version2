import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Booking Confirmed | Prime Path Advisory',
  description: 'Your strategy call is booked. Here is what to expect next.',
}

export default function BookingConfirmedPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <section className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-semibold mb-4">You&rsquo;re booked!</h1>
        <p className="text-lg text-gray-600 mb-12">
          Check your email for confirmation details. Watch the video below to know
          exactly what to expect on your call.
        </p>
        <div className="aspect-video w-full">
          <iframe
            title="What to expect on your call"
            src=""
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  )
}
