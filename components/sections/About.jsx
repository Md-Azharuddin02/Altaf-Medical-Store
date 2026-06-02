'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, Heart } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { site } from '@/lib/site';

const points = [
  { icon: ShieldCheck, title: 'Certified Pharmacists', desc: 'Licensed professionals you can trust with every prescription.' },
  { icon: Heart, title: 'Patient-First Care', desc: 'We treat every customer like family — with patience and empathy.' },
  { icon: Award, title: 'Genuine Products', desc: 'Only authentic, well-stored medicines from verified suppliers.' },
  { icon: Users, title: 'Community Rooted', desc: `Proudly serving the neighborhood since ${site.established}.` },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-mint-500 to-mint-700 p-1 shadow-soft">
              <div className="grid h-full place-items-center rounded-[1.4rem] bg-[var(--surface)] bg-dots">
                <div className="text-center">
                  <p className="font-heading text-6xl font-extrabold text-grad">
                    {site.established}
                  </p>
                  <p className="mt-2 font-semibold" style={{ color: 'var(--text-soft)' }}>
                    Caring since
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl glass px-5 py-4 shadow-card">
              <p className="font-heading text-2xl font-extrabold text-grad">24/7</p>
              <p className="text-xs" style={{ color: 'var(--text-soft)' }}>Never closed</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            center={false}
            eyebrow="About Us"
            title={`More than a pharmacy — your wellness partner`}
            subtitle={`${site.name} began with a simple mission: to make quality healthcare accessible to everyone, at any hour. Today we are the neighborhood's most trusted name for medicines, advice and care.`}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full rounded-2xl surface p-5 shadow-card transition-shadow hover:shadow-glow"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint-500/15 text-mint-500">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-heading font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm" style={{ color: 'var(--text-soft)' }}>
                    {p.desc}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
