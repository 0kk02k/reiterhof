'use client';

import React from 'react';
import Navigation from '../../blueprint/Navigation';

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-16 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-1/4 w-80 h-80 bg-meadow-600 rounded-full blur-3xl -translate-y-1/2" /></div>
        <div className="max-w-3xl mx-auto relative">
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Impressum</nav>
          <h1 className="text-5xl md:text-6xl font-display mb-4">Impressum</h1>
          <p className="text-sand-200/60 text-lg">Angaben gemäß § 5 TMG</p>
        </div>
      </header>
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
            <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3"><span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">1</span>Betreiber</h2>
            <div className="space-y-1 text-bark-700 leading-relaxed">
              <p className="font-bold text-bark-900">Biohof zum Mühlenberg</p>
              <p>Inhaber: Timo Wessels</p>
              <p>Zum Mühlenberg</p>
              <p>14797 Kloster Lehnin, OT Trechwitz</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
            <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3"><span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">2</span>Kontakt</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3"><span className="text-bark-400 w-12">Tel:</span><a href="tel:+493382700321" className="text-meadow-700 hover:underline">+49 (0) 3382 700 321</a></div>
              <div className="flex items-center gap-3"><span className="text-bark-400 w-12">Mail:</span><a href="mailto:info@biohof-muehlenberg.de" className="text-meadow-700 hover:underline">info@biohof-muehlenberg.de</a></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
            <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3"><span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">3</span>Umsatzsteuer-ID</h2>
            <p className="text-bark-700">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: <span className="text-bark-400 italic">[wird nachgereicht]</span></p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
            <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3"><span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">4</span>Öko-Kontrolle</h2>
            <div className="inline-flex items-center gap-3 bg-meadow-600/10 px-5 py-3 rounded-xl">
              <span className="font-display font-bold text-meadow-800 text-lg">DE-ÖKO-037</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
            <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3"><span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">5</span>Verantwortlich nach § 55 Abs. 2 RStV</h2>
            <p className="text-bark-700">Timo Wessels, Zum Mühlenberg, 14797 Kloster Lehnin</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
            <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3"><span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">6</span>Haftungsausschluss</h2>
            <p className="text-bark-700 leading-relaxed">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
            <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3"><span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">7</span>Streitschlichtung</h2>
            <p className="text-bark-700 leading-relaxed">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-meadow-700 underline">ec.europa.eu/consumers/odr</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
