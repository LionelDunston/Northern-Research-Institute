"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function MentorDashboard() {
  const [projects, setProjects] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/research")
      .then(r => r.json())
      .then(setProjects)
  }, [])

  const pending = projects.filter(p => p.status === "submitted" || p.status === "pending").length
  const approved = projects.filter(p => p.status === "approved").length

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Mentor Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-field p-6">
          <div className="text-2xl font-bold">{projects.length}</div>
          <div className="text-sm text-muted mt-1">Total Submissions</div>
        </div>
        <div className="bg-field p-6">
          <div className="text-2xl font-bold text-yellow-600">{pending}</div>
          <div className="text-sm text-muted mt-1">Pending Review</div>
        </div>
        <div className="bg-field p-6">
          <div className="text-2xl font-bold text-green-600">{approved}</div>
          <div className="text-sm text-muted mt-1">Approved</div>
        </div>
      </div>

      <div className="bg-field p-8 text-left">
        <h2 className="text-xl font-semibold mb-2">Review Author Research</h2>
        <p className="text-muted mb-6 max-w-md">
          Evaluate and provide feedback on submitted research projects from researchers.
        </p>
        <Link
          href="/mentor/research"
          className="inline-flex px-6 py-3 bg-brand text-white font-semibold hover:bg-brand/90 transition-colors"
        >
          View All Submissions
        </Link>
      </div>
    </div>
  )
}
