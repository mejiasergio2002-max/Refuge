import Link from "next/link"

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-6xl md:text-7xl tracking-widest">refuge.</h1>

        <p className="text-lg md:text-xl">your safety. my priority.</p>

        <div className="flex flex-col items-center gap-3 pt-2">
          <Link
            href="/login"
            className="w-60 border border-black py-2 hover:bg-black hover:text-white transition"
          >
            login
          </Link>

          <Link
            href="/register"
            className="w-60 border border-black py-2 hover:bg-black hover:text-white transition"
          >
            register
          </Link>

          <Link
            href="/feed"
            className="w-60 border border-black py-2 hover:bg-black hover:text-white transition"
          >
            enter
          </Link>

          {/* optional: quick jump to home page */}
          <Link
            href="/home"
            className="w-60 border border-black/30 py-2 text-black/70 hover:bg-black hover:text-white transition"
          >
            home
          </Link>
        </div>
      </div>
    </main>
  )
}
