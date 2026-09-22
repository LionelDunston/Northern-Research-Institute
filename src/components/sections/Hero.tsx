import Link from "next/link"
import { siteConfig } from "@/lib/data"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2de0] via-[#5a1fe0] to-[#ff2d87] text-white">
      {/* Vibrant animated orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-yellow-300/15 rounded-full blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 0%, transparent 30%)" }} />
      </div>
      <div className="container-wide relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            Knowledge • Innovation • Impact — Jaffna, Sri Lanka
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">{siteConfig.tagline}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/researcher/research" className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-[#0a2de0] font-bold hover:bg-yellow-300 hover:text-[#0a2de0] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5">
              Submit Your Research →
            </Link>
            <Link href="/research-programmes" className="inline-flex items-center px-8 py-3.5 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 text-white font-semibold hover:bg-white hover:text-[#0a2de0] transition-all">
              Explore Opportunities
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3.5 rounded-full bg-transparent border-2 border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-medium">
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">For Researchers</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">For Investors</span>
            <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">For Communities</span>
            <span className="px-3 py-1.5 rounded-full bg-emerald-400 text-[#0a2de0] font-bold">Join 500+ Innovators</span>
          </div>
        </div>
      </div>
    </section>
  )
}
