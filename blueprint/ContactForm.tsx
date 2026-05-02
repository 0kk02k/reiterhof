'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      alert('Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.');
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-sand-100 p-8 rounded-2xl text-center space-y-4 border border-sand-200"
      >
        <div className="w-16 h-16 bg-meadow-600 text-white rounded-full flex items-center justify-center mx-auto text-2xl">✓</div>
        <h3 className="text-2xl font-display text-bark-900">Nachricht gesendet!</h3>
        <p className="text-bark-500">Vielen Dank für Ihre Anfrage. Wir melden sich schnellstmöglich bei Ihnen.</p>
        <button onClick={() => setStatus('idle')} className="text-meadow-700 font-bold hover:underline">
          Weitere Nachricht senden
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sand-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-bark-700">Name</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:border-meadow-500 focus:ring-2 focus:ring-meadow-100 outline-none transition-all" placeholder="Ihr Name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-bark-700">E-Mail Adresse</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:border-meadow-500 focus:ring-2 focus:ring-meadow-100 outline-none transition-all" placeholder="beispiel@mail.de" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-semibold text-bark-700">Betreff</label>
        <select id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:border-meadow-500 outline-none">
          <option>Reitstunden & Kurse</option>
          <option>Pensionspferde</option>
          <option>Kindergeburtstag / Events</option>
          <option>Biohof & Landwirtschaft</option>
          <option>Sonstiges</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-bark-700">Nachricht</label>
        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-sand-200 bg-sand-50 focus:border-meadow-500 focus:ring-2 focus:ring-meadow-100 outline-none transition-all" placeholder="Wie können wir Ihnen helfen?" />
      </div>

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-bark-700 hover:bg-bark-800 text-sand-100 font-bold py-4 rounded-xl transition-colors disabled:opacity-50"
      >
        {status === 'sending' ? 'Wird gesendet...' : 'Nachricht abschicken'}
      </motion.button>
    </form>
  );
};

export default ContactForm;
