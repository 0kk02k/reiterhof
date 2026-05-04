'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const viewportOnce = { once: true, margin: '-60px' } as const;

export interface EventItem {
  _id?: string;
  title: string;
  date: string;
  description?: string;
  link?: string;
}

interface EventTimelineCompactProps {
  events: EventItem[];
}

const formatEventDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' };
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', options).toUpperCase();
};

const getEventIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes('fest') || lowerTitle.includes('weihnacht')) return '🎄';
  if (lowerTitle.includes('kurs') || lowerTitle.includes('reit')) return '🐴';
  if (lowerTitle.includes('markt') || lowerTitle.includes('ernt')) return '🎃';
  if (lowerTitle.includes('ferien') || lowerTitle.includes('woche')) return '🌻';
  if (lowerTitle.includes('therapie') || lowerTitle.includes('tag')) return '💚';
  return '📅';
};

const EventCard: React.FC<{ event: EventItem; index: number }> = ({ event, index }) => {
  const linkHref = event.link || '/#kontakt';
  const icon = getEventIcon(event.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex-shrink-0 w-72 md:w-80"
    >
      <Link
        href={linkHref}
        className="block h-full bg-paper rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all duration-300 group p-5"
      >
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl" role="img" aria-label="Event icon">{icon}</span>
          <span className="text-xs font-bold text-meadow-700 uppercase tracking-widest border border-meadow-200 bg-meadow-50 px-2 py-1 rounded whitespace-nowrap">
            {formatEventDate(event.date)}
          </span>
        </div>
        <h3 className="text-lg font-display font-bold text-bark-900 group-hover:text-bark-700 transition-colors leading-snug mb-2">
          {event.title}
        </h3>
        {event.description && (
          <p className="text-sm text-bark-600 line-clamp-2 leading-relaxed">{event.description}</p>
        )}
      </Link>
    </motion.div>
  );
};

export const EventTimelineCompact: React.FC<EventTimelineCompactProps> = ({ events }) => {
  if (!events || events.length === 0) return null;

  return (
    <section id="termine" className="py-20 bg-sand-50 px-6 border-t border-sand-200/50 relative">
      <div
        className="absolute inset-0 z-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display text-bark-900"
            >
              Kommende Termine
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-bark-500 mt-2 italic font-caption"
            >
              Veranstaltungen & Highlights auf dem Hof
            </motion.p>
          </div>
          <Link
            href="/archiv/events"
            className="text-bark-800 font-bold border-b border-bark-400 hover:border-bark-800 pb-1 transition-colors text-sm uppercase tracking-widest whitespace-nowrap"
          >
            Alle Termine →
          </Link>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-sand-300 scrollbar-track-sand-100 hover:scrollbar-thumb-meadow-400">
          {events.map((event, index) => (
            <div key={event._id || event.title} className="snap-start">
              <EventCard event={event} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTimelineCompact;
