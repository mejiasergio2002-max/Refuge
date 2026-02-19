import Link from "next/link"

function nowStamp() {
  const d = new Date()
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="min-h-screen bg-grid-light bg-spotlight">
        <div className="min-h-screen bg-scan">
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
            {/* top bar */}
            <header className="flex items-center justify-between py-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-black/10 bg-black/5" />
                <div className="leading-tight">
                  <div className="font-display text-xl font-bold tracking-[0.22em]">
                    refuge
                  </div>
                  <div className="hud mt-1">private security booking</div>
                </div>
              </div>

              <nav className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold hover:bg-black/5"
                >
                  login
                </Link>
                <Link
                  href="/register"
                  className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
                >
                  register
                </Link>
              </nav>
            </header>

            {/* hero */}
            <section className="flex flex-1 items-center">
              <div className="grid w-full gap-10 md:grid-cols-2 md:items-center">
                {/* left */}
                <div>
                  <div className="stamp inline-flex items-center gap-3 px-4 py-2">
                    <span className="hud">ops status</span>
                    <span className="text-xs font-semibold text-black/70">
                      mvp ready • verified-first directory
                    </span>
                  </div>

                  <h1 className="mt-8 font-display text-6xl font-bold tracking-[0.22em] md:text-7xl">
                    refuge
                  </h1>

                  <p className="mt-4 text-lg text-black/70 md:text-xl">
                    <span className="font-semibold text-black">your safety.</span>{" "}
                    <span className="font-semibold text-black">my priority.</span>
                  </p>

                  <p className="mt-6 max-w-xl text-sm leading-6 text-black/60">
                    a clean marketplace to book professional security personnel and
                    optional armored transport. built for speed: search, schedule,
                    confirm — all in one flow.
                  </p>

                  {/* proof chips */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    <span className="stamp px-4 py-2 text-xs font-semibold text-black/70">
                      verified profiles
                    </span>
                    <span className="stamp px-4 py-2 text-xs font-semibold text-black/70">
                      clear availability
                    </span>
                    <span className="stamp px-4 py-2 text-xs font-semibold text-black/70">
                      streamlined booking
                    </span>
                    <span className="stamp px-4 py-2 text-xs font-semibold text-black/70">
                      audit-friendly logs
                    </span>
                  </div>

                  {/* ctas */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="/register"
                      className="group inline-flex items-center justify-center rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                    >
                      register
                      <span className="ml-2 inline-block translate-x-0 transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>

                    <Link
                      href="/login"
                      className="inline-flex items-center justify-center rounded-xl border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/5"
                    >
                      login
                    </Link>

                    <Link
                      href="/feed"
                      className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 hover:bg-black/5"
                    >
                      enter feed
                    </Link>
                  </div>

                  {/* how it works */}
                  <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur">
                      <div className="hud">01</div>
                      <div className="mt-2 text-sm font-semibold">select</div>
                      <div className="mt-1 text-xs text-black/55">
                        choose profiles by location, skill, and availability
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur">
                      <div className="hud">02</div>
                      <div className="mt-2 text-sm font-semibold">schedule</div>
                      <div className="mt-1 text-xs text-black/55">
                        set time window, address, and dress code preference
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur">
                      <div className="hud">03</div>
                      <div className="mt-2 text-sm font-semibold">confirm</div>
                      <div className="mt-1 text-xs text-black/55">
                        receive confirmation and run day-of coordination
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 text-xs text-black/45">
                    note: the mvp is structured for legal compliance and verification workflows.
                  </div>
                </div>

                {/* right */}
                <div className="card p-6">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="hud">ops panel</div>
                      <div className="mt-2 text-xl font-semibold">
                        booking preview
                      </div>
                      <div className="mt-1 text-xs text-black/55">
                        time: {nowStamp()} • ref: rf-{Math.floor(Math.random() * 9000 + 1000)}
                      </div>
                    </div>
                    <div className="h-12 w-12 rounded-2xl border border-black/10 bg-black/5" />
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold">profile</div>
                        <span className="stamp px-3 py-1 text-[11px] font-semibold">
                          verified
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-black/55">
                        availability • languages • specialties • rating
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <div className="text-sm font-semibold">transport</div>
                      <div className="mt-1 text-xs text-black/55">
                        optional armored vehicle • routed pickup window
                      </div>
                      <div className="mt-3 h-[2px] w-full bg-black/10" />
                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-black/55">add-on</span>
                        <span className="font-semibold" style={{ color: "var(--gold)" }}>
                          enabled
                        </span>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <div className="text-sm font-semibold">dress code</div>
                      <div className="mt-1 text-xs text-black/55">
                        suit • smart casual • tactical style (non-weapon)
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-black p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div className="hud" style={{ color: "rgba(255,255,255,0.7)" }}>
                          system
                        </div>
                        <span className="stamp px-3 py-1 text-[11px] font-semibold text-white/80">
                          ready
                        </span>
                      </div>
                      <div className="mt-2 text-sm font-semibold">
                        fast booking flow • admin verification gate
                      </div>
                      <div className="mt-1 text-xs text-white/70">
                        built to demo cleanly to partners and accelerators
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <div className="hud">market</div>
                      <div className="mt-2 text-sm font-semibold">b2c + b2b</div>
                      <div className="mt-1 text-xs text-black/55">
                        events • executive protection • facilities
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/10 bg-white p-4">
                      <div className="hud">model</div>
                      <div className="mt-2 text-sm font-semibold">platform fee</div>
                      <div className="mt-1 text-xs text-black/55">
                        take rate + optional add-ons
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-xs text-black/45">
                    disclaimer: availability, verification, and compliance vary by jurisdiction.
                  </div>
                </div>
              </div>
            </section>

            <footer className="py-10 text-xs text-black/40">
              © {new Date().getFullYear()} refuge • built as an mvp
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
