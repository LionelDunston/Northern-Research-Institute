import { Section } from "@/components/layout/Section"
import { boardMembers, mentorNetwork } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Governance | Northern Research Institute",
  description: "Learn about NRI's Board of Directors, Executive Director, Advisory Council, and Mentor Network.",
}

export default function GovernancePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Governance</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            How the Institute is managed and guided towards its mission.
          </p>
        </div>
      </section>

      <Section id="board" title="Board of Directors" subtitle="The highest decision-making body of the Institute.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold mb-4">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm font-medium text-accent">{member.role}</p>
              <p className="text-xs text-muted mt-1 mb-3">{member.expertise}</p>
              <p className="text-sm text-muted leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-border">
          <h3 className="font-semibold text-primary mb-3">Board Responsibilities</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
            {["Approve policies", "Approve budgets", "Approve strategic plans", "Ensure accountability"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="chairperson" variant="muted" title="Chairperson" subtitle="Leads the Board of Directors.">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-border p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold shrink-0">
              SM
            </div>
            <div>
              <h3 className="text-xl font-semibold">Dr. Sarah Mwansa</h3>
              <p className="text-accent font-medium">Chairperson, Board of Directors</p>
              <p className="text-muted text-sm mt-1">Expertise: Research Policy & Governance</p>
              <p className="text-muted mt-3 leading-relaxed">
                Dr. Mwansa has over 25 years of experience in research leadership and policy development across Africa.
                She chairs board meetings, provides strategic leadership, represents the Institute, and ensures good governance.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-white rounded-xl border border-border">
            <h4 className="font-semibold mb-2">Responsibilities</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
              {["Chairs board meetings", "Provides strategic leadership", "Represents the Institute", "Ensures good governance"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="executive-director" title="Executive Director" subtitle="Responsible for daily operations.">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl border border-border p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-3xl font-bold shrink-0">
              ED
            </div>
            <div>
              <h3 className="text-xl font-semibold">Executive Director (CEO)</h3>
              <p className="text-muted mt-2 leading-relaxed">
                The Executive Director is responsible for implementing Board decisions, managing staff, overseeing
                programmes, building partnerships, and reporting to the Board. This role ensures the smooth daily
                operations of the Institute and drives its strategic initiatives forward.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-border">
            <h4 className="font-semibold mb-2">Responsibilities</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
              {["Implements Board decisions", "Manages staff", "Oversees programmes", "Builds partnerships", "Reports to the Board"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="advisory-council" variant="muted" title="Advisory Council" subtitle="A group of experts who advise the Institute.">
        <div className="max-w-3xl mx-auto">
          <p className="text-muted text-center mb-8 leading-relaxed">
            The Advisory Council consists of professors, scientists, government officials, industry experts,
            legal experts, and financial experts who provide strategic advice but do not manage the Institute.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {["Professors", "Scientists", "Government Officials", "Industry Experts", "Legal Experts", "Financial Experts"].map(
              (role) => (
                <div key={role} className="bg-white p-4 rounded-lg border border-border text-center">
                  <span className="text-sm font-medium">{role}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </Section>

      <Section id="mentor-network" title="Mentor Network" subtitle="Experienced professionals who guide researchers and graduates.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentorNetwork.map((mentor) => (
            <div key={mentor.name} className="bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mb-3">
                {mentor.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold">{mentor.name}</h3>
              <p className="text-sm font-medium text-accent">{mentor.role}</p>
              <p className="text-xs text-muted mt-1 mb-2">{mentor.expertise}</p>
              <p className="text-sm text-muted leading-relaxed">{mentor.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
