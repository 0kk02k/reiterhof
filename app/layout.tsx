import type { Metadata } from 'next';
import './globals.css';
import Footer from '../blueprint/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://biohof-muehlenberg.de'),
  title: {
    default: 'Biohof Mühlenberg | Reitschule & Ökologische Landwirtschaft',
    template: '%s | Biohof Mühlenberg',
  },
  description: 'Entdecken Sie den Biohof Mühlenberg in Kloster Lehnin. Reitschule, Reittherapie, Pensionspferde und ökologische Landwirtschaft mit Herz.',
  keywords: ['Reitschule', 'Biohof', 'Kloster Lehnin', 'Reittherapie', 'Pensionspferde', 'Brandenburg', 'Ökologische Landwirtschaft'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Biohof Mühlenberg | Reitschule & Ökologische Landwirtschaft',
    description: 'Reitschule, Reittherapie, Pensionspferde und ökologische Landwirtschaft in Kloster Lehnin.',
    url: 'https://biohof-muehlenberg.de',
    siteName: 'Biohof Mühlenberg',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/opengraph-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Biohof Mühlenberg Impressionen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biohof Mühlenberg | Reitschule & Ökologische Landwirtschaft',
    description: 'Reitschule, Reittherapie, Pensionspferde und ökologische Landwirtschaft in Kloster Lehnin.',
    images: ['/images/opengraph-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
