"use client"

import { useEffect, useState } from "react"

const pages = [
  { slug: "home", label: "Home", path: "/" },
  { slug: "about", label: "About", path: "/about" },
  { slug: "governance", label: "Governance", path: "/governance" },
  { slug: "rti", label: "RTI (Research-to-Impact)", path: "/rti" },
  { slug: "business-opportunities", label: "Business Opportunities", path: "/research-programmes" },
  { slug: "community-development", label: "Community Development", path: "/innovation" },
  { slug: "news", label: "News & Events", path: "/news" },
  { slug: "partnerships", label: "Partnerships", path: "/partnerships" },
  { slug: "contact", label: "Contact", path: "/contact" },
  { slug: "researcher", label: "Researcher Dashboard", path: "/researcher" },
  { slug: "mentor", label: "Mentor Dashboard", path: "/mentor" },
]

export default function AdminPagesPage() {
  const [data, setData] = useState<Record<string, any>>({})
  const [editing, setEditing] = useState<string | null>(null)
  const [form, setForm] = useState({ title: "", description: "" })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/admin/pages").then(r=> r.json()).then(d=> { setData(d || {}); setLoading(false)}).catch(()=> setLoading(false))
  },[])

  function startEdit(slug:string){
    setEditing(slug)
    const cur = data[slug] || {}
    setForm({ title: cur.title || "", description: cur.description || "" })
  }

  async function save(){
    if(!editing) return
    await fetch("/api/admin/pages",{ method:"POST", headers:{ "Content-Type":"application/json"}, body: JSON.stringify({ slug: editing, ...form }) })
    setData({ ...data, [editing]: { ...form } })
    setEditing(null)
  }

  if(loading) return <p className="text-muted">Loading pages...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Pages</h1>
      <p className="text-sm text-muted mb-6">Every public page is listed here. Admin can edit title & description per page — changes are stored in Supabase and can be wired to the frontend.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {pages.map(p=> {
          const cur = data[p.slug]
          return (
            <div key={p.slug} className="bg-white rounded-xl border border-border p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{p.label}</h3>
                  <p className="text-xs text-muted">{p.path} • slug: {p.slug}</p>
                  {cur?.title && <p className="text-sm mt-2"><span className="font-medium">Title:</span> {cur.title}</p>}
                  {cur?.description && <p className="text-sm text-muted mt-1 line-clamp-2">{cur.description}</p>}
                  {!cur && <p className="text-xs text-muted mt-2">No custom content yet — using default.</p>}
                </div>
                <button onClick={()=> startEdit(p.slug)} className="px-3 py-1.5 rounded-lg border border-border text-xs font-medium hover:bg-gray-50 shrink-0">Edit</button>
              </div>
            </div>
          )
        })}
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg space-y-4">
            <h3 className="font-semibold">Edit Page — {editing}</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input value={form.title} onChange={e=> setForm({...form, title:e.target.value})} className="w-full px-3 py-2 rounded-lg border border-border focus:border-accent outline-none" placeholder="Page title" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description / Content</label>
              <textarea value={form.description} onChange={e=> setForm({...form, description:e.target.value})} rows={4} className="w-full px-3 py-2 rounded-lg border border-border focus:border-accent outline-none" placeholder="Page description or content override" />
            </div>
            <div className="flex gap-2 justify-end">
              <button onClick={()=> setEditing(null)} className="px-4 py-2 rounded-lg border border-border text-sm">Cancel</button>
              <button onClick={save} className="px-4 py-2 rounded-lg bg-primary text-white text-sm">Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-800">
        Tip: This editor stores per-page overrides in <code>page_contents</code> table. Wire any frontend page to read from <code>/api/admin/pages?slug=...</code> to make edits live.
      </div>
    </div>
  )
}
