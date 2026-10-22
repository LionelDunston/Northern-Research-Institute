"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)
  const [ready, setReady] = useState(false)
  const [done, setDone] = useState(false)
  const supabase = useMemo(() => createClient(), [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setChecking(false)
      setReady(!!data.session)
    })
  }, [supabase])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      setLoading(false)
      return
    }

    if (password !== confirm) {
      setError("Passwords do not match.")
      setLoading(false)
      return
    }

    const { error: updateError } = await supabase.auth.updateUser({ password })
    setLoading(false)

    if (updateError) {
      setError(updateError.message)
      return
    }

    await supabase.auth.signOut()
    setDone(true)
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-field px-4">
        <div className="w-full max-w-md bg-paper p-8 text-center">
          <div className="w-16 h-16 bg-brand w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-[26px] font-semibold">NRI</span>
          </div>
          <h1 className="text-[26px] font-semibold mb-2">Password Updated</h1>
          <p className="text-muted mb-6">Your password has been changed successfully.</p>
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
          <h1 className="text-[26px] font-semibold">Set New Password</h1>
          <p className="text-muted text-[16px] mt-1">Choose a new password for your account</p>
        </div>

        {checking ? (
          <div className="bg-paper p-8 text-center text-muted">
            Checking your session...
          </div>
        ) : !ready ? (
          <div className="bg-paper p-8 text-center">
            <p className="text-muted mb-4">This link is invalid or has expired. Please request a new reset link.</p>
            <Link href="/auth/forgot-password" className="inline-flex px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors">
              Request New Link
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-paper p-8 space-y-6">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-300 text-red-800 text-[16px]">{error}</div>
            )}
            <div>
              <label htmlFor="password" className="block text-[16px] font-medium mb-1">New Password</label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                placeholder="At least 6 characters"
              />
            </div>
            <div>
              <label htmlFor="confirm" className="block text-[16px] font-medium mb-1">Confirm New Password</label>
              <input
                id="confirm"
                type="password"
                required
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-brand focus:ring-1 focus:ring-brand outline-none"
                placeholder="Repeat your password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50"
            >
              {loading ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}