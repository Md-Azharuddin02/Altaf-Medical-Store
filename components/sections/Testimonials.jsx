'use client';

import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  // Duplicate list for seamless marquee
  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section overflow-hidden">
      <div className="container-x">
        <SectionHeading
          eyebrow="Loved by the community"
          title="What our customers say"
          subtitle="Thousands of families trust us with their health. Here's why."
        />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <div
          className="flex w-max gap-5 px-5 animate-marquee"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {items.map((t, i) => (
            <article
              key={i}
              className="w-[300px] shrink-0 rounded-3xl surface p-6 shadow-card sm:w-[360px]"
            >
              <Quote className="h-8 w-8 text-mint-500/30" />
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-mint-400 to-mint-600 font-heading font-bold text-white">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--text-soft)' }}>{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
