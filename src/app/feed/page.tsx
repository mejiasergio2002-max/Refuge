import Link from "next/link"

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← back
        </Link>

        <h1 className="mt-6 font-display text-4xl tracking-widest">feed</h1>
        <p className="mt-3 text-sm text-white/65">
          placeholder. next you’ll tell me what the feed should look like.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">
            feed ui coming next.
          </div>
        </div>
      </div>
    </main>
  )
}
