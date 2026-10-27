import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Knowledge Dissemination and Public Communication | NRI",
  description: "Making Knowledge Accessible. Connecting Evidence with Action.",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">07. Knowledge Dissemination and Public Communication</h1>
          <p className="mt-3 text-lg text-white/80">Making Knowledge Accessible. Connecting Evidence with Action.</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI aims to make research findings, data, and development knowledge accessible, understandable, and useful to a wide range of audiences. Through policy briefs, simplified research summaries, community reports, podcasts, webinars, public lectures, and development outlooks, we seek to communicate knowledge in formats that meet the needs of different audiences.</p>
          <p>By sharing evidence with communities, policymakers, researchers, universities, development organisations, businesses, and the wider public, NRI aims to bridge the gap between academic research and practical decision-making. We promote accessible communication that helps people understand important issues, explore potential solutions, and apply research findings to real-world challenges.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Research creates greater value when its findings reach the people and institutions that can use them. However, academic publications are not always easily accessible or understandable to the wider public. Effective knowledge dissemination helps close this gap by translating complex findings into clear, relevant, and actionable information.</p>
            <p className="text-muted leading-relaxed mt-3">Through public communication, NRI seeks to encourage informed discussion, support evidence-based decisions, strengthen public awareness, and connect research with policy development, community initiatives, innovation, and sustainable development.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Simplify Research:</strong> Translate academic findings into clear summaries and accessible information.</li>
              <li><strong>Inform Decision-Makers:</strong> Share policy briefs, evidence summaries, and recommendations with relevant institutions.</li>
              <li><strong>Engage the Public:</strong> Use public lectures, discussions, webinars, podcasts, and other accessible communication formats.</li>
              <li><strong>Share Community Knowledge:</strong> Communicate research findings and development information in languages and formats suitable for local communities.</li>
              <li><strong>Connect Knowledge with Practice:</strong> Present research findings in ways that help stakeholders identify practical applications and opportunities.</li>
              <li><strong>Track Reach and Use:</strong> Assess audience engagement, stakeholder feedback, and how shared knowledge informs decisions or initiatives.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
