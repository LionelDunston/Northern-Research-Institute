"use client"

import { useEffect, useState } from "react"

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  function load() {
    fetch("/api/admin/partners")
      .then(r => r.json())
      .then(data => { setPartners(data); setLoading(false) })
      .catch(() => setLoading(false))
  }

  useEffect(() => { load() }, [])

  async function toggleApproval(id: string, approved: boolean) {
    await fetch("/api/admin/partners", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, approved: !approved }),
    })
    load()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Partners</h1>
      {loading ? (
        <p className="text-muted">Loading...</p>
      ) : partners.length === 0 ? (
        <p className="text-muted">No partners registered yet.</p>
      ) : (
        <div className="bg-white rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium hidden sm:table-cell">Category</th>
                <th className="text-left p-4 font-medium hidden md:table-cell">Contact</th>
                <th className="text-left p-4 font-medium">Approved</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {partners.map((p: any) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="p-4 font-medium">{p.name}</td>
                  <td className="p-4 text-muted hidden sm:table-cell">{p.category || "—"}</td>
                  <td className="p-4 text-muted hidden md:table-cell">{p.contact_email || "—"}</td>
                  <td className="p-4">
                    <button
                      onClick={() => toggleApproval(p.id, p.approved)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        p.approved ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      {p.approved ? "Approved" : "Pending"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
