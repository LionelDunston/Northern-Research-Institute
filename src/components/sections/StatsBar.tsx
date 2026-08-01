import { stats } from "@/lib/data"

export function StatsBar() {
  return (
    <section className="bg-accent text-white">
      <div className="container-wide py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold">{stat.value}</div>
              <div className="mt-1 text-sm text-white/80 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
