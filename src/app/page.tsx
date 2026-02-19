import Link from "next/link"

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-6xl tracking-widest">
          Refuge.
        </h1>

        <div className="flex flex-col gap-4 items-center">
          <Link
            href="/login"
            className="w-48 border border-black py-2 hover:bg-black hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="w-48 border border-black py-2 hover:bg-black hover:text-white transition"
          >
            Register
          </Link>

          <Link
            href="/feed"
            className="w-48 border border-black py-2 hover:bg-black hover:text-white transition"
          >
            Enter
          </Link>
        </div>
      </div>
    </main>
  )
}
