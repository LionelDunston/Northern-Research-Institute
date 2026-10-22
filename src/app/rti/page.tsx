import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research-to-Impact (RTI) | Northern Research Institute",
  description: "NRI's flagship programme transforming research across disciplines into practical solutions, innovation, opportunities, and real-world impact.",
}

const pathwayCategories = [
  { title: "Business", items: ["Startups", "New products", "Commercial services"] },
  { title: "Government", items: ["Public policy", "Ministries", "Local government", "Public services"] },
  { title: "Community", items: ["Poverty", "Education", "Health", "Environment", "Livelihoods"] },
  { title: "Industry", items: ["Manufacturing", "ICT", "Productivity", "Technology adoption"] },
  { title: "Environmental & Climate Solutions", items: ["Climate Change Adaptation", "Renewable Energy", "Environmental Conservation", "Sustainable Agriculture", "Waste Management", "Water & Resource Management", "Green Technologies"] },
  { title: "Other & Emerging Sectors", items: ["Tourism", "Agriculture", "Culture", "Education", "Technology", "Economy", "Emerging fields"] },
]

const trainingAreas = [
  "Proposal Development",
  "Grant Writing",
  "Business Plan Development",
  "Research-to-Project Development",
  "Innovation & Entrepreneurship",
]

const portals = [
  {
    id: "research-portal",
    title: "Research Portal",
    description: "Provides researchers with a personal space to manage their research profiles, submissions, publications, opportunities, and progress.",
    features: ["Researcher Profile", "Research Area / Subject", "Skills & CV", "Research Submissions", "Publications", "Employment Status", "Funding Received", "Research Impact / Project Status"],
  },
  {
    id: "investor-portal",
    title: "Investor Portal",
    description: "Connects investors with promising research and innovation opportunities that have potential for development, commercialisation, enterprise creation, and sustainable returns.",
    features: ["Industry", "Investment required", "Province", "Risk level", "Return potential"],
  },
  {
    id: "government-portal",
    title: "Government Portal",
    description: "Enables public institutions to discover research that can inform policy, improve public services, support development priorities, and address sector-specific challenges.",
    features: ["Agriculture", "Health", "Labour", "Tourism", "Education"],
  },
  {
    id: "ngo-portal",
    title: "NGO Portal",
    description: "Connects development organisations with research and projects that can support social, environmental, livelihood, and community-focused interventions.",
    features: ["Climate", "Women", "Children", "Poverty", "Livelihoods"],
  },
  {
    id: "business-portal",
    title: "Business Portal",
    description: "Connects businesses with research, technologies, researchers, and partnership opportunities that can support innovation, productivity, and business development.",
    features: ["New technologies", "Researchers", "Research partnerships", "Consulting opportunities"],
  },
  {
    id: "funding-portal",
    title: "Funding Portal",
    description: "Helps researchers and projects discover suitable funding opportunities to support research development, innovation, implementation, and scale.",
    features: ["Government", "Banks", "Investors", "CSR programmes", "Donors", "Foundations"],
  },
]

const evaluationSteps = [
  { title: "Research Quality Review", body: "Is the research credible and methodologically sound?" },
  { title: "Problem & Opportunity Assessment", body: "What real-world problem or opportunity does it identify?" },
  { title: "Impact & Feasibility Assessment", body: "Can the findings create practical, social, economic, policy, or environmental value?" },
  { title: "Application Pathway", body: "What is the most appropriate pathway?", options: ["Policy", "Project", "Business", "Social Enterprise", "Innovation", "Employment", "Community Development", "Further Research"] },
  { title: "Implementation Readiness", body: "Can it be piloted, measured, improved, and scaled?" },
  { title: "Impact Measurement & Scaling", body: "Defining measurable indicators and scaling strategies." },
]

const impactIndicators = [
  "Research Uploaded",
  "Universities",
  "Projects Evaluated",
  "Startups Created",
  "Jobs Created",
  "Funding Secured",
  "Policies Adopted",
  "Community Projects",
  "Innovations Developed",
  "Projects Implemented",
]

