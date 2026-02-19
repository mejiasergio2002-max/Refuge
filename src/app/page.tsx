import Link from "next/link"
import { Share_Tech_Mono } from "next/font/google"

const matrixFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Matrix glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#003300_0%,#000000_70%)]"></div>

      <div className="relative z-10 text-center px-6">

        <h1
          className={`${matrixFont.className} text-6xl md:text-7xl tracking-widest text-green-400 drop-shadow-[0_0_20px_#00ff00]`}
        >
          Refuge.
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-green-300">
          <span className="font-semibold">Your Safety.</span>{" "}
          <span className="font-semibold">My Priority.</span>
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/register"
            className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition shadow-[0_0_15px_#00ff00]"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-black transition"
          >
            Login
          </Link>

          <Link
            href="/feed"
            className="px-8 py-3 border border-green-600 text-green-500 font-semibold rounded-lg hover:bg-green-600 hover:text-black transition"
          >
            Enter Feed
          </Link>

        </div>

      </div>
    </main>
  )
}
