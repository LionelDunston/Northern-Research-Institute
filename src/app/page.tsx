import Link from "next/link"
import { Hero } from "@/components/sections/Hero"
import { StatsBar } from "@/components/sections/StatsBar"
import { WelcomeMessage } from "@/components/sections/WelcomeMessage"
import { NorthernPriorities } from "@/components/sections/NorthernPriorities"
import { FieldFootage } from "@/components/sections/FieldFootage"
import { FeaturedResearch } from "@/components/sections/FeaturedResearch"
import { SuccessStories } from "@/components/sections/SuccessStories"
import { NewsSection } from "@/components/sections/NewsSection"
import { QuickLinks } from "@/components/sections/QuickLinks"

const goals = [
  { value: "100+", label: "Research projects supported" },
  { value: "500+", label: "Graduates engaged" },
  { value: "25+", label: "Research-to-project initiatives developed" },
  { value: "10+", label: "Policy and institutional partnerships established" },
  { value: "100+", label: "Employment and self-employment opportunities supported" },
  { value: "50+", label: "Community development initiatives" },
]

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WelcomeMessage />
      <NorthernPriorities />
      <FieldFootage />
      <FeaturedResearch />
      <SuccessStories />
      <NewsSection />
      <QuickLinks />

      <section className="section-padding bg-mint">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-5" data-reveal>
              <h2 className="t-head">Building the institution the North needs</h2>
              <p className="t-body mt-6 max-w-md text-ink-soft">
                NRI is building an institution designed to connect research, evidence, policy, opportunity, and
                community development. Over the next five years, our aim is to:
              </p>
            </div>

            <div className="lg:col-span-7" data-reveal>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                {goals.map((g) => (
                  <div key={g.label}>
                    <dt className="t-head text-brand leading-none">{g.value}</dt>
                    <dd className="t-body mt-2 max-w-[32ch] text-ink-soft">{g.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="t-meta mt-10 max-w-2xl text-ink-soft">
                These are targets, not past achievements. NRI will measure and report progress transparently as these
                goals are pursued.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="container-wide py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7" data-reveal>
              <h2 className="t-head text-white">From knowledge to action</h2>
            </div>
            <div className="lg:col-span-5" data-reveal>
              <p className="t-body text-white/85">
                Every submission is read by a mentor and routed toward a real pathway — a policy conversation, a funded
                project, a business, a job, or a community programme.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Link href="/researcher/research" className="btn-solid btn-invert">
                  Submit your research
                </Link>
                <Link href="/partnerships" className="link-rule t-meta font-medium text-white hover:text-mint">
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
