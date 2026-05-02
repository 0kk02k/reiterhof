import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reitwelt | Biohof Mühlenberg',
  description: 'Reiterferien, Pensionspferde und Reittherapie auf dem Biohof Mühlenberg in Kloster Lehnin.',
};

export default function ReitweltLayout({ children }: { children: React.ReactNode }) {
  return children;
}
