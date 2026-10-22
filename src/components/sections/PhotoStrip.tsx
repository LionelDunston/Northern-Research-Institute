import Image from "next/image"

export interface StripImage {
  src: string
  alt: string
  caption: string
  credit: string
}

interface PhotoStripProps {
  title: string
  images: StripImage[]
}

export function PhotoStrip({ title, images }: PhotoStripProps) {
  return (
    <section className="bg-field">
      <div className="container-wide py-14 sm:py-16 lg:py-20">
        <h2 className="t-head max-w-[24ch]" data-reveal>
          {title}
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-8" data-reveal>
          {images.map((image) => (
            <figure key={image.src}>
              <div className="relative aspect-[4/3] overflow-hidden bg-paper strip-figure">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-4">
                <span className="text-[16px] block text-ink">{image.caption}</span>
                <span className="text-[16px] block text-muted mt-1">{image.credit}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
