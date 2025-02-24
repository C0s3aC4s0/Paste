'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="font-script text-3xl text-coffee-800 mb-4">Oops! Qualcosa è andato storto</h2>
        <p className="text-coffee-600 mb-6">
          Ci scusiamo per l'inconveniente. Per favore, riprova più tardi.
        </p>
        <button
          onClick={reset}
          className="bg-coffee-600 text-cream-50 px-6 py-3 rounded-md hover:bg-coffee-700 transition-colors"
        >
          Riprova
        </button>
      </div>
    </div>
  );
} 