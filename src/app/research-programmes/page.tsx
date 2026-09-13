import { Section } from "@/components/layout/Section"
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
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Business Opportunities through Research</h1>
          <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">Identify research with commercial potential and transform it into sustainable enterprises, innovative products, technologies, and services that generate employment, investment, and economic growth.</p>
        </div>
      </section>

      <Section title="Objective" subtitle="Unlike conventional incubation, NRI accepts research from graduates, lecturers, universities, institutes, industry and innovation partners — every output is evaluated for commercial viability and economic value.">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/10 rounded-xl p-6 text-muted leading-relaxed">
          To identify research with commercial potential and transform it into sustainable enterprises, innovative products, technologies, and services that generate employment, investment, and economic growth.
        </div>
      </Section>

      <Section variant="muted" title="Who Can Contribute?">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {contributors.map(c=> <div key={c} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">{c}</div>)}
        </div>
        <p className="text-sm text-muted text-center mt-4">Multidisciplinary collaboration increases quality, diversity and applicability.</p>
      </Section>

      <Section title="Suitable Research Areas" subtitle="Any discipline with market potential — products, services, business models, platforms and methodologies.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(a=> (
            <div key={a.cat} className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary mb-3">{a.cat}</h3>
              <ul className="space-y-1.5">
                {a.items.map(i=> <li key={i} className="text-sm text-muted flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"/> {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Implementation Process">
        <div className="max-w-xl mx-auto">
          <ol className="relative border-l-2 border-primary/20 ml-4 space-y-0">
            {steps.map(s=> (
              <li key={s} className="ml-6 pb-6 relative">
                <span className="absolute -left-[29px] w-4 h-4 rounded-full bg-primary border-4 border-white shadow"/>
                <span className="text-sm font-medium">{s}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-muted text-center mt-2">Each stage guided by experts in academia, industry, finance, law, marketing and entrepreneurship.</p>
        </div>
      </Section>

      <Section title="Activities" subtitle="Support across the full commercialisation journey.">
        <div className="flex flex-wrap gap-2 justify-center max-w-3xl mx-auto">
          {activities.map(a=> <span key={a} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">{a}</span>)}
        </div>
      </Section>

      <Section variant="muted" title="Expected Outcomes">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
          {outcomes.map(o=> <div key={o} className="bg-white border border-border rounded-lg p-3 text-sm font-medium text-center">{o}</div>)}
        </div>
      </Section>

      <Section title="Stakeholder Roles">
        <div className="grid md:grid-cols-2 gap-4">
          {roles.map(r=> <div key={r.r} className="bg-gray-50 border border-border rounded-xl p-5"><h4 className="font-semibold text-primary">{r.r}</h4><p className="text-sm text-muted mt-1">{r.d}</p></div>)}
        </div>
      </Section>

      <Section variant="muted" title="Long-Term Impact">
        <div className="flex flex-wrap gap-2 justify-center">
          {["Higher graduate employment","Increased innovation","New industries","Technology transfer","Increased exports","Foreign investment","Regional economic development","Stronger university–industry collaboration"].map(i=> <span key={i} className="px-4 py-2 rounded-full bg-white border border-border text-sm">{i}</span>)}
        </div>
        <p className="text-center text-muted mt-6 max-w-3xl mx-auto">The ultimate objective is to transform research into sustainable businesses that contribute to national economic growth.</p>
      </Section>
    </>
  )
}
