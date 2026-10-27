import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Graduate Development and Employment Pathways | NRI",
  description: "Connecting Graduate Talent with Real-World Opportunities",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">04. Graduate Development and Employment Pathways</h1>
          <p className="mt-3 text-lg text-white/80">Connecting Graduate Talent with Real-World Opportunities</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI aims to bridge the gap between academic knowledge and employment by connecting students and graduates with opportunities to apply their knowledge, develop practical skills, and contribute to social and economic development.</p>
          <p>Through research placements, internships, paid project assignments, consultancy opportunities, entrepreneurship support, and partnerships with employers and funding organisations, NRI seeks to create pathways from education to meaningful work. We also aim to strengthen graduates' capabilities in research, data analysis, proposal writing, communication, project management, and innovation.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Graduates possess valuable knowledge and potential, but opportunities to gain practical experience and access employment can be limited. Connecting academic learning with real-world challenges can help graduates develop relevant skills, strengthen their employability, explore entrepreneurship, and contribute to community development.</p>
            <p className="text-muted leading-relaxed mt-3">For NRI, graduate development is not simply a training activity; it is an essential part of translating knowledge into action and creating opportunities for graduates to participate in regional development.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Build Practical Skills:</strong> Strengthen research, digital, analytical, communication, and professional capabilities.</li>
              <li><strong>Create Work Opportunities:</strong> Connect graduates with internships, research placements, paid project roles, and consultancy assignments.</li>
              <li><strong>Support Entrepreneurship:</strong> Help graduates explore viable business ideas, social enterprises, and self-employment pathways.</li>
              <li><strong>Connect with Employers:</strong> Develop partnerships with government institutions, universities, NGOs, businesses, and development organisations.</li>
              <li><strong>Link Talent with Funding:</strong> Identify suitable grants, projects, and resources that can support graduate-led initiatives and employment creation.</li>
              <li><strong>Track Career Outcomes:</strong> Assess employment, income generation, skills development, and graduate participation in development initiatives.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
