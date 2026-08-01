import { ReactNode } from "react"

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  variant?: "default" | "muted" | "primary"
}

export function Section({ id, title, subtitle, children, className = "", variant = "default" }: SectionProps) {
  const bgMap = {
    default: "bg-white",
    muted: "bg-gray-50",
    primary: "bg-primary text-white",
  }

  const titleColorMap = {
    default: "text-foreground",
    muted: "text-foreground",
    primary: "text-white",
  }

  const subtitleColorMap = {
    default: "text-muted",
    muted: "text-muted",
    primary: "text-white/80",
  }

  return (
    <section id={id} className={`section-padding ${bgMap[variant]} ${className}`}>
      <div className="container-wide">
        {(title || subtitle) && (
          <div className="text-center mb-12 sm:mb-16">
            {title && <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${titleColorMap[variant]}`}>{title}</h2>}
            {subtitle && <p className={`mt-4 text-lg max-w-2xl mx-auto ${subtitleColorMap[variant]}`}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
