"use client"

import { useEffect } from "react"

const CANDIDATES = ".grid > *, li, [class*='space-y-'] > *, figcaption > span"

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

    // the parts of a revealed block arrive one after another
    const items = new Set<HTMLElement>()
    for (const node of nodes) {
      node.querySelectorAll<HTMLElement>(CANDIDATES).forEach((item) => items.add(item))
    }
    items.forEach((item) => item.classList.add("reveal-item"))

    const reveal = (node: HTMLElement) => {
      node.classList.add("is-in")
      node.querySelectorAll<HTMLElement>(CANDIDATES).forEach((item, index) => {
        if (!item.classList.contains("reveal-item")) return
        item.style.transitionDelay = `${Math.min(index, 11) * 70}ms`
        item.classList.add("is-in")
      })
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target as HTMLElement)
          io.unobserve(entry.target)
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.01 }
    )

    nodes.forEach((node) => io.observe(node))

    const safety = window.setTimeout(() => {
      nodes.forEach((node) => {
        node.classList.add("is-in")
        node.querySelectorAll<HTMLElement>(".reveal-item").forEach((item) => item.classList.add("is-in"))
      })
    }, 2500)

    return () => {
      io.disconnect()
      window.clearTimeout(safety)
    }
  }, [])

  return null
}
