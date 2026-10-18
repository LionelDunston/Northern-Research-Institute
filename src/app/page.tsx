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
      <section className="section-padding bg-gradient-to-br from-slate-900 via-[#0a2de0]/95 to-[#061a8f] text-white relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-white/5 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-amber-300 uppercase tracking-widest mb-4">NRI Targets</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Our 5-Year Goals</h2>
            <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
            <p className="text-lg text-white/75 leading-relaxed mt-5">
              NRI is building an institution designed to connect research, evidence, policy, opportunity, and community
              development. Over the next five years, our aim is to:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 mb-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-amber-300 mb-2">100+</div>
              <div className="text-sm text-white/80 leading-snug">Research projects supported</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-amber-300 mb-2">500+</div>
              <div className="text-sm text-white/80 leading-snug">Graduates engaged</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-amber-300 mb-2">25+</div>
              <div className="text-sm text-white/80 leading-snug">Research-to-project initiatives developed</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-amber-300 mb-2">10+</div>
              <div className="text-sm text-white/80 leading-snug">Policy and institutional partnerships established</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-amber-300 mb-2">100+</div>
              <div className="text-sm text-white/80 leading-snug">Employment and self-employment opportunities supported</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:scale-105 transition-all">
              <div className="text-4xl font-bold text-amber-300 mb-2">50+</div>
              <div className="text-sm text-white/80 leading-snug">Community development initiatives</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-white/50 italic border-t border-white/10 pt-6">
              These are targets, not past achievements. NRI will measure and report progress transparently as these goals
              are pursued.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
