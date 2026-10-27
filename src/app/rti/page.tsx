import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Research-to-Impact (RTI) | Northern Research Institute",
  description: "NRI's flagship programme transforming research across disciplines into practical solutions, innovation, opportunities, and real-world impact.",
}

const pathwayCategories = [
  {
    title: "Business",
    items: ["Startups", "New products", "Commercial services"],
    color: "bg-blue-50 border-blue-200",
    icon: "",
  },
  {
    title: "Government",
    items: ["Public policy", "Ministries", "Local government", "Public services"],
    color: "bg-green-50 border-green-200",
    icon: "",
  },
  {
    title: "Community",
    items: ["Poverty", "Education", "Health", "Environment", "Livelihoods"],
    color: "bg-orange-50 border-orange-200",
    icon: "",
  },
  {
    title: "Industry",
    items: ["Manufacturing", "ICT", "Productivity", "Technology adoption"],
    color: "bg-purple-50 border-purple-200",
    icon: "",
  },
  {
    title: "Environmental & Climate Solutions",
    items: ["Climate Change Adaptation", "Renewable Energy", "Environmental Conservation", "Sustainable Agriculture", "Waste Management", "Water & Resource Management", "Green Technologies"],
    color: "bg-emerald-50 border-emerald-200",
    icon: "",
  },
  {
    title: "Other & Emerging Sectors",
    items: ["Tourism", "Agriculture", "Culture", "Education", "Technology", "Economy", "Emerging fields"],
    color: "bg-amber-50 border-amber-200",
    icon: "",
  },
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
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "investor-portal",
    title: "Investor Portal",
    description: "Connects investors with promising research and innovation opportunities that have potential for development, commercialisation, enterprise creation, and sustainable returns.",
    features: ["Industry", "Investment required", "Province", "Risk level", "Return potential"],
    color: "from-green-500 to-green-600",
  },
  {
    id: "government-portal",
    title: "Government Portal",
    description: "Enables public institutions to discover research that can inform policy, improve public services, support development priorities, and address sector-specific challenges.",
    features: ["Agriculture", "Health", "Labour", "Tourism", "Education"],
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "ngo-portal",
    title: "NGO Portal",
    description: "Connects development organisations with research and projects that can support social, environmental, livelihood, and community-focused interventions.",
    features: ["Climate", "Women", "Children", "Poverty", "Livelihoods"],
    color: "from-red-500 to-red-600",
  },
  {
    id: "business-portal",
    title: "Business Portal",
    description: "Connects businesses with research, technologies, researchers, and partnership opportunities that can support innovation, productivity, and business development.",
    features: ["New technologies", "Researchers", "Research partnerships", "Consulting opportunities"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "funding-portal",
    title: "Funding Portal",
    description: "Helps researchers and projects discover suitable funding opportunities to support research development, innovation, implementation, and scale.",
    features: ["Government", "Banks", "Investors", "CSR programmes", "Donors", "Foundations"],
    color: "from-teal-500 to-teal-600",
  },
]

export default function RTIPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Research-to-Impact (RTI)</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            NRI&apos;s flagship programme that transforms research across disciplines into practical solutions, innovation, opportunities, and real-world impact.
          </p>
        </div>
      </section>

      <Section title="About RTI" subtitle="RTI is the bridge between knowledge and action. It identifies research with practical potential, connects researchers with partners, develops pathways for implementation, and supports the transition from research findings to solutions that benefit society, the economy, and the environment.">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-3">Objective</h3>
            <p className="text-muted leading-relaxed">
              To transform research across disciplines into practical solutions, innovations, enterprises, policies, and community programmes that address national and regional development challenges.
            </p>
          </div>
        </div>
      </Section>

      <Section variant="muted" title="RTI Pathways" subtitle="Research is routed to the most suitable pathway based on its potential and intended impact.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathwayCategories.map((cat) => (
            <div key={cat.title} className={`rounded-xl border p-6 ${cat.color}`}>
              <h3 className="font-semibold text-lg mb-3">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Training & Capacity Building" subtitle="NRI equips researchers, graduates, and partners with the skills needed to move research from idea to impact.">
        <div className="flex flex-wrap gap-3 justify-center">
          {trainingAreas.map((area) => (
            <div key={area} className="px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium">
              {area}
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Digital Portals" subtitle="RTI operates through an integrated digital platform that connects all stakeholders.">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map((portal) => (
            <div key={portal.id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${portal.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{portal.title}</h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">{portal.description}</p>
                <div className="space-y-1.5">
                  {portal.features.map((feature) => (
                    <div key={feature} className="text-xs text-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="RTI Impact">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-primary">-</div>
            <div className="text-sm text-muted mt-1">Research Projects</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary">-</div>
            <div className="text-sm text-muted mt-1">Innovations & Startups</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary">-</div>
            <div className="text-sm text-muted mt-1">Policy Contributions</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-primary">-</div>
            <div className="text-sm text-muted mt-1">Community Projects</div>
          </div>
        </div>
      </Section>
    </>
  )
}
