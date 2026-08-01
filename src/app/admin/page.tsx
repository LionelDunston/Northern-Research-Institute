"use client"

import { useEffect, useState } from "react"

interface DashboardData {
  researchCount: number
  newsCount: number
  pubCount: number
  partnerCount: number
  submissionCount: number
}

export default function AdminDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)

  useEffect(() => {
    async function load() {
      const [research, news, pubs, partners, submissions] = await Promise.all([
        fetch("/api/research").then(r => r.json()),
        fetch("/api/admin/news").then(r => r.json()).catch(() => []),
        fetch("/api/admin/publications").then(r => r.json()).catch(() => []),
        fetch("/api/admin/partners").then(r => r.json()).catch(() => []),
        fetch("/api/contact").then(r => r.json()).catch(() => []),
      ])
      setData({
        researchCount: Array.isArray(research) ? research.length : 0,
        newsCount: Array.isArray(news) ? news.length : 0,
        pubCount: Array.isArray(pubs) ? pubs.length : 0,
        partnerCount: Array.isArray(partners) ? partners.length : 0,
        submissionCount: Array.isArray(submissions) ? submissions.length : 0,
      })
    }
    load()
  }, [])

  const cards = [
    { label: "Research Projects", value: data?.researchCount ?? "—", color: "bg-blue-500" },
    { label: "News Articles", value: data?.newsCount ?? "—", color: "bg-green-500" },
    { label: "Publications", value: data?.pubCount ?? "—", color: "bg-purple-500" },
    { label: "Partners", value: data?.partnerCount ?? "—", color: "bg-amber-500" },
    { label: "Contact Submissions", value: data?.submissionCount ?? "—", color: "bg-red-500" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="bg-white rounded-xl border border-border p-6">
            <div className={`w-3 h-3 rounded-full ${card.color} mb-3`} />
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="text-sm text-muted mt-1">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
