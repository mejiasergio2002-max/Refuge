import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-2xl border border-black p-10">

        {/* top header row */}
        <div className="flex justify-between text-sm mb-8">
          <span>SECURE NODE • REGISTER</span>
          <span>v1.0.0</span>
        </div>

        {/* title */}
        <h1 className="text-4xl tracking-widest">
          Create Access
        </h1>

        <p className="mt-4 text-sm text-black/60">
          Initialize your identity in the system. Choose strong credentials.
        </p>

        {/* form grid */}
        <div className="mt-10 space-y-6">

          {/* first + last name row */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">First name</label>
              <input
                type="text"
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Last name</label>
              <input
                type="text"
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
            />
          </div>

          {/* username */}
          <div>
            <label className="block text-sm mb-2">Username</label>
            <input
              type="text"
              className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
            />
          </div>

          {/* password row */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
              />
            </div>
          </div>

          {/* checkbox */}
          <div className="flex items-center gap-3 text-sm">
            <input type="checkbox" className="h-4 w-4 border border-black" />
            <span>
              I agree to the{" "}
              <span className="underline cursor-pointer">
                Terms & Conditions
              </span>
            </span>
          </div>

          {/* CTA */}
          <button className="w-full border border-black bg-black text-white py-4 tracking-widest hover:opacity-90 transition">
            INITIATE ACCESS
          </button>

        </div>

        {/* bottom links */}
        <div className="mt-8 flex justify-between text-sm text-black/60">
          <Link href="/login" className="underline">
            Already connected? Login
          </Link>

          <Link href="/" className="underline">
            ← Back
          </Link>
        </div>

      </div>
    </main>
  )
}
