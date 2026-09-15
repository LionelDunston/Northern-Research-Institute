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
    .select("id, email, full_name, role, organization")

  if (profilesError && profilesError.code !== "42P17") {
    return NextResponse.json({ error: profilesError.message }, { status: 500 })
  }

  const profileMap: Record<string, any> = {}
  if (profiles) {
    profiles.forEach((p: any) => { profileMap[p.id] = p })
  }

  const users = (authUsers.users || []).map((u: any) => {
    const raw = profileMap[u.id]?.role || "researcher"
    const displayRole = raw === "student" || raw === "author" ? "researcher" : raw
    return {
      id: u.id,
      email: u.email,
      full_name: profileMap[u.id]?.full_name || u.user_metadata?.full_name || "",
      role: displayRole,
      organization: profileMap[u.id]?.organization || "",
    }
  })

  return NextResponse.json(users)
}

export async function PATCH(request: Request) {
  const { id, role, full_name, organization } = await request.json()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (role && !["researcher", "mentor", "admin", "partner"].includes(role)) {
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

  const updates: any = {}
  if (role) updates.role = role
  if (full_name !== undefined) updates.full_name = full_name
  if (organization !== undefined) updates.organization = organization

  const { error: updateError } = await admin
    .from("profiles")
    .update(updates)
    .eq("id", id)

  if (updateError) return NextResponse.json({ error: updateError.message }, { status: 500 })

  return NextResponse.json({ success: true })
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const admin = createAdminClient()
  const { data: profile } = await admin.from("profiles").select("role").eq("id", user.id).maybeSingle()
  if (profile?.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  const { error } = await admin.auth.admin.deleteUser(id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  await admin.from("profiles").delete().eq("id", id)
  return NextResponse.json({ success: true })
}
