'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Check, Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Modal from '@/components/Modal';
import { compoundingServices } from '@/lib/data';
import { whatsappLink } from '@/lib/site';

export default function Compounding() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', details: '' });

  const submit = (e) => {
    e.preventDefault();
    // Static site: forward request to WhatsApp (no backend required).
    window.open(
      whatsappLink(
        `Compounding request:\nName: ${form.name}\nPhone: ${form.phone}\nDetails: ${form.details}`
      ),
      '_blank'
    );
    setDone(true);
    setTimeout(() => {
      setOpen(false);
      setDone(false);
      setForm({ name: '', phone: '', details: '' });
    }, 1800);
  };

  return (
    <section id="compounding" className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-mint-400 to-mint-600 text-white shadow-glow">
            <FlaskConical className="h-8 w-8" />
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold sm:text-4xl">
            Custom <span className="text-grad">compounding</span> made for you
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-soft)' }}>
            When standard medicines don&apos;t fit, our certified pharmacists
            prepare personalised formulations — precise doses, allergen-free
            options and kid-friendly flavors, all to your prescription.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {compoundingServices.map((s, i) => (
              <Reveal as="li" key={s} delay={i * 0.06} className="flex items-center gap-2.5 text-sm">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-mint-500 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {s}
              </Reveal>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="btn btn-primary mt-8 px-6 py-3"
          >
            <FlaskConical className="h-5 w-5" /> Request Compounding
          </button>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div whileHover={{ rotate: -1 }} className="rounded-3xl glass p-8 shadow-soft">
            <div className="grid gap-4">
              {[
                { step: '01', t: 'Share your prescription', d: 'Bring it in or send a photo on WhatsApp.' },
                { step: '02', t: 'We formulate precisely', d: 'Prepared in a clean, controlled environment.' },
                { step: '03', t: 'Quality checked & ready', d: 'Pick up or get it delivered to your door.' },
              ].map((x) => (
                <div key={x.step} className="flex gap-4 rounded-2xl surface p-4">
                  <span className="font-heading text-2xl font-extrabold text-mint-500">{x.step}</span>
                  <div>
                    <p className="font-semibold">{x.t}</p>
                    <p className="text-sm" style={{ color: 'var(--text-soft)' }}>{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Request Compounding Service">
        {done ? (
          <div className="py-8 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-mint-500" />
            <p className="mt-3 font-semibold">Request sent! We&apos;ll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-4">
            <Field label="Your Name" required>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="form-input"
                placeholder="John Doe"
              />
            </Field>
            <Field label="Phone Number" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="form-input"
                placeholder="+91 …"
              />
            </Field>
            <Field label="Prescription / Details" required>
              <textarea
                required
                rows={4}
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="form-input resize-none"
                placeholder="Describe the formulation you need…"
              />
            </Field>
            <button type="submit" className="btn btn-primary py-3">
              <Send className="h-4 w-4" /> Send Request
            </button>
            <p className="text-center text-xs" style={{ color: 'var(--text-soft)' }}>
              Submitting opens WhatsApp with your details pre-filled.
            </p>
          </form>
        )}
      </Modal>
    </section>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-mint-500">*</span>}
      </span>
      {children}
    </label>
  );
}
