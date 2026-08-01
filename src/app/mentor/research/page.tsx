"use client"

import { useEffect, useState } from "react"

export default function MentorResearchPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/research")
      .then(r => r.json())
      .then(data => { setProjects(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Research Submissions</h1>
      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-muted">No research submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {projects.map((p: any) => (
            <div key={p.id} className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted">{p.researcher_name}{p.university ? ` — ${p.university}` : ""}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  p.status === "approved" ? "bg-green-100 text-green-700" :
                  p.status === "rejected" ? "bg-red-100 text-red-700" :
                  "bg-yellow-100 text-yellow-700"
                }`}>{p.status}</span>
              </div>
              {p.description && <p className="text-sm text-muted mt-2">{p.description}</p>}
              <div className="flex flex-wrap gap-2 mt-3">
                {p.subject && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-muted">{p.subject}</span>}
                {p.sdg && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-muted">SDG: {p.sdg}</span>}
                {p.district && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-muted">{p.district}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
