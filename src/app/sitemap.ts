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
  "/research-programmes",
  "/innovation",
  "/knowledge",
  "/publications",
  "/research/repository",
  "/research-evaluation",
  "/business-opportunities",
  "/community-development",
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
