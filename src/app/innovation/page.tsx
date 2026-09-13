import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Development through Research | NRI",
  description: "Transform research into community development programmes that improve quality of life and support sustainable development.",
}

const contributors = ["Undergraduate students","Postgraduate researchers","University lecturers","Public research institutions","NGOs","Community organisations","Government departments","Professional practitioners","Development consultants","International research partners"]
const themes = [
  { t: "Poverty Reduction", d: "Livelihoods, income generation, financial inclusion, social protection, rural development." },
  { t: "Education", d: "School improvement, teacher development, digital education, inclusive education, career guidance." },
  { t: "Health", d: "Community health, nutrition, mental health, ageing, disability, maternal and child health." },
  { t: "Environment", d: "Climate change, biodiversity, waste management, water conservation, renewable energy." },
  { t: "Women's Empowerment", d: "Leadership, entrepreneurship, economic participation, gender equality, financial inclusion." },
  { t: "Disability Inclusion", d: "Accessibility, assistive technology, inclusive employment, independent living." },
  { t: "Youth Development", d: "Employment, leadership, entrepreneurship, civic engagement." },
  { t: "Rural Development", d: "Agriculture, fisheries, tourism, infrastructure, local governance, digital villages." },
]
const steps = ["Research Submission","Evidence Review","Community Validation","Project Design","Partner Identification","Funding Approval","Pilot Implementation","Monitoring and Evaluation","Scaling Through Government, NGOs or Communities"]
const activities = ["Community consultations","Baseline surveys","Training programmes","Awareness campaigns","Pilot projects","Demonstration sites","Community enterprises","Policy dialogue","Monitoring and evaluation","Capacity building","Digital service delivery","Volunteer mobilisation"]
const roles = [
  { r: "Graduates", d: "Project coordinators, researchers, trainers, monitoring officers, and social entrepreneurs." },
  { r: "Lecturers", d: "Technical guidance, mentoring, and quality assurance." },
  { r: "Researchers", d: "Strengthen evidence, conduct impact evaluations, and improve project design." },
  { r: "NGOs", d: "Implement projects, mobilise communities, and manage donor-funded programmes." },
  { r: "Community Organisations", d: "Identify local priorities, participate in implementation, and ensure sustainability." },
  { r: "Government", d: "Integrate successful pilots into public programmes and provide policy support." },
  { r: "Development Partners", d: "Financial support, technical expertise, monitoring, and international best practices." },
]

export default function CommunityDevelopmentPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Community Development through Research</h1>
          <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">Transform research into practical community programmes that improve quality of life, strengthen public services, reduce inequalities, and support sustainable development.</p>
        </div>
      </section>

      <Section title="Objective" subtitle="Many projects aim not for profit but to solve social, environmental and governance challenges — research becomes a practical tool for development.">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/10 rounded-xl p-6 text-muted leading-relaxed">
          To transform research into practical community development programmes that improve people's quality of life, strengthen public services, reduce inequalities, and support sustainable development.
        </div>
      </Section>

      <Section variant="muted" title="Who Can Contribute?">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contributors.map(c=> <div key={c} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">{c}</div>)}
        </div>
        <p className="text-sm text-muted text-center mt-4">Interdisciplinary collaboration — complex community challenges need multiple fields.</p>
      </Section>

      <Section title="Priority Themes">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map(th=> <div key={th.t} className="bg-white rounded-xl border border-border p-6"><h3 className="font-semibold text-primary">{th.t}</h3><p className="text-sm text-muted mt-2">{th.d}</p></div>)}
        </div>
      </Section>

      <Section variant="muted" title="Implementation Process">
        <div className="max-w-xl mx-auto">
          <ol className="relative border-l-2 border-primary/20 ml-4">
            {steps.map(s=> <li key={s} className="ml-6 pb-6 relative"><span className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow"/><span className="text-sm font-medium">{s}</span></li>)}
          </ol>
        </div>
      </Section>

      <Section title="Activities">
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
          {activities.map(a=> <span key={a} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">{a}</span>)}
        </div>
      </Section>

      <Section variant="muted" title="Stakeholder Roles">
        <div className="grid md:grid-cols-2 gap-4">
          {roles.map(r=> <div key={r.r} className="bg-white border border-border rounded-xl p-5"><h4 className="font-semibold text-primary">{r.r}</h4><p className="text-sm text-muted mt-1">{r.d}</p></div>)}
        </div>
      </Section>

      <Section title="Expected Outcomes">
        <div className="flex flex-wrap gap-2 justify-center">
          {["Improved community well-being","Evidence-based programmes","Better public services","Employment opportunities","Stronger local institutions","Sustainable livelihoods","Women's economic empowerment","Inclusive communities","Climate resilience","Scalable development models"].map(o=> <span key={o} className="px-4 py-2 rounded-full bg-gray-50 border border-border text-sm">{o}</span>)}
        </div>
      </Section>

      <Section variant="muted" title="Long-Term Impact">
        <p className="text-muted leading-relaxed max-w-3xl mx-auto text-center">This pathway transforms universities into active partners in national development. Research no longer remains in libraries but becomes a practical tool for solving real-world problems. Graduates gain meaningful employment, lecturers see work translated into measurable impact, governments receive evidence for policy, NGOs strengthen programmes, and communities benefit from sustainable, locally relevant solutions. Together, Business Opportunities and Community Development demonstrate that research is a strategic national resource — generating enterprises, improving policy, strengthening communities, and driving inclusive development.</p>
      </Section>
    </>
  )
}
