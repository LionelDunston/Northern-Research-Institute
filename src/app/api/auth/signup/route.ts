import { NextResponse } from "next/server"
import { createClient, createAdminClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  const { email, password, fullName, organization } = await request.json()
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
    const { error: profileError } = await admin.from("profiles").insert({
      id: authData.user.id,
      email,
      full_name: fullName,
      role: "author",
      organization,
    })
    if (profileError) {
      console.error("Profile insert error:", profileError)
    }
  }

  return NextResponse.json({ user: authData.user })
}
