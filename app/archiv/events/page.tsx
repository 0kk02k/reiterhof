import React from 'react';
import Link from 'next/link';
import { getEventsArchive } from '../../../storyblok/queries';
import Navigation from '../../../blueprint/Navigation';
import Footer from '../../../blueprint/Footer';
import { EventItem } from '../../../blueprint/EventTimelineCompact';

interface EventsArchivePageProps {
  searchParams: { page?: string };
}

export const revalidate = 60;

const formatEventDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('de-DE', options);
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

export default async function EventsArchivePage({ searchParams }: EventsArchivePageProps) {
  const page = parseInt(searchParams.page || '1', 10);
  const perPage = 15;
  const { items: events, total } = await getEventsArchive(page, perPage);
  const totalPages = Math.ceil(total / perPage);

  return (
    <main className="min-h-screen bg-paper">
      <Navigation />

      <header className="py-20 px-6 bg-sand-50 border-t border-sand-200/50 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display text-bark-900 mb-4">Termine-Archiv</h1>
          <p className="text-lg text-bark-600">
            Vergangene Veranstaltungen und besondere Anlässe auf dem Biohof Mühlenberg.
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {events.length > 0 ? (
            <>
              <div className="space-y-6">
                {events.map((evt, i) => {
                  const icon = getEventIcon(evt.title);
                  const linkHref = evt.link || '/#kontakt';

                  return (
                    <article
                      key={evt._id}
                      className="flex items-start gap-6 p-6 bg-paper rounded-xl border border-sand-200 shadow-sm hover:shadow-rustic transition-all group"
                    >
                      <span className="text-3xl" role="img" aria-label="Event icon">{icon}</span>
                      <div className="flex-1">
                        <time className="text-sm font-bold text-meadow-700 uppercase tracking-widest">
                          {formatEventDate(evt.date)}
                        </time>
                        <h3 className="text-xl font-display font-bold text-bark-900 mt-2 group-hover:text-bark-700 transition-colors">
                          {evt.title}
                        </h3>
                        {evt.description && (
                          <p className="text-bark-600 mt-2 leading-relaxed">{evt.description}</p>
                        )}
                      </div>
                      {evt.link && (
                        <Link
                          href={linkHref}
                          className="px-4 py-2 bg-sand-100 text-bark-800 rounded-lg font-bold text-sm hover:bg-sand-200 transition-colors whitespace-nowrap"
                        >
                          Details
                        </Link>
                      )}
                    </article>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex justify-center items-center gap-4 mt-16" aria-label="Events Pagination">
                  {page > 1 && (
                    <Link
                      href={`/archiv/events?page=${page - 1}`}
                      className="px-5 py-2.5 bg-bark-800 text-sand-100 rounded-lg font-bold hover:bg-bark-900 transition-colors"
                    >
                      ← Neuere
                    </Link>
                  )}

                  <div className="flex gap-2">
                    {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                      let pageNum: number;
                      if (totalPages <= 7) {
                        pageNum = i + 1;
                      } else if (page <= 4) {
                        pageNum = i + 1;
                      } else if (page >= totalPages - 3) {
                        pageNum = totalPages - 6 + i;
                      } else {
                        pageNum = page - 3 + i;
                      }
                      return (
                        <Link
                          key={pageNum}
                          href={`/archiv/events?page=${pageNum}`}
                          className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                            pageNum === page
                              ? 'bg-meadow-600 text-white'
                              : 'bg-sand-100 text-bark-800 hover:bg-sand-200'
                          }`}
                          aria-current={pageNum === page ? 'page' : undefined}
                        >
                          {pageNum}
                        </Link>
                      );
                    })}
                  </div>

                  {page < totalPages && (
                    <Link
                      href={`/archiv/events?page=${page + 1}`}
                      className="px-5 py-2.5 bg-bark-800 text-sand-100 rounded-lg font-bold hover:bg-bark-900 transition-colors"
                    >
                      Ältere →
                    </Link>
                  )}
                </nav>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-bark-600 text-lg">Noch keine vergangenen Termine im Archiv.</p>
              <Link href="/" className="inline-block mt-6 text-meadow-700 font-bold hover:text-meadow-800">
                Zurück zur Startseite
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
