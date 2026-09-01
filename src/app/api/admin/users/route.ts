import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const admin = createAdminClient()
  const { data: profile } = await admin
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { data: authUsers, error: usersError } = await admin.auth.admin.listUsers()

  if (usersError) return NextResponse.json({ error: usersError.message }, { status: 500 })

  const { data: profiles, error: profilesError } = await admin
    .from("profiles")
    .select("id, email, full_name, role")

  if (profilesError && profilesError.code !== "42P17") {
    return NextResponse.json({ error: profilesError.message }, { status: 500 })
  }

  const profileMap: Record<string, any> = {}
  if (profiles) {
    profiles.forEach((p: any) => { profileMap[p.id] = p })
  }

  const users = (authUsers.users || []).map((u: any) => ({
    id: u.id,
    email: u.email,
    full_name: profileMap[u.id]?.full_name || u.user_metadata?.full_name || "",
    role: profileMap[u.id]?.role || "author",
  }))

  return NextResponse.json(users)
}

export async function PATCH(request: Request) {
  const { id, role } = await request.json()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!["author", "mentor", "admin"].includes(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 })
  }

  const admin = createAdminClient()
  const { data: profile } = await admin
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  if (profile?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { error: updateError } = await admin
    .from("profiles")
    .update({ role })
    .eq("id", id)

  if (updateError) return NextResponse.json({ error: updateError.message }, { status: 500 })

  return NextResponse.json({ success: true })
}
