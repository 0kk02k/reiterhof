'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PriceItem {
  name: string;
  price: string;
  unit?: string;
  description?: string;
}

interface PriceCategory {
  _id?: string;
  title: string;
  items: PriceItem[];
}

interface PriceTableProps {
  pricingData?: PriceCategory[];
}

const defaultPricingData: PriceCategory[] = [
  {
    title: 'Reitschule',
    items: [
      { name: 'Gruppenstunde', price: '25€', unit: 'pro Std.', description: 'Maximal 6 Reiter pro Gruppe.' },
      { name: 'Einzelstunde', price: '45€', unit: 'pro 45 Min.', description: 'Intensivtraining für alle Level.' },
      { name: 'Longe (Anfänger)', price: '20€', unit: 'pro 20 Min.', description: 'Sicheriger Einstieg in den Sport.' },
    ],
  },
  {
    title: 'Pensionspferde',
    items: [
      { name: 'Standardbox', price: 'ab 350€', unit: 'pro Monat', description: 'Inkl. Futter und täglicher Koppelgang.' },
      { name: 'Offenstall', price: 'ab 320€', unit: 'pro Monat', description: 'Naturnahe Haltung in der Herde.' },
    ],
  },
];

const PriceTable: React.FC<PriceTableProps> = ({ pricingData = defaultPricingData }) => {
  return (
    <div className="bg-sand-100/80 backdrop-blur-sm py-16 px-6 rounded-3xl border border-sand-200">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-display text-bark-900 mb-14 text-center"
        >
          Unsere Leistungen & Preise
        </motion.h2>

        <div className="space-y-10">
          {pricingData.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-sand-200 overflow-hidden"
            >
              <div className="bg-bark-800 px-6 py-4">
                <h3 className="text-lg font-bold text-sand-100 tracking-wide">{category.title}</h3>
              </div>
              <div className="divide-y divide-sand-100">
                {category.items?.map((item) => (
                  <div key={item.name} className="p-6 flex flex-col md:flex-row md:items-center justify-between hover:bg-sand-50/50 transition-colors">
                    <div className="mb-3 md:mb-0">
                      <h4 className="font-bold text-bark-900 text-lg">{item.name}</h4>
                      {item.description && <p className="text-bark-500 text-sm mt-1">{item.description}</p>}
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-2xl font-display font-bold text-bark-700">{item.price}</span>
                      {item.unit && <span className="text-xs text-bark-400 uppercase tracking-widest">{item.unit}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-bark-400 text-sm italic">
          * Alle Preise inkl. MwSt. Individuelle Angebote auf Anfrage möglich.
        </p>
      </div>
    </div>
  );
};

export default PriceTable;
