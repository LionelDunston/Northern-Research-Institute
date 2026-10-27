import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Engagement and Participatory Research | NRI",
  description: "Understanding Community Needs. Co-Creating Solutions.",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">01. Community Engagement and Participatory Research</h1>
          <p className="mt-3 text-lg text-white/80">Understanding Community Needs. Co-Creating Solutions.</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI connects research with the experiences, priorities, and needs of communities. Through community consultations, participatory research, public discussions, and collaboration with local organisations, we seek to understand social and economic challenges and identify opportunities for meaningful change.</p>
          <p>By engaging residents, youth, women, farmers, fishers, graduates, and other community groups, NRI aims to integrate local knowledge and lived experiences into research, policy development, and practical initiatives. This approach helps identify relevant solutions, strengthen collaboration among stakeholders, and connect research findings with community development, livelihood opportunities, and evidence-informed decision-making.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Effective development begins with understanding the people it seeks to serve. Community engagement helps ensure that research reflects real-world challenges, includes diverse perspectives, and responds to local priorities. By bringing communities, researchers, government institutions, development organisations, and businesses together, NRI seeks to transform shared knowledge into practical solutions that promote inclusive, responsive, and sustainable development.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Listen and Understand:</strong> Identify community priorities, experiences, and challenges.</li>
              <li><strong>Research Together:</strong> Combine research evidence with local knowledge and participation.</li>
              <li><strong>Develop Solutions:</strong> Explore practical responses to social, economic, and development challenges.</li>
              <li><strong>Build Partnerships:</strong> Connect communities with relevant institutions, expertise, and resources.</li>
              <li><strong>Learn and Improve:</strong> Evaluate outcomes and use community feedback to strengthen future initiatives.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
