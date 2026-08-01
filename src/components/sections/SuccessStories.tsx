const stories = [
  {
    title: "Clean Water Innovation",
    description:
      "A PhD research on affordable water filtration led to a startup that now provides clean water to 50,000 rural households.",
    author: "Dr. Margaret Banda",
  },
  {
    title: "AgriTech Platform",
    description:
      "Master's research on crop disease detection using AI evolved into a mobile platform serving 10,000+ smallholder farmers.",
    author: "Mr. Kenneth Zulu",
  },
  {
    title: "Policy Impact on Education",
    description:
      "Research on out-of-school children informed a national policy that increased primary school enrollment by 15%.",
    author: "Prof. Sarah Mwansa",
  },
]

export function SuccessStories() {
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
