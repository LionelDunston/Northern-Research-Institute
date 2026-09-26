import Link from "next/link"

export function QuickLinks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Where do you want to start?</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Pick the path that fits your work. We will take it from there.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Business Opportunities",
              href: "/research-programmes",
              description: "Turn research into a product or a business. Help with prototype, market and funding.",
            },
            {
              title: "Community Development",
              href: "/innovation",
              description: "Use your work where it helps most - schools, clinics and village communities.",
            },
            {
              title: "Researcher Portal",
              href: "/researcher/research",
              description: "Our six step form takes about ten minutes, and we guide you through every stage.",
            },
            {
              title: "Partnerships",
              href: "/partnerships",
              description: "University, company or NGO. If you want to work together, start here.",
            },
          ].map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group p-6 rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{link.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
