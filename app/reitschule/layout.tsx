import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reitschule',
  description: 'Qualifizierter Reitunterricht für alle Altersgruppen und Level. Longe, Gruppen- und Einzelstunden auf dem Biohof Mühlenberg in Kloster Lehnin.',
  keywords: ['Reitunterricht', 'Reitschule Brandenburg', 'Reiten lernen', 'Longe', 'Dressurunterricht'],
  alternates: {
    canonical: '/reitschule',
  },
};

export default function ReitschuleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
