export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Stat {
  value: string
  label: string
}

export interface TeamMember {
  name: string
  role: string
  expertise: string
  bio: string
  image?: string
}

export interface Publication {
  title: string
  type: string
  date: string
  description: string
}

export interface NewsItem {
  title: string
  date: string
  category: string
  summary: string
}

export interface ResourceItem {
  title: string
  description: string
  icon: string
}

export interface Partner {
  name: string
  category: string
  logo?: string
}

export interface ContactInfo {
  address: string
  email: string
  phone: string
  socials: { platform: string; url: string }[]
}
