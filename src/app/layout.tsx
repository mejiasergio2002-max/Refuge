import "./globals.css"
import { Share_Tech_Mono } from "next/font/google"
import type { ReactNode } from "react"

const matrix = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "Refuge",
  description: "Your Safety. My Priority.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${matrix.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  )
}
