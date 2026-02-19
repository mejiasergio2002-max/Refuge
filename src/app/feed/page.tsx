import Link from "next/link"

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="min-h-screen bg-grid-light bg-spotlight">
        <div className="min-h-screen bg-scan">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <header className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
              >
                <span className="text-lg">←</span> back
              </Link>
              <div className="font-display text-sm font-bold tracking-[0.22em] text-black/60">
                refuge
              </div>
            </header>

            <div className="mx-auto mt-12 max-w-3xl">
              <div className="card p-7">
                <div className="hud">feed</div>
                <h1 className="mt-2 font-display text-3xl font-bold tracking-[0.18em]">
                  feed
                </h1>
                <p className="mt-2 text-sm text-black/60">
                  placeholder. next you’ll tell me what the feed should be (guards list,
                  filters, booking cards, etc.).
                </p>

                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-sm font-semibold">module: discovery</div>
                    <div className="mt-1 text-xs text-black/55">
                      search, filters, and profile cards
                    </div>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="text-sm font-semibold">module: booking</div>
                    <div className="mt-1 text-xs text-black/55">
                      schedule, options, confirmation
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-xs text-black/45">
                  ready for your feed spec.
                </div>
              </div>
            </div>

            <footer className="py-10 text-xs text-black/40">
              © {new Date().getFullYear()} refuge
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
