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
      <section className="py-28 bg-paper px-6 relative border-t border-sand-200/50">
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-6">Feiern wie die kleinen Reiter</h2>
            <p className="text-bark-600 leading-relaxed font-body text-lg italic font-caption">Ob Ponyreiten für die Kleinen oder ein großes Abenteuer für die Großen – wir gestalten den perfekten Geburtstag.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pakete.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-sand-50 p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group flex flex-col h-full">
                <div className="mb-6 pb-6 border-b border-sand-200">
                  <h3 className="text-2xl font-display font-bold text-bark-900 mb-3">{p.name}</h3>
                  <span className="bg-sand-200 text-bark-600 px-3 py-1 rounded text-xs uppercase tracking-wider font-bold">{p.dauer}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow font-body text-lg text-bark-600">
                  {p.inklusive.map((item) => (<li key={item} className="flex items-start gap-3"><span className="text-bark-400 mt-1">✓</span>{item}</li>))}
                </ul>
                <div className="mt-auto">
                  <span className="block text-3xl font-display font-bold text-bark-800 mb-2">{p.preis}</span>
                  <span className="block text-xs text-bark-400 uppercase tracking-widest font-bold mb-6">für bis zu 10 Kinder</span>
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-bark-800 text-sand-100 font-bold rounded-lg hover:bg-bark-900 transition-colors uppercase tracking-widest text-sm shadow-md">Geburtstag buchen</motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 bg-bark-900 text-sand-100 text-center px-6 relative overflow-hidden">
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
