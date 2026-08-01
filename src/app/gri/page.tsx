import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Graduate Research-to-Impact (GRI) | Northern Research Institute",
  description: "NRI's flagship programme transforming graduate research into practical outcomes.",
}

const pathwayCategories = [
  {
    title: "Business",
    items: ["Startups", "New products", "Commercial services"],
    color: "bg-blue-50 border-blue-200",
    icon: "💼",
  },
  {
    title: "Government",
    items: ["Public policy", "Ministries", "Local government"],
    color: "bg-green-50 border-green-200",
    icon: "🏛️",
  },
  {
    title: "Community",
    items: ["Poverty", "Education", "Health", "Environment"],
    color: "bg-orange-50 border-orange-200",
    icon: "🤝",
  },
  {
    title: "Industry",
    items: ["Manufacturing", "ICT", "Productivity", "Technology adoption"],
    color: "bg-purple-50 border-purple-200",
    icon: "🏭",
  },
]

const portals = [
  {
    id: "graduate-portal",
    title: "Graduate Portal",
    description: "Every graduate has a personal dashboard including research profile, skills, CV, publications, employment status, and funding received.",
    features: ["Research profile", "Skills & CV", "Publications", "Employment status", "Funding received"],
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "investor-portal",
    title: "Investor Portal",
    description: "Investors can search research by industry, investment required, province, risk level, and return potential.",
    features: ["Search by industry", "Investment required", "Province", "Risk level", "Return potential"],
    color: "from-green-500 to-green-600",
  },
  {
    id: "government-portal",
    title: "Government Portal",
    description: "Government institutions can search research related to agriculture, health, labour, tourism, and education.",
    features: ["Agriculture", "Health", "Labour", "Tourism", "Education"],
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "ngo-portal",
    title: "NGO Portal",
    description: "NGOs can search projects related to climate, women, children, poverty, and livelihoods.",
    features: ["Climate", "Women", "Children", "Poverty", "Livelihoods"],
    color: "from-red-500 to-red-600",
  },
  {
    id: "business-portal",
    title: "Business Portal",
    description: "Businesses can search for new technologies, researchers, research partnerships, and consulting opportunities.",
    features: ["New technologies", "Researchers", "Research partnerships", "Consulting opportunities"],
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "funding-portal",
    title: "Funding Portal",
    description: "Displays available funding opportunities from government, banks, investors, CSR programmes, donors, and foundations.",
    features: ["Eligibility criteria", "Funding amount", "Deadlines", "Application process"],
    color: "from-teal-500 to-teal-600",
  },
]

export default function GRIPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Graduate Research-to-Impact (GRI)</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Transforming graduate research into practical outcomes that create employment, businesses, and policy change.
          </p>
        </div>
      </section>

      <Section
        id="repository"
        title="Research Repository"
        subtitle="A centralized platform for graduate research from across the nation."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-xl border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Upload Your Research</h3>
            <ul className="space-y-3">
              {[
                "Bachelor's thesis",
                "Master's thesis",
                "MPhil thesis",
                "PhD thesis",
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
              {["University", "Subject", "SDG", "District", "Keywords"].map((item) => (
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
        subtitle="Experts assess submitted research against rigorous criteria."
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

      <Section id="pathways" title="Development Pathways" subtitle="Research classified according to its potential application.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <Section variant="muted" title="Portals" subtitle="Specialized portals for different stakeholders.">
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
        subtitle="Track the Institute's achievements and measurable outcomes."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { value: "2,500+", label: "Research Uploaded" },
            { value: "35+", label: "Universities Participating" },
            { value: "1,800+", label: "Projects Evaluated" },
            { value: "85+", label: "Startups Created" },
            { value: "1,200+", label: "Jobs Created" },
            { value: "$10M+", label: "Funding Secured" },
            { value: "15+", label: "Policies Adopted" },
            { value: "120+", label: "Community Projects" },
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
