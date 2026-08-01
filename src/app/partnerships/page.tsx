import { Section } from "@/components/layout/Section"
import { partners } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Partnerships | Northern Research Institute",
  description: "Learn about NRI's partners and how to become a partner.",
}

const partnerCategories = [...new Set(partners.map((p) => p.category))]

export default function PartnershipsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Partnerships</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Collaborating with universities, government, NGOs, international organizations, and private companies.
          </p>
        </div>
      </section>

      <Section subtitle="Our Partners">
        <div className="space-y-8">
          {partnerCategories.map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-primary mb-4">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {partners
                  .filter((p) => p.category === category)
                  .map((partner) => (
                    <div key={partner.name} className="bg-gray-50 rounded-lg border border-border p-4 text-center hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mx-auto mb-2">
                        {partner.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium">{partner.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted" title="Become a Partner" subtitle="How organizations can collaborate with NRI.">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Reach Out", description: "Contact us through our form or email expressing your interest in partnership." },
              { step: "2", title: "Explore Synergies", description: "We will work together to identify areas of mutual interest and collaboration." },
              { step: "3", title: "Formalize", description: "Sign a partnership agreement outlining the scope, terms, and expected outcomes." },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-xl border border-border text-center">
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
