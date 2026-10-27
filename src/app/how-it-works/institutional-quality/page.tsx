import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Institutional Quality, Ethics and Accountability | NRI",
  description: "Building Trust. Upholding Integrity. Demonstrating Impact.",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">08. Institutional Quality, Ethics and Accountability</h1>
          <p className="mt-3 text-lg text-white/80">Building Trust. Upholding Integrity. Demonstrating Impact.</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI is committed to maintaining high standards of integrity, transparency, research quality, and institutional accountability across its activities. We aim to establish clear procedures for research ethics, responsible data management, transparent funding practices, conflict-of-interest management, and formal partnership agreements.</p>
          <p>Through quality assurance processes, responsible governance, and regular monitoring and reporting, NRI seeks to ensure that its research, partnerships, and development initiatives are conducted ethically, professionally, and in the public interest. An annual public impact report will provide a transparent account of the institute's activities, achievements, resource utilisation, challenges, and lessons learned.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Credibility is essential for an institute that works with communities, universities, government institutions, businesses, and international partners. Strong ethical standards protect research participants, safeguard sensitive information, promote responsible use of resources, and strengthen confidence in the institute's findings and recommendations.</p>
            <p className="text-muted leading-relaxed mt-3">By embedding quality, ethics, and accountability into its operations, NRI aims to build lasting trust, strengthen partnerships, and ensure that its growth is guided by responsible practices and meaningful social impact.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Commitments</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Research Ethics:</strong> Establish procedures for informed consent, participant protection, ethical review, and responsible research conduct.</li>
              <li><strong>Data Protection:</strong> Safeguard personal and sensitive information through appropriate data management, access controls, and secure handling practices.</li>
              <li><strong>Financial Transparency:</strong> Maintain clear financial records, transparent funding arrangements, and appropriate oversight of resources.</li>
              <li><strong>Conflict-of-Interest Management:</strong> Identify and manage situations that could compromise research independence, fairness, or institutional integrity.</li>
              <li><strong>Partnership Governance:</strong> Establish clear agreements defining responsibilities, expectations, data ownership, confidentiality, and accountability.</li>
              <li><strong>Quality Assurance:</strong> Apply appropriate standards to research design, evidence, analysis, project delivery, and reporting.</li>
              <li><strong>Public Accountability:</strong> Publish an annual impact report outlining activities, outcomes, funding and resource use, challenges, and future priorities.</li>
              <li><strong>Continuous Improvement:</strong> Use evaluations, stakeholder feedback, and lessons learned to strengthen institutional performance.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
