"use client"

import Link from "next/link"
import { siteConfig, contactInfo } from "@/lib/data"

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "RTI Programme", href: "/rti" },
  { label: "Research Programmes", href: "/research-programmes" },
  { label: "News & Events", href: "/news" },
  { label: "Partnerships", href: "/partnerships" },
]

const stakeholders = [
  { label: "Researchers", href: "/rti#research-portal" },
  { label: "Investors", href: "/rti#investor-portal" },
  { label: "Government", href: "/rti#government-portal" },
  { label: "NGOs", href: "/rti#ngo-portal" },
  { label: "Businesses", href: "/rti#business-portal" },
]

export function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="t-head">
              Northern
              <br />
              Research Institute
            </h2>
            <p className="t-body mt-6 max-w-sm text-white/85">{siteConfig.description}</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 t-meta text-white/85">
              <span>{contactInfo.address}</span>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="link-rule hover:text-white">
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="link-rule hover:text-white">
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="t-small text-white/70">Navigate</h3>
              <ul className="mt-5 space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-rule t-meta text-white/85 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="t-small text-white/70">For stakeholders</h3>
              <ul className="mt-5 space-y-2.5">
                {stakeholders.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="link-rule t-meta text-white/85 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="t-small text-white/70">Connect</h3>
              <ul className="mt-5 space-y-2.5">
                {["LinkedIn", "Twitter", "Facebook", "YouTube"].map((platform) => (
                  <li key={platform}>
                    <Link href="#" className="link-rule t-meta text-white/85 hover:text-white">
                      {platform}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-deep">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="t-small text-white/80">&copy; {new Date().getFullYear()} Northern Research Institute. All rights reserved.</p>
          <p className="t-small text-white/70">Research · Policy · Enterprise · Community</p>
        </div>
      </div>
    </footer>
  )
}
