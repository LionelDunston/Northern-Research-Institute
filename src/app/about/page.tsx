import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Northern Research Institute",
  description: "Learn about NRI's history, vision, mission, core values, and strategic objectives.",
}

const values = [
  { title: "Integrity", description: "Upholding the highest ethical standards in all our research and operations." },
  { title: "Innovation", description: "Fostering creative thinking and novel approaches to solve complex challenges." },
  { title: "Collaboration", description: "Building strong partnerships across sectors to maximize impact." },
  { title: "Excellence", description: "Striving for the highest quality in research, teaching, and service." },
  { title: "Sustainability", description: "Ensuring long-term environmental, social, and economic viability." },
]

const objectives = [
  "Promote research that addresses national and regional development challenges",
  "Support innovation and entrepreneurship among researchers and graduates",
  "Create employment opportunities through research commercialization",
  "Strengthen partnerships between academia, government, industry, and communities",
  "Contribute to national development through evidence-based policy recommendations",
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">About the Institute</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Understanding who we are, what we stand for, and where we are going.
          </p>
        </div>
      </section>

      <Section title="Our History" subtitle="Why the Institute was established.">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted leading-relaxed">
            The Northern Research Institute was established to address the critical gap between academic research
            and practical application. Recognizing that vast amounts of graduate research remained unused, NRI was
            founded as a bridge between the academic community and the sectors that could benefit from research
            findings — government, industry, and civil society.
          </p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            Since its inception, NRI has grown into a leading research-to-impact organization, working with
            universities, government ministries, NGOs, international organizations, and private companies to
            transform research into tangible outcomes that improve lives and drive sustainable development.
          </p>
        </div>
      </Section>

      <Section variant="muted" title="Our Vision" subtitle="The Institute's long-term aspiration.">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-semibold text-primary italic">
            "A prosperous nation where research drives innovation, creates opportunities, and transforms communities."
          </p>
        </div>
      </Section>

      <Section title="Our Mission" subtitle="What the Institute aims to achieve.">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted leading-relaxed">
            To transform research into practical solutions that create employment, businesses, public policies,
            and community development through innovation, partnerships, and evidence-based action.
          </p>
        </div>
      </Section>

      <Section variant="muted" title="Core Values">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Strategic Objectives">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {objectives.map((objective, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 border border-border">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <span className="text-muted leading-relaxed pt-1">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
