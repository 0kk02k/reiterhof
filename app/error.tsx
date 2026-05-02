'use client';

import { useEffect } from 'react';

/**
 * Global Error Boundary - Branded error handling for runtime failures.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Runtime Error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 text-center">
      <div className="space-y-8 max-w-lg">
        <div className="text-8xl">⚠️</div>
        <h1 className="text-4xl font-serif text-emerald-900">Ein technischer Fehler ist aufgetreten</h1>
        <p className="text-slate-600">
          Das hätte nicht passieren sollen. Wir haben den Fehler protokolliert. 
          Bitte versuchen Sie, die Seite neu zu laden.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg hover:bg-emerald-500 transition-all"
          >
            Seite neu laden
          </button>
          <a
            href="/"
            className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-all"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
}
