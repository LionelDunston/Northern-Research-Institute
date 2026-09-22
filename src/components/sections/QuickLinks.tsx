import Link from "next/link"

export function QuickLinks() {
  const links = [
    { title: "Business Opportunities", href: "/research-programmes", desc: "Turn your research into a product or startup. We help with prototype, market and funding.", color: "from-orange-400 to-pink-500" },
    { title: "Community Development", href: "/innovation", desc: "Use your work to help a community — schools, clinics, villages. Practical, not just papers.", color: "from-emerald-400 to-teal-500" },
    { title: "Researcher Portal", href: "/researcher/research", desc: "Our 6-step form takes 10 minutes. Published or not, we guide you.", color: "from-violet-500 to-indigo-500" },
    { title: "Partnerships", href: "/partnerships", desc: "University, company or NGO — let’s work together.", color: "from-cyan-400 to-blue-500" },
  ]
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Where do you want to start?</h2>
          <p className="text-muted mt-2">No jargon. Pick what fits and we’ll take it from there.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group relative overflow-hidden p-[1px] rounded-2xl hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative bg-white rounded-[15px] p-6 h-full">
                <div className={`w-10 h-1.5 rounded-full bg-gradient-to-r ${link.color} mb-4`} />
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1">{link.desc}</p>
                <span className="inline-flex mt-4 text-sm font-bold text-primary">Explore</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
