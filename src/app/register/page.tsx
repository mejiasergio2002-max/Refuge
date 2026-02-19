cat > src/app/register/page.tsx <<'eof'
import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-xl px-6 py-16">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← back
        </Link>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight">register</h1>
        <p className="mt-3 text-sm text-white/65">
          placeholder page. next step: connect auth.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-3">
            <input
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/25"
              placeholder="email"
            />
            <input
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/25"
              placeholder="password"
              type="password"
            />
            <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90">
              create account
            </button>
          </div>

          <div className="mt-6 text-xs text-white/50">
            already have an account?{" "}
            <Link className="text-white/70 hover:text-white" href="/login">
              login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
eof
