import { stats } from "@/lib/data"

export function StatsBar() {
  if (stats.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary via-primary-light to-primary">
      <div className="container-wide py-12 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm text-white/85 font-medium uppercase tracking-wider leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />
    </section>
  )
}
