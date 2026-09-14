import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle()

  let query = supabase.from("research_projects").select("*")

  if (profile?.role === "researcher" || profile?.role === "author" || profile?.role === "student") {
    query = query.eq("submitted_by", user.id)
  }

  const { data, error } = await query.order("created_at", { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const mapped = (data || []).map((row: any) => ({
    ...row,
    ...(row.form_data || {}),
    // keep file names at top level for UI
    filePaperName: row.form_data?.filePaperName || null,
    fileDeckName: row.form_data?.fileDeckName || null,
  }))

  return NextResponse.json(mapped)
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: any = {}
  let filePaperName: string | null = null
  let fileDeckName: string | null = null
  let fileAssetsName: string | null = null

  const contentType = request.headers.get("content-type") || ""
  if (contentType.includes("multipart/form-data")) {
    const fd = await request.formData()
    const get = (k: string) => {
      const v = fd.get(k)
      return typeof v === "string" ? v : v ? (v as File).name : ""
    }
    body = {
      pathway: get("pathway"),
      title: get("title"),
      doi: get("doi"),
      journal: get("journal"),
      year: get("year"),
      authorAff: get("authorAff"),
      trl: get("trl"),
      srl: get("srl"),
      location: get("location"),
      // backward compat for old submissions
      techDomain: get("techDomain"),
      focusComm: (()=>{ try{ return JSON.parse(get("focusComm")||"[]")}catch{return []}})(),
      targetDistricts: (()=>{ try{ return JSON.parse(get("targetDistricts")||"[]")}catch{return []}})(),
      problem: get("problem"),
      valueProp: get("valueProp"),
      resourceNeeds: (()=>{ try{ return JSON.parse(get("resourceNeeds")||"[]")}catch{return []}})(),
      infraReq: get("infraReq"),
      budget: get("budget"),
      currency: get("currency"),
    }
    const fp = fd.get("filePaper") as File | null
    const fd2 = fd.get("fileDeck") as File | null
    const fa = fd.get("fileAssets") as File | null
    if (fp && typeof fp !== "string") filePaperName = fp.name
    if (fd2 && typeof fd2 !== "string") fileDeckName = fd2.name
    if (fa && typeof fa !== "string") fileAssetsName = fa.name
    // Try to upload to storage if bucket exists (optional, ignore errors)
    try {
      const bucket = supabase.storage.from("research-files")
      if (fp && typeof fp !== "string") await bucket.upload(`${user.id}/${Date.now()}_paper_${fp.name}`, fp, { upsert: true })
      if (fd2 && typeof fd2 !== "string") await bucket.upload(`${user.id}/${Date.now()}_deck_${fd2.name}`, fd2, { upsert: true })
      if (fa && typeof fa !== "string") await bucket.upload(`${user.id}/${Date.now()}_assets_${fa.name}`, fa, { upsert: true })
    } catch {}
  } else {
    body = await request.json()
  }

  // Map to DB columns + keep full payload in description/form_data
  const insertPayload: any = {
    title: body.title || body.title,
    description: body.problem || body.description || "",
    researcher_name: body.authorAff || body.researcher_name || "",
    university: body.journal || body.university || "",
    subject: body.pathway || body.subject || "",
    sdg: body.srl || body.trl || body.sdg || "",
    district: body.location || (Array.isArray(body.targetDistricts) ? body.targetDistricts.join(", ") : body.targetDistricts) || body.district || "",
    status: "submitted",
    submitted_by: user.id,
    // Store full form as JSON for future use (requires form_data column; fallback to description if column missing)
    form_data: {
      ...body,
      filePaperName, fileDeckName, fileAssetsName,
    },
  }

  let { data, error } = await supabase.from("research_projects").insert(insertPayload).select().single()

  // Fallback if form_data column does not exist yet
  if (error && error.message?.includes("form_data")) {
    const { form_data, ...rest } = insertPayload
    const retry = await supabase.from("research_projects").insert(rest).select().single()
    data = retry.data
    error = retry.error
  }

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}
