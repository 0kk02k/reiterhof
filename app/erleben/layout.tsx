import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Erleben: Kindergeburtstage & Kremserfahrten',
  description: 'Unvergessliche Momente auf dem Biohof Mühlenberg. Wir organisieren Kindergeburtstage mit Ponys und traditionelle Kremserfahrten durch den Naturpark Nuthe-Nieplitz.',
  keywords: ['Kindergeburtstag Bauernhof', 'Kremserfahrt Brandenburg', 'Naturpark Nuthe-Nieplitz', 'Ausflugsziel Familien'],
  alternates: {
    canonical: '/erleben',
  },
};

export default function ErlebenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
