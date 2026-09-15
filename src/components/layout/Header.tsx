"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { mainNav } from "@/lib/navigation"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [user, setUser] = useState<{ role: string | null } | null>(null)
  const [loading, setLoading] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const hasSessionCookie = () =>
      document.cookie.split(";").some((c) => c.trim().startsWith("sb-") && c.includes("auth-token"))

    if (hasSessionCookie()) {
      setUser({ role: null })
    } else {
      setLoading(false)
    }

    fetch("/api/auth/me", { credentials: "include" })
      .then((r) => r.json())
      .then((data) => {
        setUser(data.user ? { role: data.role } : hasSessionCookie() ? { role: null } : null)
        setLoading(false)
      })
      .catch(() => {
        setUser(hasSessionCookie() ? { role: null } : null)
        setLoading(false)
      })
  }, [pathname])

  const dashboardHref = user?.role === "admin" ? "/admin" : user?.role === "mentor" ? "/mentor" : user?.role === "partner" ? "/partner" : "/researcher"

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" })
    setUser(null)
    router.push("/")
    router.refresh()
  }

  const isAuthPage = pathname.startsWith("/auth")
  const isDashboard = ["/admin","/mentor","/researcher","/partner"].some((p) => pathname === p || pathname.startsWith(p + "/"))

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container-wide">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0 min-w-0">
            <img src="/nri-logo-header.svg" alt="Northern Research Institute" className="h-12 sm:h-[58px] w-auto max-w-[58vw] sm:max-w-none object-contain shrink-0" />
          </Link>

          <nav className="hidden lg:flex items-center">
            {mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md hover:bg-primary/5 transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.children && <span className="ml-1 text-xs">▾</span>}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-border rounded-lg shadow-lg py-2 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {user ? (
              <Link href={dashboardHref} className="inline-flex items-center justify-center h-9 px-5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-light transition-colors whitespace-nowrap shrink-0">
                Dashboard
              </Link>
            ) : isDashboard ? (
              <span className="hidden sm:inline-flex h-9 w-12" aria-hidden="true" />
            ) : loading ? (
              <span className="inline-flex h-9 w-20 bg-gray-100 rounded-lg animate-pulse" />
            ) : isAuthPage ? null : (
              <Link href="/auth/login" className="inline-flex items-center justify-center h-9 px-5 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary-light transition-colors whitespace-nowrap shrink-0">
                Sign In
              </Link>
            )}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-md hover:bg-primary/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-1 pb-2 border-l-2 border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-1.5 text-sm text-foreground/70 hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {user ? (
              <Link href={dashboardHref} className="block px-3 py-2 text-sm font-medium text-accent hover:text-accent/80" onClick={() => setMobileOpen(false)}>
                Dashboard
              </Link>
            ) : isDashboard || isAuthPage ? null : (
              <Link href="/auth/login" className="block px-3 py-2 text-sm font-medium text-accent hover:text-accent/80" onClick={() => setMobileOpen(false)}>
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
