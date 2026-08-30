import Link from "next/link"
import { newsItems } from "@/lib/data"

export function NewsSection() {
  const latest = newsItems.slice(0, 3)
  if (latest.length === 0) return null

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest News & Events</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Stay informed about our conferences, workshops, success stories, and partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latest.map((item) => (
            <article key={item.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{item.category}</span>
                <span className="text-xs text-muted">{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/news"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View All News & Events
          </Link>
        </div>
      </div>
    </section>
  )
}
