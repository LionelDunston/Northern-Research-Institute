import { Section } from "@/components/layout/Section"
import { boardMembers, mentorNetwork, managementTeam } from "@/lib/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Governance | Northern Research Institute",
  description: "Learn about NRI's Board of Directors, Executive Director, Management & Functional Team, Advisory Council, and Mentor Network.",
}

export default function GovernancePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Governance</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            The Institute's governance, leadership, advisory, and operational structure.
          </p>
        </div>
      </section>

      <Section id="board" title="Board of Directors" subtitle="Provides strategic oversight and ensures that the Institute operates responsibly towards its vision, mission, and long-term objectives.">
        {boardMembers.length > 0 ? (
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
        ) : (
          <div className="max-w-xl mx-auto bg-gray-50 rounded-xl border border-border p-8 text-center">
            <p className="text-muted">Board members will be appointed and announced here.</p>
          </div>
        )}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-border">
          <h3 className="font-semibold text-primary mb-3">Board Responsibilities</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
            {[
              "Approve institutional policies and strategic plans",
              "Oversee research, innovation, and national development priorities",
              "Approve budgets and major investments",
              "Ensure transparency, accountability, and ethical governance",
              "Monitor institutional performance and long-term impact",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="chairperson" variant="muted" title="Chairperson" subtitle="Leads the Board and provides strategic direction, effective oversight, and representation for the Institute.">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-border p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold shrink-0">
              CB
            </div>
            <div>
              <h3 className="text-xl font-semibold">Chairperson, Board of Directors</h3>
              <p className="text-accent font-medium">Board Leadership</p>
              <p className="text-muted mt-3 leading-relaxed">
                The Chairperson will be elected by the Board of Directors and announced once appointed.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-white rounded-xl border border-border">
            <h4 className="font-semibold mb-2">Responsibilities</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
              {["Chair Board meetings and discussions", "Provide strategic direction and oversight", "Support effective decision-making", "Represent the Institute at high-level engagements", "Ensure good governance and accountability"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="executive-director" title="Executive Director" subtitle="Leads the Institute's day-to-day operations and translates strategic decisions into programmes, partnerships, and measurable results.">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-xl border border-border p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white text-3xl font-bold shrink-0">
              ED
            </div>
            <div>
              <h3 className="text-xl font-semibold">Executive Director (CEO)</h3>
              <p className="text-muted mt-2 leading-relaxed">
                The Executive Director leads the implementation and day-to-day operations of NRI,
                overseeing research-to-impact programmes and institutional operations.
              </p>
            </div>
          </div>
          <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-border">
            <h4 className="font-semibold mb-2">Responsibilities</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted">
              {[
                "Implement Board-approved strategies and decisions",
                "Lead research-to-impact programmes and institutional operations",
                "Coordinate functional teams and programmes",
                "Develop strategic partnerships and opportunities",
                "Oversee performance, resources, and organisational growth",
                "Report institutional progress and impact to the Board",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="management" variant="muted" title="Management & Functional Team" subtitle="Carries out the Institute's core activities, supporting research, innovation, partnerships, investment, impact measurement, and organisational operations.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementTeam.map((member) => (
            <div key={member.title} className="bg-white rounded-xl border border-border p-6">
              <h3 className="font-semibold text-primary mb-2">{member.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="advisory-council" title="Advisory Council" subtitle="Provides independent expertise and strategic advice to strengthen the Institute's research, innovation, governance, and development priorities.">
        <div className="max-w-3xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted">
            {[
              "Advise on research, innovation, and development priorities",
              "Provide sector-specific expertise",
              "Review emerging opportunities and challenges",
              "Support strategic decision-making through expert advice",
              "Strengthen the Institute's credibility and external networks",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-border">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="mentor-network" variant="muted" title="Mentor Network" subtitle="Connects researchers with experienced professionals who provide practical guidance across research, careers, technology, business, entrepreneurship, and investment.">
        {mentorNetwork.length > 0 ? (
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
        ) : (
          <div className="max-w-xl mx-auto bg-white rounded-xl border border-border p-8 text-center">
            <p className="text-muted">Mentors will be announced once the Mentor Network is established.</p>
          </div>
        )}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-border">
          <h3 className="font-semibold mb-3">Mentor Categories</h3>
          <div className="flex flex-wrap gap-2">
            {["Research Mentors", "Startup Mentors", "Career Mentors", "Technology Mentors", "Business Mentors", "Investment Mentors"].map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium text-primary">{cat}</span>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
