"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig, contactInfo } from "@/lib/data"

const dashboardPaths = ["/admin", "/mentor", "/student", "/partner"]

export function Footer() {
  const pathname = usePathname()

  if (dashboardPaths.some((p) => pathname.startsWith(p))) {
    return null
  }

  return (
    <footer className="bg-primary text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/nri-logo.svg" alt="Northern Research Institute" className="h-14 w-auto" />
            </div>
            <p className="text-sm text-white/80 leading-relaxed">{siteConfig.description.slice(0, 160)}...</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/rti" className="text-sm text-white/70 hover:text-white transition-colors">RTI Programme</Link></li>
              <li><Link href="/research-programmes" className="text-sm text-white/70 hover:text-white transition-colors">Research</Link></li>
              <li><Link href="/news" className="text-sm text-white/70 hover:text-white transition-colors">News & Events</Link></li>
              <li><Link href="/partnerships" className="text-sm text-white/70 hover:text-white transition-colors">Partnerships</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Stakeholders</h3>
            <ul className="space-y-2">
              <li><Link href="/rti#research-portal" className="text-sm text-white/70 hover:text-white transition-colors">Researchers</Link></li>
              <li><Link href="/rti#investor-portal" className="text-sm text-white/70 hover:text-white transition-colors">Investors</Link></li>
              <li><Link href="/rti#government-portal" className="text-sm text-white/70 hover:text-white transition-colors">Government</Link></li>
              <li><Link href="/rti#business-portal" className="text-sm text-white/70 hover:text-white transition-colors">Businesses</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Jaffna, Sri Lanka</li>
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">&copy; {new Date().getFullYear()} Northern Research Institute. All rights reserved.</p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter", "Facebook", "YouTube"].map((platform) => (
              <Link key={platform} href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                {platform}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
