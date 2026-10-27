import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Regional Development Observatory and Evidence Monitoring | NRI",
  description: "Understanding Regional Change. Informing Development Decisions.",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">09. Regional Development Observatory and Evidence Monitoring</h1>
          <p className="mt-3 text-lg text-white/80">Understanding Regional Change. Informing Development Decisions.</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI seeks to strengthen understanding of Northern Sri Lanka through the systematic collection, analysis, and monitoring of regional data and development trends. By examining key areas such as employment, migration, livelihoods, poverty, education, gender, health, and local economic development, we aim to identify emerging challenges, changing needs, and opportunities for progress across the region.</p>
          <p>Through regional development indicators, data analysis, thematic reports, and periodic development outlooks, NRI aims to provide reliable evidence that helps communities, policymakers, researchers, government institutions, and development partners understand regional conditions and make informed decisions.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Effective development planning requires a clear understanding of what is changing, where challenges are emerging, and which groups or areas may need greater attention. While research repositories preserve existing knowledge, a development observatory continuously examines available evidence to identify trends, monitor progress, and highlight gaps in knowledge.</p>
            <p className="text-muted leading-relaxed mt-3">By transforming regional data into accessible insights, NRI seeks to support evidence-informed policymaking, improve development planning, strengthen accountability, and identify opportunities for targeted interventions across Northern Sri Lanka.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Monitor Regional Trends:</strong> Track key social, economic, demographic, and environmental developments using available and reliable data.</li>
              <li><strong>Develop Regional Indicators:</strong> Establish appropriate measures to understand development conditions and monitor changes over time.</li>
              <li><strong>Analyse Emerging Challenges:</strong> Identify patterns, disparities, and knowledge gaps that require further investigation or action.</li>
              <li><strong>Publish Development Reports:</strong> Produce regional profiles, thematic studies, periodic outlooks, and accessible evidence summaries.</li>
              <li><strong>Support Decision-Making:</strong> Provide relevant evidence to policymakers, researchers, development organisations, businesses, and community stakeholders.</li>
              <li><strong>Strengthen Data Use:</strong> Encourage responsible data sharing, transparent methodologies, and informed interpretation of research findings.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
