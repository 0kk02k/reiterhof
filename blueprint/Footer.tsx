import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-bark-900 text-sand-100 py-20 px-6 pb-28 md:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
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
            <h4 className="font-bold uppercase tracking-widest text-bark-400 text-sm">Archiv</h4>
            <nav className="flex flex-col space-y-2 text-sand-200/70">
              <a href="/archiv/news" className="hover:text-sand-100 transition-colors">News-Archiv</a>
              <a href="/archiv/galerie" className="hover:text-sand-100 transition-colors">Galerie-Archiv</a>
              <a href="/archiv/events" className="hover:text-sand-100 transition-colors">Termine-Archiv</a>
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
    </>
  );
};

export default Footer;