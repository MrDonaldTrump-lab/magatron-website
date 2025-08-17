import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>MAGATron — The Meme Revolution</title>
        <meta name="description" content="Official site of MAGATron memecoin" />
        <link rel="icon" type="image/png" sizes="32x32" href="/magatron-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/magatron-512.png" />
        <link rel="apple-touch-icon" href="/magatron-512.png" />
        <meta property="og:image" content="/magatron-512.png" />
      </Head>

      <div className="relative min-h-screen text-white font-sans bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
        {/* Background planet overlay */}
        <img
          src="/planet-overlay.png"
          alt="planet"
          className="absolute top-[10%] left-[5%] w-60 opacity-10 pointer-events-none z-0 animate-pulse"
        />

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl font-extrabold text-red-500 drop-shadow-lg"
          >
            MAGATron
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl"
          >
            The politically charged, meme-fueled, community-powered token leading the digital revolution.
          </motion.p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/whitepaper"
              className="inline-block border border-white text-white py-2.5 px-5 rounded-xl hover:bg-white hover:text-black transition"
            >
              View Full Whitepaper
            </Link>
            <a
              href="https://x.com/magatron_coin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-red-500 text-red-500 py-2.5 px-5 rounded-xl hover:bg-red-600 hover:text-white transition"
            >
              Follow on X
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <footer className="relative z-10 py-6 bg-black/50 backdrop-blur-sm text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} MAGATron —{" "}
            <Link href="/whitepaper" className="underline hover:text-white">
              Whitepaper
            </Link>{" "}
            |{" "}
            <a
              href="https://x.com/magatron_coin"
              className="underline hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
