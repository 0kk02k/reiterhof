import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biohof & Landwirtschaft',
  description: 'Ökologische Landwirtschaft mit Herz. Entdecken Sie unseren Biohof, unsere artgerechte Tierhaltung und unsere nachhaltige Philosophie in Kloster Lehnin.',
  keywords: ['Ökologische Landwirtschaft', 'Bio-Milch Brandenburg', 'Artgerechte Haltung', 'Biohof Kloster Lehnin'],
  alternates: {
    canonical: '/biohof',
  },
};

export default function BiohofLayout({ children }: { children: React.ReactNode }) {
  return children;
}
