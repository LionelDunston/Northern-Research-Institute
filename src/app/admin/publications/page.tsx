"use client"

import { useEffect, useState } from "react"

export default function AdminPublicationsPage() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/publications")
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Publications</h1>
      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-muted">No publications yet.</p>
      ) : (
        <div className="space-y-4">
          {items.map((item: any) => (
            <div key={item.id} className="bg-white rounded-xl border border-border p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{item.type}</span>
              <h3 className="font-semibold mt-1">{item.title}</h3>
              <p className="text-sm text-muted mt-1">{item.description}</p>
              <p className="text-xs text-muted mt-2">{item.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
