import Link from "next/link"

export function QuickLinks() {
  const links = [
    {
      title: "Business Opportunities",
      href: "/research-programmes",
      description: "Turn research into a product or a business with practical support and funding routes.",
    },
    {
      title: "Community Development",
      href: "/innovation",
      description: "Apply evidence where it helps most — schools, clinics and village communities.",
    },
    {
      title: "Researcher Portal",
      href: "/researcher/research",
      description: "Our six step form is clear and guided. Published or not, you can start now.",
    },
    {
      title: "Partnerships",
      href: "/partnerships",
      description: "Universities, companies, NGOs and investors — work with NRI to create shared impact.",
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Where do you want to start?</h2>
          <p className="mt-3 text-muted leading-relaxed">Pick a path and we’ll take it from there.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, i) => (
            <Link
              key={link.title}
              href={link.href}
              className="group relative p-6 rounded-xl border border-border bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 focus:ring-2 focus:ring-primary/20 focus:outline-none"
            >
              <div className="absolute -top-3 left-6 inline-flex h-6 px-2 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white shadow-sm">
                {i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold group-hover:text-primary transition-colors">{link.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{link.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-transform group-hover:translate-x-0.5">
                Explore
                <span className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
