import Link from "next/link"
import { siteConfig } from "@/lib/data"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-light to-accent text-white overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)" }} />
      <div className="container-wide relative py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors shadow-lg"
            >
              About NRI
            </Link>
            <Link
              href="/partnerships"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
