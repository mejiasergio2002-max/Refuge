import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="matrix-bg flex items-center justify-center px-6 py-14">
      <div className="relative z-10 w-full max-w-3xl glow-frame">
        <div className="panel p-8 md:p-10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-3">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_14px_rgba(0,255,120,0.6)]" />
              <span className="uppercase tracking-[0.22em] text-white/80">
                secure node • login
              </span>
            </div>
            <span className="uppercase tracking-[0.18em] text-white/70">v1.0.0</span>
          </div>

          <h1 className="mt-10 text-5xl md:text-6xl tracking-widest neon-text">
            access portal
          </h1>

          <p className="mt-4 text-sm text-white/70 max-w-2xl">
            authenticate your credentials to enter the system.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <label className="block text-sm text-white/75 mb-2">email</label>
              <input className="field" type="email" />
            </div>

            <div>
              <label className="block text-sm text-white/75 mb-2">
                password
              </label>
              <input className="field" type="password" />
            </div>

            <button className="btn-neon">initiate access</button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-sm text-white/70">
              <div>
                new here?{" "}
                <Link href="/register" className="small-link">
                  create access&lt;/&gt;
                </Link>
              </div>
              <div className="md:text-right">
                <Link href="/" className="small-link">
                  back&lt;/&gt;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
