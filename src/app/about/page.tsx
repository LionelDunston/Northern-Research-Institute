import { Section } from "@/components/layout/Section"
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
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">About the Institute</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            NRI's purpose, identity, strategic direction, vision, mission, and core values.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted leading-relaxed">
            The Northern Research Institute (NRI) is a research and innovation organisation dedicated
            to transforming knowledge across disciplines into practical solutions, opportunities, and
            real-world impact. NRI connects research, expertise, and partnerships to support innovation,
            enterprise, policy, employment, and sustainable national development.
          </p>
        </div>
      </Section>

      <Section variant="muted" title="Our Vision" subtitle="The Institute's long-term aspiration.">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl font-semibold text-primary italic">
            "A prosperous nation where research across all disciplines is transformed into practical solutions, innovation, sustainable opportunities, and real-world impact."
          </p>
        </div>
      </Section>

      <Section title="Our Mission" subtitle="What the Institute aims to achieve.">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted leading-relaxed">
            To transform research across disciplines into practical solutions, innovation, sustainable
            opportunities, and employment through collaboration, partnerships, and real-world application.
          </p>
        </div>
      </Section>

      <Section variant="muted" title="Core Values">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-xl border border-border">
              <h3 className="text-lg font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Strategic Objectives">
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4">
            {objectives.map((obj, i) => (
              <li key={i} className="p-5 rounded-lg bg-gray-50 border border-border">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-white text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-primary">{obj.title}</span>
                    <p className="text-muted leading-relaxed text-sm mt-1">{obj.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
