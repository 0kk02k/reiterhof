'use client'

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-sand-50 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-display text-bark-900">Sanity Studio</h1>
        <p className="text-bark-500">Das CMS wird mit einem gültigen Sanity-Projekt verbunden.</p>
        <p className="text-sm text-bark-400">Bitte konfigurieren Sie <code className="bg-sand-200 px-2 py-1 rounded">NEXT_PUBLIC_SANITY_PROJECT_ID</code> in <code className="bg-sand-200 px-2 py-1 rounded">.env.local</code></p>
      </div>
    </main>
  )
}
