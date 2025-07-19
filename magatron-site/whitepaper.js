import React from 'react';

export default function Whitepaper() {
  return (
    <div className="relative min-h-screen text-white font-sans bg-gradient-to-br from-red-950 via-black to-red-900 overflow-hidden">
      <img
        src="/planet-overlay.png"
        alt="planet"
        className="absolute top-[10%] left-[5%] w-60 opacity-10 pointer-events-none z-0 animate-pulse"
      />

      <div className="relative z-10 max-w-5xl mx-auto py-16 px-6 bg-black/70 backdrop-blur-sm rounded-xl">
        <h1 className="text-5xl font-extrabold text-center text-red-400 mb-10">MAGATron Whitepaper</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-200 mb-4">1. Introduction</h2>
          <p className="text-white/90">
            MAGATron is a politically charged, meme-fueled, community-powered crypto token inspired by a futuristic timeline
            where red-mech freedom fighters lead the charge against centralization and tyranny. Fueled by humor, power,
            and the spirit of MAGA, MAGATron is more than a coin — it's a digital revolution.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-200 mb-4">2. Vision & Lore</h2>
          <p className="text-white/90">
            In an alternate future, President MAGAtron and his elite squad of cybernetic patriots wage war against corrupt,
            centralized financial overlords. With laser-eyed meme magic and blockchain shields, they fight to restore freedom
            across the galaxy. MAGATron is the memecoin that powers this rebellion.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-200 mb-4">3. Tokenomics</h2>
          <ul className="list-disc ml-6 text-white/90 space-y-2">
            <li>Total Supply: 47,000,000,000 MAGT (inspired by the 47th President)</li>
            <li>Public Liquidity (LP Pool): 80% — locked for at least 6 months</li>
            <li>Community Airdrops & Meme Campaigns: 10%</li>
            <li>Team Wallet: 5% — vested over 6 months</li>
            <li>Treasury/DAO/Staking: 5%</li>
            <li>Burn Mechanism: Optional 1–2% transaction-based burn in future phases</li>
            <li>Initial Launch on Solana, with future interoperability planned</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-200 mb-4">4. Utility & Ecosystem</h2>
          <p className="text-white/90">
            MAGT powers a range of community-focused and meme-based activities: airdrops, staking, NFT avatar access, voting rights, GameFi integration, and future comic-based experiences. We also aim to support politically inspired digital artwork and meme creation as part of our cultural and creative expression. A thriving creative community will be encouraged to submit memes, artworks, animations, and political satire.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-200 mb-4">5. Roadmap</h2>
          <ol className="list-decimal ml-6 text-white/90 space-y-2">
            <li>Token Launch (Solana)</li>
            <li>Website & Social Media Growth</li>
            <li>Community Campaigns, Airdrops</li>
            <li>CoinGecko & CoinMarketCap Listings</li>
            <li>Staking Platform</li>
            <li>DAO Governance Launch</li>
            <li>NFT Drop: MAGATron Avatars</li>
            <li>Cross-chain Expansion (Ethereum, Base)</li>
            <li>GameFi + MemeFi Partnerships</li>
          </ol>
          <p className="text-white/90 mt-4">
            Over time, the MAGATron roadmap will be shaped by the community. Proposals and votes will determine which features, campaigns, or ecosystem tools are prioritized — allowing for organic, decentralized evolution of the project.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-200 mb-4">6. Security & Trust</h2>
          <p className="text-white/90">
            MAGATron will lock liquidity for a minimum of 6–12 months using a trusted locker. No VC funding, no presale,
            and no backdoor minting functions. Contract will be audited (if custom-built) and open-sourced.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-red-200 mb-4">7. Governance</h2>
          <p className="text-white/90">
            Community governance will be activated in Phase 3. MAGT holders will be able to vote on future utilities,
            burns, liquidity strategies, and community campaigns via DAO. The community will also help shape future roadmap milestones and cultural directions.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-red-200 mb-4">8. Disclaimer</h2>
          <p className="text-white/90 italic">
            MAGATron is a meme-based community experiment. This is not financial advice. Always DYOR (Do Your Own Research).
            MAGATron is not affiliated with any political campaign or person.
          </p>
        </section>
      </div>
    </div>
  );
}
