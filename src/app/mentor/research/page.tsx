"use client"

import { useEffect, useState } from "react"

function Detail({ label, value }: { label: string; value: any }) {
  if (value === undefined || value === null || value === "" || (Array.isArray(value) && value.length === 0)) return null
  const display = Array.isArray(value) ? value.join(", ") : String(value)
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="text-xs font-semibold text-muted uppercase tracking-wider">{label}</div>
      <div className="text-sm mt-1 break-words">{display}</div>
    </div>
  )
}

export default function MentorResearchPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/research").then(r => r.json()).then(data => { setProjects(Array.isArray(data) ? data : []); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  if (loading) return <p className="text-muted">Loading...</p>
  if (projects.length === 0) return <p className="text-muted">No research submissions yet — mentor view will show all researcher submissions once submitted.</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Research Submissions — Mentor View</h1>
      <p className="text-sm text-muted mb-6">{projects.length} submissions — every field per researcher is visible. Advise and evaluate below.</p>

      <div className="space-y-4">
        {projects.map((p: any) => (
          <div key={p.id} className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted">{p.researcher_name || p.authorAff} {p.journal ? `— ${p.journal}` : ""} • {p.researchStatus || p.pathway} • {p.location || p.district || ""}</p>
                  <p className="text-xs text-muted mt-1">Researcher: {p.researcher_name || "—"} • {new Date(p.created_at).toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${p.status==="approved"?"bg-green-100 text-green-700":p.status==="rejected"?"bg-red-100 text-red-700":"bg-yellow-100 text-yellow-700"}`}>{p.status}</span>
              </div>

              {(p.problem || p.description) && <p className="text-sm text-muted mt-3 line-clamp-2">{p.problem || p.description}</p>}

              <div className="flex flex-wrap gap-2 mt-3">
                {p.researchStatus && <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded text-xs">{p.researchStatus}</span>}
                {p.pathway && <span className="px-2 py-0.5 bg-purple-50 border border-purple-200 rounded text-xs">{p.pathway}</span>}
                {p.trl && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{p.trl}</span>}
                {p.srl && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{p.srl}</span>}
                {(p.location || p.district) && <span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{p.location || p.district}</span>}
              </div>

              <button onClick={() => setExpanded(expanded === p.id ? null : p.id)} className="mt-4 px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:bg-gray-50">
                {expanded === p.id ? "Hide Full Details" : "View All Collected Details"}
              </button>
            </div>

            {expanded === p.id && (
              <div className="border-t border-border bg-gray-50/50 p-5">
                <p className="text-xs font-semibold text-primary mb-2">All fields for this researcher’s submission:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <Detail label="Research Status" value={p.researchStatus} />
                  <Detail label="Pathway" value={p.pathway} />
                  <Detail label="DOI" value={p.doi} />
                  <Detail label="Journal" value={p.journal || p.university} />
                  <Detail label="Year" value={p.year} />
                  <Detail label="Author & Affiliation" value={p.authorAff || p.researcher_name} />
                  <Detail label="Unpublished Desc" value={p.unpubDesc} />
                  <Detail label="TRL" value={p.trl} />
                  <Detail label="SRL" value={p.srl} />
                  <Detail label="Location" value={p.location || p.district} />
                  <Detail label="Budget" value={p.budget ? `${p.currency || "LKR"} ${p.budget}` : null} />
                  <Detail label="Files" value={[p.filePaperName, p.fileDeckName, p.fileAssetsName].filter(Boolean).join(", ") || p.filePaperName || p.fileDeckName} />
                </div>
                <div className="grid gap-3 mt-3">
                  <Detail label="Real-World Problem" value={p.problem || p.description} />
                  <Detail label="Value Proposition" value={p.valueProp} />
                  <Detail label="Resource Requirements" value={Array.isArray(p.resourceNeeds) ? p.resourceNeeds.join(", ") : p.resourceNeeds} />
                  <Detail label="Infrastructure Request" value={p.infraReq} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
