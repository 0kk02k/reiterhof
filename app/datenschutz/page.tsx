'use client';

import React from 'react';
import Navigation from '../../blueprint/Navigation';

const sections = [
  {
    num: '1', title: 'Verantwortlicher',
    content: (
      <>
        <p className="font-bold text-bark-900">Biohof zum Mühlenberg</p>
        <p>Inhaber: Timo Wessels</p>
        <p>Zum Mühlenberg, 14797 Kloster Lehnin, OT Trechwitz</p>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-3"><span className="text-bark-400 w-12">Tel:</span><a href="tel:+493382700321" className="text-meadow-700 hover:underline">+49 (0) 3382 700 321</a></div>
          <div className="flex items-center gap-3"><span className="text-bark-400 w-12">Mail:</span><a href="mailto:info@biohof-muehlenberg.de" className="text-meadow-700 hover:underline">info@biohof-muehlenberg.de</a></div>
        </div>
      </>
    )
  },
  {
    num: '2', title: 'Erhebung und Speicherung personenbezogener Daten',
    content: <p>Beim Besuch unserer Website werden automatisch Informationen durch den Browser übermittelt und in Server-Log-Dateien gespeichert. Dies sind: Browsertyp/-version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Diese Daten sind nicht bestimmten Personen zuordenbar und werden nach 30 Tagen automatisch gelöscht.</p>
  },
  {
    num: '3', title: 'Kontaktformular',
    content: <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
  },
  {
    num: '4', title: 'Cookies',
    content: <p>Unsere Website verwendet derzeit keine Tracking-Cookies. Es können technisch notwendige Cookies eingesetzt werden, die für den Betrieb der Website erforderlich sind (z. B. Session-Cookies). Diese werden beim Schließen des Browsers automatisch gelöscht.</p>
  },
  {
    num: '5', title: 'Einbindung von Drittanbietern',
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-bark-800 mb-1">Google Maps</h3>
          <p>Auf unserer Website kann Google Maps eingebunden sein, um Ihnen die Anfahrt zu zeigen. Beim Aufruf wird eine Verbindung zu den Servern von Google LLC hergestellt. Dabei können Daten (insbesondere Ihre IP-Adresse) an Google übermittelt werden.</p>
        </div>
        <div>
          <h3 className="font-bold text-bark-800 mb-1">Schriftarten</h3>
          <p>Wir binden externe Schriftarten (Google Fonts) ein. Beim Laden der Seite wird Ihre IP-Adresse an Google übermittelt, um die Schriftarten bereitzustellen.</p>
        </div>
      </div>
    )
  },
  {
    num: '6', title: 'Ihre Rechte',
    content: (
      <>
        <p className="mb-3">Sie haben jederzeit das Recht auf:</p>
        <ul className="space-y-2">
          {[
            ['Art. 15 DSGVO', 'Auskunft über Ihre gespeicherten Daten'],
            ['Art. 16 DSGVO', 'Berichtigung unrichtiger Daten'],
            ['Art. 17 DSGVO', 'Löschung Ihrer Daten'],
            ['Art. 18 DSGVO', 'Einschränkung der Verarbeitung'],
            ['Art. 20 DSGVO', 'Datenübertragbarkeit'],
            ['Art. 21 DSGVO', 'Widerspruch gegen die Verarbeitung'],
          ].map(([art, right]) => (
            <li key={art} className="flex items-start gap-3">
              <span className="bg-meadow-600/10 text-meadow-700 text-xs font-bold px-2 py-1 rounded mt-0.5 flex-shrink-0">{art}</span>
              <span className="text-bark-700">{right}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-bark-600">Anfragen richten Sie bitte an: <a href="mailto:info@biohof-muehlenberg.de" className="text-meadow-700 hover:underline">info@biohof-muehlenberg.de</a></p>
      </>
    )
  },
  {
    num: '7', title: 'SSL-Verschlüsselung',
    content: <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.</p>
  },
  {
    num: '8', title: 'Änderungen der Datenschutzerklärung',
    content: <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht. Die aktuelle Version können Sie jederzeit auf dieser Seite einsehen.</p>
  },
];

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-sand-50">
      <Navigation />
      <header className="pt-32 pb-16 bg-bark-900 text-sand-100 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute bottom-0 right-1/4 w-80 h-80 bg-meadow-600 rounded-full blur-3xl translate-y-1/2" /></div>
        <div className="max-w-3xl mx-auto relative">
          <nav className="text-bark-400 text-sm mb-6 uppercase tracking-widest font-bold"><a href="/" className="hover:text-sand-100 transition-colors">Startseite</a> / Datenschutz</nav>
          <h1 className="text-5xl md:text-6xl font-display mb-4">Datenschutz</h1>
          <p className="text-sand-200/60 text-lg">Informationen zum Umgang mit Ihren Daten</p>
        </div>
      </header>
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-8 border border-sand-200 shadow-sm">
              <h2 className="text-xl font-display font-bold text-bark-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-meadow-600/10 rounded-lg flex items-center justify-center text-meadow-700 text-sm font-bold">{s.num}</span>
                {s.title}
              </h2>
              <div className="text-bark-700 leading-relaxed">{s.content}</div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-sand-100 py-12 px-6 text-center">
        <a href="/" className="inline-flex items-center gap-2 text-bark-600 font-bold hover:text-meadow-700 transition-colors">← Zurück zur Startseite</a>
      </footer>
    </main>
  );
}
