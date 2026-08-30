import { Section } from "@/components/layout/Section"
import { newsItems } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events | Northern Research Institute",
  description: "Stay informed about NRI's conferences, workshops, training, competitions, and success stories.",
}

export default function NewsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">News & Events</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Stay informed about conferences, workshops, training, and success stories.
          </p>
        </div>
      </section>

      <Section>
        {newsItems.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-primary mb-2">Stay tuned</h3>
            <p className="text-muted">News and event announcements will be published here soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((item) => (
              <article key={item.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{item.category}</span>
                  <span className="text-xs text-muted">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.summary}</p>
              </article>
            ))}
          </div>
        )}
      </Section>
    </>
  )
}
