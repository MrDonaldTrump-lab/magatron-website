import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white font-sans bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
      <Head>
        <title>MAGATron ($MAGT)</title>
        <meta
          name="description"
          content="The intergalactic memecoin — to the moon… and beyond tariffs."
        />
        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/magatron-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/magatron-512.png"
        />
        <link rel="apple-touch-icon" href="/icons/magatron-512.png" />
        {/* Social preview */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MAGATron ($MAGT)" />
        <meta
          property="og:description"
          content="The intergalactic memecoin — to the moon… and beyond tariffs."
        />
        <meta property="og:image" content="/icons/magatron-512.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MAGATron ($MAGT)" />
        <meta
          name="twitter:description"
          content="The intergalactic memecoin — to the moon… and beyond tariffs."
        />
        <meta name="twitter:image" content="/icons/magatron-512.png" />
      </Head>

      {/* Background Art */}
      <img
        src="/planet-overlay.png"
        alt="planet"
        className="absolute top-[10%] left-[5%] w-60 opacity-10 pointer-events-none z-0 animate-pulse"
      />
      <img
        src="/mech-overlay.png"
        alt="mech"
        className="absolute bottom-0 right-0 w-96 opacity-20 pointer-events-none z-0"
      />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-red-400 drop-shadow-lg">
          MAGATron ($MAGT)
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90">
          The intergalactic memecoin — forged in satire, fueled by memes,
          and unstoppable by tariffs. Join the red mech rebellion.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            href="/whitepaper"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-bold shadow-lg transition"
          >
            Read Whitepaper
          </Link>
          <a
            href="https://t.me/magatron_coin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold shadow-lg transition"
          >
            Join Telegram
          </a>
          <a
            href="https://x.com/magatron_coin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-xl font-bold shadow-lg transition"
          >
            Follow on Twitter
          </a>
        </div>
      </main>
    </div>
  );
}
