# NRI Website — Interview Preparation Guide

## 1. THE 60-SECOND PITCH (memorize this)

> "I built a full-stack web platform for the Northern Research Institute, a research organization
> that turns graduate research into real-world solutions like startups, policies, and community
> projects. The platform has a public website with 11 content sections, plus a secure role-based
> portal system. There are four user roles — Admin, Partner, Student, and Mentor — each with
> different permissions. Students submit research, mentors evaluate it, partners and admins manage
> it. The tech stack is Next.js with React and TypeScript on the front end, Supabase for the
> database and authentication, and Tailwind CSS for styling. It's deployed on Vercel with automatic
> deployment from GitHub."

---

## 2. ARCHITECTURE (how it fits together)

```
┌─────────────────────────────────────────────┐
│              Vercel (hosting)                │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │         Next.js App (16)             │  │
│  │                                      │  │
│  │  Static Pages   API Routes           │  │
│  │  (SSG/SSR)      (/api/auth,          │  │
│  │  Home, About,   /api/research,       │  │
│  │  Governance...)  /api/contact,       │  │
│  │                  /api/admin/*)       │  │
│  │                                      │  │
│  │  Middleware (route protection)       │  │
│  └──────────────┬───────────────────────┘  │
│                 │ HTTPS                    │
└─────────────────┼─────────────────────────┘
                  │
          ┌───────┴────────┐
          │     Supabase   │  (PostgreSQL + Auth + Row Level Security)
          │  profiles      │
          │  research_     │
          │  projects      │
          │  news          │
          │  publications  │
          │  partners      │
          │  contact_      │
          │  submissions   │
          └────────────────┘
```

### Key files to know:
- `src/app/layout.tsx` — root layout with Header/Footer
- `src/middleware.ts` — protects `/admin`, `/partner`, `/student`, `/mentor` routes
- `src/lib/supabase/server.ts` — server-side DB client (has `createAdminClient` with service role key)
- `src/lib/supabase/client.ts` — browser client
- `src/lib/supabase/middleware.ts` — auth check logic
- `src/app/api/auth/login/route.ts` — login endpoint
- `src/app/api/research/route.ts` — research CRUD (role-aware)
- `supabase-schema.sql` — full database schema + Row Level Security policies

---

## 3. TECH STACK — WHY THESE CHOICES (be ready to justify)

| Technology | Why chosen | Key point to mention |
|---|---|---|
| **Next.js 16** | React framework with file-based routing, SSR/SSG, API routes in one codebase | "One project for frontend AND backend" |
| **React 19** | Component-based UI, hooks for state | Reusable components like Header/Footer/Section |
| **TypeScript** | Type safety catches errors before runtime | "Interfaces for NavItem, TeamMember, Publication..." |
| **Tailwind CSS v4** | Utility-first, fast responsive styling | Dark navy/teal academic branding |
| **Supabase** | Postgres database + Auth + Row Level Security | "Backend-as-a-service on free tier" |
| **Vercel** | Native Next.js hosting, auto-deploy from GitHub | CI/CD for free |

---

## 4. DATABASE DESIGN (know every table)

| Table | Purpose | Key columns |
|---|---|---|
| `profiles` | Extends auth.users with role | `id`, `email`, `full_name`, `role`, `organization` |
| `research_projects` | Research submissions | `title`, `description`, `researcher_name`, `university`, `subject`, `sdg`, `district`, `status`, `submitted_by` |
| `news` | News articles | `title`, `summary`, `category`, `content`, `published` |
| `publications` | Publications | `title`, `type`, `description`, `file_url` |
| `contact_submissions` | Contact form | `name`, `email`, `subject`, `message`, `read` |
| `partners` | Partner orgs | `name`, `category`, `contact_email`, `approved` |

### Roles stored in `profiles.role`:
```
admin   → full access (all tables, all rows)
partner → own research + limited views
student → submit research, view own
mentor  → review submitted research
```

---

## 5. AUTHENTICATION & AUTHORIZATION (the meat of a dev interview)

### How login works:
1. User submits email/password to `/api/auth/login`
2. Supabase validates credentials → returns session (JWT)
3. JWT stored in HTTP-only cookie (via `@supabase/ssr`)
4. Browser redirects to `/admin`, `/partner`, `/student`, or `/mentor` based on role

### How routes are protected:
1. `src/middleware.ts` runs on every request to protected paths
2. It reads the session cookie → `supabase.auth.getUser()`
3. If no user → redirect to `/auth/login`
4. If user → looks up role in `profiles` table
5. Role mismatch → redirect home

### Two-level security (mention this — it's impressive):
- **Level 1:** Middleware blocks unauthorized page access
- **Level 2:** Row Level Security (RLS) in Postgres blocks unauthorized DATA access
  - RLS policies like: `student can only SELECT research WHERE submitted_by = their id`

---

## 6. COMMON DEVELOPER INTERVIEW QUESTIONS

### Q: "Walk me through a project you've built."
Say the 60-second pitch, then drill into: database design → auth flow → role-based access → deployment.

### Q: "How does authentication work in your app?"
Explain: email/password → Supabase validates → JWT session in HTTP-only cookie → middleware checks session each request → role-based redirect.

### Q: "How do you secure admin-only pages?"
Two answers:
1. Middleware checks the session cookie and user role before serving the page.
2. Even if someone bypasses the page, PostgreSQL Row Level Security prevents them from reading admin data — defense in depth.

