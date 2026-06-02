import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={`mb-10 ${center ? 'mx-auto max-w-2xl text-center' : ''}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-soft)' }}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
