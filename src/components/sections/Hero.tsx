"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { siteConfig } from "@/lib/data"

export function Hero() {
  const [liveCount, setLiveCount] = useState<number | null>(null)
  const [now, setNow] = useState("")

  useEffect(() => {
    fetch("/api/research")
      .then((r) => r.json())
      .then((d) => setLiveCount(Array.isArray(d) ? d.length : 0))
      .catch(() => {})
    const clock = () => {
      const t = new Date()
      setNow(
        t.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) +
          " • Jaffna " +
          t.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      )
    }
    clock()
    const id = setInterval(clock, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent text-white overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)" }} />
      <div className="container-wide relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300" />
            {now || "Jaffna, Sri Lanka"}
            {liveCount !== null && ` • ${liveCount} submissions so far`}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            From Knowledge to Action
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            The Northern Research Institute (NRI) transforms evidence-based, multidisciplinary research into practical
            solutions that benefit society. By connecting research, data, and knowledge with policy, innovation,
            business, entrepreneurship, employment, and community development, NRI creates pathways for knowledge to
            become measurable impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/researcher/research"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              Submit Your Research
            </Link>
            <Link
              href="/research-programmes"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              See How It Works
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center text-xs font-medium uppercase tracking-wider">
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">Researchers welcome</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20">Mentors on board</span>
            <span className="px-3 py-1.5 rounded-full bg-white text-primary font-semibold normal-case tracking-normal">We reply within 48 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}
