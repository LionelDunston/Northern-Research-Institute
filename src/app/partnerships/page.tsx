import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
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
      <PageHero title="Partnerships" lede="NRI&apos;s strategic collaborations and pathways for organisations to work with the Institute." image={{ src: "/editorial/paddy-field-in-srilanka.jpg", alt: "A paddy field in Sri Lanka at harvest time.", credit: "“Paddy field in Sri Lanka” by Donald2019, CC BY-SA 4.0, via Wikimedia Commons." }} action={{ label: "Become a partner", href: "/partnerships#become-a-partner" }} />

      <Section subtitle="Partnership Roles">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerRoles.map((partner) => (
            <div key={partner.category} className="bg-field p-6 transition-shadow">
              <h3 className="font-semibold text-primary mb-2">{partner.category}</h3>
              <p className="text-[16px] text-muted leading-relaxed">{partner.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <PhotoStrip
        title="Partners in the field"
        images={[
          {
            src: "/editorial/tea-factory-sri-lanka-female-working.jpg",
            alt: "Workers at a tea factory in Sri Lanka.",
            caption: "Workers at a tea factory in the hill country.",
            credit: "“Tea factory Sri Lanka female working” by Peter van der Sluijs, CC BY-SA 3.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/coconut-rope-production.jpg",
            alt: "Village artisans weaving coconut rope on an industrial scale in Sri Lanka.",
            caption: "Artisans weave coconut rope in a village workshop.",
            credit: "“Coconut Rope Production” by Curved.kiwix, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/life-is-a-boat.jpg",
            alt: "A fishing boat resting in a lagoon off Jaffna.",
            caption: "Fishing boats rest in the lagoons that ring the peninsula.",
            credit: "“Life is a boat!” by Navod Thathsara Kankanamge, CC BY-SA 4.0, via Wikimedia Commons.",
          },
        ]}
      />



      <Section id="become-a-partner" variant="muted" title="Becoming a Partner">
        <div className="max-w-3xl space-y-8">
          <p className="text-muted text-left">
            Organisations can partner with NRI through research collaboration, funding, technical support,
            innovation, investment, knowledge exchange, or project implementation.
          </p>

          <div>
            <h3 className="font-semibold text-left mb-4">NRI Welcomes Partnerships With</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {canPartnerWith.map((item) => (
                <div key={item} className="bg-field p-3 text-left text-[16px] font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-left mb-4">Ways to Collaborate</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {collaborationMethods.map((method) => (
                <span key={method} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-[16px] font-medium">
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
