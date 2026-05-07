'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../blueprint/Navigation';
import Hero from '../blueprint/Hero';
import ContactForm from '../blueprint/ContactForm';
import Team from '../blueprint/Team';
import Gallery from '../blueprint/Gallery';

const vp = { once: true, margin: '-60px' } as const;

interface HomeContentProps {
  newsData?: any[];
  teamData?: any[];
  pricingData?: any[];
  galleryData?: any[];
  eventData?: any[];
}

export default function HomeContent({ newsData, teamData, pricingData, galleryData, eventData }: HomeContentProps) {
  const [selectedNews, setSelectedNews] = useState<any | null>(null);
  const [showAllEvents, setShowAllEvents] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedNews) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedNews]);

  const news = newsData && newsData.length > 0 ? newsData : [
    { title: 'Frühlingsfest am Hof', date: '15. Mai 2026', excerpt: 'Feiern Sie mit uns den Einzug des Frühlings mit Ponyreiten und Bio-Spezialitäten.', img: '/images/news-fruehlingsfest.jpg' },
    { title: 'Neue Reitkurse verfügbar', date: '02. Mai 2026', excerpt: 'Ab sofort können neue Anfängerkurse für Kinder und Erwachsene gebucht werden.', img: '/images/news-reitkurse.jpg' },
    { title: 'Nachhaltige Ernteerfolge', date: '28. April 2026', excerpt: 'Dank neuer Bewässerungstechnik blicken wir auf eine gesunde erste Erntephase.', img: '/images/news-ernte.jpg' },
  ];

  const events = eventData && eventData.length > 0 ? eventData : [
    { title: 'Osterferien-Reitwoche', date: '2026-04-07', description: 'Eine ganze Woche Pferde, Spaß und Freundschaft für Kinder von 8-14 Jahren. Unterricht, Theorie und Waldritte.', link: '/reitschule' },
    { title: 'Hofmarkt & Frühlingsfest', date: '2026-05-16', description: 'Regionale Bio-Produkte, Hofcafé, Ponyreiten und Führungen über den Hof. 10-18 Uhr.', link: '/#kontakt' },
    { title: 'Reittherapie-Infotag', date: '2026-06-21', description: 'Kostenloses Schnupperangebot: Erleben Sie die heilende Wirkung des Umgangs mit Pferden.', link: '/reitwelt/reittherapie' },
    { title: 'Hoffest zum Erntedank', date: '2026-10-04', description: 'Gemeinsames Kürbisschnitzen, Ponyreiten und regionale Speisen aus unserem eigenen Hofladen.', link: '/#kontakt' },
    { title: 'Weihnachtsreiten', date: '2026-12-13', description: 'Die Reitschüler präsentieren kleine Quadrillen. Besuch vom Weihnachtsmann inklusive!', link: '/reitschule' },
  ];

  const formatEventDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', options).toUpperCase();
  };

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

      <Gallery images={galleryData && galleryData.length > 0 ? galleryData : undefined} />

      {/* News */}
      <section id="news" className="py-28 bg-paper relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-display text-bark-900">Neues vom Hof</h2>
              <p className="text-bark-500 mt-2 text-lg italic font-caption">Aktuelle Einträge aus unserem Hof-Tagebuch</p>
            </div>
            <a href="#news" className="text-bark-800 font-bold border-b border-bark-400 hover:border-bark-800 pb-1 transition-colors text-sm uppercase tracking-widest">Alle Beiträge lesen</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {news.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer flex flex-col"
                onClick={() => setSelectedNews(item)}
              >
                <div 
                  className="aspect-[3/2] bg-sand-200 mb-6 overflow-hidden relative shadow-rustic transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                  style={{
                    clipPath: ['polygon(1% 0, 100% 2%, 99% 100%, 0 98%)', 'polygon(0 1%, 98% 0, 100% 99%, 2% 100%)', 'polygon(2% 2%, 100% 0, 98% 98%, 0 100%)'][i % 3]
                  }}
                >
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
                  />
                </div>
                <div className="px-2">
                  <span className="text-xs font-bold text-meadow-700 uppercase tracking-widest">{item.date}</span>
                  <h3 className="text-2xl font-display font-bold text-bark-900 mt-3 group-hover:text-bark-600 transition-colors leading-snug">{item.title}</h3>
                  <p className="text-bark-600 mt-3 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Termine — kommende Veranstaltungen */}
      {events && events.length > 0 && (() => {
        const visibleEvents = events.slice(0, 3);
        const hiddenEvents = events.slice(3);
        const EventCard = ({ evt, index }: { evt: any; index: number }) => {
          const linkHref = evt.link || '/#kontakt';
          return (
            <motion.a
              href={linkHref}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="block bg-paper p-6 md:p-8 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <span className="text-sm font-bold text-meadow-700 uppercase tracking-widest whitespace-nowrap border border-meadow-200 bg-meadow-50 px-3 py-1.5 rounded self-start">
                  {formatEventDate(evt.date)}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl md:text-2xl font-display font-bold text-bark-900 group-hover:text-bark-700 transition-colors leading-snug mb-2">
                    {evt.title}
                  </h3>
                  {evt.description && (
                    <p className="text-bark-600 leading-relaxed">{evt.description}</p>
                  )}
                </div>
              </div>
            </motion.a>
          );
        };

        return (
          <section id="events" className="py-28 bg-sand-50 px-6 border-t border-sand-200/50 relative">
            <div
              className="absolute inset-0 z-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
              }}
            />
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="text-center mb-14">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-display text-bark-900 mb-4"
                >
                  Kommende Termine
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg text-bark-500 italic font-caption"
                >
                  Unsere Hof-Agenda — Veranstaltungen, Feste und besondere Anlässe
                </motion.p>
              </div>

              {/* Top 3 events — always visible */}
              <div className="space-y-4">
                {visibleEvents.map((evt: any, i: number) => (
                  <EventCard key={evt._id || evt.title || i} evt={evt} index={i} />
                ))}
              </div>

              {/* Expandable: remaining events */}
              {hiddenEvents.length > 0 && (
                <>
                  <AnimatePresence>
                    {showAllEvents && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="max-h-[24rem] overflow-y-auto mt-4 pr-2 space-y-4 scrollbar-thin scrollbar-thumb-sand-300 scrollbar-track-transparent">
                          {hiddenEvents.map((evt: any, i: number) => (
                            <EventCard key={evt._id || evt.title || i} evt={evt} index={i} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setShowAllEvents(prev => !prev)}
                      className="inline-flex items-center gap-2 px-8 py-3 bg-[#bf9e32] text-sand-100 font-bold rounded hover:bg-[#aa8c2c] active:bg-[#947a27] transition-colors text-sm uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-[#bf9e32]/40 focus:ring-offset-2 focus:ring-offset-sand-50"
                      aria-expanded={showAllEvents}
                      aria-controls="events-hidden"
                    >
                      {showAllEvents ? 'Weniger anzeigen' : 'Alle Termine'}
                      <motion.span
                        animate={{ rotate: showAllEvents ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block"
                        aria-hidden="true"
                      >
                        ↓
                      </motion.span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </section>
        );
      })()}

      <Team members={teamData && teamData.length > 0 ? teamData : undefined} />

      {/* Leistungen */}
      <section id="preise" className="py-28 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display text-bark-900 mb-6 text-center"
        >
          Unsere Leistungen
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-bark-500 text-center mb-16 max-w-2xl mx-auto italic font-caption"
        >
          Von der Reitstunde bis zur Pferdepension — entdecken Sie, was unser Hof bietet.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href="/reitschule"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
            className="group block bg-paper p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all"
          >
            <h3 className="text-2xl font-display font-bold text-bark-900 group-hover:text-bark-700 transition-colors mb-3">Reitschule</h3>
            <p className="text-bark-600 leading-relaxed mb-6">
              Gruppen- und Einzelstunden, Longenunterricht für Anfänger und Fortgeschrittene. Kleine Gruppen, erfahrene Lehrpferde.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-bark-800 font-display font-bold">ab 20€</span>
              <span className="text-bark-400 text-sm">/ Einheit</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-bark-800 uppercase tracking-widest border-b border-bark-300 group-hover:border-bark-800 pb-1 transition-colors">
              Alle Details ansehen <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.a>

          <motion.a
            href="/reitwelt/pensionspferde"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group block bg-paper p-10 rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all"
          >
            <h3 className="text-2xl font-display font-bold text-bark-900 group-hover:text-bark-700 transition-colors mb-3">Pensionspferde</h3>
            <p className="text-bark-600 leading-relaxed mb-6">
              Standardbox, Offenstall oder Premium — artgerechte Haltung mit täglichem Koppelgang auf 20 ha Weide.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-bark-800 font-display font-bold">ab 320€</span>
              <span className="text-bark-400 text-sm">/ Monat</span>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-bark-800 uppercase tracking-widest border-b border-bark-300 group-hover:border-bark-800 pb-1 transition-colors">
              Alle Details ansehen <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </motion.a>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-28 bg-paper relative border-t border-sand-200/50">
        {/* Subtle Linen Texture Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-10 mix-blend-multiply pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-6">Kontaktieren Sie uns</h2>
            <p className="text-lg text-bark-600 mb-10 font-caption italic leading-relaxed">
              Haben Sie Fragen zu unseren Reitstunden, den Pensionsplätzen oder
              unseren Bio-Produkten? Wir freuen uns auf Ihre Nachricht!
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-bark-600 text-xl border-2 border-sand-100 shadow-sm">📍</div>
                <span className="text-bark-800 font-medium">Zum Mühlenberg, 14797 Kloster Lehnin</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-bark-600 text-xl border-2 border-sand-100 shadow-sm">📞</div>
                <span className="text-bark-800 font-medium">+49 (0) 3382 700 321</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-bark-600 text-xl border-2 border-sand-100 shadow-sm">✉️</div>
                <span className="text-bark-800 font-medium">info@biohof-muehlenberg.de</span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-12 p-8 bg-sand-50/80 rounded-xl border border-sand-200 shadow-sm">
              <h3 className="font-display font-bold text-bark-900 text-xl mb-5 border-b border-sand-200 pb-2">Öffnungszeiten</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-bark-600">Montag – Freitag</span><span className="font-bold text-bark-900">8:00 – 18:00 Uhr</span></div>
                <div className="flex justify-between"><span className="text-bark-600">Samstag</span><span className="font-bold text-bark-900">9:00 – 16:00 Uhr</span></div>
                <div className="flex justify-between"><span className="text-bark-600">Sonntag</span><span className="font-bold text-bark-900">10:00 – 14:00 Uhr</span></div>
              </div>
              <p className="text-xs text-bark-400 mt-5 italic">Reitstunden nach Vereinbarung auch außerhalb der Öffnungszeiten möglich.</p>
            </div>
          </motion.div>
          <ContactForm />
        </div>

        {/* Google Maps */}
        <div className="max-w-7xl mx-auto px-6 mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-rustic border border-sand-200 h-80"
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

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNews(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bark-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-paper w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative"
            >
              {/* Subtle Linen Texture inside Modal */}
              <div 
                className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply pointer-events-none"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                }}
              />
              
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image 
                  src={selectedNews.img} 
                  alt={selectedNews.title} 
                  fill
                  className="object-cover" 
                />
                <button 
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 bg-bark-900/50 hover:bg-bark-900 text-white w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="p-8 md:p-12 relative z-10">
                <span className="text-sm font-bold text-meadow-700 uppercase tracking-widest">{selectedNews.date}</span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-bark-900 mt-4 mb-6 leading-tight">
                  {selectedNews.title}
                </h3>
                
                <div className="prose prose-lg prose-stone max-w-none text-bark-600">
                  {/* If we have full body content from CMS, render it here. For now, use excerpt as placeholder if body is missing */}
                  <p className="whitespace-pre-wrap leading-relaxed">
                    {selectedNews.body || selectedNews.excerpt}
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-sand-200 text-center">
                   <button 
                    onClick={() => setSelectedNews(null)}
                    className="inline-block px-8 py-3 bg-bark-800 text-sand-100 font-bold rounded hover:bg-bark-900 transition-colors text-sm uppercase tracking-widest"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
