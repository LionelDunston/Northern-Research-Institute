import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import { knowledgeResources } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Knowledge Centre | Northern Research Institute",
  description: "Access NRI's learning resources including proposal templates, business plan templates, grant writing guides, and toolkits.",
}

export default function KnowledgePage() {
  return (
    <>
      <PageHero title="Knowledge Centre" lede="Learning resources, templates, and guides to support your research and innovation journey." image={{ src: "/editorial/public-library-jaffna.jpg", alt: "The public library in Jaffna.", credit: "“Public Library, Jaffna” by Anton Croos, CC BY-SA 3.0, via Wikimedia Commons." }} action={{ label: "Browse the resources", href: "/knowledge#resources" }} />

      <Section id="resources">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {knowledgeResources.map((resource) => (
            <div key={resource.title} className="bg-field p-6 transition-shadow text-left">
              <span className="text-[44px]">{resource.icon}</span>
              <h3 className="text-[19px] font-semibold mt-4 mb-2">{resource.title}</h3>
              <p className="text-muted text-[16px] leading-relaxed">{resource.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <PhotoStrip
        title="Where learning happens"
        images={[
          {
            src: "/editorial/university-of-jaffna-journalism-students-on-the.jpg",
            alt: "Journalism students at the Media Resources and Training Centre, University of Jaffna.",
            caption: "Journalism students at the Media Resources and Training Centre.",
            credit: "“University of Jaffna journalism students on the final day” by David Brewer, CC BY-SA 2.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/final-editing-of-radio-and-video-pieces.jpg",
            alt: "Students editing radio and video pieces at the Media Resources and Training Centre.",
            caption: "Students edit radio and video pieces for broadcast.",
            credit: "“Final editing of radio and video pieces” by David Brewer, CC BY-SA 2.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/university-of-jaffna-sri-lanka.jpg",
            alt: "The entrance of the University of Jaffna.",
            caption: "The entrance of the University of Jaffna.",
            credit: "“University of Jaffna, Sri Lanka” by Anton Croos, CC BY-SA 3.0, via Wikimedia Commons.",
          },
        ]}
      />

    </>
  )
}
