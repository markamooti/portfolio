import type React from "react"
import type { Metadata } from "next"
import { Courier_Prime } from "next/font/google"
import "./globals.css"

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
})

export const metadata: Metadata = {
  title: "Mark Norman | 🜁",
  description: "Mark Norman's Profile",
  keywords: "mark the norman markthenorman",
  authors: [{ name: "Mark Norman" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${courierPrime.variable} font-sans`}>{children}</body>
    </html>
  )
}

