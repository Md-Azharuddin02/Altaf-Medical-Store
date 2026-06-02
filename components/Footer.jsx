
'use client';

import {
  Plus,
  MapPin,
  Phone,
  Clock,
  Heart,
  Navigation,
} from 'lucide-react';

import {
  site,
  navLinks,
  telLink,
  mapsLink,
  whatsappLink,
} from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative mt-10 border-t"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-soft)',
      }}
    >
      <div className="container-x py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-3"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-mint-400 to-mint-600 text-white">
                <Plus className="h-5 w-5" strokeWidth={3} />
              </span>

              <div>
                <p className="font-heading font-extrabold">
                  {site.name}
                </p>

                <p
                  className="text-xs"
                  style={{ color: 'var(--text-soft)' }}
                >
                  Open 24/7
                </p>
              </div>
            </a>

            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'var(--text-soft)' }}
            >
              Genuine medicines, emergency support,
              and trusted healthcare services in
              Mohiudinpur Pakri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold">
              Quick Links
            </h3>

            <ul
              className="mt-4 grid grid-cols-2 gap-2 text-sm"
              style={{ color: 'var(--text-soft)' }}
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition hover:text-mint-500"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold">
              Contact
            </h3>

            <div
              className="mt-4 space-y-3 text-sm"
              style={{ color: 'var(--text-soft)' }}
            >
              <a
                href={telLink}
                className="flex items-center gap-2 hover:text-mint-500"
              >
                <Phone className="h-4 w-4 text-mint-500" />
                {site.phone}
              </a>

              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-mint-500"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-mint-500" />
                <span className="line-clamp-2">
                  {site.address}
                </span>
              </a>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-mint-500" />
                {site.hours}
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div>
            <div className="rounded-2xl surface p-5 shadow-card">
              <h3 className="font-heading font-bold">
                Need Medicines?
              </h3>

              <p
                className="mt-2 text-sm"
                style={{ color: 'var(--text-soft)' }}
              >
                Call, message, or get directions
                instantly.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={telLink}
                  className="btn btn-primary  py-0.5 px-3 "
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a> 

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  WhatsApp
                </a>

                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <Navigation className="h-4 w-4" />
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div
          className="container-x flex flex-col gap-2 py-4 text-center text-sm md:flex-row md:items-center md:justify-between md:text-left"
          style={{ color: 'var(--text-soft)' }}
        >
          <p>
            © {year} {site.name}. All rights reserved.
          </p>

          <p className="inline-flex items-center justify-center gap-1.5">
            Made with
            <Heart className="h-4 w-4 fill-mint-500 text-mint-500" />
            for healthier communities
          </p>
        </div>
      </div>
    </footer>
  );
}
