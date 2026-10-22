"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SignupPage() {
  const [form, setForm] = useState({ email: "", password: "", fullName: "", telephone: "" })
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
      <div className="min-h-screen flex items-center justify-center bg-field px-4">
        <div className="w-full max-w-md bg-paper p-8 text-center">
          <div className="w-16 h-16 bg-brand w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-[26px] font-semibold">NRI</span>
          </div>
          <h1 className="text-[26px] font-semibold mb-2">Check Your Email</h1>
          <p className="text-muted mb-6">We sent a confirmation link to <strong>{form.email}</strong>. Please confirm your email to activate your account.</p>
          <Link href="/auth/login" className="inline-flex px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors">
            Go to Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-field px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4 overflow-visible px-2">
            <img src="/nri-logo.svg" alt="Northern Research Institute" className="w-full max-w-[320px] h-auto object-contain rounded-lg" />
          </div>
          <h1 className="text-[26px] font-semibold">Create Account</h1>
          <p className="text-muted text-[16px] mt-1"></p>
        </div>

        <form onSubmit={handleSubmit} className="bg-paper p-8 space-y-6">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-300 text-red-800 text-[16px]">{error}</div>
          )}
          <div>
            <label htmlFor="name" className="block text-[16px] font-medium mb-1">Full Name</label>
            <input id="name" type="text" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="tel" className="block text-[16px] font-medium mb-1">Telephone Number</label>
            <input id="tel" type="tel" required value={form.telephone} onChange={(e) => setForm({ ...form, telephone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="+94 7XX XXX XXX" />
          </div>
          <div>
            <label htmlFor="email" className="block text-[16px] font-medium mb-1">Email</label>
            <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="block text-[16px] font-medium mb-1">Password</label>
            <input id="password" type="password" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="•••••••• (min 6 characters)" minLength={6} />
          </div>
          <button type="submit" disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50">
            {loading ? "Creating account..." : "Create Account"}
          </button>
          <p className="text-center text-[16px] text-muted">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-brand font-medium hover:underline">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
