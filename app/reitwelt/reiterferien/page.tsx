'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../../blueprint/Navigation';

const vp = { once: true, margin: '-60px' } as const;

export default function ReiterferienPage() {
  const kinderProgramme = [
    { title: 'Osterreiterferien', alter: '8–14 Jahre', dauer: '5 Tage', desc: 'Reiten, Pferdepflege, Ausritte und Lagerfeuer.', preis: 'ab 389€' },
    { title: 'Sommerreitwochen', alter: '10–16 Jahre', dauer: '7 Tage', desc: 'Intensiv-Reitwoche mit Reitbrevist-Prüfung.', preis: 'ab 549€' },
    { title: 'Herbst-Schnupperkurs', alter: '6–12 Jahre', dauer: '3 Tage', desc: 'Kurzurlaub für Reitanfänger zum Ausprobieren.', preis: 'ab 219€' },
  ];

  const familienAngebote = [
    { title: 'Wochenende am See', zimmer: 'Familienzimmer', dauer: '2 Nächte', desc: 'Kurztrip mit geführten Ausritten für die Kinder und Entspannung für die Eltern.', preis: 'ab 240€' },
    { title: 'Landurlaub pur', zimmer: 'Ferienwohnung', dauer: '7 Nächte', desc: 'Die Seele baumeln lassen. Inklusive Hof-Führung und morgendlichem Eier-Sammeln.', preis: 'ab 750€' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-24 bg-wheat-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-1/3 w-96 h-96 bg-wheat-400 rounded-full blur-3xl -translate-y-1/2" /></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-7xl mx-auto relative">
          <nav className="text-wheat-300/60 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Urlaub & Reiterferien</nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Urlaub & Reiterferien</h1>
          <p className="text-xl text-wheat-100/70 max-w-2xl leading-relaxed">Ob Pferdeabenteuer für die Kids alleine oder entspannter Landurlaub für die ganze Familie – der Mühlenberg erwartet Sie.</p>
        </motion.div>
      </header>
      
      {/* Split View Teasers */}
      <section className="py-20 bg-paper px-6 relative border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 -mt-32 relative z-20">
          <a href="#kinder" className="block group">
            <div className="aspect-[4/3] bg-sand-200 relative overflow-hidden shadow-rustic" style={{ clipPath: 'polygon(1% 0, 100% 2%, 99% 100%, 0 98%)' }}>
              <Image src="/images/reiterferien-kinder.jpg" alt="Reiterferien für Kinder" fill className="object-cover transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="text-sm font-bold uppercase tracking-widest text-meadow-400">Programm</span>
                <h2 className="text-3xl font-display mt-2">Für Kinder & Jugendliche</h2>
              </div>
            </div>
          </a>
          <a href="#familien" className="block group">
            <div className="aspect-[4/3] bg-sand-200 relative overflow-hidden shadow-rustic" style={{ clipPath: 'polygon(0 1%, 98% 0, 100% 99%, 2% 100%)' }}>
              <Image src="/images/gallery-landschaft.jpg" alt="Urlaub auf dem Reiterhof für Familien" fill className="object-cover transition-transform duration-[3s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/80 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <span className="text-sm font-bold uppercase tracking-widest text-meadow-400">Unterkunft</span>
                <h2 className="text-3xl font-display mt-2">Urlaub auf dem Bauernhof</h2>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Kinder Reiterferien */}
      <section id="kinder" className="py-28 bg-sand-50 px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-4">Ferien ohne Eltern</h2>
            <p className="text-lg text-bark-600 max-w-2xl mx-auto">Ein Tag voller Pferde füttern, putzen, satteln und ausreiten. Abends Lagerfeuer. Unvergessliche Ferientage in kleinen, betreuten Gruppen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {kinderProgramme.map((p, i) => (
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
                <motion.a href="/#kontakt" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block text-center w-full py-4 bg-wheat-700 text-sand-100 font-bold rounded-lg hover:bg-wheat-800 transition-colors uppercase tracking-widest text-sm shadow-md">Platz sichern</motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Familien Urlaub */}
      <section id="familien" className="py-28 bg-paper px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-4">Familienurlaub am Hof</h2>
            <p className="text-lg text-bark-600 max-w-2xl mx-auto">Während die Kinder im Stall mithelfen oder Reitunterricht nehmen, entspannen die Eltern auf dem Hof, am Klostersee oder erkunden das Havelland.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {familienAngebote.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-sand-50 p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group flex flex-col h-full">
                <div className="mb-6 pb-6 border-b border-sand-200">
                  <h3 className="text-2xl font-display font-bold text-bark-900 mb-3">{p.title}</h3>
                  <div className="flex flex-wrap items-center text-bark-600 text-sm font-bold gap-2">
                    <span className="bg-sand-200 px-3 py-1 rounded text-xs uppercase tracking-wider">{p.dauer}</span>
                    <span className="text-bark-400">•</span>
                    <span className="italic font-caption text-base">{p.zimmer}</span>
                  </div>
                </div>
                <p className="text-bark-600 mb-8 leading-relaxed flex-grow text-lg">{p.desc}</p>
                <span className="text-3xl font-display font-bold text-bark-800 mb-6">{p.preis}</span>
                <motion.a href="/#kontakt" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="block text-center w-full py-4 bg-wheat-700 text-sand-100 font-bold rounded-lg hover:bg-wheat-800 transition-colors uppercase tracking-widest text-sm shadow-md">Anfragen</motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-wheat-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 right-0 w-80 h-80 bg-wheat-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" /></div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Plätze sind begrenzt</h2>
          <p className="text-xl text-wheat-100/60 mb-10">Sichern Sie sich rechtzeitig einen Platz für die nächsten Ferien oder den Familienurlaub.</p>
          <motion.a href="/#kontakt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block px-12 py-5 bg-sand-100 text-wheat-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors">Jetzt anfragen</motion.a>
        </div>
      </section>
    </main>
  );
}
