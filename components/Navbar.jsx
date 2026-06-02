'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Plus } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { navLinks, site, telLink } from '@/lib/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy for active link
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container-x">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled ? 'glass shadow-soft' : 'bg-transparent'
          }`}
          aria-label="Primary"
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-mint-400 to-mint-600 text-white shadow-glow">
              <Plus className="h-6 w-6" strokeWidth={3} />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-base font-extrabold sm:text-lg">
                {site.name}
              </span>
              <span className="block text-[11px] font-semibold text-mint-500">
                {site.tagline}
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    active === link.href
                      ? 'text-mint-500'
                      : 'hover:text-mint-500'
                  }`}
                  style={{ color: active === link.href ? undefined : 'var(--text-soft)' }}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{ background: 'var(--surface-2)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a href={telLink} className="btn btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">Call Now</span>
            </a>
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full surface lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="container-x lg:hidden"
            >
              <ul className="mt-2 grid gap-1 rounded-2xl glass p-3 shadow-soft">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 font-medium transition-colors ${
                        active === link.href
                          ? 'bg-mint-500/15 text-mint-500'
                          : 'hover:bg-mint-500/10'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <li className="mt-1">
                  <a
                    href={telLink}
                    onClick={() => setOpen(false)}
                    className="btn btn-primary w-full py-3"
                  >
                    <Phone className="h-4 w-4" /> Call {site.phone}
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
