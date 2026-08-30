import { Section } from "@/components/layout/Section"
import { publications } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Publications | Northern Research Institute",
  description: "Browse NRI's publications including annual reports, research reports, policy briefs, journal articles, and more.",
}

export default function PublicationsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Publications</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Access our research outputs, reports, and knowledge products.
          </p>
        </div>
      </section>

      <Section>
        {publications.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-primary mb-2">Coming soon</h3>
            <p className="text-muted">Research reports and publications will be available here.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((pub) => (
              <div key={pub.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{pub.type}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{pub.title}</h3>
                <p className="text-xs text-muted mb-3">{pub.date}</p>
                <p className="text-sm text-muted leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
