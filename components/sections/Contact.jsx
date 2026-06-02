'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { site, telLink, whatsappLink } from '@/lib/site';
import { faqs } from '@/lib/data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!/^[\d+\-\s()]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number.';
    if (form.message.trim().length < 10) e.message = 'Message is too short.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // Static site: open WhatsApp / mail with the message (no backend).
    window.open(
      whatsappLink(
        `New enquiry:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
      ),
      '_blank'
    );
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get in touch"
          title="We'd love to hear from you"
          subtitle="Questions, prescriptions or feedback — reach out and we'll respond quickly."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} noValidate className="rounded-3xl surface p-6 shadow-card sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name}>
                  <input
                    className="form-input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input
                    className="form-input"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 …"
                  />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Email" error={errors.email}>
                  <input
                    className="form-input"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                  />
                </Field>
              </div>
              <div className="mt-4">
                <Field label="Message" error={errors.message}>
                  <textarea
                    rows={5}
                    className="form-input resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help?"
                  />
                </Field>
              </div>
              <button type="submit" className="btn btn-primary mt-5 w-full py-3 sm:w-auto sm:px-8">
                <Send className="h-4 w-4" /> Send Message
              </button>
              {sent && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mint-600 dark:text-mint-300">
                  <CheckCircle2 className="h-5 w-5" /> Thanks! Your message is on its way.
                </p>
              )}
            </form>
          </Reveal>

          {/* Quick contact + FAQ */}
          <div className="grid gap-4 lg:col-span-2">
            <Reveal>
              <div className="grid gap-3 rounded-3xl surface p-6 shadow-card">
                <a href={telLink} className="flex items-center gap-3 rounded-xl p-2 hover:text-mint-500">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-mint-500/15 text-mint-500">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs" style={{ color: 'var(--text-soft)' }}>Call us</span>
                    <span className="font-semibold">{site.phone}</span>
                  </span>
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl p-2 hover:text-mint-500"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-mint-500/15 text-mint-500">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs" style={{ color: 'var(--text-soft)' }}>WhatsApp</span>
                    <span className="font-semibold">Chat with us</span>
                  </span>
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-xl p-2 hover:text-mint-500">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-mint-500/15 text-mint-500">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs" style={{ color: 'var(--text-soft)' }}>Email</span>
                    <span className="font-semibold">{site.email}</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl surface p-6 shadow-card">
                <p className="mb-3 font-heading font-bold">Frequently asked</p>
                <div className="grid gap-2">
                  {faqs.map((f, i) => (
                    <div key={i} className="rounded-xl" style={{ background: 'var(--surface-2)' }}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium"
                        aria-expanded={openFaq === i}
                      >
                        {f.q}
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-mint-500 transition-transform ${
                            openFaq === i ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className="grid overflow-hidden transition-all duration-300"
                        style={{ gridTemplateRows: openFaq === i ? '1fr' : '0fr' }}
                      >
                        <div className="overflow-hidden">
                          <p className="px-4 pb-3 text-sm" style={{ color: 'var(--text-soft)' }}>
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}
