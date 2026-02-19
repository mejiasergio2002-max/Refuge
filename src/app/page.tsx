import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
          Refuge.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-black/70">
          <span className="font-semibold text-black">Your Safety.</span>{" "}
          <span className="font-semibold text-black">My Priority.</span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/register"
            className="w-56 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="w-56 rounded-xl border border-black/15 bg-white px-6 py-3 text-sm font-semibold hover:bg-black/5"
          >
            Login
          </Link>

          <Link
            href="/feed"
            className="w-56 rounded-xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 hover:bg-black/5"
          >
            Enter Feed
          </Link>
        </div>
      </div>
    </main>
  )
}
