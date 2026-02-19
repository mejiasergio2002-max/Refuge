import Link from "next/link"
import { Orbitron } from "next/font/google"

const display = Orbitron({
  subsets: ["latin"],
  weight: ["700"],
})

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">

        <h1 className={`${display.className} text-6xl md:text-7xl tracking-widest`}>
          Refuge.
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light">
          <span className="font-semibold text-white">Your Safety.</span>{" "}
          <span className="font-semibold text-white">My Priority.</span>
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/register"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Login
          </Link>

          <Link
            href="/feed"
            className="px-8 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Enter Feed
          </Link>

        </div>

      </div>
    </main>
  )
}
