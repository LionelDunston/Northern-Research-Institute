"use client"

import { useState } from "react"
import { Section } from "@/components/layout/Section"

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
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Get in touch with the Northern Research Institute.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">📍</div>
                <div>
                  <h3 className="font-semibold">Head Office</h3>
                  <p className="text-muted">Plot 123, Independence Avenue, Lusaka, Zambia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">📧</div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted">info@nri.org.zm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">📞</div>
                <div>
                  <h3 className="font-semibold">Telephone</h3>
                  <p className="text-muted">+260 211 234 567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">🌐</div>
                <div>
                  <h3 className="font-semibold">Social Media</h3>
                  <div className="flex gap-3 mt-1">
                    {["LinkedIn", "Twitter", "Facebook", "YouTube"].map((platform) => (
                      <span key={platform} className="text-sm text-muted hover:text-primary cursor-pointer">{platform}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            {done ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-3xl mb-2">✓</div>
                <h3 className="font-semibold text-green-800 mb-1">Message Sent!</h3>
                <p className="text-green-700 text-sm">Thank you for contacting NRI. We'll respond within 48 hours.</p>
                <button onClick={() => setDone(false)} className="mt-4 text-sm text-accent font-medium hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                    <input type="text" id="name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email *</label>
                    <input type="email" id="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                  <input type="text" id="subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" placeholder="How can we help?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea id="message" rows={5} required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" disabled={sending}
                  className="w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-colors disabled:opacity-50">
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}
