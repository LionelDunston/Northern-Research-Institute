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
      { label: "Advisory Council", href: "/governance#advisory-council" },
      { label: "Mentor Network", href: "/governance#mentor-network" },
    ],
  },
  { label: "News & Events", href: "/news" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
]
