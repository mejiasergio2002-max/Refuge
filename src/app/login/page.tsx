import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-xl border border-black/20 p-10">

        <div className="flex justify-between text-sm text-black/60">
          <span>SECURE NODE • LOGIN</span>
          <span>v1.0.0</span>
        </div>

        <h1 className="mt-8 text-3xl tracking-widest">
          Access Portal
        </h1>

        <p className="mt-4 text-sm text-black/60">
          Authenticate your credentials to enter the system.
        </p>

        <div className="mt-8 space-y-5">

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-black/30 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              className="w-full border border-black/30 px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <button className="w-full border border-black bg-black text-white py-3 hover:opacity-90 transition">
            INITIATE ACCESS
          </button>

        </div>

        <div className="mt-6 flex justify-between text-sm text-black/60">
          <Link href="/register" className="hover:underline">
            Create Access
          </Link>
          <Link href="/" className="hover:underline">
            ← Back
          </Link>
        </div>

      </div>
    </main>
  )
}
