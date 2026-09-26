"use client"

import { useEffect, useState } from "react"

export function WelcomeMessage() {
  const [recent, setRecent] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/research")
      .then((r) => r.json())
      .then((d) => setRecent(Array.isArray(d) ? d.slice(0, 3) : []))
      .catch(() => {})
  }, [])

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            We started NRI because research should not sit on a shelf
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            You spend months on a paper, it gets published, and then nothing happens with it. That is the part we
            could not accept. So we built the Northern Research Institute around a simple idea: sit down with a
            researcher, understand the work honestly, and ask one question - where can this actually help?
          </p>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Whether you are a student in Jaffna, a lecturer in Colombo, or a small team holding a rough prototype, we
            look at what you have and map the next step together. Through our Research-to-Impact programme, that step
            might be a lab test, a village pilot, a working prototype, or a business that survives on its own.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-xl border border-white/20">
              <p className="text-sm font-semibold text-white/70">Step one</p>
              <h3 className="mt-2 text-lg font-semibold">Tell us what you have</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                Published or not, upload your work. We read it properly, there is no auto-reject.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/20">
              <p className="text-sm font-semibold text-white/70">Step two</p>
              <h3 className="mt-2 text-lg font-semibold">We work on it together</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                A mentor calls you, we map the route - prototype, pilot, or a proper business plan.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/20">
              <p className="text-sm font-semibold text-white/70">Step three</p>
              <h3 className="mt-2 text-lg font-semibold">You see it happen</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">
                Submissions, reviews and pilots stay visible, so you always know where you stand.
              </p>
            </div>
          </div>

          {recent.length > 0 && (
            <div className="mt-10 text-left">
              <p className="text-sm font-semibold text-white/70">Live now - recent submissions</p>
              <div className="mt-3 divide-y divide-white/15 rounded-xl border border-white/20 overflow-hidden">
                {recent.map((r: any) => (
                  <div key={r.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                    <span className="truncate text-white/90">{r.title}</span>
                    <span className="text-white/60 text-xs">
                      {r.location || r.district || "Sri Lanka"} - {new Date(r.created_at).toLocaleDateString("en-GB")}
                    </span>
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
