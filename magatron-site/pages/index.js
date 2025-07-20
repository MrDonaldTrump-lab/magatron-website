import React from 'react';
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <div className="relative min-h-screen text-white font-sans bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
      <img
        src="/planet-overlay.png"
        alt="planet"
        className="absolute top-[20%] right-[5%] w-60 opacity-20 pointer-events-none z-0 animate-pulse"
      />

      <header className="relative z-10 text-center py-10 bg-gradient-to-r from-red-800 to-red-600 shadow-lg">
        <img src="/magatron-logo.png" alt="MAGATron Logo" className="mx-auto w-40 mb-4" />
        <h1 className="text-5xl font-extrabold tracking-tight">MAGATron</h1>
        <p className="text-lg mt-2 italic text-red-100">The Memecoin from the Future Timeline</p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-red-300">Join Telegram</button>
          <button className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-red-500">Buy (Coming Soon)</button>
        </div>
      </header>

      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 flex flex-col items-center py-10 px-6 bg-[url('/cosmic-bg.png')] bg-cover bg-center">
        <img src="/trump-hero.png" alt="Hero Trump" className="w-72 rounded-2xl shadow-2xl mb-6" />
        <img src="/trump-kids.png" alt="Crypto Kids" className="w-96 rounded-2xl shadow-2xl mb-6" />
        <img src="/magatron-retro-trump.png" alt="Retro Futuristic Trump" className="w-96 rounded-2xl shadow-2xl" />
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 px-6 py-12 max-w-5xl mx-auto bg-gradient-to-br from-black to-red-950 border-t border-red-700">
        <h2 className="text-3xl font-bold mb-4 text-red-100">About MAGATron</h2>
        <p className="text-white/90 text-md">
          MAGATron is a politically charged, meme-fueled, community-powered crypto movement. Born in an alternate dimension,
          it features Trump and his futuristic family as red-mech heroes leading the charge against centralization. MAGATron is
          more than a token — it's a revolution backed by memes, tech, and decentralization.
        </p>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 bg-[url('/cosmic-bg.png')] bg-cover bg-center px-6 py-12 border-t border-red-700">
        <div className="max-w-5xl mx-auto backdrop-blur-sm bg-black/60 p-6 rounded-xl relative">
          <img
            src="/planet-overlay.png"
            alt="planet"
            className="absolute -top-10 -left-10 w-40 opacity-10 pointer-events-none"
          />
          <h2 className="text-3xl font-bold mb-4 text-red-100">Tokenomics</h2>
          <ul className="list-disc list-inside text-white/90 space-y-2">
            <li>Total Supply: 47,000,000,000 MAGT</li>
            <li>Chains: Ethereum & Solana</li>
            <li>Distribution: 90% Community, 5% Team, 5% Liquidity</li>
            <li>No Presale, No VC — 100% Grassroots</li>
            <li>Burn Mechanism: Active deflation through transaction-based burns</li>
            <li>Staking: Planned for Phase 3</li>
          </ul>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 px-6 py-12 max-w-5xl mx-auto bg-black border-t border-red-700">
        <h2 className="text-3xl font-bold mb-4 text-red-100">Roadmap</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["Phase 1", "Phase 2"].map((phase, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
              <strong>{phase}:</strong>
              <ul className="list-disc list-inside ml-4 mt-2 text-white/90">
                {phase === "Phase 1" && [
                  "Token Creation on Solana and Ethereum",
                  "Website & Social Launch",
                  "Community Building",
                  "Initial Meme Campaigns",
                ].map((item, idx) => <li key={idx}>{item}</li>)}

                {phase === "Phase 2 (After phase 2 community will drive, any updates or just keep pure meme based ecosystem" && [
                  "CoinGecko & CoinMarketCap Listings",
                  "DEX Liquidity (Raydium/Uniswap)",
                  "Weekly Airdrops & Meme Contests",
                  "Telegram & Twitter Campaigns",
                ].map((item, idx) => <li key={idx}>{item}</li>)}

                {phase === "Phase 3 (Community takeover from here)" && [
                  "Staking Platform Launch",
                  "DAO Governance Voting",
                  "NFT Collection: MAGATron Avatars",
                  "GameFi Exploration",
                ].map((item, idx) => <li key={idx}>{item}</li>)}

                {phase === "Phase 4 (Roadmap updates will be community driven)" && [
                  "Cross-Chain Integration",
                  "Major Exchange Listings",
                  "Real-World Partnerships",
                  "Celebrity Endorsements & Events",
                ].map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 bg-[url('/cosmic-bg.png')] bg-cover bg-center px-6 py-12 max-w-5xl mx-auto border-t border-red-700">
        <div className="backdrop-blur-md bg-black/70 p-6 rounded-xl relative">
          <img
            src="/planet-overlay.png"
            alt="planet"
            className="absolute bottom-0 right-0 w-32 opacity-10 pointer-events-none"
          />
          <h2 className="text-3xl font-bold mb-6 text-red-100">Whitepaper</h2>
          <p className="text-white/90 mb-4">
            MAGATron's whitepaper outlines the mission, tokenomics, governance, roadmap, and future vision of the ecosystem.
            It is a must-read for anyone looking to dive deeper into the philosophy and mechanics of the project.
          </p>
          <a href="/whitepaper">
           <button className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black">View Full Whitepaper</button>
          </a>
        </div>
      </motion.section>

      <motion.section variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative z-10 bg-gradient-to-r from-red-700 to-black px-6 py-12 text-center border-t border-red-800">
        <h2 className="text-3xl font-bold mb-4 text-red-100">Follow Us</h2>
        <div className="flex justify-center gap-4">
          <button className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black">Twitter</button>
          <button className="border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black">Telegram</button>
        </div>
      </motion.section>

      <footer className="relative z-10 text-center text-sm text-white/60 py-6 border-t border-red-800 bg-black">
        © 2025 MAGATron. All rights reserved. Not financial advice.
      </footer>
    </div>
  );
}
