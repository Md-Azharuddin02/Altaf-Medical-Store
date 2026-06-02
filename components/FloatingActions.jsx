
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="
        fixed
        right-4
        bottom-20
        md:bottom-5
        z-[70]
        flex
        flex-col
        items-end
        gap-3
      "
    >
      <AnimatePresence>
        {show && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
              y: 10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              hidden
              md:grid
              h-11
              w-11
              place-items-center
              rounded-full
              glass
              shadow-soft
              transition
              hover:text-mint-500
            "
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={whatsappLink(
          'Hello! I have a question for Altaf Medical Store.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          relative
          grid
          h-14
          w-14
          place-items-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-lg
          transition-transform
          duration-200
          hover:scale-110
          active:scale-95
        "
      >
        <span
          aria-hidden="true"
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            animate-pulseRing
          "
        />

        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
