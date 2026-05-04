'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavChild {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href?: string;
  children?: NavChild[];
}

const links: NavLink[] = [
  { name: 'Aktuelles', href: '/#news' },
  {
    name: 'Reitwelt',
    children: [
      { name: 'Reitschule', href: '/reitschule' },
      { name: 'Reiterferien', href: '/reitwelt/reiterferien' },
      { name: 'Pensionspferde', href: '/reitwelt/pensionspferde' },
      { name: 'Reittherapie', href: '/reitwelt/reittherapie' },
    ],
  },
  {
    name: 'Erleben',
    children: [
      { name: 'Kindergeburtstage', href: '/erleben/kindergeburtstage' },
      { name: 'Kremserfahrten', href: '/erleben/kremserfahrten' },
    ],
  },
  { name: 'Biohof', href: '/biohof' },
  { name: 'Kontakt', href: '/#kontakt' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-sand-200'
          : 'bg-transparent'
      }`}
      aria-label="Hauptnavigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-3" aria-label="Biohof Mühlenberg Startseite">
              <div className="w-10 h-10 bg-bark-700 rounded-lg flex items-center justify-center text-sand-100 font-display font-bold text-xl">
                M
              </div>
              <span className={`font-display font-bold text-xl tracking-tight hidden md:block transition-colors ${
                scrolled ? 'text-bark-900' : 'text-white'
              }`}>
                Biohof Mühlenberg
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6" ref={dropdownRef}>
            {links.map((link) =>
              link.children ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    className={`font-medium text-sm tracking-wide transition-colors hover:text-meadow-600 flex items-center gap-1 ${
                      scrolled ? 'text-bark-700' : 'text-white/90'
                    }`}
                  >
                    {link.name}
                    <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-sand-200 py-2 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-bark-700 hover:bg-sand-100 hover:text-meadow-700 transition-colors"
                          >
                            {child.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-sm tracking-wide transition-colors hover:text-meadow-600 ${
                    scrolled ? 'text-bark-700' : 'text-white/90'
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
            <motion.a
              href="/reitschule"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-bark-700 text-sand-100 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-bark-800 transition-colors"
            >
              Buchung
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${scrolled ? 'text-bark-900' : 'text-white'}`}
              aria-expanded={isOpen}
              aria-label="Menü öffnen/schließen"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-sand-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 text-right">
              {links.map((link, i) =>
                link.children ? (
                  <div key={link.name}>
                    <span className="block px-4 pt-3 pb-1 text-xs font-bold text-bark-400 uppercase tracking-widest">
                      {link.name}
                    </span>
                    {link.children.map((child) => (
                      <motion.a
                        key={child.name}
                        href={child.href}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="block px-4 py-2.5 text-bark-800 font-semibold hover:bg-sand-100 rounded-lg transition-colors"
                      >
                        {child.name}
                      </motion.a>
                    ))}
                  </div>
                ) : (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="block px-4 py-3 text-bark-800 font-semibold hover:bg-sand-100 rounded-lg transition-colors"
                  >
                    {link.name}
                  </motion.a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
