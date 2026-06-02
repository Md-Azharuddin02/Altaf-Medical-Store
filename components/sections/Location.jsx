'use client';

import { useState } from 'react';
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Loader2,
  ExternalLink,
} from 'lucide-react';

import SectionHeading from '@/components/SectionHeading';
import Reveal from '@/components/Reveal';
import { site, mapsLink, telLink } from '@/lib/site';

function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function Location() {
  const [state, setState] = useState('idle');
  const [distance, setDistance] = useState(null);
  const [error, setError] = useState('');

  const calc = () => {
    if (!('geolocation' in navigator)) {
      setError('Geolocation is not supported by your browser.');
      setState('error');
      return;
    }

    setState('loading');
    setError('');

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const d = haversine(
          pos.coords.latitude,
          pos.coords.longitude,
          site.geo.lat,
          site.geo.lng
        );

        setDistance(d);
        setState('done');
      },
      () => {
        setError(
          'Could not get your location. Please allow location access.'
        );
        setState('error');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
      }
    );
  };

  return (
    <section
      id="location"
      className="section"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find us anytime, day or night"
          subtitle="We're easy to reach and always open. Check how far you are right now."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Side */}
          <Reveal>
            <div className="grid h-full gap-4">
              <InfoCard icon={MapPin} title="Address">
                {site.address}
              </InfoCard>

              <InfoCard icon={Clock} title="Opening Hours">
                {site.hours}
              </InfoCard>

              <InfoCard icon={Phone} title="Phone">
                <a
                  href={telLink}
                  className="text-mint-500 hover:underline"
                >
                  {site.phone}
                </a>
              </InfoCard>

              {/* Distance Calculator */}
              <div className="rounded-2xl surface p-5 shadow-card">
                <p className="font-heading font-bold">
                  How far are you?
                </p>

                <p
                  className="mt-1 text-sm"
                  style={{ color: 'var(--text-soft)' }}
                >
                  Use your location to estimate the distance to our store.
                </p>

                <button
                  onClick={calc}
                  className="btn btn-primary mt-4 px-5 py-2.5 text-sm"
                >
                  {state === 'loading' ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Navigation className="h-4 w-4" />
                  )}

                  {state === 'loading'
                    ? 'Locating...'
                    : 'Calculate Distance'}
                </button>

                {state === 'done' && distance != null && (
                  <p className="mt-4 rounded-xl bg-mint-500/10 px-4 py-3 text-sm font-semibold text-mint-600 dark:text-mint-300">
                    📍 You are about{' '}
                    <span className="text-grad">
                      {distance.toFixed(1)} km
                    </span>{' '}
                    away — roughly{' '}
                    {Math.max(
                      1,
                      Math.round((distance / 30) * 60)
                    )}{' '}
                    min by road.
                  </p>
                )}

                {state === 'error' && (
                  <p className="mt-4 text-sm text-red-500">
                    {error}
                  </p>
                )}
              </div>
            </div>
          </Reveal>

          {/* Right Side - Map */}
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl surface shadow-card">
              <iframe
                title={`Map to ${site.name}`}
                src={`https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=18&output=embed`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />

              {/* Store Label */}
              <div className="absolute left-4 top-4 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur dark:bg-slate-900/95">
                <p className="font-semibold text-sm">
                  📍 {site.name}
                </p>

                <p className="text-xs opacity-70">
                  Mohiudinpur Pakri, Bihar
                </p>
              </div>

              {/* Open Maps Button */}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary absolute bottom-4 right-4 px-4 py-2 text-sm"
              >
                <ExternalLink className="h-4 w-4" />
                Open in Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl surface p-5 shadow-card">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint-500/15 text-mint-500">
        <Icon className="h-5 w-5" />
      </span>

      <div>
        <p className="font-heading font-bold">{title}</p>

        <p
          className="mt-0.5 text-sm"
          style={{ color: 'var(--text-soft)' }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}