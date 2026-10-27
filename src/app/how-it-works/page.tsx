import { Section } from "@/components/layout/Section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How It Works | NRI",
  description: "NRI's approach to transforming research into practical solutions and development impact.",
}

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">How It Works</h1>
          <p className="mt-4 text-lg text-white/80 max-w-4xl mx-auto">
            NRI prioritizes evidence-based solutions to Northern Sri Lanka’s social and economic challenges, with a focus on graduate employability, social development, policy advancement, innovation, and sustainable livelihoods. It transforms research into practical opportunities through strategic partnerships, skills development, employment, entrepreneurship, and resource mobilization, guided by community needs, measurable impact, sustainability, ethics, and accountability.
          </p>
        </div>
      </section>

      <Section title="01. Community Engagement and Participatory Research" subtitle="Understanding Community Needs. Co-Creating Solutions.">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI connects research with the experiences, priorities, and needs of communities. Through community consultations, participatory research, public discussions, and collaboration with local organisations, we seek to understand social and economic challenges and identify opportunities for meaningful change.</p>
          <p>By engaging residents, youth, women, farmers, fishers, graduates, and other community groups, NRI aims to integrate local knowledge and lived experiences into research, policy development, and practical initiatives. This approach helps identify relevant solutions, strengthen collaboration among stakeholders, and connect research findings with community development, livelihood opportunities, and evidence-informed decision-making.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Effective development begins with understanding the people it seeks to serve. Community engagement helps ensure that research reflects real-world challenges, includes diverse perspectives, and responds to local priorities. By bringing communities, researchers, government institutions, development organisations, and businesses together, NRI seeks to transform shared knowledge into practical solutions that promote inclusive, responsive, and sustainable development.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Listen and Understand:</strong> Identify community priorities, experiences, and challenges.</li>
              <li><strong>Research Together:</strong> Combine research evidence with local knowledge and participation.</li>
              <li><strong>Develop Solutions:</strong> Explore practical responses to social, economic, and development challenges.</li>
              <li><strong>Build Partnerships:</strong> Connect communities with relevant institutions, expertise, and resources.</li>
              <li><strong>Learn and Improve:</strong> Evaluate outcomes and use community feedback to strengthen future initiatives.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="muted" title="02. Policy Research and Government Advisory" subtitle="Evidence for Better Decisions. Research for Better Public Services.">
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

      <Section title="03. Research-to-Opportunity and Innovation Development" subtitle="Turning Knowledge into Practical Opportunities">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI bridges the gap between research findings and real-world applications. By assessing completed dissertations, research findings, and community knowledge, we identify opportunities for policy development, community projects, social enterprises, commercial innovation, and employment creation.</p>
          <p>Through opportunity assessment, feasibility studies, and collaboration with relevant stakeholders, NRI aims to identify promising ideas, evaluate their practical potential, and connect viable initiatives with the expertise, partnerships, and resources needed to move forward.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Valuable research should not remain confined to academic publications. Translating knowledge into action can help address social challenges, strengthen local economies, create employment opportunities, and support sustainable development. Not every research finding needs to become a business; the most appropriate pathway may be a public policy, development project, social enterprise, or further research.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Identify Opportunities:</strong> Discover practical applications within research findings and community knowledge.</li>
              <li><strong>Assess Feasibility:</strong> Evaluate needs, demand, costs, potential benefits, and sustainability.</li>
              <li><strong>Develop Solutions:</strong> Transform promising findings into practical concepts, projects, or innovations.</li>
              <li><strong>Connect Resources:</strong> Build partnerships with universities, government institutions, businesses, and funders.</li>
              <li><strong>Support Implementation:</strong> Help suitable initiatives progress from research to testing, application, and impact.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="muted" title="04. Graduate Development and Employment Pathways" subtitle="Connecting Graduate Talent with Real-World Opportunities">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI aims to bridge the gap between academic knowledge and employment by connecting students and graduates with opportunities to apply their knowledge, develop practical skills, and contribute to social and economic development.</p>
          <p>Through research placements, internships, paid project assignments, consultancy opportunities, entrepreneurship support, and partnerships with employers and funding organisations, NRI seeks to create pathways from education to meaningful work. We also aim to strengthen graduates' capabilities in research, data analysis, proposal writing, communication, project management, and innovation.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Graduates possess valuable knowledge and potential, but opportunities to gain practical experience and access employment can be limited. Connecting academic learning with real-world challenges can help graduates develop relevant skills, strengthen their employability, explore entrepreneurship, and contribute to community development.</p>
            <p className="text-muted leading-relaxed mt-3">For NRI, graduate development is not simply a training activity; it is an essential part of translating knowledge into action and creating opportunities for graduates to participate in regional development.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Build Practical Skills:</strong> Strengthen research, digital, analytical, communication, and professional capabilities.</li>
              <li><strong>Create Work Opportunities:</strong> Connect graduates with internships, research placements, paid project roles, and consultancy assignments.</li>
              <li><strong>Support Entrepreneurship:</strong> Help graduates explore viable business ideas, social enterprises, and self-employment pathways.</li>
              <li><strong>Connect with Employers:</strong> Develop partnerships with government institutions, universities, NGOs, businesses, and development organisations.</li>
              <li><strong>Link Talent with Funding:</strong> Identify suitable grants, projects, and resources that can support graduate-led initiatives and employment creation.</li>
              <li><strong>Track Career Outcomes:</strong> Assess employment, income generation, skills development, and graduate participation in development initiatives.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="05. Funding Mobilisation and Project Development" subtitle="Connecting Ideas with Resources. Turning Proposals into Action.">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI aims to connect promising research, development ideas, and community initiatives with the funding and partnerships needed to bring them to life. We identify relevant funding opportunities, including research grants, development programmes, corporate social responsibility (CSR) initiatives, development contracts, and responsible private investment.</p>
          <p>Working with researchers, universities, government institutions, NGOs, businesses, and community organisations, NRI seeks to transform research findings and development priorities into well-structured project proposals, realistic budgets, implementation plans, and measurable outcomes. We also aim to facilitate partnerships between idea developers, funders, and implementing organisations to support initiatives with clear social, economic, and environmental value.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Valuable research and promising development ideas often remain unimplemented because of limited funding, insufficient project planning, or a lack of connections with suitable partners. Effective funding mobilisation helps bridge this gap by connecting evidence-based ideas with appropriate resources, technical expertise, and implementation support.</p>
            <p className="text-muted leading-relaxed mt-3">Through this work, NRI seeks to support sustainable development initiatives, encourage innovation, create employment opportunities, and increase the practical impact of research across Northern Sri Lanka and beyond.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Identify Funding Opportunities:</strong> Map relevant grants, research funds, CSR programmes, development contracts, and investment opportunities.</li>
              <li><strong>Develop Fundable Projects:</strong> Translate research findings and community needs into clear project concepts and proposals.</li>
              <li><strong>Prepare Project Plans:</strong> Develop budgets, work plans, implementation strategies, risk assessments, and measurable indicators.</li>
              <li><strong>Build Strategic Partnerships:</strong> Connect researchers and project developers with suitable funders, technical experts, and implementing institutions.</li>
              <li><strong>Support Implementation Readiness:</strong> Help assess feasibility, sustainability, expected benefits, and the resources required before a project begins.</li>
              <li><strong>Promote Accountability:</strong> Encourage transparent fund management, progress monitoring, financial reporting, and evaluation of results.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="muted" title="06. University and International Collaboration" subtitle="Connecting Local Knowledge with Global Expertise">
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

      <Section title="07. Knowledge Dissemination and Public Communication" subtitle="Making Knowledge Accessible. Connecting Evidence with Action.">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI aims to make research findings, data, and development knowledge accessible, understandable, and useful to a wide range of audiences. Through policy briefs, simplified research summaries, community reports, podcasts, webinars, public lectures, and development outlooks, we seek to communicate knowledge in formats that meet the needs of different audiences.</p>
          <p>By sharing evidence with communities, policymakers, researchers, universities, development organisations, businesses, and the wider public, NRI aims to bridge the gap between academic research and practical decision-making. We promote accessible communication that helps people understand important issues, explore potential solutions, and apply research findings to real-world challenges.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Research creates greater value when its findings reach the people and institutions that can use them. However, academic publications are not always easily accessible or understandable to the wider public. Effective knowledge dissemination helps close this gap by translating complex findings into clear, relevant, and actionable information.</p>
            <p className="text-muted leading-relaxed mt-3">Through public communication, NRI seeks to encourage informed discussion, support evidence-based decisions, strengthen public awareness, and connect research with policy development, community initiatives, innovation, and sustainable development.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Simplify Research:</strong> Translate academic findings into clear summaries and accessible information.</li>
              <li><strong>Inform Decision-Makers:</strong> Share policy briefs, evidence summaries, and recommendations with relevant institutions.</li>
              <li><strong>Engage the Public:</strong> Use public lectures, discussions, webinars, podcasts, and other accessible communication formats.</li>
              <li><strong>Share Community Knowledge:</strong> Communicate research findings and development information in languages and formats suitable for local communities.</li>
              <li><strong>Connect Knowledge with Practice:</strong> Present research findings in ways that help stakeholders identify practical applications and opportunities.</li>
              <li><strong>Track Reach and Use:</strong> Assess audience engagement, stakeholder feedback, and how shared knowledge informs decisions or initiatives.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="muted" title="08. Institutional Quality, Ethics and Accountability" subtitle="Building Trust. Upholding Integrity. Demonstrating Impact.">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI is committed to maintaining high standards of integrity, transparency, research quality, and institutional accountability across its activities. We aim to establish clear procedures for research ethics, responsible data management, transparent funding practices, conflict-of-interest management, and formal partnership agreements.</p>
          <p>Through quality assurance processes, responsible governance, and regular monitoring and reporting, NRI seeks to ensure that its research, partnerships, and development initiatives are conducted ethically, professionally, and in the public interest. An annual public impact report will provide a transparent account of the institute's activities, achievements, resource utilisation, challenges, and lessons learned.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Credibility is essential for an institute that works with communities, universities, government institutions, businesses, and international partners. Strong ethical standards protect research participants, safeguard sensitive information, promote responsible use of resources, and strengthen confidence in the institute's findings and recommendations.</p>
            <p className="text-muted leading-relaxed mt-3">By embedding quality, ethics, and accountability into its operations, NRI aims to build lasting trust, strengthen partnerships, and ensure that its growth is guided by responsible practices and meaningful social impact.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Commitments</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Research Ethics:</strong> Establish procedures for informed consent, participant protection, ethical review, and responsible research conduct.</li>
              <li><strong>Data Protection:</strong> Safeguard personal and sensitive information through appropriate data management, access controls, and secure handling practices.</li>
              <li><strong>Financial Transparency:</strong> Maintain clear financial records, transparent funding arrangements, and appropriate oversight of resources.</li>
              <li><strong>Conflict-of-Interest Management:</strong> Identify and manage situations that could compromise research independence, fairness, or institutional integrity.</li>
              <li><strong>Partnership Governance:</strong> Establish clear agreements defining responsibilities, expectations, data ownership, confidentiality, and accountability.</li>
              <li><strong>Quality Assurance:</strong> Apply appropriate standards to research design, evidence, analysis, project delivery, and reporting.</li>
              <li><strong>Public Accountability:</strong> Publish an annual impact report outlining activities, outcomes, funding and resource use, challenges, and future priorities.</li>
              <li><strong>Continuous Improvement:</strong> Use evaluations, stakeholder feedback, and lessons learned to strengthen institutional performance.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="09. Regional Development Observatory and Evidence Monitoring" subtitle="Understanding Regional Change. Informing Development Decisions.">
        <div className="max-w-4xl mx-auto space-y-4 text-muted leading-relaxed">
          <p>NRI seeks to strengthen understanding of Northern Sri Lanka through the systematic collection, analysis, and monitoring of regional data and development trends. By examining key areas such as employment, migration, livelihoods, poverty, education, gender, health, and local economic development, we aim to identify emerging challenges, changing needs, and opportunities for progress across the region.</p>
          <p>Through regional development indicators, data analysis, thematic reports, and periodic development outlooks, NRI aims to provide reliable evidence that helps communities, policymakers, researchers, government institutions, and development partners understand regional conditions and make informed decisions.</p>
        </div>
        <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-primary mb-3">Why It Matters</h3>
            <p className="text-muted leading-relaxed">Effective development planning requires a clear understanding of what is changing, where challenges are emerging, and which groups or areas may need greater attention. While research repositories preserve existing knowledge, a development observatory continuously examines available evidence to identify trends, monitor progress, and highlight gaps in knowledge.</p>
            <p className="text-muted leading-relaxed mt-3">By transforming regional data into accessible insights, NRI seeks to support evidence-informed policymaking, improve development planning, strengthen accountability, and identify opportunities for targeted interventions across Northern Sri Lanka.</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-3">Our Approach</h3>
            <ul className="space-y-2 text-muted">
              <li><strong>Monitor Regional Trends:</strong> Track key social, economic, demographic, and environmental developments using available and reliable data.</li>
              <li><strong>Develop Regional Indicators:</strong> Establish appropriate measures to understand development conditions and monitor changes over time.</li>
              <li><strong>Analyse Emerging Challenges:</strong> Identify patterns, disparities, and knowledge gaps that require further investigation or action.</li>
              <li><strong>Publish Development Reports:</strong> Produce regional profiles, thematic studies, periodic outlooks, and accessible evidence summaries.</li>
              <li><strong>Support Decision-Making:</strong> Provide relevant evidence to policymakers, researchers, development organisations, businesses, and community stakeholders.</li>
              <li><strong>Strengthen Data Use:</strong> Encourage responsible data sharing, transparent methodologies, and informed interpretation of research findings.</li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}
