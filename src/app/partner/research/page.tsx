"use client"

import { useEffect, useState } from "react"

export default function PartnerResearchPage() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: "", description: "", researcher_name: "", university: "", subject: "", sdg: "", district: "" })

  function load() {
    fetch("/api/research")
      .then(r => r.json())
      .then(data => { setProjects(data); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await fetch("/api/research", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setForm({ title: "", description: "", researcher_name: "", university: "", subject: "", sdg: "", district: "" })
    setShowForm(false)
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">My Research</h1>
        <button onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors">
          {showForm ? "Cancel" : "Submit Research"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 mb-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title *</label>
              <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} required
                className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Researcher Name</label>
              <input value={form.researcher_name} onChange={e => setForm({...form, researcher_name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">University</label>
              <input value={form.university} onChange={e => setForm({...form, university: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">SDG</label>
              <input value={form.sdg} onChange={e => setForm({...form, sdg: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">District</label>
              <input value={form.district} onChange={e => setForm({...form, district: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} rows={4}
              className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
          </div>
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
            Submit for Evaluation
          </button>
        </form>
      )}

      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : projects.length === 0 ? (
        <div className="bg-white rounded-xl border border-border p-12 text-center">
          <p className="text-muted">No research submissions yet. Submit your first project above.</p>
        </div>
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
