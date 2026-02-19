import Link from "next/link"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      {/* outer frame */}
      <div className="w-full max-w-2xl border border-black p-2">
        {/* inner frame */}
        <div className="border border-black p-8 md:p-10">
          {/* header row (two columns) */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-black" />
              <span>secure node • register</span>
            </div>
            <span>v1.0.0</span>
          </div>

          {/* title */}
          <h1 className="mt-8 text-5xl tracking-widest">create access</h1>

          {/* description */}
          <p className="mt-4 text-sm text-black/60 max-w-xl">
            initialize your identity in the grid. choose strong credentials.
            no one escapes weak passwords.
          </p>

          {/* form */}
          <div className="mt-10 space-y-7">
            {/* row 1: two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">first name</label>
                <input
                  className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                  type="text"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">last name</label>
                <input
                  className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                  type="text"
                />
              </div>
            </div>

            {/* row 2: full width */}
            <div>
              <label className="block text-sm mb-2">email</label>
              <input
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                type="email"
              />
            </div>

            {/* row 3: full width */}
            <div>
              <label className="block text-sm mb-2">username</label>
              <input
                className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                type="text"
              />
            </div>

            {/* row 4: two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">password</label>
                <input
                  className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                  type="password"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">confirm password</label>
                <div className="flex gap-3">
                  <input
                    className="w-full border border-black px-4 py-3 outline-none focus:bg-black focus:text-white transition"
                    type="password"
                  />
                  <button
                    type="button"
                    className="border border-black px-4 py-3 text-sm hover:bg-black hover:text-white transition"
                  >
                    show
                  </button>
                </div>
              </div>
            </div>

            {/* row 5: checkbox */}
            <div className="flex items-center gap-3 text-sm">
              <input type="checkbox" className="h-4 w-4 border border-black" />
              <span>
                i agree to the{" "}
                <span className="underline cursor-pointer">terms &amp; conditions&lt;/&gt;</span>
              </span>
            </div>

            {/* row 6: button */}
            <button className="w-full border border-black bg-black text-white py-4 tracking-widest hover:opacity-90 transition">
              initiate access
            </button>
          </div>

          {/* footer row (two columns) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-black/60">
            <div>
              already connected?{" "}
              <Link href="/login" className="underline">
                login&lt;/&gt;
              </Link>
            </div>
            <div className="md:text-right">
              need help?{" "}
              <span className="underline cursor-pointer">system support&lt;/&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
