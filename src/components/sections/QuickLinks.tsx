import Link from "next/link"

export function QuickLinks() {
  const links = [
    { title: "Business Opportunities", href: "/research-programmes", desc: "Turn research into startups and products.", color: "from-orange-400 to-pink-500", emoji: "🚀" },
    { title: "Community Development", href: "/innovation", desc: "Solve real community challenges.", color: "from-emerald-400 to-teal-500", emoji: "🤝" },
    { title: "Researcher Portal", href: "/researcher/research", desc: "Submit your research in 6 steps.", color: "from-violet-500 to-indigo-500", emoji: "🔬" },
    { title: "Partnerships", href: "/partnerships", desc: "Collaborate for impact.", color: "from-cyan-400 to-blue-500", emoji: "🤝" },
  ]
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">Explore NRI</h2>
          <p className="text-muted mt-2">Pick your pathway — vibrant opportunities await.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group relative overflow-hidden p-[1px] rounded-2xl bg-gradient-to-br hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="relative bg-white rounded-[15px] p-6 h-full">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white text-lg`}>{link.emoji}</div>
                <h3 className="text-lg font-bold mt-3 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-sm text-muted leading-relaxed mt-1">{link.desc}</p>
                <span className="inline-flex mt-3 text-sm font-bold text-primary group-hover:gap-1 transition-all">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
