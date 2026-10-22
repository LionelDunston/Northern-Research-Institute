import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import { publications } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publications | Northern Research Institute",
  description: "Browse NRI's publications including annual reports, research reports, policy briefs, journal articles, and more.",
}

export default function PublicationsPage() {
  return (
    <>
      <PageHero title="Publications" lede="Access our research outputs, reports, and knowledge products." image={{ src: "/editorial/bird-s-eye-view-of-the-city.jpg", alt: "Historic engraving of the city of Jaffna.", credit: "“Bird’s eye view of the city of Jaffnapatnam” by Caspar Schmalkalden, public domain, via Wikimedia Commons." }} action={{ label: "Browse the library", href: "/publications#library" }} />

      <Section id="library">
        {publications.length === 0 ? (
          <div className="text-left py-16">
            <h3 className="text-[26px] font-semibold text-primary mb-2">Coming soon</h3>
            <p className="text-muted">Research reports and publications will be available here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <div key={pub.title} className="bg-field p-6 transition-shadow">
                <span className="t-small font-semibold uppercase tracking-wider text-brand">{pub.type}</span>
                <h3 className="text-[19px] font-semibold mt-2 mb-2">{pub.title}</h3>
                <p className="t-small text-muted mb-3">{pub.date}</p>
                <p className="text-[16px] text-muted leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </div>
        )}
      </Section>

      <PhotoStrip
        title="The archive"
        images={[
          {
            src: "/editorial/voyages-and-travels-to-india-ceylon-the.jpg",
            alt: "An early printed plate from a voyage account of India and Ceylon.",
            caption: "Early printed accounts of India and Ceylon.",
            credit: "“Voyages and travels to India, Ceylon, the Red Sea, Abyssinia, and Egypt”, public domain, via Wikimedia Commons.",
          },
          {
            src: "/editorial/haeckel-ceylon-jungle-river.jpg",
            alt: "A nineteenth-century illustrated plate of a river in Ceylon.",
            caption: "A nineteenth-century plate of a Ceylon river.",
            credit: "“Haeckel Ceylon Jungle River”, public domain, via Wikimedia Commons.",
          },
          {
            src: "/editorial/view-from-public-library.jpg",
            alt: "View over Jaffna city from the public library roof.",
            caption: "Jaffna from the roof of the public library.",
            credit: "“View from Public Library” by Kanatonian, CC BY-SA 3.0, via Wikimedia Commons.",
          },
        ]}
      />


    </>
  )
}