### Q: "What's the difference between client-side and server-side rendering?"
- **SSR:** HTML generated on the server per request — good for dynamic data, SEO.
- **CSR:** HTML rendered in browser with JS — fast after load, weaker SEO.
- **SSG (static):** HTML generated at build time — fastest, good for content pages.
- Your project uses: static for content pages (About, Governance), server-rendered/dynamic for API routes and protected pages.

### Q: "Explain REST APIs you built."
You built RESTful API routes:
- `POST /api/auth/login` — authenticate
- `POST /api/auth/signup` — register
- `POST /api/contact` — save contact form
- `GET/POST /api/research` — list/create research (role-aware)
- `GET/POST /api/admin/news` — admin manages news
- `PATCH /api/admin/partners` — admin approves partners

### Q: "What is Row Level Security?"
A Postgres feature where each row can have access rules. Even if someone queries the database directly, RLS policies decide what they can see. E.g., a student can only see their own research.

### Q: "How did you handle the deployment?"
Code pushed to GitHub → Vercel imports the repo → reads env vars (Supabase URL + key) → builds and deploys automatically on every push. Live URL: Vercel project URL.

### Q: "What challenges did you face?"
Great honest answers:
- **Turbopack incompatibility:** "Next.js's default bundler didn't work on my Windows setup, so I configured Webpack instead — this taught me about build tooling."
- **Environment variable management:** "I learned the difference between public (NEXT_PUBLIC_) and secret env vars, and why .env.local must stay out of git."
- **Role complexity:** "Adding Student and Mentor roles meant every API route had to check which role was calling it."

---

## 7. DATA SCIENCE INTERVIEW QUESTIONS

The GRI (Graduate Research-to-Impact) concept gives you a data science angle:

### Q: "This is a data science interview — where's the data in your project?"
Every research submission stores: university, subject, SDG (Sustainable Development Goal), district, status. Over time this is a rich dataset showing:
- Which subjects are most researched
- Which universities produce the most commercializable research
- Which districts have research gaps
- Research-to-startup conversion rates

### Q: "How would you analyze the research data?"
- **EDA:** count submissions by subject/SDG/district → bar charts, choropleth maps
- **Trend:** submissions over time → line chart
- **Correlation:** does university predict evaluation score?
- **Segmentation:** cluster research by subject + SDG + potential pathway (business/government/community/industry)

### Q: "What would you build with this data?"
- A **recommendation system** matching research to investors/funders (content-based: similarity on subject + SDG)
- A **startup success predictor** (features: evaluation scores, subject, funding sought → outcome)
- An **impact dashboard** with KPIs: research uploaded, jobs created, funding secured

### Q: "How is the Impact Dashboard useful as a data product?"
It aggregates KPIs: research uploaded, universities participating, projects evaluated, startups created, jobs created, funding secured, policies adopted, community projects. That's an analytics product — measure, report, and drive decisions.

### Q: "How would you normalize/clean this data?"
Standard data cleaning: handle missing `sdg`/`district` values, standardize university names (typos), deduplicate submissions, parse dates, encode categorical columns for modeling.

---

## 8. BEHAVIORAL QUESTIONS

### Q: "Why did you build this?"
"I identified that graduate research often ends up unused. The institute needed a platform to capture, evaluate, and route that research toward real-world applications — so I built a system that manages the full lifecycle."

### Q: "How did you decide the tech stack?"
"I chose Next.js for the single-codebase frontend+backend model, Supabase because it gives a real Postgres database with built-in auth on a free tier — ideal for a research institute that needed zero upfront cost."

### Q: "What would you do differently next time?"
"I'd add more automated tests, set up an analytics pipeline earlier, and add a proper file upload system for research documents rather than just metadata."

---

## 9. KNOW YOUR WEAKNESSES & HOW TO ADDRESS THEM

| Weakness | Honest answer |
|---|---|
| "Is it production-ready?" | "The core is solid; next steps are automated tests, file uploads for PDFs, and stronger input validation." |
| "Why no test suite?" | "The project is early-stage. My next step is to add unit tests for the API routes and integration tests for the auth flow." |
| "Is it scalable?" | "Vercel scales horizontally for free. Supabase free tier handles 50K users. For more, you'd add indexes, caching, and move to the paid tier." |

---

## 10. THINGS YOU MUST NOT SAY

- ❌ "I don't know how auth works" — you DO, study section 5
- ❌ "Supabase did everything" — you designed the schema, RLS policies, and role logic
- ❌ "It's just a template" — you built pages, API routes, and the role system yourself

---

## 11. PROJECT URLS TO MENTION

- GitHub: `https://github.com/LionelDunston/Northern-Research-Institute`
- Live site: your Vercel URL
- Login: `/auth/login` (test: admin + a partner account)

---

## 12. QUICK CRAM SHEET (last-minute before interview)

- **4 roles:** Admin, Partner, Student, Mentor
- **Stack:** Next.js, React, TypeScript, Tailwind, Supabase, Vercel
- **DB:** PostgreSQL (6 tables) + RLS
- **Auth:** Supabase email/password → JWT cookie → middleware role check
- **Key feature:** Role-based portals + research submission/evaluation workflow
- **Data science hook:** Research dataset + Impact Dashboard KPIs + recommendation potential
