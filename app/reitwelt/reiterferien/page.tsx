'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../../blueprint/Navigation';

const vp = { once: true, margin: '-60px' } as const;

export default function ReiterferienPage() {
  const programme = [
    { title: 'Osterreiterferien', alter: '8–14 Jahre', dauer: '5 Tage', desc: 'Reiten, Pferdepflege, Ausritte und Lagerfeuer.', preis: 'ab 389€' },
    { title: 'Sommerreitwochen', alter: '10–16 Jahre', dauer: '7 Tage', desc: 'Intensiv-Reitwoche mit Reitbrevist-Prüfung.', preis: 'ab 549€' },
    { title: 'Herbst-Schnupperkurs', alter: '6–12 Jahre', dauer: '3 Tage', desc: 'Kurzurlaub für Reitanfänger zum Ausprobieren.', preis: 'ab 219€' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-24 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-1/3 w-96 h-96 bg-meadow-600 rounded-full blur-3xl -translate-y-1/2" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto relative">
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Reiterferien</nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Reiterferien</h1>
          <p className="text-xl text-sand-200/70 max-w-2xl leading-relaxed">Pferdeabenteuer in den Ferien – Reiten lernen, Natur erleben und unvergessliche Tage auf dem Hof verbringen.</p>
        </motion.div>
      </header>
      <section className="py-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 leading-snug">Ein Tag in den Reiterferien</h2>
          <div className="text-bark-500 space-y-4 leading-relaxed">
            <p>Morgens nach dem Frühstück geht es raus zu den Pferden – füttern, putzen, satteln. Danach Reitunterricht in kleinen Gruppen, angepasst an jedes Level.</p>
            <p>Nachmittags stehen Ausritte durch die Brandenburger Landschaft, Bastelaktionen oder Lagerfeuer auf dem Programm.</p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="p-4 bg-sand-100 rounded-xl border border-sand-200 text-center"><span className="block text-xl font-display font-bold text-bark-800">5–7</span><span className="text-xs text-bark-400 uppercase">Tage</span></div>
            <div className="p-4 bg-sand-100 rounded-xl border border-sand-200 text-center"><span className="block text-xl font-display font-bold text-bark-800">6–16</span><span className="text-xs text-bark-400 uppercase">Jahre</span></div>
            <div className="p-4 bg-sand-100 rounded-xl border border-sand-200 text-center"><span className="block text-xl font-display font-bold text-bark-800">max 12</span><span className="text-xs text-bark-400 uppercase">Kinder</span></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.15 }} className="aspect-[4/3] bg-sand-200 rounded-3xl overflow-hidden shadow-xl relative">
          <Image src="/images/reiterferien-kinder.jpg" alt="Reiterferien am Biohof" fill className="object-cover" />
        </motion.div>
      </section>
      <section className="py-28 bg-sand-100/60 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 mb-14 text-center">Unsere Ferienprogramme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programme.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4, transition: { duration: 0.25 } }} className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sand-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-display font-bold text-bark-900 mb-3">{p.title}</h3>
                <div className="flex items-center text-meadow-700 text-sm font-bold mb-4"><span>{p.dauer}</span><span className="mx-2">·</span><span>{p.alter}</span></div>
                <p className="text-bark-500 mb-4">{p.desc}</p>
                <span className="text-2xl font-display font-bold text-bark-700">{p.preis}</span>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full mt-6 py-3 bg-sand-100 text-bark-700 font-bold rounded-xl hover:bg-bark-800 hover:text-sand-100 transition-colors">Platz sichern</motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-28 bg-bark-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-80 h-80 bg-meadow-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" /></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Plätze sind begrenzt</h2>
          <p className="text-xl text-sand-200/60 mb-10">Sichern Sie sich rechtzeitig einen Platz für die nächsten Ferien.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="px-12 py-5 bg-sand-100 text-bark-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors">Jetzt anmelden</motion.button>
        </div>
      </section>
    </main>
  );
}
