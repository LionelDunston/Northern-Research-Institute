import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import { newsItems } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events | Northern Research Institute",
  description: "Stay informed about NRI's conferences, workshops, training, competitions, and success stories.",
}

export default function NewsPage() {
  return (
    <>
      <PageHero title="News &amp; Events" lede="Stay informed about conferences, workshops, training, and success stories." image={{ src: "/editorial/mullaitivu-mullaitivu-district-northern-province-sri-lanka.jpg", alt: "Mullaitivu in the Northern Province, seen from space.", credit: "“Mullaitivu, Mullaitivu District, Northern Province, Sri Lanka” by Capella Space, CC BY 4.0, via Wikimedia Commons." }} action={{ label: "Latest updates", href: "/news#updates" }} />

      <Section id="updates">
        {newsItems.length === 0 ? (
          <div className="text-left py-16">
            <h3 className="text-[26px] font-semibold text-primary mb-2">Stay tuned</h3>
            <p className="text-muted">News and event announcements will be published here soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <article key={item.title} className="bg-field p-6 transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="t-small font-semibold uppercase tracking-wider text-brand">{item.category}</span>
                  <span className="t-small text-muted">{item.date}</span>
                </div>
                <h3 className="text-[19px] font-semibold mb-2">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.summary}</p>
              </article>
            ))}
          </div>
        )}
      </Section>

      <PhotoStrip
        title="From the Northern Province"
        images={[
          {
            src: "/editorial/northern-line-sri-lanka-december-2019-1.jpg",
            alt: "A train on the Northern Railway Line in Sri Lanka.",
            caption: "A train on the Northern Railway Line.",
            credit: "“Northern Line - Sri Lanka” by Rehman Abubakr, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/vavuniya-railway-station-sri-lanka.jpg",
            alt: "Vavuniya Railway Station in the Northern Province.",
            caption: "Vavuniya station, on the line that runs up from the south.",
            credit: "“Vavuniya Railway Station - Sri Lanka” by Rehman Abubakr, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/stanley-road.jpg",
            alt: "Stanley Road in Jaffna city.",
            caption: "Stanley Road, Jaffna.",
            credit: "“Stanley Road” by Indi Samarajiva, CC BY 2.0, via Wikimedia Commons.",
          },
        ]}
      />


    </>
  )
}
