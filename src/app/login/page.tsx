import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="grid min-h-screen md:grid-cols-2">

        {/* left brand panel */}
        <div className="hidden md:flex flex-col justify-between bg-gradient-to-br from-neutral-900 to-black text-white p-12">
          <div>
            <div className="text-sm tracking-[0.2em] font-semibold opacity-70">
              refuge
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight">
              welcome back.
            </h1>

            <p className="mt-6 text-sm opacity-70 max-w-md">
              sign in to manage bookings and access your feed.
            </p>
          </div>

          <div className="text-xs opacity-50">
            secure access • mvp preview
          </div>
        </div>

        {/* right form panel */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">

            <Link href="/" className="text-sm text-black/60 hover:text-black">
              ← back
            </Link>

            <h2 className="mt-8 text-3xl font-semibold">
              sign in
            </h2>

            <p className="mt-2 text-sm text-black/60">
              enter your credentials below.
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
                sign in
              </button>
            </div>

            <div className="mt-6 text-sm text-black/60">
              new here?{" "}
              <Link href="/register" className="font-semibold text-black">
                create account
              </Link>
            </div>

          </div>
        </div>

      </div>
    </main>
  )
}
