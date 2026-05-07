'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../blueprint/Navigation';

const vp = { once: true, margin: '-60px' } as const;

export default function BiohofPage() {
  const principles = [
    { title: 'Artgerechte Haltung', desc: 'Unsere Kühe und Pferde genießen ganzjährigen Auslauf auf saftigen Brandenburgischen Wiesen.' },
    { title: 'Kreislaufwirtschaft', desc: 'Wir nutzen hofeigenen Dünger und verzichten konsequent auf chemisch-synthetische Spritzmittel.' },
    { title: 'Transparenz', desc: 'Vom Euter ins Glas – bei uns können Sie jeden Schritt der Produktion nachvollziehen.' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />

      {/* Subpage Hero */}
      <header className="pt-32 pb-24 bg-sage-800 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sage-400 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center md:text-left relative"
        >
          <nav className="text-sage-400 text-sm mb-6 uppercase tracking-widest font-bold">
            <a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Biohof
          </nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Ökologische Landwirtschaft</h1>
          <p className="text-xl text-sand-200/70 max-w-2xl leading-relaxed">
            Nachhaltigkeit ist für uns kein Trend, sondern die Basis unseres Handelns.
            Seit Generationen bewirtschaften wir unseren Hof im Einklang mit der Natur.
          </p>
        </motion.div>
      </header>

      {/* Philosophy */}
      <section className="py-28 px-6 max-w-7xl mx-auto bg-paper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="space-y-4 border-l-4 border-sage-400 pl-6 py-2"
            >
              <h3 className="text-2xl font-display text-sage-900">{p.title}</h3>
              <p className="text-sage-600 leading-relaxed font-body text-lg">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Production */}
      <section className="py-28 bg-sand-50 px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 aspect-[4/3] bg-sand-200 overflow-hidden shadow-rustic relative group -rotate-1"
            style={{
              clipPath: 'polygon(0 1%, 98% 0, 100% 99%, 2% 100%)'
            }}
          >
            <Image 
              src="/images/biohof-milchproduktion.jpg" 
              alt="Milchproduktion am Biohof" 
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display text-sage-900">Vom Euter ins Glas</h2>
            <p className="text-lg text-sage-600 leading-relaxed font-body">
              Unsere moderne Milchproduktion verbindet technisches Know-how mit
              höchstem Respekt vor dem Tier. Wir produzieren Qualität, die man schmeckt.
            </p>
            <ul className="space-y-4 text-sage-800 font-bold font-body text-lg">
              <li className="flex items-center gap-3"><span className="text-sage-500">✓</span> DE-ÖKO-037 zertifiziert</li>
              <li className="flex items-center gap-3"><span className="text-sage-500">✓</span> Regionale Vermarktung</li>
              <li className="flex items-center gap-3"><span className="text-sage-500">✓</span> Ohne Gentechnik</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Kaminholz */}
      <section className="py-28 bg-paper px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <span className="inline-block text-xs font-bold text-sage-700 uppercase tracking-widest border border-sage-200 bg-sage-50 px-3 py-1.5 rounded">Aus unserem Wald</span>
            <h2 className="text-4xl md:text-5xl font-display text-sage-900 leading-tight">Kaminholz vom eigenen Hof</h2>
            <p className="text-lg text-sage-600 leading-relaxed font-body">
              Aus der nachhaltigen Bewirtschaftung unserer hofeigenen Waldflächen bieten wir trockenes, lagerraumgerechtes Kaminholz an. Buche, Eiche und Erle — gespalten und einsatzbereit für Ihren Kamin oder Ofen.
            </p>
            <ul className="space-y-3 text-sage-800 font-bold font-body text-lg">
              <li className="flex items-center gap-3"><span className="text-sage-500">✓</span> Natürlich getrocknet (Restfeuchte unter 20%)</li>
              <li className="flex items-center gap-3"><span className="text-sage-500">✓</span> Gespalten, ca. 25–33 cm Länge</li>
              <li className="flex items-center gap-3"><span className="text-sage-500">✓</span> Selbstabholung oder Lieferung möglich</li>
            </ul>
            <div className="mt-6 p-6 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm">
              <h4 className="font-bold text-sage-900 text-lg mb-3">Preise</h4>
              <div className="space-y-2 text-sage-700">
                <div className="flex justify-between"><span>Schüttraummeter (SRM) Buche/Eiche</span><span className="font-bold text-sage-900">ab 65 €</span></div>
                <div className="flex justify-between"><span>Schüttraummeter (SRM) Erle</span><span className="font-bold text-sage-900">ab 55 €</span></div>
                <div className="flex justify-between"><span>Anlieferung (regional)</span><span className="font-bold text-sage-900">auf Anfrage</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="aspect-[4/3] bg-sand-200 overflow-hidden shadow-rustic relative group rotate-1"
            style={{
              clipPath: 'polygon(1% 0, 100% 2%, 99% 100%, 0 98%)'
            }}
          >
            <Image
              src="/images/biohof-kaminholz.jpg"
              alt="Kaminholz vom Biohof Mühlenberg"
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-sage-700 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-sage-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display mb-6 italic leading-snug">
            Haben Sie Fragen zu unseren Produkten oder Zertifizierungen?
          </h2>
          <motion.a
            href="/#kontakt"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 bg-sand-100 text-sage-900 font-bold rounded-xl shadow-lg hover:bg-white transition-colors"
          >
            Kontaktieren Sie uns
          </motion.a>
        </div>
      </section>
    </main>
  );
}
