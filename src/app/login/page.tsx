import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl border border-black p-2">
        <div className="border border-black p-8 md:p-10">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-black" />
              <span>secure node • login</span>
            </div>
            <span>v1.0.0</span>
          </div>

          <h1 className="mt-8 text-5xl tracking-widest">access portal</h1>

          <p className="mt-4 text-sm text-black/60 max-w-xl">
            authenticate your credentials to enter the system.
          </p>

          <div className="mt-10 space-y-7">
            <div>
              <label className="block text-sm mb-2">email</label>
              <input
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                type="email"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">password</label>
              <input
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                type="password"
              />
            </div>

            <button className="w-full border border-black bg-black text-white py-4 tracking-widest hover:opacity-90 transition">
              initiate access
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-black/60">
            <div>
              new here?{" "}
              <Link href="/register" className="underline">
                create access&lt;/&gt;
              </Link>
            </div>
            <div className="md:text-right">
              <Link href="/" className="underline">
                back&lt;/&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
