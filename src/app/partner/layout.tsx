"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" })
    router.push("/")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-16 items-center justify-between bg-accent text-white px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-1" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link href="/partner" className="font-semibold text-lg">Partner Portal</Link>
        </div>
        <button onClick={handleLogout} className="text-sm text-white/80 hover:text-white flex items-center gap-1">
          Sign Out
        </button>
      </div>
      <div className="flex">
        <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block w-64 bg-white border-r border-border min-h-[calc(100vh-4rem)] shrink-0`}>
          <nav className="p-4 space-y-1">
            <Link href="/partner" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 transition-colors">
              Dashboard
            </Link>
            <Link href="/partner/research" className="block px-4 py-2.5 rounded-lg text-sm font-medium text-foreground/70 hover:text-accent hover:bg-accent/5 transition-colors">
              My Research
            </Link>
          </nav>
        </aside>
        {sidebarOpen && <div className="fixed inset-0 bg-black/20 z-10 lg:hidden" onClick={() => setSidebarOpen(false)} />}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  )
}
