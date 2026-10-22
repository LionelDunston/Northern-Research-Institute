"use client"

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
    {
      title: "Tell us what you have",
      desc: "Published or not, upload your work. We read it properly — no auto-reject.",
    },
    {
      title: "We work on it together",
      desc: "A mentor speaks with you. We map the route: prototype, pilot, or a business plan.",
    },
    {
      title: "You see it happen",
      desc: "Submissions, reviews and pilots stay visible so you always know where you stand.",
    },
  ]

  const flow = [
    "Research",
    "Identify problems and opportunities",
    "Generate evidence and solutions",
    "Policy, project, business or enterprise",
    "Training and skills development",
    "Funding and partnerships",
    "Employment and self-employment",
    "Community impact",
  ]

  return (
    <section className="section-padding bg-field">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7" data-reveal>
            <h2 className="t-head max-w-2xl">Knowledge doesn’t need to stay in a document</h2>
            <p className="t-lead mt-6 max-w-xl text-ink-soft">
              The North holds strong intellectual capital. NRI brings it into use — informing policy, inspiring
              innovation, developing businesses and industries, creating employment, and addressing real social and
              development challenges.
            </p>
          </div>

          <div className="lg:col-span-5" data-reveal>
            <h3 className="t-sub max-w-sm">Your research has a future beyond the document</h3>
            <p className="t-body mt-4 max-w-sm text-ink-soft">
              Are you a researcher? We connect your work with the right pathway — policy, project, business,
              enterprise, employment, innovation, or a community solution.
            </p>
            <ol className="steps mt-8 space-y-6">
              {steps.map((s) => (
                <li key={s.title}>
                  <p className="t-body font-medium">{s.title}</p>
                  <p className="t-meta mt-1.5 max-w-sm text-ink-soft">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14" data-reveal>
          <div className="lg:col-span-4">
            <h3 className="t-sub">Translating knowledge into action</h3>
            <p className="t-body mt-4 max-w-sm text-ink-soft">
              NRI connects intellectual thinking, research, skills, and knowledge with real-world opportunities. We help
              turn research findings into practical solutions for employment, entrepreneurship, business, projects, and
              community development.
            </p>
          </div>

          <ol className="steps lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
            {flow.map((item) => (
              <li key={item} className="t-body">
                {item}
              </li>
            ))}
          </ol>
        </div>

        {recent.length > 0 && (
          <div className="mt-14 lg:mt-20 bg-mint px-6 py-6" data-reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="t-small text-ink-soft">Live now · recent submissions</p>
              <div className="flex gap-1.5">
                {recent.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 w-6 transition-colors ${i === active ? "bg-brand" : "bg-ink/20"}`}
                    aria-label={`Show submission ${i + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 relative h-8">
              {recent.map((r: any, i) => (
                <div
                  key={r.id}
                  className={`absolute inset-0 flex flex-wrap items-center justify-between gap-2 transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <span className="t-lead truncate">{r.title}</span>
                  <span className="t-small text-ink-soft shrink-0">
                    {r.location || r.district || "Sri Lanka"} · {new Date(r.created_at).toLocaleDateString("en-GB")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
