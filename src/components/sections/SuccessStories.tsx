const stories: { title: string; description: string; author: string }[] = []

export function SuccessStories() {
  if (stories.length === 0) return null

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Success Stories</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Real-world impact from research transformed into practical solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.title} className="bg-white rounded-xl border border-border p-8 relative">
              <div className="absolute top-0 left-8 w-12 h-1 bg-accent rounded-full" />
              <h3 className="text-xl font-semibold mt-4 mb-3">{story.title}</h3>
              <p className="text-muted leading-relaxed mb-4">{story.description}</p>
              <p className="text-sm font-medium text-accent">{story.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
