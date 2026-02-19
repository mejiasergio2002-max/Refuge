import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-2xl border border-black p-10">

        <div className="flex justify-between text-sm mb-8">
          <span>SECURE NODE • LOGIN</span>
          <span>v1.0.0</span>
        </div>

        <h1 className="text-4xl tracking-widest">
          Access Portal
        </h1>

        <p className="mt-4 text-sm text-black/60">
          Authenticate to enter the system.
        </p>

        <div className="mt-10 space-y-6">

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
            />
          </div>

          <button className="w-full border border-black bg-black text-white py-4 tracking-widest hover:opacity-90 transition">
            INITIATE ACCESS
          </button>

        </div>

        <div className="mt-8 flex justify-between text-sm text-black/60">
          <Link href="/register" className="underline">
            Create Access
          </Link>

          <Link href="/" className="underline">
            ← Back
          </Link>
        </div>

      </div>
    </main>
  )
}
