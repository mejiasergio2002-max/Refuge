import * as react from "react"

export const metadata = {
  title: "refuge",
  description: "security booking platform",
}

export default function rootlayout({
  children,
}: {
  children: react.reactnode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
