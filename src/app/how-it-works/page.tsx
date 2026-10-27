import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | NRI",
  description: "NRI's approach to transforming research into practical solutions and development impact.",
}

const items = [
  { href: "/how-it-works/community-engagement", title: "01. Community Engagement and Participatory Research", desc: "Understanding Community Needs. Co-Creating Solutions." },
  { href: "/how-it-works/policy-research", title: "02. Policy Research and Government Advisory", desc: "Evidence for Better Decisions. Research for Better Public Services." },
  { href: "/how-it-works/research-to-opportunity", title: "03. Research-to-Opportunity and Innovation Development", desc: "Turning Knowledge into Practical Opportunities" },
  { href: "/how-it-works/graduate-development", title: "04. Graduate Development and Employment Pathways", desc: "Connecting Graduate Talent with Real-World Opportunities" },
  { href: "/how-it-works/funding-mobilisation", title: "05. Funding Mobilisation and Project Development", desc: "Connecting Ideas with Resources. Turning Proposals into Action." },
  { href: "/how-it-works/university-collaboration", title: "06. University and International Collaboration", desc: "Connecting Local Knowledge with Global Expertise" },
  { href: "/how-it-works/knowledge-dissemination", title: "07. Knowledge Dissemination and Public Communication", desc: "Making Knowledge Accessible. Connecting Evidence with Action." },
  { href: "/how-it-works/institutional-quality", title: "08. Institutional Quality, Ethics and Accountability", desc: "Building Trust. Upholding Integrity. Demonstrating Impact." },
  { href: "/how-it-works/regional-observatory", title: "09. Regional Development Observatory and Evidence Monitoring", desc: "Understanding Regional Change. Informing Development Decisions." },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">How It Works</h1>
          <p className="mt-4 text-lg text-white/80 max-w-4xl mx-auto">
            NRI prioritizes evidence-based solutions to Northern Sri Lanka’s social and economic challenges, with a focus on graduate employability, social development, policy advancement, innovation, and sustainable livelihoods. It transforms research into practical opportunities through strategic partnerships, skills development, employment, entrepreneurship, and resource mobilization, guided by community needs, measurable impact, sustainability, ethics, and accountability.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group block p-6 rounded-lg border border-gray-200 bg-white hover:border-[#0a2de0] hover:shadow-sm transition-all"
              >
                <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
                <span className="mt-4 inline-flex text-sm font-semibold text-[#0a2de0] group-hover:underline">View details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
