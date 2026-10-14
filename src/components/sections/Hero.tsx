"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

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
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <div className="container-wide relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 shadow-sm backdrop-blur-sm transition-transform hover:scale-[1.01]">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            {now || "Jaffna, Sri Lanka"}
            {liveCount !== null && ` • ${liveCount} submissions so far`}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            From Knowledge to Action
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            The Northern Research Institute (NRI) transforms evidence-based, multidisciplinary research into practical
            solutions that benefit society. Connecting research, policy, innovation, business, entrepreneurship,
            employment, and community development to turn knowledge into measurable impact.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link
              href="/researcher/research"
              className="group inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary font-semibold shadow-lg hover:bg-white/95 transition-all hover:-translate-y-0.5 focus:ring-2 focus:ring-white/40 focus:outline-none"
            >
              Submit Your Research
              <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/research-programmes"
              className="group inline-flex items-center px-6 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5 focus:ring-2 focus:ring-white/40 focus:outline-none"
            >
              See How It Works
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center px-6 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all hover:-translate-y-0.5 focus:ring-2 focus:ring-white/40 focus:outline-none"
            >
              Contact Us
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-2 sm:gap-3 justify-center text-xs font-medium uppercase tracking-wider">
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm">Researchers welcome</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm">Mentors on board</span>
            <span className="px-3 py-1.5 rounded-full bg-white text-primary font-semibold normal-case tracking-normal shadow-sm">We reply within 48 hours</span>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 -bottom-1 h-10 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
