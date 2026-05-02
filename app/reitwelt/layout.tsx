import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reitwelt: Pensionspferde, Reiterferien & Therapie',
  description: 'Erfahren Sie mehr über unsere Pensionspferde-Stallungen, unsere beliebten Reiterferien für Kinder und die heilsame Reittherapie auf dem Mühlenberg.',
  keywords: ['Pensionspferde Brandenburg', 'Reiterferien Kinder', 'Reittherapie ADHS', 'Offenstall'],
  alternates: {
    canonical: '/reitwelt',
  },
};

export default function ReitweltLayout({ children }: { children: React.ReactNode }) {
  return children;
}
