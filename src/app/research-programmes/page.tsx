import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Programmes | Northern Research Institute",
  description: "Explore NRI's research programmes including climate change, social development, AI, public health, and more.",
}

const programmes = [
  {
    title: "Climate Change Research",
    description:
      "Investigating climate impacts on agriculture, water resources, and ecosystems. Developing adaptation and mitigation strategies for vulnerable communities.",
    area: "Environment",
  },
  {
    title: "Social Development Research",
    description:
      "Researching poverty reduction, gender equality, social inclusion, and community empowerment to inform evidence-based social policies.",
    area: "Social",
  },
  {
    title: "Rural Development Research",
    description:
      "Focusing on rural livelihoods, agricultural transformation, infrastructure development, and access to services in remote areas.",
    area: "Development",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Advancing AI applications in healthcare, agriculture, education, and public service delivery. Exploring ethical AI frameworks.",
    area: "Technology",
  },
  {
    title: "Public Health Research",
    description:
      "Addressing health system challenges, disease surveillance, maternal and child health, and health technology innovation.",
    area: "Health",
  },
  {
    title: "Entrepreneurship Research",
    description:
      "Studying entrepreneurial ecosystems, business innovation, SME growth, and the role of entrepreneurship in economic development.",
    area: "Economy",
  },
]

export default function ResearchProgrammesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Research Programmes</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Beyond GRI, the Institute operates specialized research programmes targeting key development areas.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((programme) => (
            <div key={programme.title} className="group bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all hover:border-accent">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{programme.area}</span>
              <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                {programme.title}
              </h3>
              <p className="text-muted leading-relaxed">{programme.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
