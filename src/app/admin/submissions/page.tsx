"use client"

import { useEffect, useState } from "react"

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/contact")
      .then(r => r.json())
      .then(data => { setSubmissions(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>
      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : submissions.length === 0 ? (
        <p className="text-muted">No submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {submissions.map((s: any) => (
            <div key={s.id} className="bg-white rounded-xl border border-border p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-xs text-muted">{new Date(s.created_at).toLocaleDateString()}</span>
              </div>
              <p className="text-sm text-muted">{s.email}{s.subject ? ` — ${s.subject}` : ""}</p>
              <p className="text-sm mt-2 text-foreground/80">{s.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
