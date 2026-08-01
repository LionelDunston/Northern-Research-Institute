"use client"

import { useEffect, useState } from "react"

export default function AdminResearchPage() {
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
      <h1 className="text-2xl font-bold mb-6">Research Projects</h1>
      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-muted">No research projects yet.</p>
      ) : (
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="text-left p-4 font-medium">Title</th>
                <th className="text-left p-4 font-medium hidden md:table-cell">Researcher</th>
                <th className="text-left p-4 font-medium hidden lg:table-cell">University</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium hidden sm:table-cell">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {projects.map((p: any) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{p.title}</td>
                  <td className="p-4 text-muted hidden md:table-cell">{p.researcher_name || "—"}</td>
                  <td className="p-4 text-muted hidden lg:table-cell">{p.university || "—"}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      p.status === "approved" ? "bg-green-100 text-green-700" :
                      p.status === "rejected" ? "bg-red-100 text-red-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>{p.status}</span>
                  </td>
                  <td className="p-4 text-muted hidden sm:table-cell">{new Date(p.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
