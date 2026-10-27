import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Development through Research | NRI",
  description: "Transform research into practical community development programmes that improve people's quality of life.",
}

const contributors = ["Undergraduate students","Postgraduate researchers","University lecturers","Public research institutions","NGOs","Community organisations","Government departments","Professional practitioners","Development consultants","International research partners"]
const themes = [
  { cat: "Poverty Reduction", items: ["Livelihoods","Income generation","Financial inclusion","Social protection","Rural development"] },
  { cat: "Education", items: ["School improvement","Teacher development","Digital education","Inclusive education","Career guidance"] },
  { cat: "Health", items: ["Community health","Nutrition","Mental health","Ageing","Disability","Maternal and child health"] },
  { cat: "Environment", items: ["Climate change","Biodiversity","Waste management","Water conservation","Renewable energy"] },
  { cat: "Women's Empowerment", items: ["Leadership","Entrepreneurship","Economic participation","Gender equality","Financial inclusion"] },
  { cat: "Disability Inclusion", items: ["Accessibility","Assistive technology","Inclusive employment","Independent living"] },
  { cat: "Youth Development", items: ["Employment","Leadership","Entrepreneurship","Civic engagement"] },
  { cat: "Rural Development", items: ["Agriculture","Fisheries","Tourism","Infrastructure","Local governance","Digital villages"] },
]
const steps = ["Research Submission","Evidence Review","Community Validation","Project Design","Partner Identification","Funding Approval","Pilot Implementation","Monitoring and Evaluation","Scaling Through Government, NGOs or Communities"]
const activities = ["Community consultations","Baseline surveys","Training programmes","Awareness campaigns","Pilot projects","Demonstration sites","Community enterprises","Policy dialogue","Monitoring and evaluation","Capacity building","Digital service delivery","Volunteer mobilisation"]
const roles = [
  { r: "Graduates", d: "Serve as project coordinators, researchers, trainers, monitoring officers, and social entrepreneurs." },
  { r: "Lecturers", d: "Provide technical guidance, mentoring, and quality assurance." },
  { r: "Researchers", d: "Strengthen evidence, conduct impact evaluations, and improve project design." },
  { r: "NGOs", d: "Implement projects, mobilise communities, and manage donor-funded programmes." },
  { r: "Community Organisations", d: "Identify local priorities, participate in implementation, and ensure sustainability." },
  { r: "Government", d: "Integrate successful pilot projects into public programmes and provide policy support." },
  { r: "Development Partners", d: "Provide financial support, technical expertise, monitoring, and international best practices." },
]
const outcomes = ["Improved community well-being","Evidence-based development programmes","Better public services","Increased employment opportunities","Stronger local institutions","Sustainable livelihoods","Women's economic empowerment","Inclusive communities","Climate resilience","Scalable development models"]

export default function CommunityDevelopmentPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Community Development through Research</h1>
          <p className="mt-4 text-lg text-white/80 max-w-4xl mx-auto">
            Many projects aim not for profit but to solve social, environmental and governance challenges — research becomes a practical tool for development.
          </p>
        </div>
      </section>

      <Section title="Objective">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>To transform research into practical community development programmes that improve people's quality of life, strengthen public services, reduce inequalities, and support sustainable development.</p>
          <p>This pathway recognises that many research projects are designed not to generate commercial profit but to solve important social, environmental, and governance challenges.</p>
        </div>
      </Section>

      <Section variant="muted" title="Who Can Contribute?">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contributors.map(c => <div key={c} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">{c}</div>)}
        </div>
        <p className="text-sm text-muted text-center mt-4">The platform encourages interdisciplinary collaboration because complex community challenges require expertise from multiple fields.</p>
      </Section>

      <Section title="Priority Themes">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map(t => (
            <div key={t.cat} className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary mb-3">{t.cat}</h3>
              <ul className="space-y-1.5">
                {t.items.map(i => <li key={i} className="text-sm text-muted flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"/> {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Implementation Process" subtitle="This process ensures that research findings are translated into practical interventions with measurable results.">
        <div className="flex flex-wrap gap-2 justify-center">
          {steps.map((s, idx) => (
            <div key={s} className="flex items-center gap-2">
              <div className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium">{s}</div>
              {idx < steps.length - 1 && <span className="text-primary">↓</span>}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Activities">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {activities.map(a => <div key={a} className="bg-white border border-border rounded-lg p-3 text-sm">{a}</div>)}
        </div>
      </Section>

      <Section variant="muted" title="Stakeholder Roles">
        <div className="grid md:grid-cols-2 gap-4">
          {roles.map(r => (
            <div key={r.r} className="bg-white border border-border rounded-xl p-5">
              <h3 className="font-semibold text-primary">{r.r}</h3>
              <p className="mt-2 text-sm text-muted">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Expected Outcomes">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {outcomes.map(o => <div key={o} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">{o}</div>)}
        </div>
      </Section>

      <Section variant="muted" title="Long-Term Impact">
        <div className="max-w-4xl mx-auto text-center text-muted leading-relaxed space-y-4">
          <p>This pathway transforms universities into active partners in national development. Research no longer remains within academic libraries but becomes a practical tool for solving real-world problems. Graduates gain meaningful employment through implementation, lecturers and researchers see their work translated into measurable impact, governments receive evidence for policy decisions, NGOs strengthen programme effectiveness, and communities benefit from sustainable, locally relevant solutions.</p>
          <p>Together, the Business Opportunities and Community Development pathways demonstrate that research is not an end in itself—it is a strategic national resource capable of generating enterprises, improving public policy, strengthening communities, and driving inclusive economic and social development.</p>
        </div>
      </Section>
    </>
  )
}
