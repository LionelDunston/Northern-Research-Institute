import { ReactNode } from "react"

interface SectionProps {
  id?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  variant?: "default" | "muted" | "primary"
  layout?: "stack" | "split"
}

export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  variant = "default",
  layout = "stack",
}: SectionProps) {
  const bgMap = {
    default: "bg-paper",
    muted: "bg-field",
    primary: "bg-brand text-white",
  }

  const titleColorMap = {
    default: "text-ink",
    muted: "text-ink",
    primary: "text-white",
  }

  const subtitleColorMap = {
    default: "text-ink-soft",
    muted: "text-ink-soft",
    primary: "text-white/85",
  }

  if (layout === "split") {
    return (
      <section id={id} className={`section-padding ${bgMap[variant]} ${className}`}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-5" data-reveal>
              {title && <h2 className={`t-head ${titleColorMap[variant]}`}>{title}</h2>}
              {subtitle && <p className={`t-body mt-5 ${subtitleColorMap[variant]}`}>{subtitle}</p>}
            </div>
            <div className="lg:col-span-7" data-reveal>
              {children}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id={id} className={`section-padding ${bgMap[variant]} ${className}`}>
      <div className="container-wide">
        {(title || subtitle) && (
          <div className="mb-12 sm:mb-16 max-w-[64ch]" data-reveal>
            {title && <h2 className={`t-head ${titleColorMap[variant]}`}>{title}</h2>}
            {subtitle && <p className={`t-body mt-5 ${subtitleColorMap[variant]}`}>{subtitle}</p>}
          </div>
        )}
        <div data-reveal>{children}</div>
      </div>
    </section>
  )
}
