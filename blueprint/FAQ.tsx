'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqItems = [
  {
    q: 'Ab welchem Alter können Kinder reiten lernen?',
    a: 'Unsere Pony-Longen-Stunden sind bereits für Kinder ab 4 Jahren geeignet. Ab 6 Jahren können Kinder am regulären Reitunterricht teilnehmen.',
  },
  {
    q: 'Brauche ich eigene Reitausrüstung?',
    a: 'Nein. Wir stellen Reithelme und Sicherheitswesten kostenlos zur Verfügung. Bitte kommen Sie in bequemer Kleidung und mit festem Schuhwerk.',
  },
  {
    q: 'Kann ich auch ohne Vorkenntnisse anfangen?',
    a: 'Selbstverständlich! Unsere Longen-Stunden und Anfängerkurse sind genau dafür konzipiert. Wir bringen Ihnen die Grundlagen Schritt für Schritt bei.',
  },
  {
    q: 'Wie laufen die Reitstunden ab?',
    a: 'Nach einem kurzen Einstiegsgespräch putzen und satteln Sie Ihr Pferd unter Anleitung. Danach folgt der eigentliche Unterricht – angepasst an Ihr Level.',
  },
  {
    q: 'Wie kann ich eine Reitstunde buchen?',
    a: 'Schreiben Sie uns über das Kontaktformular, rufen Sie uns an oder kommen Sie einfach vorbei. Wir finden gemeinsam einen passenden Termin.',
  },
  {
    q: 'Werden auch Reitabzeichen angeboten?',
    a: 'Ja, wir bereiten auf die Prüfung zum Deutschen Reitabzeichen (DRA) und das Reitpass-Abzeichen vor. Sprechen Sie uns an.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div key={i} className="border border-sand-200 rounded-xl overflow-hidden bg-white/80">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <span className="font-display font-bold text-bark-800 pr-4">{item.q}</span>
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-bark-400 text-xl flex-shrink-0"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-bark-500 leading-relaxed">{item.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
