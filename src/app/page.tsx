import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen md:grid-cols-2">

        {/* left brand panel */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-black to-neutral-800 text-white p-12">
          <div>
            <div className="text-sm tracking-[0.2em] font-semibold opacity-70">
              refuge
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight">
              your safety.
              <br />
              my priority.
            </h1>

            <p className="mt-6 text-sm opacity-70 max-w-md">
              book verified security professionals and manage your requests in one clean dashboard.
            </p>
          </div>

          <div className="text-xs opacity-50">
            mvp preview • secure • verified-first
          </div>
        </div>

        {/* right form panel */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">

            <Link href="/" className="text-sm text-black/60 hover:text-black">
              ← back
            </Link>

            <h2 className="mt-8 text-3xl font-semibold">
              create account
            </h2>

            <p className="mt-2 text-sm text-black/60">
              start using refuge today.
            </p>

            <div className="mt-8 space-y-4">
              <input
                type="email"
                placeholder="email"
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-black/5"
              />

              <input
                type="password"
                placeholder="password"
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-black/5"
              />

              <button className="w-full rounded-xl bg-black py-3 text-sm font-semibold text-white hover:opacity-90">
                create account
              </button>
            </div>

            <div className="mt-6 text-sm text-black/60">
              already have an account?{" "}
              <Link href="/login" className="font-semibold text-black">
                login
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
