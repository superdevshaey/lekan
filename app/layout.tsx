import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LEKAN AARE — A King Has Rested",
  description:
    "A collection inspired by the regal spirit of Yoruba kingship and the vibrant traditions of the Ojude Oba Festival..",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans`}>{children}</body>
    </html>
  )
}
