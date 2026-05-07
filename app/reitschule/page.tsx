'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '../../blueprint/Navigation';
import FAQ from '../../blueprint/FAQ';

const vp = { once: true, margin: '-60px' } as const;

export default function ReitschulePage() {
  const courses = [
    { title: 'Longe-Unterricht', target: 'Anfänger (ab 6 J.)', focus: 'Sitzschulung & Vertrauen', duration: '20 Min.' },
    { title: 'Gruppenstunde', target: 'Fortgeschrittene', focus: 'Abteilung & Hufschlagfiguren', duration: '60 Min.' },
    { title: 'Einzelunterricht', target: 'Alle Level', focus: 'Individuelle Förderung', duration: '45 Min.' },
  ];

  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />

      {/* Subpage Hero */}
      <header className="pt-32 pb-24 bg-clay-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-clay-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto relative"
        >
          <nav className="text-clay-300/60 text-sm mb-6 uppercase tracking-widest font-bold">
            <a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Reitschule
          </nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Reitschule Mühlenberg</h1>
          <p className="text-xl text-clay-100/70 max-w-2xl leading-relaxed">
            Egal ob du zum ersten Mal im Sattel sitzt oder deine Dressur-Kür verfeinern möchtest –
            wir begleiten dich mit Fachkompetenz und Leidenschaft für das Pferd.
          </p>
        </motion.div>
      </header>

      {/* Narrative Section */}
      <section className="py-28 bg-paper px-6 relative border-t border-sand-200/50">
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 leading-tight mb-8">
              <span className="italic block mb-2 text-bark-600 font-caption text-3xl">"Das Glück der Erde</span>
              liegt auf dem Rücken der Pferde."
            </h2>
            <div className="text-bark-600 space-y-4 leading-relaxed font-body text-lg">
              <p>In unserer Reitschule legen wir besonderen Wert auf eine harmonische Ausbildung von Reiter und Pferd. Unser Unterricht findet in kleinen Gruppen statt, um eine individuelle Betreuung zu gewährleisten.</p>
              <p>Unsere Lehrpferde sind bestens ausgebildet und genießen ein artgerechtes Leben auf unseren Weiden – das merkt man ihrer Ausgeglichenheit im Unterricht an.</p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="p-6 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center">
                <span className="block text-4xl font-display font-bold text-bark-800 mb-1">12+</span>
                <span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Schulpferde</span>
              </div>
              <div className="p-6 bg-sand-50/80 rounded-lg border border-sand-200 shadow-sm text-center">
                <span className="block text-4xl font-display font-bold text-bark-800 mb-1">B/C</span>
                <span className="text-xs text-bark-500 uppercase tracking-widest font-bold">Trainer Level</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="aspect-[3/4] bg-sand-200 overflow-hidden shadow-rustic max-h-[600px] relative group rotate-1"
            style={{
              clipPath: 'polygon(1% 0, 100% 2%, 99% 100%, 0 98%)'
            }}
          >
            <Image 
              src="/images/reitschule-unterricht.jpg" 
              alt="Reitunterricht Impression" 
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-28 bg-sand-50 px-6 border-t border-sand-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-16 text-center">Unsere Kursangebote</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-paper p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group flex flex-col h-full"
              >
                <div className="mb-6 pb-6 border-b border-sand-200">
                  <h3 className="text-2xl font-display font-bold text-bark-900 mb-3">{course.title}</h3>
                  <div className="flex flex-wrap items-center text-bark-600 text-sm font-bold gap-2">
                    <span className="bg-sand-200 px-3 py-1 rounded text-xs uppercase tracking-wider">{course.duration}</span>
                    <span className="text-bark-400">•</span>
                    <span className="italic font-caption text-base">{course.target}</span>
                  </div>
                </div>
                <p className="text-bark-600 mb-8 leading-relaxed flex-grow text-lg">{course.focus}</p>
                <motion.a
                  href="/#kontakt"
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="block text-center w-full py-4 bg-wheat-700 text-sand-100 font-bold rounded-lg hover:bg-wheat-800 transition-colors uppercase tracking-widest text-sm shadow-md"
                >
                  Kursdetails anfragen
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-28 bg-paper px-6 border-t border-sand-200/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-14 text-center">Unsere Preise</h2>
          <div className="bg-sand-100/80 backdrop-blur-sm rounded-3xl border border-sand-200 overflow-hidden">
            {[
              { name: 'Gruppenstunde', price: '25€', unit: 'pro Std.', desc: 'Maximal 6 Reiter pro Gruppe.' },
              { name: 'Einzelstunde', price: '45€', unit: 'pro 45 Min.', desc: 'Intensivtraining für alle Level.' },
              { name: 'Longe (Anfänger)', price: '20€', unit: 'pro 20 Min.', desc: 'Sicheriger Einstieg in den Sport.' },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between hover:bg-sand-50/50 transition-colors ${i > 0 ? 'border-t border-sand-200' : ''}`}
              >
                <div className="mb-3 md:mb-0">
                  <h4 className="font-bold text-bark-900 text-lg">{item.name}</h4>
                  <p className="text-bark-500 text-sm mt-1">{item.desc}</p>
                </div>
                <div className="flex flex-col items-start md:items-end">
                  <span className="text-2xl font-display font-bold text-bark-700">{item.price}</span>
                  <span className="text-xs text-bark-400 uppercase tracking-widest">{item.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-bark-400 text-sm italic">Alle Preise inkl. MwSt. Individuelle Angebote auf Anfrage möglich.</p>
        </div>
      </section>

      {/* Reiterstübchen Banner */}
      <section className="py-16 md:py-28 px-6 bg-sand-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative w-full h-[500px] md:h-[600px] shadow-2xl group" style={{ clipPath: 'polygon(1% 0, 100% 1%, 99% 100%, 0 98%)' }}>
            <Image
              src="/images/gallery-hof-atmosphaere.jpg"
              alt="Das Reiterstübchen"
              fill
              className="object-cover brightness-75 transition-transform duration-[3s] group-hover:scale-105"
            />
            {/* Paper Card Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-8 right-8 md:bottom-16 md:right-16 bg-paper p-8 md:p-12 shadow-rustic max-w-md border border-sand-200/50 will-change-transform"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-bark-900 mb-4">Unser Reiterstübchen</h3>
              <p className="text-bark-600 leading-relaxed text-lg mb-6">
                Das Herz des Hofes. Nach dem Satteln oder während die Kinder reiten, laden wir Sie ein, bei einer Tasse Kaffee und frischem Kuchen zusammenzukommen. Ein Ort zum Aufwärmen, Austauschen und Durchatmen.
              </p>
              <div className="mt-2 pt-5 border-t border-sand-200/60">
                <span className="inline-block text-xs font-bold text-meadow-700 uppercase tracking-widest mb-3">Öffnungszeiten</span>
                <div className="space-y-1.5 text-bark-600 text-sm">
                  <div className="flex justify-between gap-6">
                    <span>Mo – Fr</span>
                    <span className="font-semibold text-bark-800">8:00 – 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Samstag</span>
                    <span className="font-semibold text-bark-800">9:00 – 16:00 Uhr</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Sonntag</span>
                    <span className="font-semibold text-bark-800">10:00 – 14:00 Uhr</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 max-w-3xl mx-auto bg-paper">
        <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-16 text-center">Häufig gestellte Fragen</h2>
        <FAQ />
      </section>

      {/* CTA */}
      <section className="py-32 bg-clay-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-clay-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Bereit für die erste Stunde?</h2>
          <p className="text-xl text-clay-100/60 mb-10">Sichere dir jetzt deinen Platz in unserem Online-Buchungssystem.</p>
          <motion.a
            href="/#kontakt"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="inline-block px-12 py-5 bg-sand-100 text-clay-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors"
          >
            Jetzt Reitstunde anfragen
          </motion.a>
        </div>
      </section>
    </main>
  );
}
