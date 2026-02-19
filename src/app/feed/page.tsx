import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← back
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">feed</h1>
        <p className="mt-3 text-sm text-white/65">
          placeholder. feed ui comes next.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">ready for your feed spec.</div>
        </div>
      </div>
    </main>
  )
}
