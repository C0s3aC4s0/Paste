'use client';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-coffee-600">
        <div className="w-16 h-16 border-4 border-current border-solid rounded-full relative animate-spin">
          <div className="absolute top-0 left-1/2 w-2 h-2 -ml-1 -mt-1 bg-coffee-600 rounded-full"></div>
        </div>
        <p className="mt-4 font-script text-xl">Caricamento...</p>
      </div>
    </div>
  );
} 