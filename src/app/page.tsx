import Link from "next/link"

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-7xl tracking-widest text-black">
          refuge.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-black">
          your safety. my priority.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Link
            href="/register"
            className="w-60 rounded-lg border border-black bg-black px-6 py-3 text-white tracking-widest hover:opacity-90 transition"
          >
            register
          </Link>

          <Link
            href="/login"
            className="w-60 rounded-lg border border-black bg-white px-6 py-3 text-black tracking-widest hover:bg-black hover:text-white transition"
          >
            login
          </Link>

          <Link
            href="/feed"
            className="w-60 rounded-lg border border-black bg-white px-6 py-3 text-black tracking-widest hover:bg-black hover:text-white transition"
          >
            enter feed
          </Link>
        </div>
      </div>
    </main>
  )
}
