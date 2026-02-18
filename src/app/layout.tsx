export const metadata = {
  title: "refuge",
  description: "security booking platform",
}

export default function rootlayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
