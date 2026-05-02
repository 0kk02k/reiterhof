import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-sand-50 flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-lg">
        <div className="text-9xl font-display text-sand-200">404</div>
        <h1 className="text-4xl font-display text-bark-900">Hoppla! Diese Seite hat sich auf die Weide verloren.</h1>
        <p className="text-bark-500 text-lg">
          Die gesuchte Seite konnte nicht gefunden werden. Vielleicht haben wir den Pfad
          neu angelegt oder die Adresse hat sich geändert.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-bark-800 text-sand-100 font-bold rounded-xl shadow-lg hover:bg-bark-700 transition-colors"
          >
            Zurück zum Hof
          </Link>
        </div>
      </div>
    </main>
  );
}
