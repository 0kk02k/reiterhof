'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 200]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const contentY = useTransform(scrollY, [0, 500], [0, 120]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Biohof Mühlenberg Pferde"
          fill
          priority
          className="object-cover scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-bark-900/80 to-bark-900/30"
          style={{ opacity: overlayOpacity }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="text-white space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-bark-700/80 backdrop-blur-sm text-sm font-semibold tracking-wide uppercase border border-white/20 text-sand-100"
          >
            Ökologisch & Leidenschaftlich
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-display leading-tight"
          >
            Natur erleben auf dem <br />
            <span className="text-meadow-400">Biohof Mühlenberg</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-xl leading-relaxed"
          >
            Entdecken Sie unsere Reitschule, nachhaltige Landwirtschaft und die
            besondere Verbindung zwischen Mensch und Tier in Kloster Lehnin.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-meadow-600 hover:bg-meadow-500 text-white font-bold rounded-xl transition-colors shadow-xl shadow-meadow-600/25"
            >
              Reitstunden buchen
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-md border border-white/30 rounded-xl transition-colors"
            >
              Unser Hof & Team
            </motion.button>
          </motion.div>
        </div>

        {/* Info Cards */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-6 bg-white/85 backdrop-blur-xl rounded-2xl shadow-2xl space-y-3 border border-white/40 transform -rotate-2"
          >
            <h3 className="text-bark-900 font-bold text-xl">Reitschule</h3>
            <p className="text-bark-500">Qualifizierter Unterricht für alle Altersklassen.</p>
            <a href="/reitschule" className="text-meadow-700 font-semibold inline-flex items-center group">
              Mehr erfahren{' '}
              <motion.span className="inline-block ml-1" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="p-6 bg-white/85 backdrop-blur-xl rounded-2xl shadow-2xl space-y-3 border border-white/40 transform rotate-3 translate-y-12"
          >
            <h3 className="text-bark-900 font-bold text-xl">Bio-Hof</h3>
            <p className="text-bark-500">Nachhaltige Milchwirtschaft & ökologischer Landbau.</p>
            <a href="/biohof" className="text-meadow-700 font-semibold inline-flex items-center group">
              Unsere Philosophie{' '}
              <motion.span className="inline-block ml-1" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}>→</motion.span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
