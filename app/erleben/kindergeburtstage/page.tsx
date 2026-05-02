'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../../blueprint/Navigation';

const vp = { once: true, margin: '-60px' } as const;

export default function KindergeburtstagePage() {
  const pakete = [
    { name: 'Pony-Paket', dauer: '2 Stunden', inklusive: ['Ponyreiten', 'Stallführung', 'Kuchentisch im Stübchen'], preis: 'ab 149€' },
    { name: 'Reiter-Paket', dauer: '3 Stunden', inklusive: ['Reitstunde', 'Pferdepflege', 'Schminken & Basteln', 'Wurst vom Grill'], preis: 'ab 229€' },
    { name: 'Abenteuer-Paket', dauer: '4 Stunden', inklusive: ['Reiten im Gelände', 'Schatzsuche', 'Lagerfeuer mit Stockbrot', 'Abschiedsgeschenk'], preis: 'ab 319€' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-24 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 left-0 w-96 h-96 bg-meadow-600 rounded-full blur-3xl translate-y-1/2" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto relative">
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Kindergeburtstage</nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Kindergeburtstage</h1>
          <p className="text-xl text-sand-200/70 max-w-2xl leading-relaxed">Ein unvergesslicher Geburtstag auf dem Hof – mit Pferden, Natur und glücklichen Kinderaugen.</p>
        </motion.div>
      </header>
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 mb-4">Feiern wie die kleinen Reiter</h2>
          <p className="text-bark-500 leading-relaxed">Ob Ponyreiten für die Kleinen oder ein großes Abenteuer für die Großen – wir gestalten den perfekten Geburtstag.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pakete.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4, transition: { duration: 0.25 } }} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sand-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-display font-bold text-bark-900 mb-2">{p.name}</h3>
              <span className="text-meadow-700 text-sm font-bold">{p.dauer}</span>
              <ul className="mt-4 space-y-2">
                {p.inklusive.map((item) => (<li key={item} className="flex items-center gap-2 text-bark-600 text-sm"><span className="text-meadow-600">✓</span>{item}</li>))}
              </ul>
              <span className="block text-2xl font-display font-bold text-bark-700 mt-6">{p.preis}</span>
              <span className="block text-xs text-bark-400 mb-4">für bis zu 10 Kinder</span>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 bg-bark-700 text-sand-100 font-bold rounded-xl hover:bg-bark-800 transition-colors">Geburtstag buchen</motion.button>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-28 bg-bark-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-80 h-80 bg-meadow-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" /></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Termin anfragen</h2>
          <p className="text-xl text-sand-200/60 mb-10">Schreiben Sie uns Ihr Wunschdatum – wir melden uns schnellstmöglich zurück.</p>
          <motion.a href="/#kontakt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block px-12 py-5 bg-sand-100 text-bark-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors">Termin anfragen</motion.a>
        </div>
      </section>
    </main>
  );
}
