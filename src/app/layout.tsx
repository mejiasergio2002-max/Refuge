import "./globals.css"
import type { ReactNode } from "react"
import { Rajdhani, Inter } from "next/font/google"

const display = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata = {
  title: "refuge",
  description: "your safety. my priority.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
