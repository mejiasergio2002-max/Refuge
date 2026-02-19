import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "refuge",
  description: "your safety. my priority.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  )
}
