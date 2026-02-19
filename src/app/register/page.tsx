import Link from "next/link"

export default function RegisterPage() {
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

          <div className="mx-auto mt-12 max-w-xl">
            <div className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h1 className="font-display text-3xl font-bold tracking-[0.18em]">
                    register
                  </h1>
                  <p className="mt-2 text-sm text-black/60">
                    create your account to access bookings and the feed.
                  </p>
                </div>
                <div className="h-12 w-12 rounded-2xl border border-black/10 bg-black/5" />
              </div>

              <div className="mt-8 grid gap-4">
                <div>
                  <label className="text-xs font-semibold tracking-[0.18em] text-black/60">
                    email
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/35 ring-olive"
                    placeholder="you@domain.com"
                    type="email"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold tracking-[0.18em] text-black/60">
                    password
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/35 ring-olive"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>

                <button className="mt-2 inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                  create account
                </button>

                <div className="text-xs text-black/50">
                  already have an account?{" "}
                  <Link href="/login" className="font-semibold text-black/70 hover:text-black">
                    login
                  </Link>
                </div>

                <div className="mt-4 rounded-2xl border border-black/10 bg-black/5 p-4 text-xs text-black/55">
                  note: auth is placeholder ui for now. next step is wiring supabase auth.
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-black/45">
              your safety. my priority.
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
