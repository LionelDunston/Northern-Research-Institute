"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const mentorNav = [
  { label: "Dashboard", href: "/mentor" },
  { label: "Research Submissions", href: "/mentor/research" },
]

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/auth/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-16 items-center justify-between bg-primary text-white px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-1" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/mentor" className="font-semibold text-lg">Mentor Dashboard</Link>
        </div>
        <button onClick={handleLogout} className="text-sm text-white/80 hover:text-white flex items-center gap-1">
          Sign Out
        </button>
      </div>
      <div className="flex">
        <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block w-64 bg-white border-r border-border min-h-[calc(100vh-4rem)] shrink-0`}>
          <nav className="p-4 space-y-1">
            {mentorNav.map((item) => (
              <Link key={item.href} href={item.href}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                onClick={() => setSidebarOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  )
}
