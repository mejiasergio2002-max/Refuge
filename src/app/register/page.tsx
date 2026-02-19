import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="matrix-bg flex items-center justify-center px-6 py-14">
      <div className="relative z-10 w-full max-w-3xl glow-frame">
        <div className="panel p-8 md:p-10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_14px_rgba(0,255,120,0.6)]" />
              <span className="uppercase tracking-[0.22em] text-white/80">
                secure node • register
              </span>
            </div>
            <span className="uppercase tracking-[0.18em] text-white/70">v1.0.0</span>
          </div>

          <h1 className="mt-10 text-5xl md:text-6xl tracking-widest neon-text">
            create access
          </h1>

          <p className="mt-4 text-sm text-white/70 max-w-2xl">
            initialize your identity in the grid. choose strong credentials.
            <br />
            no one escapes weak passwords.
          </p>

          <div className="mt-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/75 mb-2">
                  first name
                </label>
                <input className="field" type="text" />
              </div>

              <div>
                <label className="block text-sm text-white/75 mb-2">
                  last name
                </label>
                <input className="field" type="text" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/75 mb-2">email</label>
              <input className="field" type="email" />
            </div>

            <div>
              <label className="block text-sm text-white/75 mb-2">
                username
              </label>
              <input className="field" type="text" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-white/75 mb-2">
                  password
                </label>
                <input className="field" type="password" />
              </div>

              <div>
                <label className="block text-sm text-white/75 mb-2">
                  confirm password
                </label>

                <div className="flex gap-3">
                  <input className="field" type="password" />

                  <button
                    type="button"
                    className="border border-green-400/60 bg-black/30 px-5 py-3 text-sm uppercase tracking-[0.18em] text-white/85 hover:bg-green-400/10"
                  >
                    show
                  </button>
                </div>
              </div>
            </div>

            <label className="flex items-center gap-3 text-sm text-white/75">
              <input type="checkbox" className="h-4 w-4 accent-green-400" />
              <span>
                i agree to the{" "}
                <span className="small-link">terms &amp; conditions&lt;/&gt;</span>
              </span>
            </label>

            <button className="btn-neon">initiate access</button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-sm text-white/70">
              <div>
                already connected?{" "}
                <Link href="/login" className="small-link">
                  login&lt;/&gt;
                </Link>
              </div>
              <div className="md:text-right">
                need help? <span className="small-link">system support&lt;/&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
