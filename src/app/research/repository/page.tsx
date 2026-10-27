import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Repository | NRI",
  description: "NRI develops an integrated Data & Knowledge Centre that collects, processes, analyses, and disseminates data and knowledge.",
}

const submissions = [
  "Bachelor's theses",
  "Master's theses",
  "MPhil theses",
  "PhD theses",
  "Research summaries",
  "Policy briefs",
]

const datasets = [
  "Demographic data",
  "Economic data",
  "Social data",
  "Environmental data",
  "Health data",
  "Education data",
  "Labour-market data",
  "Governance data",
  "Business and industry data",
  "Development data",
  "Spatial/geographical data",
  "Survey data",
  "Administrative data",
  "Research datasets",
  "Community-generated/local knowledge",
]

export default function ResearchRepositoryPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Research Repository</h1>
          <p className="mt-4 text-lg text-white/80 max-w-4xl mx-auto">
            NRI develops an integrated Data & Knowledge Centre that collects, processes, analyses, and disseminates data and knowledge from diverse sectors, disciplines, and geographic contexts.
          </p>
        </div>
      </section>

      <Section title="About">
        <div className="max-w-4xl mx-auto text-center text-muted leading-relaxed">
          <p>
            The Centre transforms data and information into knowledge, evidence, and actionable insights to support research, policy, innovation, business, projects, and sustainable development.
          </p>
        </div>
      </Section>

      <Section variant="muted" title="Researchers Can Submit">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {submissions.map((item) => (
            <div key={item} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Data & Knowledge Centre Coverage">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {datasets.map((item) => (
            <div key={item} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
