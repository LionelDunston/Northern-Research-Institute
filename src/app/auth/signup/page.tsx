"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignupPage() {
  const [form, setForm] = useState({ email: "", password: "", fullName: "", organization: "" })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })

    if (!res.ok) {
      try {
        const { error } = await res.json() as { error: string }
        setError(error)
      } catch {
        setError("An unexpected error occurred. Please try again.")
      }
      setLoading(false)
      return
    }

    setSuccess(true)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl border border-border p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
          <p className="text-muted mb-6">We sent a confirmation link to <strong>{form.email}</strong>. Please confirm your email to activate your account.</p>
          <Link href="/auth/login" className="inline-flex px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors">
            Go to Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-white font-bold text-lg">NRI</div>
            <div className="text-left">
              <div className="text-sm font-semibold text-primary leading-tight">Northern Research</div>
              <div className="text-sm font-semibold text-primary leading-tight">Institute</div>
            </div>
          </div>
          <h1 className="text-2xl font-bold">Create Account</h1>
          <p className="text-muted text-sm mt-1">Register as a partner organization</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-8 space-y-4 shadow-sm">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
            <input id="name" type="text" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="org" className="block text-sm font-medium mb-1">Organization</label>
            <input id="org" type="text" required value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none" placeholder="Your organization" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <input id="password" type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none" placeholder="•••••••• (min 6 characters)" minLength={6} />
          </div>
          <button type="submit" disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50">
            {loading ? "Creating account..." : "Create Account"}
          </button>
          <p className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-accent font-medium hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
