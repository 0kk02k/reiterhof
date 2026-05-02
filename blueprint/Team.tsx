'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
  _id?: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

interface TeamProps {
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  { name: 'Timo Wessels', role: 'Inhaber & Landwirtschaft', bio: 'Leidenschaftlicher Landwirt und Visionär für nachhaltige Konzepte.' },
  { name: 'Sabine Müller', role: 'Leitung Reitschule', bio: 'Pferdewirtin mit 20 Jahren Erfahrung im Reitunterricht.' },
  { name: 'Dr. Bernd Schmidt', role: 'Tierarzt & Beratung', bio: 'Spezialist für Pferdegesundheit und artgerechte Haltung.' },
];

const Team: React.FC<TeamProps> = ({ members = defaultMembers }) => {
  return (
    <section id="team" className="py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-bark-900 mb-4">Das Herz des Hofes</h2>
          <p className="text-bark-500 max-w-2xl mx-auto text-lg font-caption italic">
            Lernen Sie die Menschen kennen, die täglich mit Leidenschaft und Fachkompetenz
            für das Wohl unserer Tiere und Gäste sorgen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center group"
            >
              <div 
                className="w-48 h-48 mx-auto mb-8 bg-sand-200 flex items-center justify-center overflow-hidden relative shadow-rustic transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                style={{
                  WebkitMaskImage: `url(/masks/edge-${(i % 3) + 1}.svg)`,
                  WebkitMaskSize: '100% 100%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: `url(/masks/edge-${(i % 3) + 1}.svg)`,
                  maskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                }}
              >
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                ) : (
                  <span className="text-5xl text-bark-400">👤</span>
                )}
              </div>
              <h3 className="text-2xl font-display font-bold text-bark-900 mb-2">{member.name}</h3>
              <p className="text-bark-800 font-bold text-xs uppercase tracking-widest mb-4 border-b border-bark-300 inline-block pb-1">{member.role}</p>
              <p className="text-bark-600 font-caption italic text-lg leading-relaxed max-w-xs mx-auto">&ldquo;{member.bio}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
