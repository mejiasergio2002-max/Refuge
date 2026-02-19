import Link from "next/link"

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="min-h-screen bg-grid-light">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <header className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black">
              <span className="text-lg">←</span> back
            </Link>
            <div className="font-display text-sm font-semibold tracking-[0.22em] text-black/60">
              refuge
            </div>
          </header>

          <div className="mt-12 rounded-3xl border border-black/10 bg-white p-7 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <h1 className="font-display text-3xl font-bold tracking-[0.18em]">
              feed
            </h1>
            <p className="mt-2 text-sm text-black/60">
              placeholder. next you’ll tell me what the feed should be.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
