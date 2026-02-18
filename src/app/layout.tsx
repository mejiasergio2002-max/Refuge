import type { reactnode } from "react"

export const metadata = {
  title: "refuge",
  description: "security booking platform",
}

export default function rootlayout({ children }: { children: reactnode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
