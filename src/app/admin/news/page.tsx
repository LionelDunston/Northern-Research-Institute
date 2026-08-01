"use client"

import { useEffect, useState } from "react"

export default function AdminNewsPage() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: "", summary: "", category: "", content: "" })

  function loadNews() {
    fetch("/api/admin/news")
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { loadNews() }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await fetch("/api/admin/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setForm({ title: "", summary: "", category: "", content: "" })
    setShowForm(false)
    loadNews()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">News & Events</h1>
        <button onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors">
          {showForm ? "Cancel" : "Add News"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 mb-6 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} required
              className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <input value={form.category} onChange={e => setForm({...form, category: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Summary</label>
            <textarea value={form.summary} onChange={e => setForm({...form, summary: e.target.value})} rows={3}
              className="w-full px-4 py-2 rounded-lg border border-border focus:border-accent outline-none" />
          </div>
          <button type="submit" className="px-6 py-2.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-light transition-colors">
            Publish News
          </button>
        </form>
      )}

      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-muted">No news items yet.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item: any) => (
            <div key={item.id} className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{item.category}</span>
                <span className="text-xs text-muted">{item.date}</span>
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted mt-1">{item.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
