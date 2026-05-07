'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../../blueprint/Navigation';

const vp = { once: true, margin: '-60px' } as const;

export default function ReittherapiePage() {
  const angebote = [
    { title: 'Einzeltherapie', dauer: '45 Min.', ziel: 'Kinder & Erwachsene', desc: 'Individuelle Förderung mit Pferd als Co-Therapeut.' },
    { title: 'Gruppentherapie', dauer: '60 Min.', ziel: 'Kleine Gruppen (3-4)', desc: 'Soziales Lernen und Vertrauensaufbau in der Gruppe.' },
    { title: 'Erstberatung', dauer: '30 Min.', ziel: 'Neukunden', desc: 'Kostenloses Gespräch zur Bedarfsermittlung.' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-24 bg-sky-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sky-400 rounded-full blur-3xl translate-y-1/2" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto relative">
          <nav className="text-sky-300/60 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Reittherapie</nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Reittherapie</h1>
          <p className="text-xl text-sky-100/70 max-w-2xl leading-relaxed">Die heilende Kraft der Pferde – individuell und einfühlsam begleitet von qualifizierten Therapeutinnen.</p>
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
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 leading-snug">
              <span className="italic block mb-2 text-bark-600 font-caption text-3xl">Wenn Worte nicht reichen,</span>
              beginnt das Pferd zu verstehen
            </h2>
            <div className="text-bark-600 space-y-4 leading-relaxed font-body text-lg">
              <p>In der Reittherapie nutzen wir die natürliche Empathie der Pferde als therapeutischen Zugang. Unsere Tiere spüren emotionale Zustände und reagieren authentisch – ohne zu werten.</p>
              <p>Diese Arbeit hilft bei Ängsten, Traumata, ADHS, Autismus-Spektrum und sozialen Unsicherheiten.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center"><span className="block text-4xl font-display font-bold text-bark-800 mb-1">15+</span><span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Jahre Erfahrung</span></div>
              <div className="p-6 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center"><span className="block text-4xl font-display font-bold text-bark-800 mb-1">✓</span><span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Zertifiziert</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.15 }} 
            className="aspect-[4/3] bg-sand-200 overflow-hidden shadow-rustic relative group rotate-1"
            style={{
              clipPath: 'polygon(0 1%, 98% 0, 100% 99%, 2% 100%)'
            }}
          >
            <Image src="/images/reittherapie-session.jpg" alt="Reittherapie am Biohof" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </motion.div>
        </div>
      </section>
      <section className="py-28 bg-sand-50 px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-16 text-center">Unsere therapeutischen Angebote</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {angebote.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-paper p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group flex flex-col h-full">
                <div className="mb-6 pb-6 border-b border-sand-200">
                  <h3 className="text-2xl font-display font-bold text-bark-900 mb-3">{a.title}</h3>
                  <div className="flex flex-wrap items-center text-bark-600 text-sm font-bold gap-2">
                    <span className="bg-sand-200 px-3 py-1 rounded text-xs uppercase tracking-wider">{a.dauer}</span>
                    <span className="text-bark-400">•</span>
                    <span className="italic font-caption text-base">{a.ziel}</span>
                  </div>
                </div>
                <p className="text-bark-600 mb-8 leading-relaxed flex-grow text-lg">{a.desc}</p>
                <motion.a href="/#kontakt" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block text-center w-full py-4 bg-wheat-700 text-sand-100 font-bold rounded-lg hover:bg-wheat-800 transition-colors uppercase tracking-widest text-sm shadow-md">Anfragen</motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 bg-sky-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" /></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Kostenlose Erstberatung</h2>
          <p className="text-xl text-sky-100/60 mb-10">Lernen Sie uns und unsere Pferde unverbindlich kennen.</p>
          <motion.a href="/#kontakt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block px-12 py-5 bg-sand-100 text-sky-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors">Beratung anfragen</motion.a>
        </div>
      </section>
    </main>
  );
}
