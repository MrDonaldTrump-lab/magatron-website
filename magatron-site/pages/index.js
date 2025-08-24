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
          content="AI-powered, politically charged memecoin — built for virality."
        />
        {/* Favicons (files in /public) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/magatron-32.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/magatron-512.png?v=2" />
        <link rel="apple-touch-icon" href="/magatron-512.png?v=2" />
        {/* Social preview */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MAGATron ($MAGT)" />
        <meta
          property="og:description"
          content="AI-powered, politically charged memecoin — built for virality."
        />
        <meta property="og:image" content="/magatron-512.png?v=2" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MAGATron ($MAGT)" />
        <meta
          name="twitter:description"
          content="AI-powered, politically charged memecoin — built for virality."
        />
        <meta name="twitter:image" content="/magatron-512.png?v=2" />
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
              <img src="/magatron-32.png" alt="MAGATron" className="w-9 h-9" />
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
            AI-powered, politically charged memecoin — built for virality.
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
            <Badge>Anti-Whale: 2% Max Tx • 3% Max Wallet</Badge>
            <Badge>LP Lock After Launch</Badge>
          </div>
        </section>

        {/* Original hero image trio */}
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

        {/* Futuristic showcase */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center py-12 px-6 bg-gradient-to-t from-black/90 via-red-950/80 to-black"
        >
          <h2 className="text-3xl font-bold text-red-100 mb-8">The Future of Meme Power</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <img src="/Meme-resistence-banner.png" alt="Cyberpunk Trump" className="rounded-2xl shadow-xl" />
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
            <span className="font-semibold">MAGATron ($MAGT)</span> is a politically charged, meme-fueled ERC-20 token
            powered by AI-generated viral content. No VC, no presale — just community, memes, and a relentless push to
            dominate the timeline. From AI-crafted images to coordinated meme raids, MAGATron is engineered for virality.
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
            <InfoCard title="Distribution">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Community airdrops for early supporters & creators</li>
                <li>ETH raise to seed liquidity</li>
                <li>LP tokens locked forever after launch</li>
                <li>Team wallet only for ops until renounce</li>
              </ul>
            </InfoCard>
            <InfoCard title="Trust & Verification">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Contract verified on Etherscan</li>
                <li>Independent audit planned post-launch</li>
                <li>Ownership renounced after setup</li>
                <li>Immutable limits once locked forever</li>
              </ul>
            </InfoCard>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <InfoCard title="Links">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>
                  Contract: <span className="text-white/70">0x…youraddress</span>
                </li>
                <li>
                  <a href="/whitepaper" className="underline hover:text-white">Whitepaper</a>
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
            <InfoCard title="Network">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>Chain: Ethereum</li>
                <li>Token Standard: ERC-20</li>
                <li>Router: Uniswap V2</li>
                <li>Decimals: 18</li>
              </ul>
            </InfoCard>
            <InfoCard title="Anti-Whale">
              <ul className="list-disc list-inside text-white/90 space-y-1">
                <li>2% max transaction</li>
                <li>3% max wallet</li>
                <li>Pair address excluded</li>
                <li>Limits removable after launch</li>
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
                phase: "Phase 1 — Preparation",
                items: [
                  "Deploy ERC-20 contract (Ethereum)",
                  "Website & social media launch",
                  "Initial AI meme wave & community building",
                ],
              },
              {
                phase: "Phase 2 — Launch",
                items: [
                  "Community airdrops",
                  "Raise ETH → seed Uniswap LP",
                  "Enable trading",
                  "Lock LP tokens forever",
                  "Verify contract on Etherscan",
                  "Independent security audit",
                  "Renounce ownership",
                ],
              },
              {
                phase: "Phase 3 — Expansion",
                items: [
                  "DEX tracking (DEXTools/Uniswap Info) & CG/CMC submissions",
                  "CEX outreach and listings",
                  "Mass meme campaigns, hashtag raids, collabs",
                ],
              },
              {
                phase: "Phase 4 — Community Takeover",
                items: [
                  "Fully community-driven growth",
                  "New AI meme waves guided by holders",
                  "Ongoing viral marketing & bounties",
                ],
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
              Read the MAGATron mission, token design, launch protections, and meme-first strategy.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="/whitepaper"
                className="inline-block border border-white text-white py-2.5 px-5 rounded-xl hover:bg-white hover:text-black"
              >
                View Full Whitepaper
              </a>
              <a
                href="/whitepaper/MAGATron_Whitepaper_v2.pdf"
                className="inline-block border border-white/40 text-white/90 py-2.5 px-5 rounded-xl hover:border-white"
              >
                Download PDF
              </a>
            </div>
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
