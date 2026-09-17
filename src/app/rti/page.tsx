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

      <Section
        id="repository"
        title="Research Repository"
        subtitle="Enables researchers to submit, discover, and showcase research with potential for further development and practical application."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Researchers Can Submit</h3>
            <ul className="space-y-3">
              {[
                "Bachelor's theses",
                "Master's theses",
                "MPhil theses",
                "PhD theses",
                "Research summaries",
                "Policy briefs",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted">
                  <span className="w-2 h-2 rounded-full bg-accent" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Search Research By</h3>
            <div className="flex flex-wrap gap-2">
              {["University", "Subject", "Sector / Field", "SDG", "District", "Keyword", "Submission Date", "Publication Date"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="evaluation"
        variant="muted"
        title="Research Evaluation"
        subtitle="Experts assess submitted research against rigorous criteria to identify practical potential."
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { label: "Innovation", desc: "Novelty and originality" },
              { label: "Feasibility", desc: "Practical viability" },
              { label: "Social Impact", desc: "Community benefit" },
              { label: "Commercial Potential", desc: "Market opportunity" },
              { label: "Sustainability", desc: "Long-term viability" },
              { label: "Scalability", desc: "Growth potential" },
            ].map((criterion) => (
              <div
                key={criterion.label}
                className="bg-white p-4 rounded-lg border border-border text-center hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-semibold text-primary">{criterion.label}</div>
                <div className="text-xs text-muted mt-1">{criterion.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-muted mt-6 text-sm">
            Projects receive scores and recommendations based on these criteria.
          </p>
        </div>
      </Section>

      <Section id="pathways" title="Development Pathways" subtitle="Research is matched with the most suitable pathway based on its potential and identified needs.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathwayCategories.map((cat) => (
            <div key={cat.title} className={`rounded-xl border p-6 ${cat.color}`}>
              <span className="text-2xl">{cat.icon}</span>
              <h3 className="text-lg font-semibold mt-3 mb-3">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="training" variant="muted" title="Training & Capacity Development" subtitle="Training sessions equip researchers with practical skills to develop their research into viable projects, solutions, and opportunities.">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingAreas.map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg border border-border text-center">
                <span className="text-sm font-medium text-primary">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="muted" title="Portals" subtitle="Specialised portals for different stakeholders.">
        <div className="space-y-8">
          {portals.map((portal) => (
            <div key={portal.id} id={portal.id} className="bg-white rounded-xl border border-border p-8 scroll-mt-20">
              <div className={`inline-block px-4 py-1 rounded-full text-white text-xs font-semibold bg-gradient-to-r ${portal.color} mb-4`}>
                {portal.title}
              </div>
              <p className="text-muted leading-relaxed max-w-2xl">{portal.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {portal.features.map((feature) => (
                  <span key={feature} className="px-3 py-1.5 bg-gray-50 border border-border rounded-md text-sm text-muted">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="impact"
        title="Impact Dashboard"
        subtitle="Tracks and presents the measurable outcomes of NRI's research-to-impact activities."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { value: "—", label: "Research Uploaded" },
            { value: "—", label: "Universities" },
            { value: "—", label: "Projects Evaluated" },
            { value: "—", label: "Startups Created" },
            { value: "—", label: "Jobs Created" },
            { value: "—", label: "Funding Secured" },
            { value: "—", label: "Policies Adopted" },
            { value: "—", label: "Community Projects" },
            { value: "—", label: "Innovations Developed" },
            { value: "—", label: "Projects Implemented" },
          ].map((item) => (
            <div key={item.label} className="text-center p-6 bg-gray-50 rounded-xl border border-border">
              <div className="text-2xl sm:text-3xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-muted mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
