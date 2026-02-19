import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-emerald-200">
      {/* background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/home-backdrop.jpg")' }}
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* matrix overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-45 mix-blend-screen">
        <div className="matrix-rain h-full w-full" />
      </div>

      {/* top nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <img src="/brand/logo.svg" alt="refuge" className="h-9 w-9" />
          <span className="text-xl tracking-widest text-emerald-300 neon-text">
            refuge
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-emerald-100/75 md:flex">
          <a href="#home" className="hover:text-emerald-100">home</a>
          <a href="#services" className="hover:text-emerald-100">services</a>
          <a href="#vehicles" className="hover:text-emerald-100">vehicles</a>
          <a href="#teams" className="hover:text-emerald-100">protection teams</a>
          <a href="#contact" className="hover:text-emerald-100">contact</a>
        </nav>

        <Link
          href="/"
          className="text-xs tracking-widest text-emerald-100/70 hover:text-emerald-100"
        >
          back
        </Link>
      </header>

      {/* hero */}
      <section
        id="home"
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-16"
      >
        <div>
          <h1 className="text-5xl md:text-6xl tracking-widest leading-tight neon-title">
            discretion. power. protection.
          </h1>

          <p className="mt-6 max-w-xl text-sm md:text-base text-emerald-100/75">
            book elite protection services and armored vehicles tailored to your
            needs and threat level.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/feed" className="neon-btn">
              book protection
            </Link>

            <a href="#contact" className="neon-btn-outline">
              corporate inquiry
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-4 text-xs tracking-widest text-emerald-100/70">
            <span className="tag">secure</span>
            <span className="tag">armored</span>
            <span className="tag">licensed</span>
            <span className="tag">discreet</span>
            <span className="tag">conflict zone</span>
          </div>
        </div>

        {/* right panel */}
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
                  <span>availability</span>
                  <span>limited</span>
                </div>
                <div className="row">
                  <span>routing</span>
                  <span>active</span>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-emerald-400/20" />

              <div className="mt-6 text-xs text-emerald-100/70">
                mvp: browse • request • confirm
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-emerald-400/10 blur-3xl" />
        </div>
      </section>
    </main>
  )
}
