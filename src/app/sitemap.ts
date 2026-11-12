import type { MetadataRoute } from "next"

const base = "https://northernresearchinstitute.org"

const routes = [
  "/",
  "/about",
  "/how-it-works",
  "/rti",
  "/news",
  "/partnerships",
  "/contact",
  "/governance",
  "/knowledge",
  "/publications",
  "/research/repository",
  "/research-evaluation",
  "/business-opportunities",
  "/community-development",
  "/how-it-works/community-engagement",
  "/how-it-works/policy-research",
  "/how-it-works/research-to-opportunity",
  "/how-it-works/graduate-development",
  "/how-it-works/funding-mobilisation",
  "/how-it-works/university-collaboration",
  "/how-it-works/knowledge-dissemination",
  "/how-it-works/institutional-quality",
  "/how-it-works/regional-observatory",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" || path === "/news" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }))
}
