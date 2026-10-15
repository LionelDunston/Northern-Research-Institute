"use client"

import Link from "next/link"
import { useState, type ReactNode } from "react"

type Priority = {
  title: string
  desc: string
  gradient: string
  icon: ReactNode
}

const iconClass = "h-10 w-10 text-white"

const priorities: Priority[] = [
  {
    title: "01. Graduate Employment & Skills",
    desc: "Research on graduate unemployment, skills gaps, employability, entrepreneurship, and pathways to employment and self-employment.",
    gradient: "from-indigo-500 to-blue-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10L12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1 2.7 3 6 3s6-2 6-3v-5" />
        <path d="M22 10v6" />
      </svg>
    ),
  },
  {
    title: "02. Youth Development",
    desc: "Youth livelihoods, leadership, skills, participation, entrepreneurship, migration, and social inclusion.",
    gradient: "from-rose-500 to-pink-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3" />
        <path d="M2 21v-2a5 5 0 015-5h4a5 5 0 015 5v2" />
        <path d="M16 3.5a3 3 0 010 7" />
        <path d="M18 14a5 5 0 013 5v2" />
      </svg>
    ),
  },
  {
    title: "03. Rural Development & Livelihoods",
    desc: "Rural economies, household livelihoods, community development, poverty reduction, and sustainable income opportunities.",
    gradient: "from-emerald-500 to-green-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7" />
        <path d="M5 9v11h14V9" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "04. Women's Economic Empowerment",
    desc: "Women's employment, entrepreneurship, economic participation, access to resources, and livelihood development.",
    gradient: "from-fuchsia-500 to-purple-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="3" />
        <path d="M12 9v13" />
        <path d="M8.5 13h7" />
        <path d="M7 22h10" />
      </svg>
    ),
  },
  {
    title: "05. Education & Skills Development",
    desc: "Education quality, higher education, vocational training, skill development, and the transition from education to employment.",
    gradient: "from-amber-500 to-orange-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 6c-2-1.5-5-2-9-2v15c4 0 7 .5 9 2 2-1.5 5-2 9-2V4c-4 0-7 .5-9 2z" />
        <path d="M12 6v15" />
      </svg>
    ),
  },
  {
    title: "06. Population & Migration",
    desc: "Population change, demographic trends, internal and international migration, ageing, displacement, and their social and economic impacts.",
    gradient: "from-cyan-500 to-sky-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3.5 3 14.5 0 18" />
        <path d="M12 3c-3 3.5-3 14.5 0 18" />
      </svg>
    ),
  },
  {
    title: "07. Environment & Climate Change",
    desc: "Climate resilience, natural resources, environmental sustainability, coastal ecosystems, water, and climate-related vulnerabilities.",
    gradient: "from-teal-500 to-emerald-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c8-2 9-9 9-16-7 0-14 1-16 9-1.5 5 1 7 1 7s1-4 4-6" />
        <path d="M6 16c3-3 6-4 9-5" />
      </svg>
    ),
  },
  {
    title: "08. Public Health",
    desc: "Health access, community health, social determinants of health, nutrition, mental well-being, and health inequalities.",
    gradient: "from-red-500 to-rose-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-9.5-9A5 5 0 0112 6a5 5 0 019.5 6C19 16.5 12 21 12 21z" />
        <path d="M12 10v5" />
        <path d="M9.5 12.5h5" />
      </svg>
    ),
  },
  {
    title: "09. Social Development",
    desc: "Poverty, inequality, social protection, gender, children, older persons, disability, social inclusion, and emerging social issues.",
    gradient: "from-violet-500 to-indigo-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21v-1a7 7 0 0114 0v1" />
      </svg>
    ),
  },
  {
    title: "10. Local Governance",
    desc: "Local government, public services, participatory governance, institutional capacity, decentralisation, and community participation.",
    gradient: "from-slate-600 to-slate-800",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M4 10h16" />
        <path d="M12 3l9 6H3l9-6z" />
        <path d="M6 10v11M10 10v11M14 10v11M18 10v11" />
      </svg>
    ),
  },
  {
    title: "11. Agriculture & Rural Economy",
    desc: "Agriculture, fisheries, livestock, value addition, food security, rural enterprises, markets, and sustainable production.",
    gradient: "from-lime-500 to-green-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V10" />
        <path d="M12 10c0-4 3-7 7-7 0 4-3 7-7 7z" />
        <path d="M12 14c0-3-2.5-5.5-6-5.5C6 12 8.5 14 12 14z" />
        <path d="M7 22h10" />
      </svg>
    ),
  },
  {
    title: "12. Digital Transformation",
    desc: "Digital literacy, digital inclusion, digital public services, technology adoption, data systems, and digital opportunities.",
    gradient: "from-blue-500 to-indigo-600",
    icon: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </svg>
    ),
  },
]

export function NorthernPriorities() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex justify-center -mt-24 mb-20">
          <Link
            href="/researcher/research"
            className="group inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow-sm hover:bg-primary-light transition-all hover:-translate-y-0.5 focus:ring-2 focus:ring-primary/20 focus:outline-none"
          >
            Submit Your Research
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Northern Development Priorities</h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            NRI's research and development agenda is grounded in the social, economic, environmental, and
            institutional realities of the Northern Province, while remaining connected to national and global
            development priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {priorities.map((p, i) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-border shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              tabIndex={0}
            >
              <div className={`aspect-[4/3] relative bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 45%)" }} />
                <div className={`transition-transform duration-500 ease-out ${active === i ? "scale-110" : "scale-100"}`}>
                  {p.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-semibold text-white leading-tight drop-shadow">{p.title}</h3>
                </div>
              </div>
              <div className={`absolute inset-0 flex flex-col justify-end bg-slate-900/95 text-white p-4 sm:p-5 transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${p.gradient}`}>
                  <span className="scale-[0.65]">{p.icon}</span>
                </div>
                <h3 className="text-base font-semibold mb-2 leading-tight">{p.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed line-clamp-6">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
