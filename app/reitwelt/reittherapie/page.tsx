'use client';

import React from 'react';
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
      <header className="pt-32 pb-24 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 right-1/4 w-80 h-80 bg-meadow-600 rounded-full blur-3xl translate-y-1/2" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto relative">
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Reittherapie</nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Reittherapie</h1>
          <p className="text-xl text-sand-200/70 max-w-2xl leading-relaxed">Die heilende Kraft der Pferde – individuell und einfühlsam begleitet von qualifizierten Therapeutinnen.</p>
        </motion.div>
      </header>
      <section className="py-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 leading-snug">Wenn Worte nicht reichen, beginnt das Pferd zu verstehen</h2>
          <div className="text-bark-500 space-y-4 leading-relaxed">
            <p>In der Reittherapie nutzen wir die natürliche Empathie der Pferde als therapeutischen Zugang. Unsere Tiere spüren emotionale Zustände und reagieren authentisch – ohne zu werten.</p>
            <p>Diese Arbeit hilft bei Ängsten, Traumata, ADHS, Autismus-Spektrum und sozialen Unsicherheiten.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-5 bg-sand-100 rounded-xl border border-sand-200"><span className="block text-2xl font-display font-bold text-bark-800">15+</span><span className="text-sm text-bark-400 uppercase tracking-tight">Jahre Erfahrung</span></div>
            <div className="p-5 bg-sand-100 rounded-xl border border-sand-200"><span className="block text-2xl font-display font-bold text-bark-800">Zertifiziert</span><span className="text-sm text-bark-400 uppercase tracking-tight">Therapie-Pferde</span></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.15 }} className="aspect-[4/3] bg-sand-200 rounded-3xl overflow-hidden shadow-xl">
          <img src="/images/reittherapie-session.jpg" alt="Reittherapie am Biohof" className="w-full h-full object-cover" />
        </motion.div>
      </section>
      <section className="py-28 bg-sand-100/60 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 mb-14 text-center">Unsere therapeutischen Angebote</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {angebote.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4, transition: { duration: 0.25 } }} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sand-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-display font-bold text-bark-900 mb-3">{a.title}</h3>
                <div className="flex items-center text-meadow-700 text-sm font-bold mb-4"><span>{a.dauer}</span><span className="mx-2">·</span><span>{a.ziel}</span></div>
                <p className="text-bark-500 mb-6">{a.desc}</p>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 bg-sand-100 text-bark-700 font-bold rounded-xl hover:bg-bark-800 hover:text-sand-100 transition-colors">Anfragen</motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 bg-bark-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 left-0 w-80 h-80 bg-meadow-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" /></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Kostenlose Erstberatung</h2>
          <p className="text-xl text-sand-200/60 mb-10">Lernen Sie uns und unsere Pferde unverbindlich kennen.</p>
          <motion.a href="/#kontakt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block px-12 py-5 bg-sand-100 text-bark-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors">Beratung anfragen</motion.a>
        </div>
      </section>
    </main>
  );
}
