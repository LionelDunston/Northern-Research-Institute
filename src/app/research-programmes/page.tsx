import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Opportunities through Research | NRI",
  description: "Identify research with commercial potential and transform it into sustainable enterprises, products, and services.",
}

const contributors = ["Undergraduate students","Master's students","MPhil and PhD researchers","University lecturers","Research scientists","Government research institutions","Industry researchers","Technology experts","Professional consultants","Innovation hubs","Community innovators","Joint university–industry research teams"]
const areas = [
  { cat: "Engineering and Manufacturing", items: ["Industrial automation","Smart machinery","Renewable energy","Construction technologies","Green manufacturing"] },
  { cat: "Information Technology", items: ["Artificial Intelligence","Software systems","Cybersecurity","Data analytics","Digital platforms","Internet of Things (IoT)"] },
  { cat: "Agriculture", items: ["Climate-smart agriculture","Hydroponics","Precision farming","Food processing","Fisheries innovation"] },
  { cat: "Health and Life Sciences", items: ["Medical technologies","Biotechnology","Pharmaceutical innovation","Nutrition","Healthcare management"] },
  { cat: "Tourism", items: ["Eco-tourism","Heritage tourism","Cultural tourism","Smart tourism technologies"] },
  { cat: "Arts, Humanities and Social Sciences", items: ["Creative industries","Digital media","Cultural enterprises","Social enterprises","Human resource services","Policy consulting","Research consulting","Training and education services"] },
]
const steps = ["Research Submission","Technical Review","Market Assessment","Commercialisation Assessment","Prototype Development","Business Incubation","Investment Readiness","Funding","Business Launch","Growth and Scaling"]
const activities = ["Commercial feasibility studies","Prototype development","Product testing","Intellectual property protection","Patent applications","Business model development","Market research","Branding","Product design","Investment pitching","Startup incubation","Accelerator programmes","Export readiness","Industry partnerships"]
const outcomes = ["Startup companies","Manufacturing enterprises","Digital businesses","Agricultural enterprises","Tourism ventures","Consulting firms","Creative enterprises","Technology companies","Social enterprises","Export-oriented businesses"]
const roles = [
  { r: "Graduates", d: "Lead implementation, establish businesses, and commercialise research." },
  { r: "Lecturers", d: "Provide technical supervision, mentorship, and quality assurance." },
  { r: "Researchers", d: "Strengthen scientific validity and support innovation." },
  { r: "Industry Experts", d: "Validate market demand, improve product design, and facilitate industry adoption." },
  { r: "Universities", d: "Provide laboratories, expertise, research infrastructure, and intellectual property support." },
  { r: "Investors", d: "Provide seed funding, venture capital, strategic partnerships, and business growth support." },
  { r: "Government", d: "Support commercialisation through grants, policy incentives, export promotion, and innovation programmes." },
]

export default function BusinessOpportunitiesPage() {
  return (
    <>
      <PageHero title="Business Opportunities" lede="Identify research with commercial potential and transform it into sustainable enterprises, innovative products, technologies, and services that generate employment, investment, and economic growth." image={{ src: "/editorial/greenery-paddy-field.jpg", alt: "A rice-harvesting machine working in a paddy field in Sri Lanka.", credit: "“Greenery paddy field” by Theja D Senanayake, CC BY-SA 4.0, via Wikimedia Commons." }} action={{ label: "Who can contribute", href: "/research-programmes#contribute" }} />

      <Section title="Objective" subtitle="Unlike conventional incubation, NRI accepts research from graduates, lecturers, universities, institutes, industry and innovation partners — every output is evaluated for commercial viability and economic value.">
        <p className="max-w-[68ch] text-[26px] font-semibold text-primary leading-snug">
          To identify research with commercial potential and transform it into sustainable enterprises,
          innovative products, technologies, and services that generate employment, investment, and
          economic growth.
        </p>
      </Section>

      <PhotoStrip
        title="From idea to enterprise"
        images={[
          {
            src: "/editorial/greenery-paddy-field.jpg",
            alt: "A rice-harvesting machine working in a paddy field in Sri Lanka.",
            caption: "Rice is harvested and milled on the island's farms.",
            credit: "“Greenery paddy field” by Theja D Senanayake, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/coconut-rope-production.jpg",
            alt: "Village artisans weaving coconut rope on an industrial scale in Sri Lanka.",
            caption: "Artisans weave coconut rope in a village workshop.",
            credit: "“Coconut Rope Production” by Curved.kiwix, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/university-of-jaffna-journalism-students-on-the.jpg",
            alt: "Journalism students at the Media Resources and Training Centre, University of Jaffna.",
            caption: "Journalism students at the Media Resources and Training Centre.",
            credit: "“University of Jaffna journalism students on the final day” by David Brewer, CC BY-SA 2.0, via Wikimedia Commons.",
          },
        ]}
      />

      <Section id="contribute" variant="muted" title="Who Can Contribute?">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          {contributors.map((c) => (
            <p key={c} className="text-[16px] font-medium text-ink">
              <span className="text-brand mr-3">—</span>
              {c}
            </p>
          ))}
        </div>
        <p className="text-[16px] text-muted mt-8 max-w-[68ch]">
          Multidisciplinary collaboration increases quality, diversity and applicability.
        </p>
      </Section>

      <Section title="Suitable Research Areas" subtitle="Any discipline with market potential — products, services, business models, platforms and methodologies.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {areas.map((a) => (
            <div key={a.cat}>
              <h3 className="text-[19px] font-semibold text-primary mb-3">{a.cat}</h3>
              <ul className="space-y-1.5">
                {a.items.map((i) => (
                  <li key={i} className="text-[16px] text-muted flex gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" layout="split" title="Implementation Process" subtitle="Ten stages from a submitted idea to a business that grows without us.">
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={s} className="flex items-baseline gap-5">
              <span className="text-[19px] font-semibold text-brand tabular-nums w-6 shrink-0">{i + 1}</span>
              <span className="text-[16px] font-medium text-ink">{s}</span>
            </li>
          ))}
        </ol>
        <p className="text-[16px] text-muted mt-8 max-w-[60ch]">
          Each stage guided by experts in academia, industry, finance, law, marketing and entrepreneurship.
        </p>
      </Section>

      <Section title="Activities" subtitle="Support across the full commercialisation journey.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {activities.map((a) => (
            <p key={a} className="text-[16px] text-ink">
              <span className="text-brand mr-3">—</span>
              {a}
            </p>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Expected Outcomes">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
          {outcomes.map((o) => (
            <p key={o} className="text-[16px] text-ink">
              <span className="text-brand mr-3">—</span>
              {o}
            </p>
          ))}
        </div>
      </Section>

      <Section title="Stakeholder Roles">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {roles.map((r) => (
            <div key={r.r}>
              <h4 className="text-[19px] font-semibold text-primary">{r.r}</h4>
              <p className="text-[16px] text-muted mt-1 leading-relaxed">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Long-Term Impact">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
          {["Higher graduate employment","Increased innovation","New industries","Technology transfer","Increased exports","Foreign investment","Regional economic development","Stronger university–industry collaboration"].map((i) => (
            <p key={i} className="text-[16px] text-ink">
              <span className="text-brand mr-3">—</span>
              {i}
            </p>
          ))}
        </div>
        <p className="text-left text-muted mt-8 max-w-[68ch]">
          The ultimate objective is to transform research into sustainable businesses that contribute to
          national economic growth.
        </p>
      </Section>
    </>
  )
}
