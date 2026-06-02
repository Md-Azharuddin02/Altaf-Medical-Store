'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { services } from '@/lib/data';

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title="Comprehensive pharmacy services"
          subtitle="Everything you need for your health and wellbeing — under one roof, available around the clock."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-3xl surface p-6 shadow-card transition-shadow hover:shadow-glow"
              >
                <div
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-mint-500/10 transition-transform duration-500 group-hover:scale-150"
                  aria-hidden="true"
                />
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-mint-400 to-mint-600 text-white shadow-glow">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="relative mt-5 font-heading text-lg font-bold">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                  {s.desc}
                </p>
                <ArrowUpRight className="relative mt-4 h-5 w-5 text-mint-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
