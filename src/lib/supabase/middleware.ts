import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  let supabaseResponse = NextResponse.next({ request })

  if (!supabaseUrl || !supabaseKey) {
    const isProtected =
      request.nextUrl.pathname.startsWith("/admin") ||
      request.nextUrl.pathname.startsWith("/mentor") ||
      request.nextUrl.pathname.startsWith("/researcher") ||
      request.nextUrl.pathname.startsWith("/author") ||
      request.nextUrl.pathname.startsWith("/student") ||
      request.nextUrl.pathname.startsWith("/partner")
    if (isProtected) {
      const url = request.nextUrl.clone()
      url.pathname = "/auth/login"
      return NextResponse.redirect(url)
    }
    return supabaseResponse
  }

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() { return request.cookies.getAll() },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        supabaseResponse = NextResponse.next({ request })
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options)
        )
      },
    },
  })

  const { data: { user } } = await supabase.auth.getUser()

  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")
  const isMentorRoute = request.nextUrl.pathname.startsWith("/mentor")
  const isResearcherRoute = request.nextUrl.pathname.startsWith("/researcher") || request.nextUrl.pathname.startsWith("/author") || request.nextUrl.pathname.startsWith("/student")
  const isPartnerRoute = request.nextUrl.pathname.startsWith("/partner")

  if (!user && (isAdminRoute || isMentorRoute || isResearcherRoute || isPartnerRoute)) {
    const url = request.nextUrl.clone()
    url.pathname = "/auth/login"
    url.searchParams.set("redirect", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle()

    if (isAdminRoute && profile?.role !== "admin") {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url)
    }

    if (isMentorRoute && profile?.role !== "mentor" && profile?.role !== "admin") {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url)
    }

    if (isResearcherRoute && profile?.role !== "researcher" && profile?.role !== "author" && profile?.role !== "student" && profile?.role !== "mentor" && profile?.role !== "admin") {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url)
    }

    if (isPartnerRoute && profile?.role !== "partner" && profile?.role !== "admin") {
      const url = request.nextUrl.clone()
      url.pathname = "/"
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
