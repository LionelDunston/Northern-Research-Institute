"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [liveCount, setLiveCount] = useState<number | null>(null)
  const [now, setNow] = useState("")

  useEffect(() => {
    fetch("/api/research").then((r) => r.json()).then((d) => setLiveCount(Array.isArray(d) ? d.length : 0)).catch(() => {})
    const clock = () => {
      const t = new Date()
      setNow(
        t.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) +
        " - Jaffna " +
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
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300" />
            {now || "Jaffna, Sri Lanka"}
            {liveCount !== null && ` - ${liveCount} submissions so far`}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Got research? Let&apos;s make it matter.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We are a small team in Jaffna. We read your work, sit with you, and help turn it into something real - a
            product people buy, or a programme that helps a village. No big talk, just practical steps.
          </p>
          <p className="mt-4 text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Published or not yet published, if you have work you care about, bring it. We will map it to the right
            pathway and walk with you to the next stage.
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
