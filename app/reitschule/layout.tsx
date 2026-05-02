import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reitschule | Biohof Mühlenberg',
  description: 'Reitunterricht für alle Altersgruppen und Level. Longe, Gruppen- und Einzelstunden auf dem Biohof Mühlenberg in Kloster Lehnin.',
};

export default function ReitschuleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
