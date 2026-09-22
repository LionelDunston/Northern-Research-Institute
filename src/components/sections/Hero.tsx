"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [liveCount, setLiveCount] = useState<number | null>(null)
  const [now, setNow] = useState("")

  useEffect(() => {
    fetch("/api/research").then(r=>r.json()).then(d=> setLiveCount(Array.isArray(d)? d.length : 0)).catch(()=>{})
    const t = new Date()
    setNow(t.toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long" }) + " • Jaffna " + t.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}))
    const id = setInterval(()=> {
      const n = new Date()
      setNow(n.toLocaleDateString("en-GB", { weekday:"long", day:"numeric", month:"long" }) + " • Jaffna " + n.toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}))
    }, 60000)
    return ()=> clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2de0] via-[#5a1fe0] to-[#ff2d87] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-300/15 rounded-full blur-3xl" />
      </div>
      <div className="container-wide relative py-16 sm:py-24 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            Live — {now || "Jaffna, Sri Lanka"} {liveCount!==null && `• ${liveCount} submissions so far`}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.05]">
            Got research? Let’s make it matter.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            We’re a small team in Jaffna. We read your paper, sit with you, and help turn it into something real — a product people buy, or a programme that helps a village. No big talk. Just practical steps.
          </p>
          <p className="mt-3 text-sm text-white/70 max-w-2xl mx-auto">
            Published or not yet published — if you have work you care about, bring it. We’ll map it to the right pathway and walk with you to the next stage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/researcher/research" className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-[#0a2de0] font-bold hover:bg-yellow-300 transition-all shadow-xl hover:-translate-y-0.5">
              Submit Your Research
            </Link>
            <Link href="/research-programmes" className="inline-flex items-center px-7 py-3.5 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-[#0a2de0] transition-all">
              See How It Works
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">Researchers welcome</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">Mentors on board</span>
            <span className="px-3 py-1.5 rounded-full bg-emerald-300 text-[#0a2de0] font-bold">We reply within 48 hours</span>
          </div>
        </div>
      </div>
    </section>
  )
}
