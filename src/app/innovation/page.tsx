import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Community Development through Research | NRI",
  description: "Transform research into community development programmes that improve quality of life and support sustainable development.",
}

const contributors = ["Undergraduate students","Postgraduate researchers","University lecturers","Public research institutions","NGOs","Community organisations","Government departments","Professional practitioners","Development consultants","International research partners"]
const themes = [
  { t: "Poverty Reduction", d: "Livelihoods, income generation, financial inclusion, social protection, community development." },
  { t: "Education", d: "School improvement, teacher development, digital education, inclusive education, career guidance." },
  { t: "Health", d: "Community health, nutrition, mental health, ageing, disability, maternal and child health." },
  { t: "Environment", d: "Climate change, biodiversity, waste management, water conservation, renewable energy." },
  { t: "Women's Empowerment", d: "Leadership, entrepreneurship, economic participation, gender equality, financial inclusion." },
  { t: "Disability Inclusion", d: "Accessibility, assistive technology, inclusive employment, independent living." },
  { t: "Youth Development", d: "Employment, leadership, entrepreneurship, civic engagement." },
  { t: "Community Development", d: "Agriculture, fisheries, tourism, infrastructure, local governance, digital villages." },
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
      <PageHero title="Community Development" lede="Transform research into practical community programmes that improve quality of life, strengthen public services, reduce inequalities, and support sustainable development." image={{ src: "/editorial/tea-factory-sri-lanka-female-working.jpg", alt: "Workers at a tea factory in Sri Lanka.", credit: "“Tea factory Sri Lanka female working” by Peter van der Sluijs, CC BY-SA 3.0, via Wikimedia Commons." }} action={{ label: "Who can contribute", href: "/innovation#contribute" }} />

      <Section title="Objective" subtitle="Many projects aim not for profit but to solve social, environmental and governance challenges — research becomes a practical tool for development.">
        <p className="max-w-[68ch] text-[26px] font-semibold text-primary leading-snug">
          To transform research into practical community development programmes that improve
          people&rsquo;s quality of life, strengthen public services, reduce inequalities, and support
          sustainable development.
        </p>
      </Section>

      <PhotoStrip
        title="The work in the fields"
        images={[
          {
            src: "/editorial/coconut-rope-production.jpg",
            alt: "Village artisans weaving coconut rope on an industrial scale in Sri Lanka.",
            caption: "Artisans weave coconut rope in a village workshop.",
            credit: "“Coconut Rope Production” by Curved.kiwix, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/greenery-paddy-field.jpg",
            alt: "A rice-harvesting machine working in a paddy field in Sri Lanka.",
            caption: "Rice is harvested and milled on the island's farms.",
            credit: "“Greenery paddy field” by Theja D Senanayake, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/life-is-a-boat.jpg",
            alt: "A fishing boat resting in a lagoon off Jaffna.",
            caption: "Fishing boats rest in the lagoons that ring the peninsula.",
            credit: "“Life is a boat!” by Navod Thathsara Kankanamge, CC BY-SA 4.0, via Wikimedia Commons.",
          },
        ]}
      />

      <Section id="contribute" variant="muted" title="Who Can Contribute?">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {contributors.map((c) => (
            <p key={c} className="text-[16px] font-medium text-ink">
              <span className="text-brand mr-3">—</span>
              {c}
            </p>
          ))}
        </div>
        <p className="text-[16px] text-muted mt-8 max-w-[68ch]">
          Interdisciplinary collaboration — complex community challenges need multiple fields.
        </p>
      </Section>

      <Section title="Priority Themes">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {themes.map((th) => (
            <div key={th.t}>
              <h3 className="text-[19px] font-semibold text-primary">{th.t}</h3>
              <p className="text-[16px] text-muted mt-2 leading-relaxed">{th.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" layout="split" title="Implementation Process" subtitle="Nine steps from a submitted idea to a programme that runs without us.">
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={s} className="flex items-baseline gap-5">
              <span className="text-[19px] font-semibold text-brand tabular-nums w-6 shrink-0">{i + 1}</span>
              <span className="text-[16px] font-medium text-ink">{s}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Activities">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {activities.map((a) => (
            <p key={a} className="text-[16px] text-ink">
              <span className="text-brand mr-3">—</span>
              {a}
            </p>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Stakeholder Roles">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {roles.map((r) => (
            <div key={r.r}>
              <h4 className="text-[19px] font-semibold text-primary">{r.r}</h4>
              <p className="text-[16px] text-muted mt-1 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Expected Outcomes">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {["Improved community well-being","Evidence-based programmes","Better public services","Employment opportunities","Stronger local institutions","Sustainable livelihoods","Women's economic empowerment","Inclusive communities","Climate resilience","Scalable development models"].map((o) => (
            <p key={o} className="text-[16px] text-ink">
              <span className="text-brand mr-3">—</span>
              {o}
            </p>
          ))}
        </div>
      </Section>

      <Section variant="muted" layout="split" title="Long-Term Impact">
        <p className="text-muted leading-relaxed text-left">
          This pathway transforms universities into active partners in national development. Research no
          longer remains in libraries but becomes a practical tool for solving real-world problems.
          Graduates gain meaningful employment, lecturers see work translated into measurable impact,
          governments receive evidence for policy, NGOs strengthen programmes, and communities benefit
          from sustainable, locally relevant solutions. Together, Business Opportunities and Community
          Development demonstrate that research is a strategic national resource — generating
          enterprises, improving policy, strengthening communities, and driving inclusive development.
        </p>
      </Section>
    </>
  )
}
