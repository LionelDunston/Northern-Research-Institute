"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error)
      setLoading(false)
      return
    }

    console.log("Login response:", data)

    if (data.role === "admin") {
      router.push("/admin")
    } else if (data.role === "mentor") {
      router.push("/mentor")
    } else {
      router.push("/researcher")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-field px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4 overflow-visible px-2">
            <img src="/nri-logo.svg" alt="Northern Research Institute" className="w-full max-w-[320px] h-auto object-contain rounded-lg" />
          </div>
          <h1 className="text-[26px] font-semibold">Sign In</h1>
          <p className="text-muted text-[16px] mt-1">Access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-paper p-8 space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-300 text-red-800 text-[16px]">{error}</div>
          )}
          <div>
            <label htmlFor="email" className="block text-[16px] font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-[16px] font-medium mb-1">Password</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
          <p className="text-center text-[16px]">
            <Link href="/auth/forgot-password" className="text-brand font-medium hover:underline">
              Forgot password?
            </Link>
          </p>
          <p className="text-center text-[16px] text-muted">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-brand font-medium hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
