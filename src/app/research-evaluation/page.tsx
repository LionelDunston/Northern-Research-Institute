import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research Evaluation | NRI",
  description: "Experts assess submitted research through a structured evaluation process to identify practical potential and implementation pathways.",
}

const steps = [
  { num: "1", title: "Research Quality Review", desc: "Is the research credible and methodologically sound?" },
  { num: "2", title: "Problem & Opportunity Assessment", desc: "What real-world problem or opportunity does it identify?" },
  { num: "3", title: "Impact & Feasibility Assessment", desc: "Can the findings create practical, social, economic, policy, or environmental value?" },
  { num: "4", title: "Application Pathway", desc: "What is the most appropriate pathway?" },
  { num: "5", title: "Implementation Readiness", desc: "Can it be piloted, measured, improved, and scaled?" },
  { num: "6", title: "Impact Measurement & Scaling", desc: "Defining measurable indicators and scaling strategies." },
]

const pathways = ["Policy", "Project", "Business", "Social Enterprise", "Innovation", "Employment", "Community Development", "Further Research"]

export default function ResearchEvaluationPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Research Evaluation</h1>
          <p className="mt-4 text-lg text-white/80 max-w-4xl mx-auto">
            Experts assess submitted research through a structured evaluation process to identify practical potential and implementation pathways.
          </p>
        </div>
      </section>

      <Section title="Evaluation Process">
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-4 p-5 bg-white border border-border rounded-xl">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                {s.num}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Application Pathway Options">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pathways.map((p) => (
            <div key={p} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">
              {p}
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
