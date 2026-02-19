import "./globals.css";
import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";

const matrixMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Refuge",
  description: "Your Safety. My Priority.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={matrixMono.className}>{children}</body>
    </html>
  );
}
