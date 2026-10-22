export function FieldFootage() {
  return (
    <section className="bg-field">
      <div className="container-wide py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <div className="lg:col-span-6" data-reveal>
            <h2 className="t-head">Field notes from the ground</h2>
          </div>
          <div className="lg:col-span-6" data-reveal>
            <p className="t-body text-ink-soft max-w-[52ch]">
              Research begins with watching how a place actually works — the crop, the classroom, the clinic, the
              council chamber. Our teams stay on the ground long enough to hear what is said before a single question
              is written.
            </p>
          </div>
        </div>

        <figure className="mt-12 lg:mt-16">
          <div className="relative aspect-[16/9] overflow-hidden bg-paper">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/footage/tea-picking-nuwara-eliya.jpg"
            >
              <source src="/footage/tea-picking-nuwara-eliya.webm" type="video/webm" />
            </video>
          </div>
          <figcaption className="t-small text-ink-soft mt-4 max-w-[74ch]">
            Tea being picked at a highland estate in Nuwara Eliya, November 2022. Archive footage by Muunaa-Selva,
            CC BY-SA 4.0, via Wikimedia Commons.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
