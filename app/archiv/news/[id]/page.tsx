import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getNewsPaginated } from '../../../../storyblok/queries';
import Navigation from '../../../../blueprint/Navigation';
import Footer from '../../../../blueprint/Footer';

interface NewsDetailPageProps {
  params: { id: string };
}

export const revalidate = 60;

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { items } = await getNewsPaginated(1, 100);
  const article = items.find(item => item._id === params.id);

  if (!article) {
    return (
      <main className="min-h-screen bg-paper">
        <Navigation />
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-display text-bark-900 mb-6">Artikel nicht gefunden</h1>
          <Link href="/archiv/news" className="inline-block px-6 py-3 bg-meadow-600 text-white rounded-lg font-bold hover:bg-meadow-700 transition-colors">
            Zurück zum Archiv
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const currentIndex = items.findIndex(item => item._id === params.id);
  const prevArticle = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextArticle = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return (
    <main className="min-h-screen bg-paper">
      <Navigation />

      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link href="/" className="text-bark-500 hover:text-bark-800">Startseite</Link>
          <span className="mx-2 text-bark-300">/</span>
          <Link href="/archiv/news" className="text-bark-500 hover:text-bark-800">News-Archiv</Link>
          <span className="mx-2 text-bark-300">/</span>
          <span className="text-bark-800">{article.title}</span>
        </nav>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] bg-sand-200 mb-10 overflow-hidden shadow-rustic rounded-xl">
          <Image
            src={article.img}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Header */}
        <header className="mb-10">
          <time className="text-sm font-bold text-meadow-700 uppercase tracking-widest">{article.date}</time>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-bark-900 mt-4 leading-tight">
            {article.title}
          </h1>
        </header>

        {/* Article Body */}
        <div className="prose prose-lg prose-stone max-w-none text-bark-600 leading-relaxed">
          <p className="whitespace-pre-wrap">{article.body || article.excerpt}</p>
        </div>

        {/* Navigation */}
        <nav className="flex justify-between items-center mt-16 pt-10 border-t border-sand-200">
          {prevArticle ? (
            <Link
              href={`/archiv/news/${prevArticle._id}`}
              className="flex flex-col items-start group"
            >
              <span className="text-xs text-bark-400 uppercase tracking-widest mb-1">Vorheriger Artikel</span>
              <span className="text-lg font-bold text-bark-800 group-hover:text-meadow-700 transition-colors line-clamp-1">
                ← {prevArticle.title}
              </span>
            </Link>
          ) : <div />}

          {nextArticle ? (
            <Link
              href={`/archiv/news/${nextArticle._id}`}
              className="flex flex-col items-end group"
            >
              <span className="text-xs text-bark-400 uppercase tracking-widest mb-1">Nächster Artikel</span>
              <span className="text-lg font-bold text-bark-800 group-hover:text-meadow-700 transition-colors line-clamp-1">
                {nextArticle.title} →
              </span>
            </Link>
          ) : <div />}
        </nav>

        <div className="mt-12 text-center">
          <Link
            href="/archiv/news"
            className="inline-block px-8 py-3 bg-sand-100 text-bark-800 rounded-lg font-bold hover:bg-sand-200 transition-colors"
          >
            Alle Beiträge ansehen
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
