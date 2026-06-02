'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ className = '' }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? resolvedTheme || theme : undefined;
  const isDark = current === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative grid h-10 w-10 place-items-center rounded-full surface transition-colors hover:text-mint-500 ${className}`}
    >
      {!mounted ? (
        <span className="h-5 w-5 rounded-full skeleton" />
      ) : (
        <span className="relative h-5 w-5">
          <Sun
            className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
              isDark ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
            }`}
          />
          <Moon
            className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
              isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
            }`}
          />
        </span>
      )}
    </button>
  );
}
