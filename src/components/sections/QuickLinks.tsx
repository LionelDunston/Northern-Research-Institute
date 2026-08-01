import Link from "next/link"

const links = [
  { title: "About NRI", href: "/about", description: "Learn about our history, mission, vision, and values." },
  { title: "Governance", href: "/governance", description: "Meet our Board of Directors, leadership, and advisory council." },
  { title: "Become a Partner", href: "/partnerships", description: "Collaborate with us to drive innovation and impact." },
  { title: "Contact Us", href: "/contact", description: "Get in touch with our team for inquiries and support." },
]

export function QuickLinks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
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
