import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://northernresearchinstitute.org"),
  title: "Northern Research Institute (NRI) - Transforming Research into Practical Solutions",
  description:
    "The Northern Research Institute (NRI) advances research, innovation, governance, partnerships, and development impact in Sri Lanka's Northern Province.",
  openGraph: {
    type: "website",
    url: "https://northernresearchinstitute.org",
    siteName: "Northern Research Institute",
    title: "Northern Research Institute (NRI)",
    description:
      "Transforming research into practical solutions for innovation, policy, business, and community development.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
