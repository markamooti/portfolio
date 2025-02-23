import type React from "react"
import type { Metadata } from "next"
import { Courier_Prime } from "next/font/google"
import "./globals.css"
import Link from "next/link"

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
      <body className={`${courierPrime.variable} font-sans bg-black min-h-screen flex flex-col`}>
        <header className="p-4 border-b border-white/20">
          <nav className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-white hover:text-green-400 text-xl font-bold">
              MN
            </Link>
            <div className="space-x-4">
              <Link href="/" className="text-white hover:text-green-400">
                Home
              </Link>
              <Link href="/projects" className="text-white hover:text-green-400">
                Projects
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="p-4 border-t border-white/20 text-center text-white text-sm">
          © {new Date().getFullYear()} Mark Norman. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

