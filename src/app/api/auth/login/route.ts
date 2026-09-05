import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const { email, password } = await request.json()
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 })
  }

  const { data: profile, error: profileErr } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .maybeSingle()

  if (profileErr) console.error("Profile fetch error:", profileErr)

  let role = profile?.role

  if (!profile && !profileErr) {
    console.log("No profile found, creating one for user:", data.user.id)
    const admin = createAdminClient()
    const { error: insertErr } = await admin.from("profiles").insert({
      id: data.user.id,
      email: data.user.email ?? email,
      full_name: data.user.user_metadata?.full_name,
      role: "researcher",
    })
    if (insertErr) {
      console.error("Profile insert error:", insertErr)
    } else {
      role = "researcher"
      console.log("Profile created successfully with role: researcher")
    }
  }

  console.log("Returning role:", role)
  return NextResponse.json({ user: data.user, role })
}
