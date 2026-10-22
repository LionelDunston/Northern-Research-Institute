import Image from "next/image"
import Link from "next/link"

interface PageHeroProps {
  title: string
  lede?: string
  image?: { src: string; alt: string; credit: string }
  action?: { label: string; href: string }
  tone?: "paper" | "field" | "brand"
}

const tones = {
  paper: "bg-paper text-ink",
  field: "bg-field text-ink",
  brand: "bg-brand text-white",
}

export function PageHero({ title, lede, image, action, tone = "paper" }: PageHeroProps) {
  const ledeColor = tone === "brand" ? "text-white/85" : "text-ink-soft"

  return (
    <section className={tones[tone]}>
      <div className="h-1 w-full bg-brand" aria-hidden="true" />
      <div className="container-wide py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
            <h1 className="t-page max-w-[20ch]">{title}</h1>
            {lede ? <p className={`t-lead mt-6 max-w-[52ch] ${ledeColor}`}>{lede}</p> : null}
            {action ? (
              <div className="mt-8">
                <Link href={action.href} className="btn-solid">
                  {action.label}
                </Link>
              </div>
            ) : null}
          </div>

          {image ? (
            <figure className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-field">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <figcaption className="t-small text-ink-soft mt-3 max-w-[58ch]">{image.credit}</figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  )
}
