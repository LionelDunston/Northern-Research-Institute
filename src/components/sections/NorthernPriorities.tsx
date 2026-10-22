"use client"

import Image from "next/image"
import Link from "next/link"

const priorities = [
  {
    title: "Graduate employment and skills",
    desc: "Research on graduate unemployment, skills gaps, employability, entrepreneurship, and pathways to employment and self-employment.",
    image: "/priorities/graduate-employment.jpg",
  },
  {
    title: "Youth development",
    desc: "Youth livelihoods, leadership, skills, participation, entrepreneurship, migration, and social inclusion.",
    image: "/priorities/youth.jpg",
  },
  {
    title: "Community development and livelihoods",
    desc: "Community economies, household livelihoods, community development, poverty reduction, and sustainable income opportunities.",
    image: "/priorities/community.jpg",
  },
  {
    title: "Women’s economic empowerment",
    desc: "Women’s employment, entrepreneurship, economic participation, access to resources, and livelihood development.",
    image: "/priorities/women.jpg",
  },
  {
    title: "Education and skills development",
    desc: "Education quality, higher education, vocational training, skill development, and the transition from education to employment.",
    image: "/priorities/education.jpg",
  },
  {
    title: "Population and migration",
    desc: "Population change, demographic trends, internal and international migration, ageing, displacement, and their social and economic impacts.",
    image: "/priorities/migration.jpg",
  },
  {
    title: "Environment and climate change",
    desc: "Climate resilience, natural resources, environmental sustainability, coastal ecosystems, water, and climate-related vulnerabilities.",
    image: "/priorities/environment.jpg",
  },
  {
    title: "Public health",
    desc: "Health access, community health, social determinants of health, nutrition, mental well-being, and health inequalities.",
    image: "/priorities/health.jpg",
  },
  {
    title: "Social development",
    desc: "Poverty, inequality, social protection, gender, children, older persons, disability, social inclusion, and emerging social issues.",
    image: "/priorities/social.jpg",
  },
  {
    title: "Local governance",
    desc: "Local government, public services, participatory governance, institutional capacity, decentralisation, and community participation.",
    image: "/priorities/governance.jpg",
  },
  {
    title: "Agriculture and the community economy",
    desc: "Agriculture, fisheries, livestock, value addition, food security, community enterprises, markets, and sustainable production.",
    image: "/priorities/agriculture.jpg",
  },
  {
    title: "Digital transformation",
    desc: "Digital literacy, digital inclusion, digital public services, technology adoption, data systems, and digital opportunities.",
    image: "/priorities/digital.jpg",
  },
]

export function NorthernPriorities() {
  return (
    <section className="section-padding bg-paper">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <div className="lg:col-span-7" data-reveal>
            <h2 className="t-head">Northern development priorities</h2>
          </div>
          <div className="lg:col-span-5" data-reveal>
            <p className="t-body text-ink-soft">
              NRI’s research and development agenda is grounded in the social, economic, environmental, and
              institutional realities of the Northern Province, while remaining connected to national and global
              development priorities.
            </p>
            <Link href="/researcher/research" className="link-rule t-meta font-medium text-brand mt-5 inline-block">
              Submit your research
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {priorities.map((p, i) => (
            <article
              key={p.title}
              className="group"
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-field">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="t-sub mt-5 max-w-[20ch]">{p.title}</h3>
              <p className="t-body mt-2.5 text-ink-soft max-w-[40ch]">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
