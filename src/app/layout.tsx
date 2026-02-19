import "./globals.css"
import type { ReactNode } from "react"
import { Orbitron, Inter } from "next/font/google"

const display = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
})

const body = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "Refuge",
  description: "Your Safety. My Priority.",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${body.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
