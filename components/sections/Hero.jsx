'use client';

import { motion } from 'framer-motion';
import {
  Clock, Truck, ShieldCheck, Phone, MessageCircle, Plus, HeartPulse,
} from 'lucide-react';
import Particles from '@/components/Particles';
import { site, telLink, whatsappLink } from '@/lib/site';
import { stats } from '@/lib/data';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-dots opacity-60" aria-hidden="true" />
      <Particles className="-z-10 opacity-70" />
      <div
        className="absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-mint-400/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-mint-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x grid items-center gap-12 pb-16 lg:grid-cols-2 lg:pb-24">
        {/* Copy */}
        <div>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-mint-500/30 bg-mint-500/10 px-3 py-1.5 text-xs font-semibold text-mint-600 dark:text-mint-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
            </span>
            Open Now · {site.hours}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-5 font-heading text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Your trusted{' '}
            <span className="text-grad">neighborhood pharmacy</span>, open round
            the clock.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-lg leading-relaxed"
            style={{ color: 'var(--text-soft)' }}
          >
            Genuine medicines, expert compounding and lightning-fast home
            delivery — whenever you need us, day or night. Caring for{' '}
            {site.address.split(',').slice(-2).join(', ').trim()}.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={telLink} className="btn btn-primary px-6 py-3">
              <Phone className="h-5 w-5" /> Call {site.phone}
            </a>
            <a
              href={whatsappLink('Hi! I need help ordering medicines.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-6 py-3"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Order
            </a>
          </motion.div>

          {/* Trust chips */}
          <motion.ul
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium"
            style={{ color: 'var(--text-soft)' }}
          >
            <li className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-mint-500" /> 24/7 Availability
            </li>
            <li className="inline-flex items-center gap-2">
              <Truck className="h-4 w-4 text-mint-500" /> Free Home Delivery
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-mint-500" /> 100% Genuine
            </li>
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-square rounded-[2rem] glass p-8 shadow-soft">
            <div className="grid h-full place-items-center rounded-[1.5rem] bg-gradient-to-br from-mint-500 to-mint-700 text-white">
              <div className="text-center">
                <Plus className="mx-auto h-24 w-24" strokeWidth={2.5} />
                <p className="mt-4 font-heading text-2xl font-extrabold">
                  {site.name}
                </p>
                <p className="text-mint-100">Pharmacy &amp; Wellness</p>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-5 top-10 flex items-center gap-2 rounded-2xl glass px-3 py-2 shadow-card"
            >
              <HeartPulse className="h-5 w-5 text-mint-500" />
              <span className="text-sm font-semibold">Caring service</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-12 flex items-center gap-2 rounded-2xl glass px-3 py-2 shadow-card"
            >
              <Truck className="h-5 w-5 text-mint-500" />
              <span className="text-sm font-semibold">~30 min delivery</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="container-x">
        <motion.dl
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl surface shadow-soft sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--surface)] px-6 py-6 text-center">
              <dt className="font-heading text-2xl font-extrabold text-grad sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm" style={{ color: 'var(--text-soft)' }}>
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
