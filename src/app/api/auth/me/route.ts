import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ user: null })
  }

  const admin = createAdminClient()
  const { data: profile } = await admin
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  let role = profile?.role === "admin" ? "admin" : profile?.role === "mentor" ? "mentor" : profile?.role === "partner" ? "partner" : profile?.role === "student" ? "student" : null

  return NextResponse.json({ user: { id: user.id, email: user.email }, role })
}
