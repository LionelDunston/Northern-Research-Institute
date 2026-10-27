import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Funding Mobilisation and Project Development | NRI",
  description: "Connecting Ideas with Resources. Turning Proposals into Action.",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">05. Funding Mobilisation and Project Development</h1>
          <p className="mt-3 text-lg text-white/80">Connecting Ideas with Resources. Turning Proposals into Action.</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI aims to connect promising research, development ideas, and community initiatives with the funding and partnerships needed to bring them to life. We identify relevant funding opportunities, including research grants, development programmes, corporate social responsibility (CSR) initiatives, development contracts, and responsible private investment.</p>
          <p>Working with researchers, universities, government institutions, NGOs, businesses, and community organisations, NRI seeks to transform research findings and development priorities into well-structured project proposals, realistic budgets, implementation plans, and measurable outcomes. We also aim to facilitate partnerships between idea developers, funders, and implementing organisations to support initiatives with clear social, economic, and environmental value.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Valuable research and promising development ideas often remain unimplemented because of limited funding, insufficient project planning, or a lack of connections with suitable partners. Effective funding mobilisation helps bridge this gap by connecting evidence-based ideas with appropriate resources, technical expertise, and implementation support.</p>
            <p className="text-muted leading-relaxed mt-3">Through this work, NRI seeks to support sustainable development initiatives, encourage innovation, create employment opportunities, and increase the practical impact of research across Northern Sri Lanka and beyond.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Identify Funding Opportunities:</strong> Map relevant grants, research funds, CSR programmes, development contracts, and investment opportunities.</li>
              <li><strong>Develop Fundable Projects:</strong> Translate research findings and community needs into clear project concepts and proposals.</li>
              <li><strong>Prepare Project Plans:</strong> Develop budgets, work plans, implementation strategies, risk assessments, and measurable indicators.</li>
              <li><strong>Build Strategic Partnerships:</strong> Connect researchers and project developers with suitable funders, technical experts, and implementing institutions.</li>
              <li><strong>Support Implementation Readiness:</strong> Help assess feasibility, sustainability, expected benefits, and the resources required before a project begins.</li>
              <li><strong>Promote Accountability:</strong> Encourage transparent fund management, progress monitoring, financial reporting, and evaluation of results.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
