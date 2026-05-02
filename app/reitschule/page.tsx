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
      <header className="pt-32 pb-24 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-meadow-600 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto relative"
        >
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold">
            <a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Reitschule
          </nav>
          <h1 className="text-5xl md:text-7xl font-display mb-6">Reitschule Mühlenberg</h1>
          <p className="text-xl text-sand-200/70 max-w-2xl leading-relaxed">
            Egal ob du zum ersten Mal im Sattel sitzt oder deine Dressur-Kür verfeinern möchtest –
            wir begleiten dich mit Fachkompetenz und Leidenschaft für das Pferd.
          </p>
        </motion.div>
      </header>

      {/* Narrative Section */}
      <section className="py-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 italic leading-snug">
            &ldquo;Das Glück der Erde liegt auf dem Rücken der Pferde.&rdquo;
          </h2>
          <div className="text-bark-500 space-y-4 leading-relaxed">
            <p>In unserer Reitschule legen wir besonderen Wert auf eine harmonische Ausbildung von Reiter und Pferd. Unser Unterricht findet in kleinen Gruppen statt, um eine individuelle Betreuung zu gewährleisten.</p>
            <p>Unsere Lehrpferde sind bestens ausgebildet und genießen ein artgerechtes Leben auf unseren Weiden – das merkt man ihrer Ausgeglichenheit im Unterricht an.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-5 bg-sand-100 rounded-xl border border-sand-200">
              <span className="block text-2xl font-display font-bold text-bark-800">12+</span>
              <span className="text-sm text-bark-400 uppercase tracking-tight">Schulpferde</span>
            </div>
            <div className="p-5 bg-sand-100 rounded-xl border border-sand-200">
              <span className="block text-2xl font-display font-bold text-bark-800">Trainer B/C</span>
              <span className="text-sm text-bark-400 uppercase tracking-tight">Qualifikation</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="aspect-[3/4] bg-sand-200 rounded-3xl overflow-hidden shadow-xl max-h-[520px] relative"
        >
          <Image 
            src="/images/reitschule-unterricht.jpg" 
            alt="Reitunterricht Impression" 
            fill
            className="object-cover" 
          />
        </motion.div>
      </section>

      {/* Courses Grid */}
      <section className="py-28 bg-sand-100/60 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-bark-900 mb-14 text-center">Unsere Kursangebote</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sand-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-display font-bold text-bark-900 mb-3">{course.title}</h3>
                <div className="flex items-center text-meadow-700 text-sm font-bold mb-4">
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <span>{course.target}</span>
                </div>
                <p className="text-bark-500 mb-6">{course.focus}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-sand-100 text-bark-700 font-bold rounded-xl hover:bg-bark-800 hover:text-sand-100 transition-colors"
                >
                  Kursdetails
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display text-bark-900 mb-14 text-center">Häufig gestellte Fragen</h2>
        <FAQ />
      </section>

      {/* CTA */}
      <section className="py-28 bg-bark-800 text-sand-100 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-meadow-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Bereit für die erste Stunde?</h2>
          <p className="text-xl text-sand-200/60 mb-10">Sichere dir jetzt deinen Platz in unserem Online-Buchungssystem.</p>
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="px-12 py-5 bg-sand-100 text-bark-900 font-bold rounded-xl shadow-xl hover:bg-white transition-colors"
          >
            Jetzt Reitstunde buchen
          </motion.button>
        </div>
      </section>
    </main>
  );
}
