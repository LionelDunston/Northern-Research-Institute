"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export function WelcomeMessage() {
  const [recent, setRecent] = useState<any[]>([])
  const [active, setActive] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    fetch("/api/research")
      .then((r) => r.json())
      .then((d) => setRecent(Array.isArray(d) ? d.slice(0, 4) : []))
      .catch(() => {})
  }, [])

  useEffect(() => {
    if (recent.length < 2) return
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => setActive((i) => (i + 1) % recent.length), 4000)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [recent])

  const steps = [
    { title: "Tell us what you have", desc: "Published or not, upload your work. We read it properly — no auto-reject." },
    { title: "We work on it together", desc: "A mentor speaks with you. We map the route: prototype, pilot, or a business plan." },
    { title: "You see it happen", desc: "Submissions, reviews and pilots stay visible so you always know where you stand." },
  ]

  const flow = [
    "Research",
    "Identify Problems & Opportunities",
    "Generate Evidence & Solutions",
    "Policy / Project / Business / Enterprise",
    "Training & Skills Development",
    "Funding & Partnerships",
    "Employment / Self-Employment",
    "Community Impact",
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">From Knowledge to Action</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Knowledge doesn’t need to stay in a document
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              The North holds strong intellectual capital. NRI brings it into use — informing policy, inspiring
              innovation, developing businesses and industries, creating employment, and addressing real social and
              development challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-foreground">Your Research Has a Future Beyond the Document</h3>
                <p className="mt-3 text-base text-muted leading-relaxed">
                  Are you a researcher? We connect your work with the right pathway — policy, project, business,
                  enterprise, employment, innovation, or a community solution.
                </p>
                <div className="mt-6 space-y-4">
                  {steps.map((s, i) => (
                    <div key={s.title} className="flex gap-3">
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{s.title}</p>
                        <p className="mt-1 text-sm text-muted leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="p-6 sm:p-8 flex-1">
                <h3 className="text-xl font-semibold text-foreground">Translating Knowledge into Action</h3>
                <p className="mt-3 text-base text-muted leading-relaxed">
                  NRI connects intellectual thinking, research, skills, and knowledge with real-world opportunities.
                  We help turn research findings into practical solutions for employment, entrepreneurship, business,
                  projects, and community development.
                </p>
                <div className="mt-6">
                  <ol className="relative border-l border-border ml-3">
                    {flow.map((item, i) => (
                      <li key={item} className="mb-5 ml-6 last:mb-0">
                        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white shadow-sm">
                          {i + 1}
                        </span>
                        <p className="text-sm text-foreground leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              {recent.length > 0 && (
                <div className="border-t border-border px-6 sm:px-8 py-5 bg-slate-50/60 rounded-b-2xl">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">Live now • recent submissions</p>
                    <div className="flex gap-1">
                      {recent.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`h-1.5 w-4 rounded-full transition-colors ${i === active ? "bg-primary" : "bg-border"}`}
                          aria-label={`Show submission ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 relative h-12">
                    {recent.map((r: any, i) => (
                      <div
                        key={r.id}
                        className={`absolute inset-0 flex flex-wrap items-center justify-between gap-2 text-sm transition-opacity duration-500 ${
                          i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <span className="truncate text-foreground">{r.title}</span>
                        <span className="text-muted text-xs shrink-0">
                          {r.location || r.district || "Sri Lanka"} • {new Date(r.created_at).toLocaleDateString("en-GB")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
