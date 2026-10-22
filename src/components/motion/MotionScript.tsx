"use client"

import { useEffect } from "react"

export function MotionScript() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      nodes.forEach((node) => node.classList.add("is-in"))
      document.querySelectorAll("video").forEach((video) => video.pause())
      return
    }

    if (nodes.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in")
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 }
    )

    nodes.forEach((node) => io.observe(node))

    const safety = window.setTimeout(() => {
      nodes.forEach((node) => node.classList.add("is-in"))
    }, 2500)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [])

  return null
}
