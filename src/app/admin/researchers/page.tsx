"use client"

import { useEffect, useState } from "react"

type User = { id: string; email: string; full_name: string; role: string; organization?: string }

export default function ResearchersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<User | null>(null)
  const [form, setForm] = useState({ full_name: "", organization: "", role: "researcher" })
  const [saving, setSaving] = useState(false)

  function load() {
    fetch("/api/admin/users").then(r => r.json()).then(d => {
      const list = Array.isArray(d) ? d : []
      setUsers(list.filter((u: User) => ["researcher","author","student"].includes(u.role)))
      setLoading(false)
    }).catch(()=> setLoading(false))
  }
  useEffect(()=>{ load() },[])

  function startEdit(u: User){
    setEditing(u)
    setForm({ full_name: u.full_name || "", organization: u.organization || "", role: "researcher" })
  }

  async function save(){
    if(!editing) return
    setSaving(true)
    await fetch("/api/admin/users",{ method:"PATCH", headers:{ "Content-Type":"application/json"}, body: JSON.stringify({ id: editing.id, full_name: form.full_name, organization: form.organization, role: form.role }) })
    setEditing(null)
    setSaving(false)
    load()
  }

  async function remove(id:string){
    if(!confirm("Delete this researcher?")) return
    await fetch(`/api/admin/users?id=${id}`,{ method:"DELETE" })
    load()
  }

  if(loading) return <p className="text-muted">Loading researchers...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Researchers</h1>
      <p className="text-sm text-muted mb-6">{users.length} researcher(s) — every collected detail visible and editable. Click Edit to update.</p>

      <div className="bg-white rounded-xl border border-border overflow-hidden">
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-border">
              <tr>
                <th className="text-left p-3">Name</th>
                <th className="text-left p-3">Email</th>
                <th className="text-left p-3 hidden md:table-cell">Organization</th>
                <th className="text-left p-3">Role</th>
                <th className="text-right p-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.length===0 ? <tr><td colSpan={5} className="p-8 text-center text-muted">No researchers yet.</td></tr> :
                users.map(u=> (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="p-3 font-medium">{u.full_name || "—"}</td>
                  <td className="p-3 text-muted">{u.email}</td>
                  <td className="p-3 text-muted hidden md:table-cell">{u.organization || "—"}</td>
                  <td className="p-3"><span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">{u.role}</span></td>
                  <td className="p-3 text-right space-x-2">
                    <button onClick={()=> startEdit(u)} className="px-3 py-1 rounded border border-border text-xs hover:bg-gray-100">Edit</button>
                    <button onClick={()=> remove(u.id)} className="px-3 py-1 rounded bg-red-50 text-red-600 text-xs hover:bg-red-100">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editing && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md space-y-4">
            <h3 className="font-semibold">Edit Researcher — {editing.email}</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input value={form.full_name} onChange={e=> setForm({...form, full_name:e.target.value})} className="w-full px-3 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Organization</label>
              <input value={form.organization} onChange={e=> setForm({...form, organization:e.target.value})} className="w-full px-3 py-2 rounded-lg border border-border focus:border-accent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select value={form.role} onChange={e=> setForm({...form, role:e.target.value})} className="w-full px-3 py-2 rounded-lg border border-border bg-white">
                <option value="researcher">researcher</option>
                <option value="mentor">mentor</option>
                <option value="admin">admin</option>
                <option value="partner">partner</option>
              </select>
            </div>
            <div className="flex gap-2 justify-end">
              <button onClick={()=> setEditing(null)} className="px-4 py-2 rounded-lg border border-border text-sm">Cancel</button>
              <button onClick={save} disabled={saving} className="px-4 py-2 rounded-lg bg-primary text-white text-sm disabled:opacity-50">{saving?"Saving...":"Save"}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
