import { Section } from "@/components/layout/Section"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About the Institute | Northern Research Institute",
  description: "Learn about NRI's purpose, identity, strategic direction, vision, mission, core values, and commitment to transforming research into meaningful national development.",
}

const values = [
  { title: "Integrity", description: "We uphold ethical, transparent, and responsible research and practice." },
  { title: "Innovation", description: "We encourage creative thinking and transform knowledge into new solutions." },
  { title: "Collaboration", description: "We build meaningful partnerships across researchers, institutions, sectors, and communities." },
  { title: "Excellence", description: "We pursue high standards in research, innovation, and implementation." },
  { title: "Sustainability", description: "We promote solutions and opportunities that create lasting value." },
  { title: "Impact", description: "We focus on translating knowledge into measurable and meaningful real-world outcomes." },
]

const objectives = [
  { title: "Promote Research", description: "Encourage and support quality research across diverse disciplines and areas of national importance." },
  { title: "Enable Practical Applications", description: "Move valuable research beyond academic publication by supporting its translation into practical solutions and real-world applications." },
  { title: "Drive Innovation", description: "Encourage new ideas, technologies, products, and services that address real-world needs and opportunities." },
  { title: "Create Employment", description: "Transform research and innovation into sustainable employment and career opportunities for graduates and communities." },
  { title: "Foster Entrepreneurship", description: "Support promising research and ideas in developing into enterprises, startups, products, and services." },
  { title: "Build Partnerships", description: "Strengthen collaboration among researchers, universities, government, industry, investors, and development partners." },
  { title: "Advance National Development", description: "Use research, innovation, and partnerships to contribute to sustainable economic, social, technological, and national development." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero title="About the Institute" lede="NRI&apos;s purpose, identity, strategic direction, vision, mission, and core values." image={{ src: "/editorial/early-morning-in-jaffna.jpg", alt: "A cyclist on an early morning street in Jaffna.", credit: "“Early morning in Jaffna” by Rudolph.A.furtado, CC0, via Wikimedia Commons." }} action={{ label: "Read our objectives", href: "/about#objectives" }} />

      <Section>
        <div className="max-w-3xl text-left">
          <p className="text-[19px] text-muted leading-relaxed">
            The Northern Research Institute (NRI) is a research and innovation organisation dedicated
            to transforming knowledge across disciplines into practical solutions, opportunities, and
            real-world impact. NRI connects research, expertise, and partnerships to support innovation,
            enterprise, policy, employment, and sustainable national development.
          </p>
        </div>
      </Section>

      <PhotoStrip
        title="Jaffna and the North"
        images={[
          {
            src: "/editorial/life-is-a-boat.jpg",
            alt: "A fishing boat resting in a lagoon off Jaffna.",
            caption: "Fishing boats rest in the lagoons that ring the peninsula.",
            credit: "“Life is a boat!” by Navod Thathsara Kankanamge, CC BY-SA 4.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/university-of-jaffna-sri-lanka.jpg",
            alt: "The entrance of the University of Jaffna.",
            caption: "The University of Jaffna, whose students join NRI programmes.",
            credit: "“University of Jaffna, Sri Lanka” by Anton Croos, CC BY-SA 3.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/jaffna-beauty.jpg",
            alt: "A lagoon in the Jaffna peninsula.",
            caption: "The lagoons along the edge of the peninsula.",
            credit: "“Jaffna Beauty” by Vashni olivia, CC BY-SA 4.0, via Wikimedia Commons.",
          },
        ]}
      />



      <Section variant="muted" layout="split" title="Our Vision" subtitle="The Institute's long-term aspiration.">
        <p className="text-[26px] font-semibold text-primary leading-snug">
          "A prosperous nation where research across all disciplines is transformed into practical solutions, innovation, sustainable opportunities, and real-world impact."
        </p>
      </Section>

      <Section layout="split" title="Our Mission" subtitle="What the Institute aims to achieve.">
        <p className="text-[19px] text-muted leading-relaxed">
          To transform research across disciplines into practical solutions, innovation, sustainable
          opportunities, and employment through collaboration, partnerships, and real-world application.
        </p>
      </Section>

      <Section variant="muted" title="Core Values">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="text-[19px] font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-muted leading-relaxed text-[16px]">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="objectives" layout="split" title="Strategic Objectives">
        <ol className="space-y-8 list-none">
          {objectives.map((obj, i) => (
            <li key={i} className="flex items-start gap-6">
              <span className="text-[26px] font-semibold text-brand tabular-nums leading-none shrink-0 w-8">
                {i + 1}
              </span>
              <span>
                <span className="font-semibold text-primary text-[19px]">{obj.title}</span>
                <p className="text-muted leading-relaxed text-[16px] mt-1">{obj.description}</p>
              </span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
