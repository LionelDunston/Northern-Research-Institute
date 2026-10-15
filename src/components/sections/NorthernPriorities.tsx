"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const priorities = [
  {
    title: "01. Graduate Employment & Skills",
    desc: "Research on graduate unemployment, skills gaps, employability, entrepreneurship, and pathways to employment and self-employment.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "02. Youth Development",
    desc: "Youth livelihoods, leadership, skills, participation, entrepreneurship, migration, and social inclusion.",
    image: "https://images.unsplash.com/photo-1508776914442-9d10d303cd09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "03. Rural Development & Livelihoods",
    desc: "Rural economies, household livelihoods, community development, poverty reduction, and sustainable income opportunities.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "04. Women's Economic Empowerment",
    desc: "Women's employment, entrepreneurship, economic participation, access to resources, and livelihood development.",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "05. Education & Skills Development",
    desc: "Education quality, higher education, vocational training, skill development, and the transition from education to employment.",
    image: "https://images.unsplash.com/photo-1588072432836-e100327743c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "06. Population & Migration",
    desc: "Population change, demographic trends, internal and international migration, ageing, displacement, and their social and economic impacts.",
    image: "https://images.unsplash.com/photo-1464037866556-4405639afbf5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "07. Environment & Climate Change",
    desc: "Climate resilience, natural resources, environmental sustainability, coastal ecosystems, water, and climate-related vulnerabilities.",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "08. Public Health",
    desc: "Health access, community health, social determinants of health, nutrition, mental well-being, and health inequalities.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "09. Social Development",
    desc: "Poverty, inequality, social protection, gender, children, older persons, disability, social inclusion, and emerging social issues.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "10. Local Governance",
    desc: "Local government, public services, participatory governance, institutional capacity, decentralisation, and community participation.",
    image: "https://images.unsplash.com/photo-1541976592127-d8c06afc40a5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "11. Agriculture & Rural Economy",
    desc: "Agriculture, fisheries, livestock, value addition, food security, rural enterprises, markets, and sustainable production.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "12. Digital Transformation",
    desc: "Digital literacy, digital inclusion, digital public services, technology adoption, data systems, and digital opportunities.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export function NorthernPriorities() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex justify-center -mt-14 mb-12">
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
              <div className="aspect-[4/3] relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out ${active === i ? "scale-105" : "scale-100"}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-base font-semibold text-white leading-tight">{p.title}</h3>
                </div>
              </div>
              <div className={`absolute inset-0 flex flex-col justify-end bg-slate-900/95 text-white p-4 sm:p-5 transition-opacity duration-300 ${active === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
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
