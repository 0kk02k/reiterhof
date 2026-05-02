'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get('_honeypot')) {
      console.log('Spam detected');
      setStatus('success'); // Silently fail for bots
      return;
    }

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

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Es gab einen Fehler beim Senden. Bitte versuchen Sie es später erneut.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-sand-100 p-10 rounded-2xl text-center space-y-6 border border-sand-200 shadow-inner"
      >
        <div className="w-20 h-20 bg-meadow-600 text-white rounded-full flex items-center justify-center mx-auto text-3xl shadow-lg">✓</div>
        <div className="space-y-2">
          <h3 className="text-3xl font-display text-bark-900">Nachricht gesendet!</h3>
          <p className="text-bark-500 text-lg">Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        </div>
        <button 
          onClick={() => setStatus('idle')} 
          className="px-8 py-3 bg-bark-700 text-sand-100 font-bold rounded-xl hover:bg-bark-800 transition-colors shadow-md"
        >
          Zurück zum Formular
        </button>
      </motion.div>
    );
  }

  return (
    <div className="relative">
      <form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="space-y-6 bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-sand-200 shadow-sm relative z-10"
      >
        {/* Honeypot field - hidden from users */}
        <input type="text" name="_honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-bold text-bark-800 uppercase tracking-tight">Name</label>
            <input 
              type="text" id="name" name="name" required 
              className="w-full px-4 py-3.5 rounded-xl border border-sand-200 bg-sand-50/50 focus:border-meadow-500 focus:ring-4 focus:ring-meadow-500/10 outline-none transition-all placeholder:text-bark-300" 
              placeholder="Vor- und Nachname" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-bold text-bark-800 uppercase tracking-tight">E-Mail Adresse</label>
            <input 
              type="email" id="email" name="email" required 
              className="w-full px-4 py-3.5 rounded-xl border border-sand-200 bg-sand-50/50 focus:border-meadow-500 focus:ring-4 focus:ring-meadow-500/10 outline-none transition-all placeholder:text-bark-300" 
              placeholder="beispiel@mail.de" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-bold text-bark-800 uppercase tracking-tight">Betreff</label>
          <select 
            id="subject" name="subject" 
            className="w-full px-4 py-3.5 rounded-xl border border-sand-200 bg-sand-50/50 focus:border-meadow-500 focus:ring-4 focus:ring-meadow-500/10 outline-none transition-all appearance-none cursor-pointer"
          >
            <option>Reitstunden & Kurse</option>
            <option>Pensionspferde</option>
            <option>Kindergeburtstag / Events</option>
            <option>Biohof & Landwirtschaft</option>
            <option>Sonstiges</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-bold text-bark-800 uppercase tracking-tight">Ihre Nachricht</label>
          <textarea 
            id="message" name="message" rows={5} required 
            className="w-full px-4 py-3.5 rounded-xl border border-sand-200 bg-sand-50/50 focus:border-meadow-500 focus:ring-4 focus:ring-meadow-500/10 outline-none transition-all placeholder:text-bark-300 resize-none" 
            placeholder="Wie können wir Ihnen helfen?" 
          />
        </div>

        <AnimatePresence>
          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl"
            >
              {errorMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-bark-800 hover:bg-bark-900 text-sand-100 font-bold py-4.5 rounded-xl transition-all shadow-xl shadow-bark-900/10 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === 'sending' ? (
            <>
              <div className="w-5 h-5 border-2 border-sand-100/30 border-t-sand-100 rounded-full animate-spin" />
              Wird gesendet...
            </>
          ) : (
            'Nachricht jetzt abschicken'
          )}
        </motion.button>
        
        <p className="text-[10px] text-bark-400 text-center uppercase tracking-widest mt-4">
          Wir gehen sorgsam mit Ihren Daten um.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
