import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "University and International Collaboration | NRI",
  description: "Connecting Local Knowledge with Global Expertise",
}

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">06. University and International Collaboration</h1>
          <p className="mt-3 text-lg text-white/80">Connecting Local Knowledge with Global Expertise</p>
        </div>
      </section>
      <Section>
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI seeks to build meaningful partnerships with universities, research institutions, international organisations, development agencies, and industry networks to strengthen research, knowledge exchange, and development cooperation.</p>
          <p>Through collaborative research, visiting scholar programmes, academic exchanges, co-supervision, professional training, conferences, joint publications, and eligible joint academic programmes, NRI aims to facilitate the exchange of knowledge, expertise, and resources across institutions and countries. These collaborations will focus on addressing regional and global challenges, strengthening research capacity, and creating new opportunities for students, graduates, researchers, and development practitioners.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Many development challenges require knowledge, expertise, and resources that extend beyond geographical and institutional boundaries. International collaboration can connect local research with global experience, introduce new methods and technologies, expand access to funding opportunities, and create pathways for academic and professional development.</p>
            <p className="text-muted leading-relaxed mt-3">By connecting Northern Sri Lanka with wider research and development networks, NRI aims to strengthen local research capacity, support innovative solutions, expand opportunities for graduates and researchers, and contribute local knowledge to international discussions.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Build Institutional Partnerships:</strong> Establish collaborative relationships with local and international universities, research centres, and development organisations.</li>
              <li><strong>Promote Joint Research:</strong> Encourage collaborative studies, interdisciplinary research, and joint publications addressing shared challenges.</li>
              <li><strong>Facilitate Academic Exchange:</strong> Support opportunities for visiting scholars, student exchanges, researcher mobility, and academic co-supervision.</li>
              <li><strong>Strengthen Knowledge and Skills:</strong> Facilitate training programmes, seminars, conferences, and professional learning opportunities.</li>
              <li><strong>Develop Collaborative Programmes:</strong> Explore joint academic initiatives and research programmes with appropriately authorised and accredited institutions.</li>
              <li><strong>Connect Research with Development:</strong> Build partnerships that link academic expertise with policy development, innovation, funding, enterprise, and community impact.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
