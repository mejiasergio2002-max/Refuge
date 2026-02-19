import Link from "next/link"
import { Share_Tech_Mono } from "next/font/google"

const matrixFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  return (
    <main
      className={`${matrixFont.className} min-h-screen flex items-center justify-center bg-white`}
    >
      <div className="flex flex-col items-center text-center space-y-6">

        <h1 className="text-6xl md:text-7xl tracking-widest">
          Refuge.
        </h1>

        <p className="text-lg md:text-xl">
          Your Safety. My Priority.
        </p>

        <div className="flex flex-col items-center space-y-3 mt-6">

          <Link
            href="/register"
            className="w-60 rounded-lg bg-black px-6 py-3 text-white hover:opacity-90 transition"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="w-60 rounded-lg border border-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/feed"
            className="w-60 rounded-lg border border-black px-6 py-3 hover:bg-black hover:text-white transition"
          >
            Enter Feed
          </Link>

        </div>

      </div>
    </main>
  )
}
