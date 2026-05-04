import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getGalleryPaginated } from '../../../storyblok/queries';
import Navigation from '../../../blueprint/Navigation';
import Footer from '../../../blueprint/Footer';

interface GalleryArchivePageProps {
  searchParams: { page?: string };
}

export const revalidate = 60;

const clipPaths = [
  'polygon(1% 0, 100% 2%, 99% 100%, 0 98%)',
  'polygon(0 1%, 98% 0, 100% 99%, 2% 100%)',
  'polygon(2% 2%, 100% 0, 98% 98%, 0 100%)'
];

export default async function GalleryArchivePage({ searchParams }: GalleryArchivePageProps) {
  const page = parseInt(searchParams.page || '1', 10);
  const perPage = 12;
  const { items: images, total } = await getGalleryPaginated(page, perPage);
  const totalPages = Math.ceil(total / perPage);

  return (
    <main className="min-h-screen bg-paper">
      <Navigation />

      <header className="py-20 px-6 bg-sand-50 border-t border-sand-200/50 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display text-bark-900 mb-4">Galerie-Archiv</h1>
          <p className="text-lg text-bark-600 max-w-2xl">
            Alle Impressionen vom Biohof Mühlenberg – Pferde, Landschaft und Hofleben in Bildern.
          </p>
        </div>
      </header>

      <section className="py-20 px-6 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          {images.length > 0 ? (
            <>
              <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
                {images.map((img, i) => (
                  <div key={img._id} className="break-inside-avoid mb-8">
                    <Link
                      href={`/archiv/galerie/${img._id}`}
                      className="block group"
                    >
                      <div
                        className="relative w-full bg-sand-200 overflow-hidden shadow-rustic transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
                        style={{
                          clipPath: clipPaths[i % clipPaths.length],
                          aspectRatio: `${img.width || 4} / ${img.height || 3}`,
                        }}
                      >
                        <Image
                          src={img.url}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                        />
                      </div>
                      {img.caption && (
                        <div className="mt-4 text-center">
                          <p className="font-caption italic text-bark-700">{img.caption}</p>
                        </div>
                      )}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="flex justify-center items-center gap-4 mt-16" aria-label="Galerie Pagination">
                  {page > 1 && (
                    <Link
                      href={`/archiv/galerie?page=${page - 1}`}
                      className="px-5 py-2.5 bg-bark-800 text-sand-100 rounded-lg font-bold hover:bg-bark-900 transition-colors"
                    >
                      ← Zurück
                    </Link>
                  )}

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/archiv/galerie?page=${pageNum}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                          pageNum === page
                            ? 'bg-meadow-600 text-white'
                            : 'bg-sand-200 text-bark-800 hover:bg-sand-300'
                        }`}
                        aria-current={pageNum === page ? 'page' : undefined}
                      >
                        {pageNum}
                      </Link>
                    ))}
                  </div>

                  {page < totalPages && (
                    <Link
                      href={`/archiv/galerie?page=${page + 1}`}
                      className="px-5 py-2.5 bg-bark-800 text-sand-100 rounded-lg font-bold hover:bg-bark-900 transition-colors"
                    >
                      Weiter →
                    </Link>
                  )}
                </nav>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-bark-600 text-lg">Noch keine Bilder im Archiv.</p>
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
