import Link from "next/link"

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center flex flex-col items-center gap-8">

        {/* logo */}
        <img
          src="/brand/logo.svg"
          alt="refuge"
          className="h-14 w-14"
        />

        {/* title */}
        <h1 className="text-6xl md:text-7xl tracking-widest neon-title">
          refuge.
        </h1>

        {/* tagline (optional, remove if you want ultra-minimal) */}
        <p className="text-sm md:text-base text-black/60 tracking-widest">
          your safety. my priority.
        </p>

        {/* buttons */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <Link href="/login" className="neon-btn w-56">
            login
          </Link>

          <Link href="/register" className="neon-btn w-56">
            register
          </Link>

          <Link href="/feed" className="neon-btn-ghost w-56">
            enter
          </Link>
        </div>
      </div>
    </main>
  )
}
