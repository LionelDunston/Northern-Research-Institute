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

  const dashboardHref =
    user?.role === "admin"
      ? "/admin"
      : user?.role === "mentor"
        ? "/mentor"
        : user?.role === "partner"
          ? "/partner"
          : "/researcher"

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" })
    setUser(null)
    router.push("/")
    router.refresh()
  }

  const isAuthPage = pathname.startsWith("/auth")
  const isDashboard = ["/admin", "/mentor", "/researcher", "/partner"].some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  )

  const navClass = (active: boolean) =>
    `inline-flex items-center gap-1.5 py-2 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
      active ? "text-brand" : "text-ink hover:text-brand"
    }`

  return (
    <header className="sticky top-0 z-50 bg-paper">
      <div className="h-1 w-full bg-brand" aria-hidden="true" />

      <div className="bg-field">
        <div className="container-wide flex h-9 items-center justify-between">
          <p className="t-small hidden sm:block text-ink-soft">Northern Research Institute · Jaffna, Sri Lanka</p>
          <p className="t-small ml-auto text-ink-soft sm:ml-0">Research → Policy → Enterprise → Community</p>
        </div>
      </div>

      <div className="bg-paper">
        <div className="container-wide flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex items-center shrink-0 min-w-0" aria-label="Northern Research Institute home">
            <img
              src="/nri-logo-header.svg"
              alt="Northern Research Institute"
              className="h-10 sm:h-12 w-auto object-contain shrink-0"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
            {mainNav.map((item) => {
              const active = pathname === item.href
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={item.href} className={navClass(active)}>
                    {item.label}
                    {item.children && (
                      <span className="text-[10px] leading-none opacity-60" aria-hidden="true">
                        ▼
                      </span>
                    )}
                  </Link>
                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 w-64 bg-field py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2 text-[14px] text-ink hover:text-brand transition-colors border-l-2 border-transparent hover:border-brand"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            {user ? (
              <Link
                href={dashboardHref}
                className="inline-flex items-center justify-center h-10 px-5 text-[13px] font-medium uppercase tracking-[0.12em] bg-brand text-white transition-colors hover:bg-brand-deep whitespace-nowrap shrink-0"
              >
                Dashboard
              </Link>
            ) : isDashboard ? (
              <span className="hidden sm:inline-flex h-9 w-12" aria-hidden="true" />
            ) : loading ? (
              <span className="inline-flex h-9 w-20 bg-field animate-pulse" aria-hidden="true" />
            ) : isAuthPage ? null : (
              <Link
                href="/auth/login"
                className="link-rule text-[13px] font-medium uppercase tracking-[0.12em] text-ink hover:text-brand whitespace-nowrap"
              >
                Sign In
              </Link>
            )}
            <button
              className="lg:hidden p-2 -mr-2 hover:text-brand transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-field max-h-[80vh] overflow-y-auto">
          <div className="container-wide py-6 space-y-1">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] text-ink hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 space-y-0.5 pb-2 border-l-2 border-brand/20 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-[13px] text-ink-soft hover:text-brand"
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
              <Link
                href={dashboardHref}
                className="block py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] text-brand"
                onClick={() => setMobileOpen(false)}
              >
                Dashboard
              </Link>
            ) : isDashboard || isAuthPage ? null : (
              <Link
                href="/auth/login"
                className="block py-2.5 text-[13px] font-medium uppercase tracking-[0.12em] text-brand"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
