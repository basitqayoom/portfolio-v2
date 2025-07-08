import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Basit Qayoom - CV | Software Development Engineer",
  description:
    "Professional CV of Basit Qayoom, Software Development Engineer with expertise in React, Next.js, and modern web development.",
  keywords: "CV, Resume, Software Developer, React, Next.js, TypeScript, JavaScript",
  authors: [{ name: "Basit Qayoom" }],
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  )
}
