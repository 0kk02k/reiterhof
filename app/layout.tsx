import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Biohof Mühlenberg | Reitschule & Ökologische Landwirtschaft',
  description: 'Entdecken Sie den Biohof Mühlenberg in Kloster Lehnin. Reitschule, Reittherapie, Pensionspferde und ökologische Landwirtschaft mit Herz.',
  openGraph: {
    title: 'Biohof Mühlenberg | Reitschule & Ökologische Landwirtschaft',
    description: 'Reitschule, Reittherapie, Pensionspferde und ökologische Landwirtschaft in Kloster Lehnin.',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/opengraph-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Biohof Mühlenberg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
