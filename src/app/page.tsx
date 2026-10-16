import { Hero } from "@/components/sections/Hero"
import { StatsBar } from "@/components/sections/StatsBar"
import { WelcomeMessage } from "@/components/sections/WelcomeMessage"
import { NorthernPriorities } from "@/components/sections/NorthernPriorities"
import { FeaturedResearch } from "@/components/sections/FeaturedResearch"
import { SuccessStories } from "@/components/sections/SuccessStories"
import { NewsSection } from "@/components/sections/NewsSection"
import { QuickLinks } from "@/components/sections/QuickLinks"

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WelcomeMessage />
      <NorthernPriorities />
      <FeaturedResearch />
      <SuccessStories />
      <NewsSection />
      <QuickLinks />
      <section className="section-padding bg-gradient-to-br from-primary/5 to-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">Our 5-Year Goals</h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              NRI is building an institution designed to connect research, evidence, policy, opportunity, and community
              development. Over the next five years, our aim is to:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted">Research projects supported</div>
            </div>
            <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted">Graduates engaged</div>
            </div>
            <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted">Research-to-project initiatives developed</div>
            </div>
            <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted">Policy and institutional partnerships established</div>
            </div>
            <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted">Employment and self-employment opportunities supported</div>
            </div>
            <div className="bg-white rounded-xl border border-border p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted">Community development initiatives</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted">
              These are targets, not past achievements. NRI will measure and report progress transparently as these goals
              are pursued.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
