'use client';

import { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import { categories, products } from '@/lib/data';
import { whatsappLink } from '@/lib/site';

function ProductSkeleton() {
  return (
    <div className="rounded-xl surface p-3 md:p-5">
      <div className="skeleton h-4 w-2/3" />
      <div className="skeleton mt-3 h-3 w-1/2" />
      <div className="skeleton mt-4 h-7 w-16" />
    </div>
  );
}

export default function Categories() {
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleFilter = (tag) => {
    if (tag === active) return;

    setActive(tag);
    setLoading(true);
    setShowAll(false);

    setTimeout(() => setLoading(false), 350);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        active === 'all' || p.cat === active;

      const matchQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.desc.toLowerCase().includes(query.toLowerCase());

      return matchCat && matchQuery;
    });
  }, [active, query]);

  const visibleProducts =
    isMobile && !showAll
      ? filtered.slice(0, 6)
      : filtered;

  return (
    <section id="categories" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Browse Medicines"
          title="Find what you need, fast"
          subtitle="Filter by category or search instantly. Tap any item to order via WhatsApp."
        />

        <Reveal className="mx-auto mb-7 max-w-md">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mint-500"
            />

            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medicines, e.g. Paracetamol..."
              aria-label="Search medicines"
              className="w-full rounded-full surface py-3 pl-12 pr-4 text-sm outline-none transition focus:border-mint-500"
              style={{ background: 'var(--surface)' }}
            />
          </div>
        </Reveal>

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2.5">
          <FilterChip
            active={active === 'all'}
            onClick={() => handleFilter('all')}
          >
            All
          </FilterChip>

          {categories.map((c) => (
            <FilterChip
              key={c.tag}
              active={active === c.tag}
              onClick={() => handleFilter(c.tag)}
            >
              <Icon name={c.icon} className="h-4 w-4" />
              {c.name}
            </FilterChip>
          ))}
        </Reveal>

        <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {visibleProducts.map((p) => (
                <motion.article
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="
                    group
                    flex
                    flex-col
                    rounded-xl
                    surface
                    p-3
                    md:p-5
                    shadow-card
                    transition-shadow
                    hover:shadow-glow
                  "
                >
                  <h3 className="font-heading font-bold">
                    {p.name}
                  </h3>

                  <p
                    className="mt-1 hidden md:block text-sm"
                    style={{ color: 'var(--text-soft)' }}
                  >
                    {p.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-3 md:pt-4">
                    <span className="font-heading text-lg font-extrabold text-grad">
                      {p.price}
                    </span>

                    <a
                      href={whatsappLink(
                        `Hi! I'd like to order: ${p.name} (${p.price}).`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order ${p.name} on WhatsApp`}
                      className="
                        grid
                        h-8
                        w-8
                        md:h-9
                        md:w-9
                        place-items-center
                        rounded-full
                        bg-mint-500/15
                        text-mint-500
                        transition
                        hover:bg-mint-500
                        hover:text-white
                      "
                    >
                      <MessageCircle className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          )}
        </div>

        {isMobile &&
          filtered.length > 6 &&
          !showAll && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="btn btn-primary px-6 py-3"
              >
                View All Medicines ({filtered.length})
              </button>
            </div>
          )}

        {isMobile &&
          filtered.length > 6 &&
          showAll && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(false)}
                className="btn btn-secondary px-6 py-3"
              >
                Show Less
              </button>
            </div>
          )}

        {!loading && filtered.length === 0 && (
          <p
            className="py-10 text-center"
            style={{ color: 'var(--text-soft)' }}
          >
            No medicines match your search. Try another
            keyword or{' '}
            <a
              href={whatsappLink(
                'Hi! I am looking for a specific medicine.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mint-500 underline"
            >
              ask us on WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? 'bg-gradient-to-r from-mint-400 to-mint-600 text-white shadow-glow'
          : 'surface hover:border-mint-500 hover:text-mint-500'
      }`}
    >
      {children}
    </button>
  );
}
