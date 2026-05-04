import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewsPaginated } from '../../../storyblok/queries';
import Navigation from '../../../blueprint/Navigation';
import Footer from '../../../blueprint/Footer';

interface NewsArchivePageProps {
  searchParams: { page?: string };
}

export const revalidate = 60;

export default async function NewsArchivePage({ searchParams }: NewsArchivePageProps) {
  const page = parseInt(searchParams.page || '1', 10);
  const perPage = 9;
  const { items: news, total } = await getNewsPaginated(page, perPage);
  const totalPages = Math.ceil(total / perPage);

  return (
    <main className="min-h-screen bg-paper">
      <Navigation />

      <header className="py-20 px-6 bg-sand-50 border-t border-sand-200/50 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display text-bark-900 mb-4">News-Archiv</h1>
          <p className="text-lg text-bark-600 max-w-2xl">
            Alle Beiträge aus unserem Hof-Tagebuch – von aktuellen Neuigkeiten bis zurückliegende Ereignisse.
          </p>
        </div>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {news.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {news.map((item, i) => (
                  <article
                    key={item._id}
                    className="group flex flex-col"
                  >
                    <Link
                      href={`/archiv/news/${item._id}`}
                      className="aspect-[3/2] bg-sand-200 mb-5 overflow-hidden relative shadow-rustic transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                      style={{
                        clipPath: ['polygon(1% 0, 100% 2%, 99% 100%, 0 98%)', 'polygon(0 1%, 98% 0, 100% 99%, 2% 100%)', 'polygon(2% 2%, 100% 0, 98% 98%, 0 100%)'][i % 3]
                      }}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                      />
                    </Link>
                    <div className="px-2 flex-1 flex flex-col">
                      <span className="text-xs font-bold text-meadow-700 uppercase tracking-widest">{item.date}</span>
                      <h3 className="text-xl font-display font-bold text-bark-900 mt-2 group-hover:text-bark-600 transition-colors leading-snug">
                        <Link href={`/archiv/news/${item._id}`}>{item.title}</Link>
                      </h3>
                      <p className="text-bark-600 mt-2 line-clamp-2 leading-relaxed flex-1">{item.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex justify-center items-center gap-4 mt-16" aria-label="News Pagination">
                  {page > 1 && (
                    <Link
                      href={`/archiv/news?page=${page - 1}`}
                      className="px-5 py-2.5 bg-bark-800 text-sand-100 rounded-lg font-bold hover:bg-bark-900 transition-colors"
                    >
                      ← Neuere
                    </Link>
                  )}

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/archiv/news?page=${pageNum}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                          pageNum === page
                            ? 'bg-meadow-600 text-white'
                            : 'bg-sand-100 text-bark-800 hover:bg-sand-200'
                        }`}
                        aria-current={pageNum === page ? 'page' : undefined}
                      >
                        {pageNum}
                      </Link>
                    ))}
                  </div>

                  {page < totalPages && (
                    <Link
                      href={`/archiv/news?page=${page + 1}`}
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
              <p className="text-bark-600 text-lg">Noch keine Einträge im Archiv.</p>
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
