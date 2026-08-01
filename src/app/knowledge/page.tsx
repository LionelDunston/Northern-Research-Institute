import { Section } from "@/components/layout/Section"
import { knowledgeResources } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Knowledge Centre | Northern Research Institute",
  description: "Access NRI's learning resources including proposal templates, business plan templates, grant writing guides, and toolkits.",
}

export default function KnowledgePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Knowledge Centre</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Learning resources, templates, and guides to support your research and innovation journey.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeResources.map((resource) => (
            <div key={resource.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow text-center">
              <span className="text-4xl">{resource.icon}</span>
              <h3 className="text-lg font-semibold mt-4 mb-2">{resource.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{resource.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
