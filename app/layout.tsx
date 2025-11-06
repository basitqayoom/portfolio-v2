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
  keywords: "Portfolio, Software Engineer, React, Next.js, TypeScript, JavaScript, Micro-Frontend, Performance Optimization, Web Development, Design Systems, Frontend Engineer, Full Stack Developer, Basit Qayoom, Web Developer",
  authors: [{ name: "Basit Qayoom" }],
  creator: "Basit Qayoom",
  publisher: "Basit Qayoom",
  metadataBase: new URL('https://iambasit.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/profile.ico',
    shortcut: '/profile.ico',
    apple: '/profile.ico',
  },
  openGraph: {
    title: "Basit Qayoom - Software Engineer Portfolio",
    description: "Professional portfolio showcasing expertise in modern web development, micro-frontend architecture, and performance optimization. 2.5+ years of experience building scalable applications.",
    type: "website",
    locale: "en_US",
    url: "https://iambasit.vercel.app",
    siteName: "Basit Qayoom Portfolio",
    images: [
      {
        url: '/profile.webp',
        width: 1200,
        height: 630,
        alt: 'Basit Qayoom - Software Engineer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Basit Qayoom - Software Engineer Portfolio",
    description: "Software Engineer specializing in React, Next.js, TypeScript, and micro-frontend architectures. Building scalable, high-performance web applications.",
    images: ['/profile.webp'],
    creator: "@basitqayoom",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Basit Qayoom",
    jobTitle: "Software Engineer",
    description: "Software Engineer with 2.5+ years of experience specializing in React, Next.js, TypeScript, and micro-frontend architectures.",
    url: "https://iambasit.vercel.app",
    image: "https://iambasit.vercel.app/profile.webp",
    email: "basitqayoomchowdhary@gmail.com",
    telephone: "+919682132612",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
      postalCode: "201309"
    },
    sameAs: [
      "https://www.linkedin.com/in/bqc/",
      "https://github.com/basitqayoom",
      "https://leetcode.com/u/basitqayoomchowdhary/"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "National Institute of Technology (NIT) Srinagar"
    },
    worksFor: {
      "@type": "Organization",
      name: "Physics Wallah"
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Micro-Frontend Architecture",
      "Design Systems",
      "Performance Optimization",
      "Web Development"
    ]
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans overflow-x-hidden">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
