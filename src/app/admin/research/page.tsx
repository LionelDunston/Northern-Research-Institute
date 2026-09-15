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

export default function AdminResearchPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/research").then(r => r.json()).then(data => { setProjects(Array.isArray(data) ? data : []); setLoading(false) }).catch(() => setLoading(false))
  }, [])

  if (loading) return <p className="text-muted">Loading...</p>
  if (projects.length === 0) return <p className="text-muted">No research projects yet.</p>

  // Group by researcher for overview
  const byResearcher: Record<string, any[]> = {}
  projects.forEach(p => {
    const key = p.researcher_name || p.submitted_by || "Unknown"
    if (!byResearcher[key]) byResearcher[key] = []
    byResearcher[key].push(p)
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Research Projects</h1>
      <p className="text-sm text-muted mb-6">{projects.length} submissions from {Object.keys(byResearcher).length} researcher(s) — every collected field is stored and visible below.</p>

      <div className="space-y-4">
        {projects.map((p: any) => (
          <div key={p.id} className="bg-white rounded-xl border border-border overflow-hidden">
            <div className="p-5 flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold truncate">{p.title}</h3>
                <p className="text-sm text-muted">{p.researcher_name || p.authorAff || "—"} {p.university || p.journal ? `— ${p.university || p.journal}` : ""} • <span className="text-accent">{p.researchStatus || p.pathway || "—"}</span> • {new Date(p.created_at).toLocaleDateString()}</p>
                <p className="text-xs text-muted mt-1">Researcher ID: <span className="font-mono">{p.submitted_by?.slice(0,8)}...</span> • {p.location || p.district || "No location"}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${p.status === "approved" ? "bg-green-100 text-green-700" : p.status === "rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{p.status}</span>
                <button onClick={() => setExpanded(expanded === p.id ? null : p.id)} className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:bg-gray-50">
                  {expanded === p.id ? "Hide" : "View Details"}
                </button>
              </div>
            </div>

            {expanded === p.id && (
              <div className="border-t border-border bg-gray-50/50 p-5">
                <div className="grid md:grid-cols-2 gap-3">
                  <Detail label="Research Status" value={p.researchStatus} />
                  <Detail label="Pathway" value={p.pathway} />
                  <Detail label="DOI" value={p.doi} />
                  <Detail label="Journal / Conference" value={p.journal || p.university} />
                  <Detail label="Year" value={p.year} />
                  <Detail label="Author & Affiliation" value={p.authorAff || p.researcher_name} />
                  <Detail label="Unpublished Description" value={p.unpubDesc} />
                  <Detail label="TRL" value={p.trl} />
                  <Detail label="SRL" value={p.srl} />
                  <Detail label="Location" value={p.location || p.district} />
                  <Detail label="Budget" value={p.budget ? `${p.currency || "LKR"} ${p.budget}` : null} />
                  <Detail label="Files" value={[p.filePaperName, p.fileDeckName, p.fileAssetsName].filter(Boolean).join(", ")} />
                </div>
                <div className="grid gap-3 mt-3">
                  <Detail label="Real-World Problem" value={p.problem || p.description} />
                  <Detail label="Value Proposition" value={p.valueProp} />
                  <Detail label="Resource Requirements" value={Array.isArray(p.resourceNeeds) ? p.resourceNeeds.join(", ") : p.resourceNeeds || p.resourceNeeds} />
                  <Detail label="Infrastructure Request" value={p.infraReq} />
                </div>
                {p.form_data && (
                  <details className="mt-3">
                    <summary className="text-xs font-medium text-muted cursor-pointer">Raw form_data JSON</summary>
                    <pre className="text-xs bg-white border border-border rounded p-3 mt-2 overflow-auto max-h-48">{JSON.stringify(p.form_data, null, 2)}</pre>
                  </details>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl">
        <p className="text-sm text-blue-800"><strong>All fields collected:</strong> researchStatus, pathway, title, doi, journal, year, authorAff, unpubDesc, trl/srl, location, problem, valueProp, resourceNeeds, budget/currency, files — stored in <code>form_data</code> (or encoded in description if column missing) and visible here per researcher. Run in Supabase SQL Editor to add permanent column: <code className="bg-white px-1 rounded">ALTER TABLE research_projects ADD COLUMN IF NOT EXISTS form_data JSONB;</code></p>
      </div>
    </div>
  )
}
