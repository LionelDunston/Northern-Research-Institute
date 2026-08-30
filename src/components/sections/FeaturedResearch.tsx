const featured: { title: string; category: string; description: string }[] = []

export function FeaturedResearch() {
  if (featured.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Research</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Highlighting our most impactful research projects across key areas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="h-2 bg-gradient-to-r from-primary to-accent" />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{item.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
