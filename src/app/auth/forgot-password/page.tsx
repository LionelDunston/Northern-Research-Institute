"use client"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || "Something went wrong. Please try again.")
      setLoading(false)
      return
    }

    setDone(true)
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-xl border border-border p-8 text-center shadow-sm">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl"></span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Check Your Email</h1>
          <p className="text-muted mb-6">
            If an account exists for <strong>{email}</strong>, we sent a password reset link to it.
            Click the link in the email to choose a new password.
          </p>
          <Link href="/auth/login" className="inline-flex px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors">
            Back to Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4 overflow-visible px-2">
            <img src="/nri-logo.svg" alt="Northern Research Institute" className="w-full max-w-[320px] h-auto object-contain rounded-lg" />
          </div>
          <h1 className="text-2xl font-bold">Forgot Password</h1>
          <p className="text-muted text-sm mt-1">Enter your email and we'll send you a reset link</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-8 space-y-4 shadow-sm">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">{error}</div>
          )}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
          <p className="text-center text-sm text-muted">
            Remembered it?{" "}
            <Link href="/auth/login" className="text-accent font-medium hover:underline">Back to Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}