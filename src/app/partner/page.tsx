"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function PartnerDashboard() {
  const [data, setData] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    fetch("/api/research").then(r => r.json()).then(setData)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Partner Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-border p-6">
          <div className="text-2xl font-bold">{Array.isArray(data) ? data.length : "—"}</div>
          <div className="text-sm text-muted mt-1">My Research Submissions</div>
        </div>
        <div className="bg-white rounded-xl border border-border p-6">
          <div className="text-2xl font-bold"></div>
          <div className="text-sm text-muted mt-1">Partner Account Active</div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-border p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">Submit Your Research</h2>
        <p className="text-muted mb-6 max-w-md mx-auto">
          Upload your research projects for evaluation and potential commercialization through the GRI programme.
        </p>
        <Link
          href="/partner/research"
          className="inline-flex px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
        >
          Submit Research
        </Link>
      </div>
    </div>
  )
}
