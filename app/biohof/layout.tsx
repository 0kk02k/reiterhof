import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biohof | Biohof Mühlenberg',
  description: 'Ökologische Landwirtschaft mit Herz. Entdecken Sie unseren Biohof, unsere Produkte und unsere Philosophie in Kloster Lehnin.',
};

export default function BiohofLayout({ children }: { children: React.ReactNode }) {
  return children;
}
