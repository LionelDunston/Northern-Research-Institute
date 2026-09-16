import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const { email, password, fullName, telephone, organization } = await request.json()
  const phone = telephone || organization || ""
  const supabase = await createClient()

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  })

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 })
  }

  if (authData.user) {
    const admin = createAdminClient()
    // Try to store telephone (new column) with fallback to organization for old DBs
    let profileData: any = { id: authData.user.id, email, full_name: fullName, role: "researcher", organization: phone, telephone: phone }
    let { error: profileError } = await admin.from("profiles").insert(profileData)
    if (profileError && (profileError.message.includes("telephone") || profileError.message.includes("column"))) {
      const { telephone: _t, ...fallback } = profileData
      const retry2 = await admin.from("profiles").insert(fallback)
      profileError = retry2.error
      if (!profileError) profileData = fallback
    }
    if (profileError && profileError.message.includes("profiles_role_check")) {
      console.log("Retrying signup profile insert with student")
      const retry = await admin.from("profiles").insert({ ...profileData, role: "student" })
      profileError = retry.error
      if (profileError && profileError.message.includes("telephone")) {
        const { telephone: _t2, ...fb } = { ...profileData, role: "student" }
        const retry2 = await admin.from("profiles").insert(fb)
        profileError = retry2.error
      }
    }
    if (profileError) {
      console.error("Profile insert error:", profileError)
    }
  }

  return NextResponse.json({ user: authData.user })
}
