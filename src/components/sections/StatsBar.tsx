import { stats } from "@/lib/data"

export function StatsBar() {
  if (stats.length === 0) return null

  return (
    <section className="bg-paper">
      <div className="container-wide py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="t-head text-brand leading-none">{stat.value}</div>
              <div className="t-small text-ink-soft mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
