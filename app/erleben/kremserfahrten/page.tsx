'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../../blueprint/Navigation';

const vp = { once: true, margin: '-60px' } as const;

export default function KremserfahrtenPage() {
  const routen = [
    { name: 'Wald-Rundfahrt', dauer: '60 Min.', desc: 'Gemütliche Fahrt durch die Wälder rund um Kloster Lehnin.', preis: 'ab 89€' },
    { name: 'See-Tour', dauer: '90 Min.', desc: 'An den Seen der Region entlang – idyllisch und entspannend.', preis: 'ab 119€' },
    { name: 'Sonnenuntergangs-Fahrt', dauer: '120 Min.', desc: 'Romantische Kremserfahrt bei Dämmerung mit Picknick-Option.', preis: 'ab 159€' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-24 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/4 right-0 w-96 h-96 bg-meadow-600 rounded-full blur-3xl translate-x-1/2" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto relative">
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Kremserfahrten</nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Kremserfahrten</h1>
          <p className="text-xl text-sand-200/70 max-w-2xl leading-relaxed">Romantik und Naturerlebnis – entdecken Sie die brandenburgische Landschaft vom Pferdewagen aus.</p>
        </motion.div>
      </header>
      <section className="py-28 bg-paper px-6 relative border-t border-sand-200/50">
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 leading-snug">Die Landschaft vom Wagen aus erleben</h2>
            <div className="text-bark-600 space-y-4 leading-relaxed font-body text-lg">
              <p>Unsere Kremserfahrten führen Sie durch die wunderschöne Landschaft des Naturparks Nuthe-Nieplitz. Entspannt zurückgelehnt genießen Sie Ausblicke auf Wälder, Seen und Felder.</p>
              <p>Ob als Paar, mit der Familie oder für Firmenevents – die Fahrten sind ein besonderes Erlebnis für jeden Anlass. Von April bis Oktober verfügbar.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center"><span className="block text-4xl font-display font-bold text-bark-800 mb-1">Apr–Okt</span><span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Saison</span></div>
              <div className="p-6 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center"><span className="block text-4xl font-display font-bold text-bark-800 mb-1">bis 12</span><span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Personen</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.15 }} 
            className="aspect-[4/3] bg-sand-200 overflow-hidden shadow-rustic relative group -rotate-1"
            style={{
              clipPath: 'polygon(1% 0, 100% 2%, 99% 100%, 0 98%)'
            }}
          >
            <Image src="/images/kremserfahrten-landschaft.jpg" alt="Kremserfahrt Landschaft" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </motion.div>
        </div>
      </section>
      <section className="py-28 bg-sand-50 px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-16 text-center">Unsere Routen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {routen.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-paper p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group flex flex-col h-full">
                <div className="mb-6 pb-6 border-b border-sand-200">
                  <h3 className="text-2xl font-display font-bold text-bark-900 mb-3">{r.name}</h3>
                  <span className="bg-sand-200 text-bark-600 px-3 py-1 rounded text-xs uppercase tracking-wider font-bold">{r.dauer}</span>
                </div>
                <p className="text-bark-600 mb-8 leading-relaxed flex-grow text-lg">{r.desc}</p>
                <span className="text-3xl font-display font-bold text-bark-800 mb-2">{r.preis}</span>
                <span className="block text-xs text-bark-400 uppercase tracking-widest font-bold mb-6">pro Fahrt</span>
                <motion.a href="/#kontakt" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block text-center w-full py-4 bg-bark-800 text-sand-100 font-bold rounded-lg hover:bg-bark-900 transition-colors uppercase tracking-widest text-sm shadow-md">Fahrt buchen</motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 bg-sky-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-400 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" /></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Ihre Wunschfahrt</h2>
          <p className="text-xl text-sky-100/60 mb-10">Individuelle Routen und Gruppengrößen möglich – fragen Sie uns.</p>
          <motion.a href="/#kontakt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block px-12 py-5 bg-sand-100 text-sky-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors">Unverbindlich anfragen</motion.a>
        </div>
      </section>
    </main>
  );
}
