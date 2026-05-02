'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../../blueprint/Navigation';

const vp = { once: true, margin: '-60px' } as const;

export default function PensionspferdePage() {
  const options = [
    { title: 'Standardbox', fläche: '3,5 × 3,5 m', desc: 'Einzelbox mit Auslauf, täglicher Koppelgang, Futter (Heu/Stroh), Einstreu.', preis: 'ab 350€/Monat' },
    { title: 'Offenstall', fläche: 'Gruppenhaltung', desc: 'Naturnahe Haltung in der Herde mit Weidezugang und Unterständen.', preis: 'ab 320€/Monat' },
    { title: 'Premiumbox', fläche: '4 × 4 m', desc: 'Großzügige Box mit Fenster, privatem Auslauf und Zusatzleistungen.', preis: 'ab 450€/Monat' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-24 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-1/2 right-0 w-80 h-80 bg-meadow-600 rounded-full blur-3xl translate-x-1/2" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto relative">
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Pensionspferde</nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Pensionspferde</h1>
          <p className="text-xl text-sand-200/70 max-w-2xl leading-relaxed">Ein Zuhause für Ihr Pferd – artgerechte Haltung auf großzügigen Weiden im Herzen Brandenburgs.</p>
        </motion.div>
      </header>
      <section className="py-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 leading-snug">Wo Pferde glücklich sind</h2>
          <div className="text-bark-500 space-y-4 leading-relaxed">
            <p>Unser Pensionsstall bietet verschiedene Haltungsformen – von der Einzelbox bis zum Offenstall. Alle Pferde genießen täglichen Auslauf auf unseren saftigen Wiesen.</p>
            <p>Rundum-Sorglos-Paket: Futter, Einstreu, regelmäßige Tierarzt- und Hufpflegetermine – wir kümmern uns um alles.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-5 bg-sand-100 rounded-xl border border-sand-200"><span className="block text-2xl font-display font-bold text-bark-800">20 ha</span><span className="text-sm text-bark-400 uppercase tracking-tight">Weidefläche</span></div>
            <div className="p-5 bg-sand-100 rounded-xl border border-sand-200"><span className="block text-2xl font-display font-bold text-bark-800">24/7</span><span className="text-sm text-bark-400 uppercase tracking-tight">Betreuung</span></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.15 }} className="aspect-[4/3] bg-sand-200 rounded-3xl overflow-hidden shadow-xl relative">
          <Image src="/images/pensionspferde-weide.jpg" alt="Pensionspferde Weide" fill className="object-cover" />
        </motion.div>
      </section>
      <section className="py-28 bg-sand-100/60 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 mb-14 text-center">Unsere Einstelloptionen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {options.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4, transition: { duration: 0.25 } }} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sand-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-display font-bold text-bark-900 mb-2">{o.title}</h3>
                <span className="text-meadow-700 text-sm font-bold">{o.fläche}</span>
                <p className="text-bark-500 mt-3 mb-6">{o.desc}</p>
                <span className="text-2xl font-display font-bold text-bark-700">{o.preis}</span>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full mt-6 py-3 bg-sand-100 text-bark-700 font-bold rounded-xl hover:bg-bark-800 hover:text-sand-100 transition-colors">Stellplatz anfragen</motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 bg-bark-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 left-1/2 w-80 h-80 bg-meadow-600 rounded-full blur-3xl translate-y-1/2" /></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Stellplatz gesucht?</h2>
          <p className="text-xl text-sand-200/60 mb-10">Vereinbaren Sie einen Besichtigungstermin – wir zeigen Ihnen gerne alles vor Ort.</p>
          <motion.a href="/#kontakt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block px-12 py-5 bg-sand-100 text-bark-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors">Besichtigung anfragen</motion.a>
        </div>
      </section>
    </main>
  );
}
