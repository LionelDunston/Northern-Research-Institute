import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Northern Research Institute",
  description:
    "Get in touch with the Northern Research Institute in Jaffna, Sri Lanka for research submissions, partnerships, and general enquiries.",
  alternates: { canonical: "/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
