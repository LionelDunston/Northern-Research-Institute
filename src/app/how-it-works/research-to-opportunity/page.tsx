import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research-to-Opportunity and Innovation Development | NRI",
  description: "Turning Knowledge into Practical Opportunities",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">03. Research-to-Opportunity and Innovation Development</h1>
          <p className="mt-3 text-lg text-white/80">Turning Knowledge into Practical Opportunities</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI bridges the gap between research findings and real-world applications. By assessing completed dissertations, research findings, and community knowledge, we identify opportunities for policy development, community projects, social enterprises, commercial innovation, and employment creation.</p>
          <p>Through opportunity assessment, feasibility studies, and collaboration with relevant stakeholders, NRI aims to identify promising ideas, evaluate their practical potential, and connect viable initiatives with the expertise, partnerships, and resources needed to move forward.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Valuable research should not remain confined to academic publications. Translating knowledge into action can help address social challenges, strengthen local economies, create employment opportunities, and support sustainable development. Not every research finding needs to become a business; the most appropriate pathway may be a public policy, development project, social enterprise, or further research.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Identify Opportunities:</strong> Discover practical applications within research findings and community knowledge.</li>
              <li><strong>Assess Feasibility:</strong> Evaluate needs, demand, costs, potential benefits, and sustainability.</li>
              <li><strong>Develop Solutions:</strong> Transform promising findings into practical concepts, projects, or innovations.</li>
              <li><strong>Connect Resources:</strong> Build partnerships with universities, government institutions, businesses, and funders.</li>
              <li><strong>Support Implementation:</strong> Help suitable initiatives progress from research to testing, application, and impact.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
