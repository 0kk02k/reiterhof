import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Erleben | Biohof Mühlenberg',
  description: 'Kindergeburtstage und Kremserfahrten auf dem Biohof Mühlenberg. Unvergessliche Erlebnisse in der Natur.',
};

export default function ErlebenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
