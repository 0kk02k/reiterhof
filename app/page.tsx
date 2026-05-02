'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../blueprint/Navigation';
import Hero from '../blueprint/Hero';
import PriceTable from '../blueprint/PriceTable';
import ContactForm from '../blueprint/ContactForm';
import Team from '../blueprint/Team';
import Gallery from '../blueprint/Gallery';

const vp = { once: true, margin: '-60px' } as const;

export default function LandingPage() {
  const news = [
    { title: 'Frühlingsfest am Hof', date: '15. Mai 2026', excerpt: 'Feiern Sie mit uns den Einzug des Frühlings mit Ponyreiten und Bio-Spezialitäten.', img: '/images/news-fruehlingsfest.jpg' },
    { title: 'Neue Reitkurse verfügbar', date: '02. Mai 2026', excerpt: 'Ab sofort können neue Anfängerkurse für Kinder und Erwachsene gebucht werden.', img: '/images/news-reitkurse.jpg' },
    { title: 'Nachhaltige Ernteerfolge', date: '28. April 2026', excerpt: 'Dank neuer Bewässerungstechnik blicken wir auf eine gesunde erste Erntephase.', img: '/images/news-ernte.jpg' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://biohof-muehlenberg.de',
    name: 'Biohof zum Mühlenberg',
    description: 'Reitschule, Reittherapie, Pensionspferde und ökologische Landwirtschaft in Kloster Lehnin.',
    image: 'https://biohof-muehlenberg.de/images/opengraph-default.jpg',
    telephone: '+49 3382 700 321',
    email: 'info@biohof-muehlenberg.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zum Mühlenberg',
      addressLocality: 'Kloster Lehnin',
      addressRegion: 'Brandenburg',
      postalCode: '14797',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.38,
      longitude: 12.75,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '16:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '14:00' },
    ],
    priceRange: '€€',
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <Hero />

      {/* Trust & Identity */}
      <section className="py-28 px-6 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display text-bark-900 mb-6"
        >
          Tradition trifft ökologische Zukunft
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-bark-500 max-w-3xl mx-auto leading-relaxed"
        >
          Auf dem Biohof Mühlenberg leben wir Landwirtschaft mit Herz. Ob im Sattel,
          beim Entspannen in der Natur oder beim Genuss unserer Bio-Milch –
          wir laden Sie ein, Teil unserer Hofgemeinschaft zu werden.
        </motion.p>
      </section>

      <Gallery />

      {/* News */}
      <section id="news" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-display text-bark-900">Neues vom Hof</h2>
              <p className="text-bark-400 mt-2">Aktuelle Einblicke in unser Hof-Tagebuch</p>
            </div>
            <a href="#" className="text-meadow-700 font-bold hover:underline hidden md:block text-sm">Alle Beiträge lesen →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/2] bg-sand-200 rounded-2xl mb-5 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <span className="text-xs font-bold text-meadow-700 uppercase tracking-widest">{item.date}</span>
                <h3 className="text-xl font-display font-bold text-bark-900 mt-2 group-hover:text-meadow-700 transition-colors">{item.title}</h3>
                <p className="text-bark-500 mt-2 line-clamp-2">{item.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Team />

      {/* Pricing */}
      <section id="preise" className="py-28 max-w-7xl mx-auto px-6">
        <PriceTable />
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-28 bg-sand-100/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-6">Kontaktieren Sie uns</h2>
            <p className="text-lg text-bark-500 mb-10 leading-relaxed">
              Haben Sie Fragen zu unseren Reitstunden, den Pensionsplätzen oder
              unseren Bio-Produkten? Wir freuen uns auf Ihre Nachricht!
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-bark-500 text-lg">📍</div>
                <span className="text-bark-700">Zum Mühlenberg, 14797 Kloster Lehnin</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-bark-500 text-lg">📞</div>
                <span className="text-bark-700">+49 (0) 3382 700 321</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-bark-500 text-lg">✉️</div>
                <span className="text-bark-700">info@biohof-muehlenberg.de</span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-10 p-6 bg-white/80 rounded-2xl border border-sand-200">
              <h3 className="font-display font-bold text-bark-900 text-lg mb-4">Öffnungszeiten</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-bark-500">Montag – Freitag</span><span className="font-bold text-bark-800">8:00 – 18:00 Uhr</span></div>
                <div className="flex justify-between"><span className="text-bark-500">Samstag</span><span className="font-bold text-bark-800">9:00 – 16:00 Uhr</span></div>
                <div className="flex justify-between"><span className="text-bark-500">Sonntag</span><span className="font-bold text-bark-800">10:00 – 14:00 Uhr</span></div>
              </div>
              <p className="text-xs text-bark-400 mt-3">Reitstunden nach Vereinbarung auch außerhalb der Öffnungszeiten.</p>
            </div>
          </motion.div>
          <ContactForm />
        </div>

        {/* Google Maps */}
        <div className="max-w-7xl mx-auto px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-sand-200 h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.8!2d12.75!3d52.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzQ4LjAiTiAxMsKwNDUnMDAuMCJF!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Biohof Mühlenberg"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bark-900 text-sand-100 py-20 px-6 pb-28 md:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Biohof Mühlenberg</h3>
            <p className="text-sand-200/70 leading-relaxed">Zum Mühlenberg<br />14797 Kloster Lehnin<br />OT Trechwitz</p>
            <p className="text-sand-200/50 text-sm">Tel: +49 (0) 3382 700 321<br />info@biohof-muehlenberg.de</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-bark-400 text-sm">Reitwelt</h4>
            <nav className="flex flex-col space-y-2 text-sand-200/70">
              <a href="/reitschule" className="hover:text-sand-100 transition-colors">Reitschule</a>
              <a href="/reitwelt/reiterferien" className="hover:text-sand-100 transition-colors">Reiterferien</a>
              <a href="/reitwelt/pensionspferde" className="hover:text-sand-100 transition-colors">Pensionspferde</a>
              <a href="/reitwelt/reittherapie" className="hover:text-sand-100 transition-colors">Reittherapie</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-bark-400 text-sm">Erleben</h4>
            <nav className="flex flex-col space-y-2 text-sand-200/70">
              <a href="/erleben/kindergeburtstage" className="hover:text-sand-100 transition-colors">Kindergeburtstage</a>
              <a href="/erleben/kremserfahrten" className="hover:text-sand-100 transition-colors">Kremserfahrten</a>
              <a href="/biohof" className="hover:text-sand-100 transition-colors">Biohof</a>
              <a href="/#news" className="hover:text-sand-100 transition-colors">Aktuelles</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold uppercase tracking-widest text-bark-400 text-sm">Rechtliches</h4>
            <nav className="flex flex-col space-y-2 text-sand-200/70">
              <a href="/impressum" className="hover:text-sand-100 transition-colors">Impressum</a>
              <a href="/datenschutz" className="hover:text-sand-100 transition-colors">Datenschutz</a>
            </nav>
            <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-xl inline-block border border-white/10">
              <span className="text-xs text-sand-200/70">DE-ÖKO-037</span>
              <p className="font-bold mt-1 text-sm">Öko-Kontrollstelle</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span className="text-sand-200/40">© 2026 Biohof Mühlenberg — Alle Rechte vorbehalten</span>
          <nav className="flex items-center gap-6 text-sand-200/60">
            <a href="/impressum" className="hover:text-sand-100 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-sand-100 transition-colors">Datenschutz</a>
          </nav>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-t border-sand-200 px-4 py-3 safe-area-bottom">
        <a
          href="/reitschule"
          className="block w-full py-3.5 bg-bark-800 text-sand-100 font-bold rounded-xl text-center text-sm hover:bg-bark-700 transition-colors"
        >
          Jetzt Buchen →
        </a>
      </div>
    </main>
  );
}
