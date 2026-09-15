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
    let insertRole: string = "researcher"
    let { error: insertErr } = await admin.from("profiles").insert({
      id: data.user.id,
      email: data.user.email ?? email,
      full_name: data.user.user_metadata?.full_name,
      role: insertRole,
    })
    // Fallback for DBs that still only allow student/author
    if (insertErr && insertErr.message.includes("profiles_role_check")) {
      console.log("Retrying profile insert with fallback role student")
      const retry = await admin.from("profiles").insert({
        id: data.user.id,
        email: data.user.email ?? email,
        full_name: data.user.user_metadata?.full_name,
        role: "student",
      })
      insertErr = retry.error
      if (!insertErr) insertRole = "student"
    }
    if (insertErr) {
      console.error("Profile insert error:", insertErr)
    } else {
      role = insertRole
      console.log("Profile created successfully with role:", insertRole)
    }
  }

  console.log("Returning role:", role)
  return NextResponse.json({ user: data.user, role })
}
