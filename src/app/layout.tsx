import "./globals.css"
import { Share_Tech_Mono } from "next/font/google"
import type { ReactNode } from "react"

const matrixFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "refuge",
  description: "your safety. my priority.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={matrixFont.className}>{children}</body>
    </html>
  )
}
