import { Section } from "@/components/layout/Section"
import { partners } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partnerships | Northern Research Institute",
  description: "Learn about NRI's strategic collaborations and how to partner with the Institute.",
}

const partnerRoles = [
  {
    category: "Universities",
    role: "Support research collaboration, knowledge exchange, graduate engagement, and joint programmes.",
  },
  {
    category: "Government Ministries",
    role: "Connect research with public policy, government priorities, and development initiatives.",
  },
  {
    category: "NGOs",
    role: "Support the application of research to social, environmental, and community development initiatives.",
  },
  {
    category: "International Organisations",
    role: "Facilitate international research collaboration, technical expertise, funding, and knowledge exchange.",
  },
  {
    category: "Private Companies",
    role: "Support innovation, technology development, commercialisation, investment, and employment opportunities.",
  },
  {
    category: "Development Partners",
    role: "Support research implementation, capacity building, funding, and sustainable development initiatives.",
  },
]

const canPartnerWith = [
  "Universities & Research Institutions",
  "Government Institutions",
  "International Organisations",
  "NGOs & Civil Society Organisations",
  "Private Sector & Companies",
  "Investors & Financial Institutions",
  "Development Partners",
  "Professional & Industry Associations",
]

const collaborationMethods = [
  "Research Collaboration",
  "Innovation",
  "Investment",
  "Funding",
  "Technical Expertise",
  "Knowledge Exchange",
  "Capacity Building",
  "Project Implementation",
]

export default function PartnershipsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Partnerships</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            NRI's strategic collaborations and pathways for organisations to work with the Institute.
          </p>
        </div>
      </section>

      <Section subtitle="Partnership Roles">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerRoles.map((partner) => (
            <div key={partner.category} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-primary mb-2">{partner.category}</h3>
              <p className="text-sm text-muted leading-relaxed">{partner.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Becoming a Partner">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-muted text-center">
            Organisations can partner with NRI through research collaboration, funding, technical support,
            innovation, investment, knowledge exchange, or project implementation.
          </p>

          <div>
            <h3 className="font-semibold text-center mb-4">NRI Welcomes Partnerships With</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {canPartnerWith.map((item) => (
                <div key={item} className="bg-white p-3 rounded-lg border border-border text-center text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-center mb-4">Ways to Collaborate</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {collaborationMethods.map((method) => (
                <span key={method} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
