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
    <section className="relative overflow-hidden bg-[#0a2de0] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2de0] via-[#1233f0] to-[#061a8f]" />
      <div className="pointer-events-none absolute -top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-cyan-300/10 blur-3xl animate-pulse" style={{ animationDuration: "6s" }} />

      <div className="container-wide relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm text-white/85 mb-7 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
            {now || "Jaffna, Sri Lanka"}
            {liveCount !== null && <span className="text-white/60">• {liveCount} submissions</span>}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            From Knowledge to Action
          </h1>

          <p className="mt-6 text-lg text-white/75 max-w-3xl mx-auto leading-relaxed">
            The Northern Research Institute transforms evidence-based, multidisciplinary research into practical
            solutions that benefit society — connecting research, policy, innovation, business, employment, and
            community development.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link
              href="/research-programmes"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-[#0a2de0] text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              See How It Works
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md border-2 border-white text-sm font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-white/60">
            <span className="inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/50" />Researchers welcome</span>
            <span className="inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/50" />Mentors on board</span>
            <span className="inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/50" />Reply within 48 hours</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
    </section>
  )
}
