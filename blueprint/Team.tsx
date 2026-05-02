'use client';

import React from 'react';
import { motion } from 'framer-motion';

const members = [
  { name: 'Timo Wessels', role: 'Inhaber & Landwirtschaft', bio: 'Leidenschaftlicher Landwirt und Visionär für nachhaltige Konzepte.' },
  { name: 'Sabine Müller', role: 'Leitung Reitschule', bio: 'Pferdewirtin mit 20 Jahren Erfahrung im Reitunterricht.' },
  { name: 'Dr. Bernd Schmidt', role: 'Tierarzt & Beratung', bio: 'Spezialist für Pferdegesundheit und artgerechte Haltung.' },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-4">Das Herz des Hofes</h2>
          <p className="text-bark-500 max-w-2xl mx-auto text-lg">
            Lernen Sie die Menschen kennen, die täglich mit Leidenschaft und Fachkompetenz
            für das Wohl unserer Tiere und Gäste sorgen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center border border-sand-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-sand-200 border-4 border-sand-100 flex items-center justify-center">
                <span className="text-4xl text-bark-400">👤</span>
              </div>
              <h3 className="text-xl font-display font-bold text-bark-900 mb-1">{member.name}</h3>
              <p className="text-meadow-700 font-medium text-sm uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-bark-500 italic leading-relaxed">&ldquo;{member.bio}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
