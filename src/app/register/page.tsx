import Link from "next/link"

export default function RegisterPage() {
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

            <div className="mx-auto mt-12 max-w-xl">
              <div className="card p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <div className="hud">onboarding</div>
                    <h1 className="mt-2 font-display text-3xl font-bold tracking-[0.18em]">
                      register
                    </h1>
                    <p className="mt-2 text-sm text-black/60">
                      create an account to access the marketplace and booking flow.
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl border border-black/10 bg-black/5" />
                </div>

                <div className="mt-8 grid gap-4">
                  <div>
                    <label className="hud">email</label>
                    <input
                      className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/35"
                      placeholder="you@domain.com"
                      type="email"
                    />
                  </div>

                  <div>
                    <label className="hud">password</label>
                    <input
                      className="focus-ring mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/35"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>

                  <div className="mt-2 grid gap-3 sm:grid-cols-2">
                    <button className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
                      create account
                    </button>
                    <Link
                      href="/login"
                      className="inline-flex items-center justify-center rounded-2xl border border-black/12 bg-white px-5 py-3 text-sm font-semibold hover:bg-black/5"
                    >
                      i already have an account
                    </Link>
                  </div>

                  <div className="mt-4 rounded-2xl border border-black/10 bg-white/70 p-4 text-xs text-black/55 backdrop-blur">
                    <div className="hud">mvp note</div>
                    <div className="mt-2">
                      this is ui-only right now. next step: wire supabase auth + roles.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-black/45">
                your safety. my priority.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
