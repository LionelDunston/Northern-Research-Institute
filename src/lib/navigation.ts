import { NavItem } from "@/types"

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Governance",
    href: "/governance",
    children: [
      { label: "Board of Directors", href: "/governance#board" },
      { label: "Chairperson", href: "/governance#chairperson" },
      { label: "Executive Director", href: "/governance#executive-director" },
      { label: "Management & Team", href: "/governance#management" },
      { label: "Advisory Council", href: "/governance#advisory-council" },
      { label: "Mentor Network", href: "/governance#mentor-network" },
    ],
  },
  {
    label: "RTI",
    href: "/rti",
    children: [
      { label: "Research Repository", href: "/rti#repository" },
      { label: "Research Evaluation", href: "/rti#evaluation" },
      { label: "Development Pathways", href: "/rti#pathways" },
      { label: "Training & Capacity", href: "/rti#training" },
      { label: "Research Portal", href: "/rti#research-portal" },
      { label: "Investor Portal", href: "/rti#investor-portal" },
      { label: "Government Portal", href: "/rti#government-portal" },
      { label: "NGO Portal", href: "/rti#ngo-portal" },
      { label: "Business Portal", href: "/rti#business-portal" },
      { label: "Funding Portal", href: "/rti#funding-portal" },
      { label: "Impact Dashboard", href: "/rti#impact" },
    ],
  },
  { label: "Research Programmes", href: "/research-programmes" },
  { label: "News & Events", href: "/news" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
]
