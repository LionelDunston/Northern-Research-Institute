import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")
  const nextParam = searchParams.get("next") ?? "/"
  const next = nextParam.startsWith("/") ? nextParam : "/"

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      if (next !== "/") {
        return NextResponse.redirect(new URL(next, request.url))
      }

      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .maybeSingle()

        const redirectTo = profile?.role === "admin" ? "/admin" : profile?.role === "mentor" ? "/mentor" : profile?.role === "partner" ? "/partner" : "/researcher"
        return NextResponse.redirect(new URL(redirectTo, request.url))
      }
    }
  }

  return NextResponse.redirect(new URL(next, request.url))
}