export default function RTIPage() {
  return (
    <>
      <PageHero title="Research-to-Impact (RTI)" lede="NRI&apos;s flagship programme that transforms research across disciplines into practical solutions, innovation, opportunities, and real-world impact." image={{ src: "/editorial/view-from-public-library.jpg", alt: "View over Jaffna city from the public library roof.", credit: "“View from Public Library” by Kanatonian, CC BY-SA 3.0, via Wikimedia Commons." }} action={{ label: "Development pathways", href: "/rti#pathways" }} />

      <Section
        id="repository"
        layout="split"
        title="Research Repository"
        subtitle="NRI develops an integrated Data &amp; Knowledge Centre that collects, processes, analyses, and disseminates data and knowledge from diverse sectors, disciplines, and geographic contexts. The Centre turns data and information into evidence and actionable insights for research, policy, innovation, business, projects, and sustainable development."
      >
        <div>
          <h3 className="text-[19px] font-semibold text-primary mb-5">Researchers can submit</h3>
          <ul className="space-y-2">
            {[
              "Bachelor's theses",
              "Master's theses",
              "MPhil theses",
              "PhD theses",
              "Research summaries",
              "Policy briefs",
            ].map((item) => (
              <li key={item} className="text-[16px] text-muted">
                <span className="text-brand mr-3">—</span>
                {item}
              </li>
            ))}
          </ul>
          <h3 className="text-[19px] font-semibold text-primary mt-10 mb-5">Data &amp; Knowledge Centre coverage</h3>
          <ul className="space-y-2">
            {[
              "Demographic data",
              "Economic data",
              "Social data",
              "Environmental data",
              "Health data",
              "Education data",
              "Labour-market data",
              "Governance data",
              "Business and industry data",
              "Development data",
              "Spatial and geographical data",
              "Survey data",
              "Administrative data",
              "Research datasets",
              "Community-generated and local knowledge",
            ].map((item) => (
              <li key={item} className="text-[16px] text-muted">
                <span className="text-brand mr-3">—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <PhotoStrip
        title="The route to impact"
        images={[
          {
            src: "/editorial/life-is-a-boat.jpg",
            alt: "A fishing boat resting in a lagoon off Jaffna.",
            caption: "Fishing boats rest in the lagoons that ring the peninsula.",
            credit: "“Life is a boat!” by Navod Thathsara Kankanamge, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/paddy-field-in-srilanka.jpg",
            alt: "A paddy field in Sri Lanka at harvest time.",
            caption: "The paddy fields that the programmes work with.",
            credit: "“Paddy field in Sri Lanka” by Donald2019, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/mullaitivu-mullaitivu-district-northern-province-sri-lanka.jpg",
            alt: "Mullaitivu in the Northern Province, seen from space.",
            caption: "Mullaitivu, in the Northern Province.",
            credit: "“Mullaitivu, Mullaitivu District, Northern Province, Sri Lanka” by Capella Space, CC BY 4.0, via Wikimedia Commons.",
          },
        ]}
      />

      <Section
        id="evaluation"
        variant="muted"
        layout="split"
        title="Research Evaluation"
        subtitle="Experts assess submitted research through a structured evaluation process to identify practical potential and implementation pathways."
      >
        <ol className="space-y-8">
          {evaluationSteps.map((step, i) => (
            <li key={step.title} className="flex items-start gap-6">
              <span className="text-[26px] font-semibold text-brand tabular-nums leading-none shrink-0 w-8">
                {i + 1}
              </span>
              <span>
                <span className="text-[19px] font-semibold text-primary">{step.title}</span>
                <p className="text-[16px] text-muted mt-1 leading-relaxed">{step.body}</p>
                {step.options && (
                  <p className="text-[16px] text-muted mt-2">
                    <span className="text-brand mr-2">—</span>
                    {step.options.join(" · ")}
                  </p>
                )}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="pathways" title="Development Pathways" subtitle="Research is matched with the most suitable pathway based on its potential and identified needs.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {pathwayCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-[19px] font-semibold text-primary mb-4">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-[16px] text-muted flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="training" variant="muted" layout="split" title="Training &amp; Capacity Development" subtitle="Training sessions equip researchers with practical skills to develop their research into viable projects, solutions, and opportunities.">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
          {trainingAreas.map((area) => (
            <li key={area} className="text-[16px] font-medium text-ink">
              <span className="text-brand mr-3">—</span>
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="muted" title="Portals" subtitle="Specialised portals for different stakeholders.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
          {portals.map((portal) => (
            <div key={portal.id} id={portal.id} className="scroll-mt-20">
              <h3 className="text-[19px] font-semibold text-primary">{portal.title}</h3>
              <p className="text-[16px] text-muted leading-relaxed mt-2 max-w-[56ch]">{portal.description}</p>
              <p className="text-[16px] text-muted mt-3">
                <span className="text-brand mr-3">—</span>
                {portal.features.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="impact"
        title="Impact Dashboard"
        subtitle="Tracks and presents the measurable outcomes of NRI's research-to-impact activities. Figures appear here as programmes report them."
      >
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-4">
          {impactIndicators.map((label) => (
            <li key={label} className="text-[16px] text-muted">
              <span className="text-brand mr-3">—</span>
              {label}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
