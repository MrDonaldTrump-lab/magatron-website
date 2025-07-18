export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-900 text-white font-sans">
      <header className="text-center py-10">
        <img src="/magatron-logo.png" alt="MAGATron Logo" className="mx-auto w-40 mb-4" />
        <h1 className="text-5xl font-extrabold tracking-tight">MAGATron</h1>
        <p className="text-lg mt-2 italic">The Memecoin from the Future Timeline</p>
      </header>
      <main className="text-center px-4">
        <p className="text-lg mb-4">
          MAGATron is a memecoin from an alternate dimension where Trump leads a futuristic crypto rebellion with his genius kids.
        </p>
        <img src="/trump-hero.png" alt="Trump Hero" className="mx-auto w-64 rounded-xl shadow-lg" />
      </main>
      <footer className="text-center text-sm text-white/60 py-6">
        © 2025 MAGATron. All rights reserved.
      </footer>
    </div>
  );
}
