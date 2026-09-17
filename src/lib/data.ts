import { Stat, TeamMember, Publication, NewsItem, ResourceItem, Partner } from "@/types"

export const siteConfig = {
  name: "Northern Research Institute",
  shortName: "NRI",
  tagline: "Transforming Knowledge into Practical Solutions and Real-World Impact",
  description:
    "The Northern Research Institute (NRI) is a research and innovation organisation dedicated to transforming knowledge across disciplines into practical solutions, opportunities, and real-world impact. NRI connects research, expertise, and partnerships to support innovation, enterprise, policy, employment, and sustainable national development.",
}

export const stats: Stat[] = []

export const boardMembers: TeamMember[] = []

export const managementTeam = [
  { title: "Research & GRI Manager", description: "Leads research and GRI activities. Coordinates research submissions and evaluation. Identifies research with practical potential and guides it towards appropriate impact pathways." },
  { title: "Research Analysts", description: "Analyse and assess submitted research. Identify practical, innovative, and scalable potential. Support research evaluation and evidence development." },
  { title: "Innovation & Enterprise Manager", description: "Identifies research with innovation and commercial potential. Supports product, service, and enterprise development. Coordinates incubation and technology transfer activities." },
  { title: "Partnerships & Investment Manager", description: "Builds relationships with universities, government, industry, investors, and development partners. Identifies funding and investment opportunities." },
  { title: "Monitoring, Evaluation & Impact Officer", description: "Tracks research and project progress. Measures outcomes and real-world impact. Monitors employment, innovation, enterprise, investment, and implementation results." },
  { title: "Finance & Administration Officer", description: "Manages financial records and budgets. Supports procurement and financial controls. Coordinates administrative operations and compliance." },
]

export const mentorNetwork: TeamMember[] = []

export const publications: Publication[] = []

export const newsItems: NewsItem[] = []

export const knowledgeResources: ResourceItem[] = [
  {
    title: "Proposal Templates",
    description: "Structured templates for research proposals, funding applications, and project plans.",
    icon: "",
  },
  {
    title: "Business Plan Templates",
    description: "Comprehensive business plan templates for research commercialization and startups.",
    icon: "",
  },
  {
    title: "Grant Writing Guides",
    description: "Step-by-step guides for writing successful grant applications and securing funding.",
    icon: "",
  },
  {
    title: "Training Videos",
    description: "Video library covering research methods, innovation processes, and entrepreneurial skills.",
    icon: "",
  },
  {
    title: "Policy Brief Templates",
    description: "Templates for translating research findings into actionable policy recommendations.",
    icon: "",
  },
  {
    title: "Toolkits",
    description: "Practical toolkits for research evaluation, impact assessment, and project management.",
    icon: "",
  },
]

export const partners: Partner[] = []

export const contactInfo = {
  address: "Jaffna, Sri Lanka",
  email: "northernresearchinstitute@gmail.com",
  phone: "+94 71 353 9992",
}

export const contactEnquiries = [
  "Research",
  "RTI Programme",
  "Partnerships",
  "Investment",
  "Funding",
  "Innovation and Commercialisation",
  "General Enquiries",
]
