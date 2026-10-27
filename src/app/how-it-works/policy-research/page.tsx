import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Policy Research and Government Advisory | NRI",
  description: "Evidence for Better Decisions. Research for Better Public Services.",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">02. Policy Research and Government Advisory</h1>
          <p className="mt-3 text-lg text-white/80">Evidence for Better Decisions. Research for Better Public Services.</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI connects research and reliable evidence with public policy and government action. We aim to help policymakers and public institutions understand development challenges, assess policy options, strengthen programmes, and identify practical approaches to regional development.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">How We Contribute</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Research and Policy Analysis:</strong> Examine social and economic challenges and translate research findings into clear policy briefs and recommendations.</li>
              <li><strong>Programme Evaluation:</strong> Assess whether public programmes are effective, reach their intended beneficiaries, and achieve their objectives.</li>
              <li><strong>Development Planning:</strong> Use data and local evidence to identify priorities, assess needs, and support practical development plans.</li>
              <li><strong>Government Collaboration:</strong> Work with relevant public institutions to explore policy options and support the implementation and evaluation of suitable initiatives.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Effective public policy requires more than good intentions. Research and evidence can help institutions understand people's needs, allocate resources more effectively, improve public services, and make development initiatives more responsive and accountable.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
