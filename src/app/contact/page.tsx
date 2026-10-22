"use client"

import { useState } from "react"
import { PhotoStrip } from "@/components/sections/PhotoStrip"
import { PageHero } from "@/components/layout/PageHero"
import { Section } from "@/components/layout/Section"
import { contactEnquiries } from "@/lib/data"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setSending(false)
    if (res.ok) {
      setDone(true)
      setForm({ name: "", email: "", subject: "", message: "" })
    }
  }

  return (
    <>
      <PageHero title="Contact Us" lede="Connect with NRI for enquiries, collaboration, research, and support." image={{ src: "/editorial/stanley-road.jpg", alt: "Stanley Road in Jaffna city.", credit: "“Stanley Road” by Indi Samarajiva, CC BY 2.0, via Wikimedia Commons." }} action={{ label: "Send a message", href: "/contact#message" }} />

      <PhotoStrip
        title="Where we are"
        images={[
          {
            src: "/editorial/early-morning-in-jaffna.jpg",
            alt: "A cyclist on an early morning street in Jaffna.",
            caption: "Jaffna at first light.",
            credit: "“Early morning in Jaffna” by Rudolph.A.furtado, CC0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/public-library-jaffna.jpg",
            alt: "The public library in Jaffna.",
            caption: "The public library, at the centre of the town.",
            credit: "“Public Library, Jaffna” by Anton Croos, CC BY-SA 3.0, via Wikimedia Commons.",
          },
          {
            src: "/editorial/jaffna-beauty.jpg",
            alt: "A lagoon in the Jaffna peninsula.",
            caption: "The lagoons to the north of the town.",
            credit: "“Jaffna Beauty” by Vashni olivia, CC BY-SA 4.0, via Wikimedia Commons.",
          },
        ]}
      />




      <Section id="message">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[26px] font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Head Office</h3>
                  <p className="text-muted">Jaffna, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:northernresearchinstitute@gmail.com" className="text-muted hover:text-primary transition-colors">northernresearchinstitute@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Telephone</h3>
                  <a href="tel:+94713539992" className="text-muted hover:text-primary transition-colors">+94 71 353 9992</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand/10 flex items-center justify-center text-brand shrink-0"></div>
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <div className="flex gap-3 mt-1">
                    {["LinkedIn", "Twitter", "Facebook", "YouTube"].map((platform) => (
                      <span key={platform} className="text-[16px] text-muted hover:text-primary cursor-pointer">{platform}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold mb-3">Visitors Can Contact NRI Regarding</h3>
              <div className="flex flex-wrap gap-2">
                {contactEnquiries.map((topic) => (
                  <span key={topic} className="px-3 py-1.5 bg-field text-[16px] text-muted">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-[26px] font-bold mb-6">Send a Message</h2>
            {done ? (
              <div className="bg-green-50 border border-green-200 p-8 text-left">
                <div className="text-[44px] mb-2"></div>
                <h3 className="font-semibold text-green-800 mb-1">Message Sent!</h3>
                <p className="text-green-700 text-[16px]">Thank you for contacting NRI. We'll respond within 48 hours.</p>
                <button onClick={() => setDone(false)} className="mt-4 text-[16px] text-brand font-medium hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[16px] font-medium text-foreground mb-1">Full Name *</label>
                    <input type="text" id="name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-2.5 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[16px] font-medium text-foreground mb-1">Email *</label>
                    <input type="email" id="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-2.5 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[16px] font-medium text-foreground mb-1">Subject</label>
                  <select id="subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full px-4 py-2.5 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors bg-field">
                    <option value="">Select a topic...</option>
                    {contactEnquiries.map((topic) => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[16px] font-medium text-foreground mb-1">Message *</label>
                  <textarea id="message" rows={5} required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-2.5 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full px-6 py-3 bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50">
                  {sending ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>


    </>
  )
}
