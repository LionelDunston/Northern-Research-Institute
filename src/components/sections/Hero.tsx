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
    <section className="relative overflow-hidden bg-[#050b1f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_80%_at_50%_-10%,#0a2de0_0%,transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="container-wide relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm text-white/80 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {now || "Jaffna, Sri Lanka"}
            {liveCount !== null && <span className="text-white/50">• {liveCount} submissions</span>}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            From Knowledge to Action
          </h1>

          <p className="mt-6 text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            The Northern Research Institute transforms evidence-based, multidisciplinary research into practical
            solutions that benefit society — connecting research, policy, innovation, business, employment, and
            community development.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link
              href="/research-programmes"
              className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-sm font-semibold text-white/90 hover:bg-white/5 hover:border-white/30 transition-colors"
            >
              See How It Works
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-sm font-semibold text-white/90 hover:bg-white/5 hover:border-white/30 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-white/50">
            <span className="inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Researchers welcome</span>
            <span className="inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Mentors on board</span>
            <span className="inline-flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-white/40" />Reply within 48 hours</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  )
}
