import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innovation & Commercialization | Northern Research Institute",
  description: "Supporting the transition from research to market through incubation, startup support, and technology transfer.",
}

const services = [
  { title: "Business Incubation", description: "Comprehensive incubation programme providing workspace, mentorship, and resources for research-driven startups.", icon: "🥚" },
  { title: "Startup Support", description: "Tailored support for early-stage ventures including legal, financial, and operational guidance.", icon: "🚀" },
  { title: "Product Development", description: "Assistance with prototyping, testing, and refining research outcomes into market-ready products.", icon: "🔧" },
  { title: "Technology Transfer", description: "Facilitating the transfer of research technologies to industry partners and commercial entities.", icon: "🔄" },
  { title: "Patent Assistance", description: "Guidance on intellectual property protection, patent filing, and technology licensing.", icon: "📜" },
  { title: "Commercialization Support", description: "End-to-end support for bringing research innovations to market, including market analysis and business modelling.", icon: "📈" },
]

export default function InnovationPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Innovation & Commercialization</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Supporting the transition from research to market-ready solutions.
          </p>
        </div>
      </section>

      <Section subtitle="Our services help researchers and entrepreneurs turn discoveries into viable businesses and products.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl">{service.icon}</span>
              <h3 className="text-lg font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
