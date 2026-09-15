import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")
  const admin = createAdminClient()
  if (slug) {
    const { data } = await admin.from("page_contents").select("*").eq("slug", slug).maybeSingle()
    return NextResponse.json(data || null)
  }
  const { data, error } = await admin.from("page_contents").select("*")
  if (error && error.code === "42P01") return NextResponse.json({}, { status: 200 })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  const map: Record<string, any> = {}
  ;(data || []).forEach((r: any) => { map[r.slug] = r })
  return NextResponse.json(map)
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  const admin = createAdminClient()
  const { data: profile } = await admin.from("profiles").select("role").eq("id", user.id).maybeSingle()
  if (profile?.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 })

  const { slug, title, description } = await request.json()
  if (!slug) return NextResponse.json({ error: "Missing slug" }, { status: 400 })

  const { data, error } = await admin.from("page_contents").upsert({ slug, title, description, updated_by: user.id }, { onConflict: "slug" }).select().single()
  if (error) {
    if (error.code === "42P01") {
      return NextResponse.json({ error: "Table page_contents not found. Run: CREATE TABLE page_contents (slug TEXT PRIMARY KEY, title TEXT, description TEXT, updated_by UUID, updated_at TIMESTAMPTZ DEFAULT NOW());" }, { status: 500 })
    }
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json(data)
}
