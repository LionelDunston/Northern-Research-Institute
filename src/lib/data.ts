import { Stat, TeamMember, Publication, NewsItem, ResourceItem, Partner } from "@/types"

export const siteConfig = {
  name: "Northern Research Institute",
  shortName: "NRI",
  tagline: "Transforming Research into Practical Solutions",
  description:
    "The Northern Research Institute (NRI) is responsible for research, innovation, governance, partnerships, and national development. Our mission is to transform research into practical solutions that create employment, businesses, public policies, and community development.",
}

export const stats: Stat[] = [
  { value: "500+", label: "Research Projects" },
  { value: "1,200+", label: "Jobs Created" },
  { value: "85+", label: "Startups Launched" },
  { value: "$10M+", label: "Funding Secured" },
]

export const boardMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Mwansa",
    role: "Chairperson",
    expertise: "Research Policy & Governance",
    bio: "Dr. Mwansa has over 25 years of experience in research leadership and policy development across Africa.",
  },
  {
    name: "Prof. James Ochieng",
    role: "Vice Chairperson",
    expertise: "Innovation & Technology Transfer",
    bio: "Professor of Innovation Studies at the University of Zambia with extensive experience in technology commercialization.",
  },
  {
    name: "Ms. Grace Banda",
    role: "Board Member",
    expertise: "Finance & Audit",
    bio: "Chartered accountant with 20+ years in financial management across public and private sectors.",
  },
  {
    name: "Dr. Michael Zulu",
    role: "Board Member",
    expertise: "Community Development",
    bio: "Expert in rural development and community engagement with a PhD in Development Studies.",
  },
]

export const mentorNetwork: TeamMember[] = [
  {
    name: "Dr. Alice Phiri",
    role: "Research Mentor",
    expertise: "Climate Science",
    bio: "Senior researcher specializing in climate change adaptation and environmental policy.",
  },
  {
    name: "Mr. Brian Kasonde",
    role: "Startup Mentor",
    expertise: "Entrepreneurship",
    bio: "Serial entrepreneur who has founded three successful tech startups in Africa.",
  },
  {
    name: "Ms. Catherine Mwale",
    role: "Career Mentor",
    expertise: "Human Resources",
    bio: "HR director with expertise in talent development and career planning for young professionals.",
  },
  {
    name: "Dr. David Simbeye",
    role: "Technology Mentor",
    expertise: "ICT & AI",
    bio: "Technology expert specializing in artificial intelligence and digital transformation.",
  },
  {
    name: "Mrs. Esther Chanda",
    role: "Business Mentor",
    expertise: "Business Development",
    bio: "Business consultant with 15 years of experience in SME development and market entry strategies.",
  },
  {
    name: "Mr. Francis Banda",
    role: "Investment Mentor",
    expertise: "Venture Capital",
    bio: "Investment banker with expertise in early-stage funding, venture capital, and impact investing.",
  },
]

export const publications: Publication[] = [
  {
    title: "Annual Research Report 2025",
    type: "Annual Report",
    date: "2025-12-15",
    description: "Comprehensive report on research activities, outputs, and impact across all programmes.",
  },
  {
    title: "Climate Adaptation in Southern Africa",
    type: "Research Report",
    date: "2025-11-20",
    description: "Findings from a three-year study on climate adaptation strategies in rural communities.",
  },
  {
    title: "Youth Employment and Innovation Policy Brief",
    type: "Policy Brief",
    date: "2025-10-05",
    description: "Recommendations for integrating youth innovation into national employment policies.",
  },
  {
    title: "Journal of Northern Research Vol. 12",
    type: "Journal Article",
    date: "2025-09-01",
    description: "Peer-reviewed articles on sustainable development, technology, and social innovation.",
  },
  {
    title: "Building Research Capacity in Developing Nations",
    type: "Book",
    date: "2025-08-15",
    description: "A comprehensive guide to establishing and strengthening research institutions.",
  },
  {
    title: "Digital Transformation in Agriculture",
    type: "Working Paper",
    date: "2025-07-20",
    description: "Preliminary findings on how digital technologies are transforming smallholder agriculture.",
  },
]

export const newsItems: NewsItem[] = [
  {
    title: "NRI Launches New Climate Research Programme",
    date: "2025-12-01",
    category: "Programme Launch",
    summary: "The institute launches a major new research programme focused on climate change adaptation in partnership with UN agencies.",
  },
  {
    title: "Graduate Research-to-Impact Conference 2025",
    date: "2025-11-15",
    category: "Conference",
    summary: "Over 300 graduates and 50 investors gathered for the annual GRI conference showcasing innovative research.",
  },
  {
    title: "Partnership with Tech University Announced",
    date: "2025-10-28",
    category: "Partnership",
    summary: "NRI enters a strategic partnership with Tech University to accelerate technology transfer and commercialization.",
  },
  {
    title: "Research Incubation Bootcamp Opens Applications",
    date: "2025-10-10",
    category: "Training",
    summary: "Applications are now open for the 2026 Research Incubation Bootcamp for early-stage researchers.",
  },
  {
    title: "Three Startups Graduate from NRI Incubation Programme",
    date: "2025-09-20",
    category: "Success Story",
    summary: "Three research-derived startups successfully graduated, having secured over $2M in combined funding.",
  },
]

export const knowledgeResources: ResourceItem[] = [
  {
    title: "Proposal Templates",
    description: "Structured templates for research proposals, funding applications, and project plans.",
    icon: "📄",
  },
  {
    title: "Business Plan Templates",
    description: "Comprehensive business plan templates for research commercialization and startups.",
    icon: "📊",
  },
  {
    title: "Grant Writing Guides",
    description: "Step-by-step guides for writing successful grant applications and securing funding.",
    icon: "✍️",
  },
  {
    title: "Training Videos",
    description: "Video library covering research methods, innovation processes, and entrepreneurial skills.",
    icon: "🎥",
  },
  {
    title: "Policy Brief Templates",
    description: "Templates for translating research findings into actionable policy recommendations.",
    icon: "📋",
  },
  {
    title: "Toolkits",
    description: "Practical toolkits for research evaluation, impact assessment, and project management.",
    icon: "🧰",
  },
]

export const partners: Partner[] = [
  { name: "University of Zambia", category: "University" },
  { name: "Ministry of Education", category: "Government" },
  { name: "UNDP Zambia", category: "International Organization" },
  { name: "Zambia Development Agency", category: "Government" },
  { name: "OXFAM International", category: "NGO" },
  { name: "Standard Chartered Bank", category: "Private Sector" },
  { name: "African Development Bank", category: "Development Partner" },
  { name: "World Health Organization", category: "International Organization" },
]

export const contactInfo = {
  address: "Plot 123, Independence Avenue, Lusaka, Zambia",
  email: "info@nri.org.zm",
  phone: "+260 211 234 567",
  socials: [
    { platform: "LinkedIn", url: "#" },
    { platform: "Twitter", url: "#" },
    { platform: "Facebook", url: "#" },
    { platform: "YouTube", url: "#" },
  ],
}
