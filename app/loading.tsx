/**
 * Global Loading State - Prevents layout shift during navigation
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="space-y-4 text-center">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto"></div>
        <p className="text-emerald-900 font-serif animate-pulse">Wird geladen...</p>
      </div>
    </div>
  );
}
