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
      <section className="py-28 bg-paper px-6 relative border-t border-sand-200/50">
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5 }} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 leading-snug">Ein Tag in den Reiterferien</h2>
            <div className="text-bark-600 space-y-4 leading-relaxed font-body text-lg">
              <p>Morgens nach dem Frühstück geht es raus zu den Pferden – füttern, putzen, satteln. Danach Reitunterricht in kleinen Gruppen, angepasst an jedes Level.</p>
              <p>Nachmittags stehen Ausritte durch die Brandenburger Landschaft, Bastelaktionen oder Lagerfeuer auf dem Programm.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="p-4 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center"><span className="block text-2xl font-display font-bold text-bark-800 mb-1">5–7</span><span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Tage</span></div>
              <div className="p-4 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center"><span className="block text-2xl font-display font-bold text-bark-800 mb-1">6–16</span><span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Jahre</span></div>
              <div className="p-4 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center"><span className="block text-2xl font-display font-bold text-bark-800 mb-1">max 12</span><span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Kinder</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.5, delay: 0.15 }} 
            className="aspect-[4/3] bg-sand-200 overflow-hidden shadow-rustic relative group -rotate-1"
            style={{
              WebkitMaskImage: `url(/masks/edge-1.svg)`,
              WebkitMaskSize: '100% 100%',
              WebkitMaskRepeat: 'no-repeat',
              maskImage: `url(/masks/edge-1.svg)`,
              maskSize: '100% 100%',
              maskRepeat: 'no-repeat',
            }}
          >
            <Image src="/images/reiterferien-kinder.jpg" alt="Reiterferien am Biohof" fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" />
          </motion.div>
        </div>
      </section>
      <section className="py-28 bg-sand-50 px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-16 text-center">Unsere Ferienprogramme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {programme.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-paper p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group flex flex-col h-full">
                <div className="mb-6 pb-6 border-b border-sand-200">
                  <h3 className="text-2xl font-display font-bold text-bark-900 mb-3">{p.title}</h3>
                  <div className="flex flex-wrap items-center text-bark-600 text-sm font-bold gap-2">
                    <span className="bg-sand-200 px-3 py-1 rounded text-xs uppercase tracking-wider">{p.dauer}</span>
                    <span className="text-bark-400">•</span>
                    <span className="italic font-caption text-base">{p.alter}</span>
                  </div>
                </div>
                <p className="text-bark-600 mb-8 leading-relaxed flex-grow text-lg">{p.desc}</p>
                <span className="text-3xl font-display font-bold text-bark-800 mb-6">{p.preis}</span>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 bg-bark-800 text-sand-100 font-bold rounded-lg hover:bg-bark-900 transition-colors uppercase tracking-widest text-sm shadow-md">Platz sichern</motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 bg-bark-900 text-sand-100 text-center px-6 relative overflow-hidden">
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
