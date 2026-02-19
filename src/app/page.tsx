import Link from "next/link"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-emerald-200">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/refuge-backdrop.jpg")' }}
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* matrix rain overlay (subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-45 mix-blend-screen">
        <div className="matrix-rain h-full w-full" />
      </div>

      {/* top nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          {/* logo */}
          <img
            src="/brand/logo.svg"
            alt="refuge"
            className="h-9 w-9"
          />
          <span className="text-xl tracking-widest text-emerald-300">refuge</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-emerald-200/80 md:flex">
          <Link href="/" className="hover:text-emerald-200">home</Link>
          <a href="#services" className="hover:text-emerald-200">services</a>
          <a href="#vehicles" className="hover:text-emerald-200">vehicles</a>
          <a href="#teams" className="hover:text-emerald-200">protection teams</a>
          <a href="#contact" className="hover:text-emerald-200">contact</a>
        </nav>
      </header>

      {/* hero */}
      <section className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-24 pt-10 md:grid-cols-2 md:pt-16">
        <div>
          <h1 className="glitch text-5xl leading-tight text-emerald-300 md:text-6xl">
            discretion. power. protection.
          </h1>

          <p className="mt-6 max-w-xl text-sm text-emerald-100/80 md:text-base">
            book private protection services and armored transport tailored to your needs and risk level.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/feed"
              className="neon-btn"
            >
              book protection
            </Link>

            <a
              href="#contact"
              className="neon-btn-outline"
            >
              corporate inquiry
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-xs tracking-widest text-emerald-100/70">
            <span className="tag">secure</span>
            <span className="tag">armored</span>
            <span className="tag">licensed</span>
            <span className="tag">discreet</span>
            <span className="tag">high-risk</span>
          </div>
        </div>

        {/* right-side visual panel */}
        <div className="relative">
          <div className="panel-frame">
            <div className="panel-inner">
              <div className="flex items-center justify-between text-xs text-emerald-100/70">
                <span>secure node • refuge</span>
                <span>v1.0.0</span>
              </div>
              <div className="mt-6 space-y-3 text-sm text-emerald-100/80">
                <div className="row">
                  <span>status</span>
                  <span className="text-emerald-200">ready</span>
                </div>
                <div className="row">
                  <span>mode</span>
                  <span>mvp</span>
                </div>
                <div className="row">
                  <span>routing</span>
                  <span>active</span>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-emerald-400/20" />

              <div className="mt-6 text-xs text-emerald-100/70">
                demo note: feed + booking flow next
              </div>
            </div>
          </div>

          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-emerald-400/10 blur-2xl" />
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl" />
        </div>
      </section>
    </main>
  )
}
