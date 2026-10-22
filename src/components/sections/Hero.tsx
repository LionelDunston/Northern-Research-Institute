"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const mosaic = [
  { src: "/priorities/youth.jpg", alt: "Young people in a training workshop", className: "row-span-2" },
  { src: "/priorities/women.jpg", alt: "Women traders at a local market", className: "" },
  { src: "/priorities/education.jpg", alt: "Students in a classroom session", className: "" },
  { src: "/priorities/migration.jpg", alt: "A family arriving with their belongings", className: "col-span-2" },
]

export function Hero() {
  const [liveCount, setLiveCount] = useState<number | null>(null)
  const [now, setNow] = useState("")

  useEffect(() => {
    fetch("/api/research")
      .then((r) => r.json())
      .then((d) => setLiveCount(Array.isArray(d) ? d.length : 0))
      .catch(() => {})

    const clock = () => {
      const t = new Date()
      setNow(
        t.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) +
          " · Jaffna · " +
          t.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      )
    }
    clock()
    const id = setInterval(clock, 60000)
    return () => clearInterval(id)
  }, [])

  const figures = [
    { value: liveCount === null ? "—" : String(liveCount), label: "Live research submissions" },
    { value: "12", label: "Northern development priorities" },
    { value: "8", label: "Steps from research to impact" },
  ]

  return (
    <section className="bg-paper">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-12 pb-12 sm:pt-16 lg:pt-20 lg:pb-16">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="t-display rise" style={{ animationDelay: "40ms" }}>
            From Knowledge
            <br />
            to Action
          </h1>

          <p
            className="t-lead mt-7 max-w-xl text-ink-soft rise"
            style={{ animationDelay: "140ms" }}
          >
            The Northern Research Institute turns multidisciplinary research into working solutions — shaping policy,
            growing enterprise, creating employment, and strengthening the communities of the North.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/researcher/research" className="btn-solid rise" style={{ animationDelay: "220ms" }}>
              Submit your research
            </Link>
            <Link
              href="/research-programmes"
              className="link-rule t-meta font-medium text-ink hover:text-brand rise"
              style={{ animationDelay: "280ms" }}
            >
              See how it works
            </Link>
            <Link
              href="/contact"
              className="link-rule t-meta font-medium text-ink-soft hover:text-brand rise"
              style={{ animationDelay: "320ms" }}
            >
              Contact the institute
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full min-h-[22rem] lg:min-h-full">
            {mosaic.map((m, i) => (
              <div
                key={m.src}
                className={`relative overflow-hidden bg-field rise ${m.className}`}
                style={{ animationDelay: `${120 + i * 70}ms` }}
              >
                <Image
                  src={m.src}
                  alt={m.alt}
                  fill
                  priority={i === 0}
                  className={`object-cover ${i === 0 ? "drift" : ""}`}
                  sizes="(max-width: 1024px) 50vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-field">
        <div className="container-wide grid grid-cols-1 sm:grid-cols-3">
          {figures.map((f, i) => (
            <div key={f.label} className={`py-6 ${i > 0 ? "sm:pl-8" : ""} ${i < 2 ? "sm:pr-8" : ""}`}>
              <p className="t-head text-brand leading-none">{f.value}</p>
              <p className="t-small text-ink-soft mt-2">{f.label}</p>
            </div>
          ))}
        </div>
        <div className="container-wide pb-6">
          <p className="t-small text-ink-soft">{now || "Northern Province, Sri Lanka"}</p>
        </div>
      </div>
    </section>
  )
}
