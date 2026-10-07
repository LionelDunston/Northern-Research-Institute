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
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-semibold text-white/70 uppercase tracking-widest">The North has potential</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            Turning knowledge into action
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            The North is a rich source of intellectual capital, with universities, researchers, graduates,
            communities, entrepreneurs, and development organizations generating valuable knowledge. NRI bridges the
            gap between knowledge and action by creating an ecosystem where research can inform policy, inspire
            innovation, develop businesses and industries, create employment, and address real-world social and
            development challenges.
          </p>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Rooted in the Northern Province but connected nationally and internationally, NRI serves as a research,
            knowledge, and data repository while building partnerships that transform ideas and evidence into
            sustainable development.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Your Research Has a Future Beyond the Document</h3>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Are you a researcher? This is for you. NRI brings together intellectual resources to address
              real-world challenges and create meaningful impact. We bridge the gap between your research and the
              practical world, helping you identify the most appropriate pathway for your knowledge.
            </p>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Your research is more than a thesis, report, or publication. It can become a policy, project,
              business, enterprise, employment opportunity, innovation, or community solution.
            </p>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              NRI assesses your research for its potential across different pathways - including business
              development, entrepreneurship, policy, social innovation, community development, and employment
              creation - and connects relevant knowledge with real-world needs, partners, and opportunities.
            </p>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              This is more than research guidance. It is a research-to-impact approach that transforms knowledge
              into action and connects intellectual capital with society.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold">Translating Knowledge into Action</h3>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              NRI transforms research, data, and community knowledge into practical projects, businesses, policies,
              and development initiatives. Guided by evidence, community needs, emerging trends, stakeholder
              engagement, and the SDGs, we connect knowledge with the right partners to foster innovation, create
              employment, strengthen communities, and advance sustainable development.
            </p>
          </div>

          {recent.length > 0 && (
            <div className="mt-10">
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
