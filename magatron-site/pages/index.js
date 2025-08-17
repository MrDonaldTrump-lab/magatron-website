import React from "react";
import Head from "next/head";

export default function Whitepaper() {
  return (
    <>
      <Head>
        <title>MAGATron — Whitepaper</title>
        <meta name="description" content="MAGATron official whitepaper" />
        <link rel="icon" type="image/png" sizes="32x32" href="/magatron-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/magatron-512.png" />
        <link rel="apple-touch-icon" href="/magatron-512.png" />
        <meta property="og:image" content="/magatron-512.png" />
      </Head>

      <div className="relative min-h-screen text-white font-sans bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto py-16 px-6 bg-black/70 backdrop-blur-sm rounded-xl">
          <h1 className="text-5xl font-extrabold text-center text-red-400 mb-10">
            MAGATron Whitepaper
          </h1>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">1. Introduction</h2>
            <p className="text-white/90">
              MAGATron is a politically charged, meme-fueled, community-powered crypto token inspired by a futuristic timeline
              where red-mech freedom fighters lead the charge against centralization and tyranny.
            </p>
          </section>

          {/* Vision */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">2. Vision & Lore</h2>
            <p className="text-white/90">
              In an alternate future, President MAGAtron and his cybernetic patriots wage war against corrupt centralized overlords.
              With meme magic and blockchain shields, they fight to restore freedom across the galaxy.
            </p>
          </section>

          {/* Tokenomics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">3. Tokenomics</h2>
            <ul className="list-disc ml-6 text-white/90 space-y-2">
              <li>Total Supply: 47,000,000,000 MAGT</li>
              <li>Public Liquidity Pool: 80% (locked 6 months)</li>
              <li>Community Airdrops & Campaigns: 10%</li>
              <li>Team Wallet: 5% (vested 6 months)</li>
              <li>Treasury/DAO/Staking: 5%</li>
              <li>Optional burn mechanism in future</li>
            </ul>
          </section>

          {/* Utility */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">4. Utility & Ecosystem</h2>
            <p className="text-white/90">
              MAGT fuels staking, NFT avatars, voting rights, GameFi, and meme creation. The ecosystem thrives on community-driven creativity.
            </p>
          </section>

          {/* Roadmap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">5. Roadmap</h2>
            <ol className="list-decimal ml-6 text-white/90 space-y-2">
              <li>Token Launch (Solana)</li>
              <li>Website & Social Media Growth</li>
              <li>Community Campaigns & Airdrops</li>
              <li>Listings (CoinGecko, CMC)</li>
              <li>Staking Platform</li>
              <li>DAO Governance</li>
              <li>NFT Drop</li>
              <li>Cross-chain Expansion</li>
              <li>GameFi + MemeFi Partnerships</li>
            </ol>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">6. Security & Trust</h2>
            <p className="text-white/90">
              Liquidity locked for 6–12 months, no VC presale, no backdoor minting. Contracts will be audited and open-sourced.
            </p>
          </section>

          {/* Governance */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">7. Governance</h2>
            <p className="text-white/90">
              DAO voting will let MAGT holders decide burns, liquidity strategies, and campaigns.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-3xl font-bold text-red-200 mb-4">8. Disclaimer</h2>
            <p className="text-white/90 italic">
              MAGATron is a meme-based community experiment. This is not financial advice. Always DYOR.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
