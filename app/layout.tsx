import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Basit Qayoom - Portfolio | Software Engineer",
  description:
    "Professional portfolio of Basit Qayoom, Software Engineer with 2.5+ years of experience in React, Next.js, and modern web development. Specialized in micro-frontend architectures and performance optimization.",
  keywords: "Portfolio, Software Engineer, React, Next.js, TypeScript, JavaScript, Micro-Frontend, Performance Optimization, Web Development, Design Systems",
  authors: [{ name: "Basit Qayoom" }],
  icons: {
    icon: '/profile.ico',
    shortcut: '/profile.ico',
    apple: '/profile.ico',
  },
  openGraph: {
    title: "Basit Qayoom - Software Engineer",
    description: "Professional portfolio showcasing expertise in modern web development and micro-frontend architecture",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans overflow-x-hidden">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
