"use client"

import { useEffect, useState } from "react"

export function WelcomeMessage() {
  const [recent, setRecent] = useState<any[]>([])
  useEffect(()=>{ fetch("/api/research").then(r=>r.json()).then(d=> setRecent(Array.isArray(d)? d.slice(0,3):[])).catch(()=>{}) },[])
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-[#0a2de0] via-[#1e3af5] to-[#06b6d4] text-white">
      <div className="container-wide relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-white/60">A note from our team</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">We started NRI because research shouldn’t sit on a shelf.</h2>
          <p className="mt-5 text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
            I’m sure you’ve felt it — you spend months on a paper, it gets published, and then… nothing. We built NRI to change that. Whether you’re a student in Jaffna, a lecturer in Colombo, or a small team with a prototype, we look at what you have and ask: where can this actually help?
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15">
              <div className="text-xs font-bold tracking-widest uppercase text-cyan-200">01 — Share</div>
              <h3 className="mt-2 font-bold">Tell us what you have</h3>
              <p className="text-sm text-white/75 mt-1">Published or not, upload what you’ve got. We read it properly — no auto-reject.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15">
              <div className="text-xs font-bold tracking-widest uppercase text-yellow-200">02 — Shape it</div>
              <h3 className="mt-2 font-bold">We work on it together</h3>
              <p className="text-sm text-white/75 mt-1">A mentor calls you, we map the next step — lab test, village pilot, or business plan.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/15">
              <div className="text-xs font-bold tracking-widest uppercase text-emerald-200">03 — See it live</div>
              <h3 className="mt-2 font-bold">You see it happen</h3>
              <p className="text-sm text-white/75 mt-1">We track it openly — submissions, reviews, pilots — so you know where you stand.</p>
            </div>
          </div>
          {recent.length>0 && (
            <div className="mt-10 bg-white/10 backdrop-blur rounded-2xl p-4 border border-white/15 text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">Live now — recent submissions</div>
              <div className="mt-2 space-y-1.5">
                {recent.map((r:any)=> (
                  <div key={r.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="truncate text-white">{r.title}</span>
                    <span className="text-xs text-white/60 shrink-0">{r.location || r.district || "Sri Lanka"} • {new Date(r.created_at).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
