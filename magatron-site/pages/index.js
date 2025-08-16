// pages/index.js
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>MAGATron ($MAGT)</title>
        <meta
          name="description"
          content="The intergalactic memecoin — to the moon… and beyond tariffs."
        />
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/magatron-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/magatron-512.png" />
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

      <div className="relative min-h-screen text-white font-sans bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
        {/* Floating background accent */}
        <img
          src="/planet-overlay.png"
          alt="planet"
          className="absolute top-[20%] right-[5%] w-60 opacity-20 pointer-events-none z-0 animate-pulse"
        />

        {/* Header / Nav */}
        <header className="relative z-10 border-b border-red-800/50 bg-black/40 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/icons/magatron-32.png" alt="MAGATron" className="w-9 h-9" />
              <span className="text-xl font-extrabold tracking-tight">MAGATron</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-white/80">
              <a href="#about" className="hover:text-white">About</a>
              <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
              <a href="#roadmap" className="hover:text-white">Roadmap</a>
              <a href="#whitepaper" className="hover:text-white">Whitepaper</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/MAGATron_Coin"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl bg-white text-black font-semibold hover:bg-red-300"
              >
                Follow X
              </a>
              <a
                href="/presale"
                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 font-semibold"
              >
                Presale
              </a>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative z-10 text-center py-14 md:py-20 bg-gradient-to-r from-red-800/40 to-red-600/20">
          <img
            src="/magatron-logo.png"
            alt="MAGATron Logo"
            className="mx-auto w-40 md:w-48 mb-5 drop-shadow-[0_10px_30px_rgba(255,0,0,0.35)]"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">MAGATron</h1>
          <p className="text-lg md:text-xl mt-3 text-red-100">
            The intergalactic memecoin — to the moon… and beyond tariffs.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              className="bg-white text-black font-bold py-2.5 px-5 rounded-2xl hover:bg-red-300"
              href="https://x.com/MAGATron_Coin"
              target="_blank"
              rel="noreferrer"
            >
              Follow X
            </a>
            <a
              className="bg-white/10 text-white font-bold py-2.5 px-5 rounded-2xl hover:bg-white/20"
              href="#tokenomics"
            >
              View Tokenomics
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <Badge>47,000,000,000 Supply</Badge>
            <Badge>18 Decimals</Badge>
            <Badge>Anti Whale: 2% Max Tx • 3% Max Wallet</Badge>
            <Badge>LP Lock on Launch</Badge>
          </div>
        </section>

        {/* Original hero image trio (restored) */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center py-10 px-6 bg-[url('/cosmic-bg.png')] bg-cover bg-center"
        >
          <img src="/trump-hero.png" alt="Hero Trump" className="w-72 rounded-2xl shadow-2xl mb-6" />
          <img src="/trump-kids.png" alt="Crypto Kids" className="w-96 rounded-2xl shadow-2xl mb-6" />
          <img
            src="/magatron-retro-trump.png"
            alt="Retro Futuristic Trump"
            className="w-96 rounded-2xl shadow-2xl"
          />
        </motion.section>

        {/* Futuristic showcase (restored) */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center py-12 px-6 bg-gradient-to-t from-black/90 via-red-950/80 to-black"
        >
          <h2 className="text-3xl font-bold text-red-100 mb-8">The Future of Meme Power</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img src="/trump-cyberpunk.png" alt="Cyberpunk Trump" className="rounded-2xl shadow-xl" />
            <img src="/trump-mech.png" alt="Trump Mech" className="rounded-2xl shadow-xl" />
            <img src="/trump-futuristic.png" alt="Futuristic Trump" className="rounded-2xl shadow-xl" />
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 px-6 py-12 max-w-5xl mx-auto bg-black/50 backdrop-blur-md rounded-2xl border border-red-700"
        >
          <h2 className="text-3xl font-bold mb-4 text-red-100">About MAGATron</h2>
          <p className="text-white/90 leading-relaxed">
            MAGATron is a meme-fueled, community-powered ERC-20 built for speed and fun. Fixed supply, no minting after deploy,
            and clear launch protection via trading gates and anti-whale limits. We grow through memes, contests, and transparent
            updates.
          </p>
        </motion.section>

        {/* Tokenomics */}
        <motion.section
          id="tokenomics"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 px-6 py-12 max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <InfoCard title="Supply & Limits">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Total Supply: 47,000,000,000 MAGT</li>
                <li>Decimals: 18</li>
                <li>Max Tx: 2% • Max Wallet: 3%</li>
                <li>No minting after deploy</li>
              </ul>
            </InfoCard>
            <InfoCard title="Security">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>OpenZeppelin ERC-20 + Ownable2Step</li>
                <li>Enable trading or schedule start</li>
                <li>Optional: lockForever() after launch</li>
                <li>LP locked via LPManager</li>
              </ul>
            </InfoCard>
            <InfoCard title="Links">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>
                  Contract: <span className="text-white/70">0x…youraddress</span>
                </li>
                <li>
                  <a href="/whitepaper.pdf" className="underline hover:text-white">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/MAGATron_Coin"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:text-white"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="/discord" className="underline hover:text-white">
                    Discord
                  </a>
                </li>
              </ul>
            </InfoCard>
          </div>
        </motion.section>

        {/* Roadmap */}
        <motion.section
          id="roadmap"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 px-6 py-12 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-red-100">Roadmap</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                phase: "Phase 1",
                items: [
                  "ERC-20 deploy (Ethereum)",
                  "Website + Socials",
                  "Meme campaign v1",
                  "LP lock via LPManager",
                ],
              },
              {
                phase: "Phase 2",
                items: [
                  "DEX liquidity (Uniswap)",
                  "CoinGecko & CMC submissions",
                  "Weekly meme contests",
                  "Spaces/AMAs",
                ],
              },
              {
                phase: "Phase 3 (Community)",
                items: ["DAO-style votes for features", "Branded meme packs", "CEX outreach"],
              },
            ].map(({ phase, items }, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10"
              >
                <strong className="text-lg">{phase}</strong>
                <ul className="list-disc list-inside ml-4 mt-2 text-white/90 space-y-1">
                  {items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Whitepaper */}
        <motion.section
          id="whitepaper"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 px-6 py-12 max-w-5xl mx-auto"
        >
          <div className="backdrop-blur-md bg-black/70 p-6 rounded-2xl border border-white/10 relative">
            <h2 className="text-3xl font-bold mb-4 text-red-100">Whitepaper</h2>
            <p className="text-white/90 mb-5">
              Dive into mission, token design, launch protection, and community growth mechanics.
            </p>
            <a
              href="/whitepaper.pdf"
              className="inline-block border border-white text-white py-2.5 px-5 rounded-xl hover:bg-white hover:text-black"
            >
              View Full Whitepaper
            </a>
          </div>
        </motion.section>

        {/* Follow */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 bg-gradient-to-r from-red-700 to-black px-6 py-12 text-center border-t border-red-800"
        >
          <h2 className="text-3xl font-bold mb-4 text-red-100">Follow Us</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://x.com/MAGATron_Coin"
              target="_blank"
              rel="noreferrer"
              className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black"
            >
              Twitter
            </a>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="relative z-10 text-center text-sm text-white/60 py-6 border-t border-red-800 bg-black">
          © {new Date().getFullYear()} MAGATron. All rights reserved. Not financial advice.
        </footer>
      </div>
    </>
  );
}

/* Small UI helpers */
function Badge({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">
      {children}
    </span>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}
