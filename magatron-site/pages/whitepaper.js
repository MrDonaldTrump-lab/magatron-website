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
        {/* Background planet overlay */}
        <img
          src="/planet-overlay.png"
          alt="planet"
          className="absolute top-[10%] left-[5%] w-60 opacity-10 pointer-events-none z-0 animate-pulse"
        />

        <div className="relative z-10 max-w-5xl mx-auto py-16 px-6 bg-black/70 backdrop-blur-sm rounded-xl">
          <h1 className="text-5xl font-extrabold text-center text-red-400 mb-10">
            MAGATron Whitepaper
          </h1>

          {/* 1. Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">1. Introduction</h2>
            <p className="text-white/90">
              <span className="font-semibold">MAGATron (MAGT)</span> is an AI-powered, politically charged meme coin
              designed to take over the crypto space through relentless, viral, and provocative content.
              The token code, website, memes, and launch strategy are all generated with AI. The mission is simple:
              unleash a wave of AI-created political memes so strong that MAGATron becomes a culture movement.
            </p>
          </section>

          {/* 2. Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">2. Mission</h2>
            <p className="text-white/90">
              Flood the internet with AI-generated, politically charged memes and grow a community that thrives on
              virality, controversy, and humor. Community takes over; the future is whatever the swarm decides.
            </p>
          </section>

          {/* 3. Meme Manifesto */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">3. Meme Manifesto</h2>
            <p className="text-white/90">
              Memes move markets and shape culture. MAGATron weaponizes AI to produce high-impact memes synced to trending
              political moments. Every post is a campaign. Every laugh is fuel. Every share is momentum.
            </p>
          </section>

          {/* 4. Tokenomics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">4. Tokenomics</h2>
            <ul className="list-disc ml-6 text-white/90 space-y-2">
              <li><span className="font-semibold">Name:</span> MAGATron</li>
              <li><span className="font-semibold">Symbol:</span> MAGT</li>
              <li><span className="font-semibold">Chain:</span> Ethereum</li>
              <li><span className="font-semibold">Decimals:</span> 18</li>
              <li><span className="font-semibold">Total Supply:</span> 47,000,000,000 MAGT</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-red-200 mb-2">Planned Allocation</h3>
              <ul className="list-disc ml-6 text-white/90 space-y-2">
                <li><span className="font-semibold">Community Airdrops:</span> Rewards for early participants, meme creators, and engagement raiders.</li>
                <li><span className="font-semibold">Liquidity Pool (LP):</span> Seeded with ETH raised from the community.</li>
                <li><span className="font-semibold">Marketing Reserve:</span> Influencer pushes, trending boosts, and meme campaigns.</li>
                <li><span className="font-semibold">Team Wallet (temporary):</span> Modest ops allocation until ownership is renounced.</li>
              </ul>
            </div>
          </section>

          {/* 5. Launch Sequence */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">5. Launch Sequence</h2>
            <ol className="list-decimal ml-6 text-white/90 space-y-2">
              <li><span className="font-semibold">Contract Deployment</span> — Deploy MAGATron token.</li>
              <li><span className="font-semibold">Community Token Allocation</span> — Airdrop a portion to early supporters and meme contributors.</li>
              <li><span className="font-semibold">Raise ETH for Liquidity</span> — Gather ETH from the community to seed the LP.</li>
              <li><span className="font-semibold">Add Liquidity & Enable Trading</span> — Pair MAGT with ETH on Uniswap and open trading.</li>
              <li><span className="font-semibold">Lock LP Tokens</span> — Lock 100% of LP tokens to build trust and prevent rug risk.</li>
              <li><span className="font-semibold">Verify Contract</span> — Publish and verify source on Etherscan.</li>
              <li><span className="font-semibold">Third-Party Audit</span> — Submit for independent security review.</li>
              <li><span className="font-semibold">Renounce Ownership</span> — Hand full control to the community.</li>
              <li><span className="font-semibold">Lock Forever / Immutable</span> — Remove ability to change limits or trading parameters.</li>
              <li><span className="font-semibold">DEX Listings</span> — DEXTools, Uniswap Info tracking, then discovery on scanners.</li>
              <li><span className="font-semibold">CEX Listings</span> — Apply to small/mid-tier centralized exchanges.</li>
              <li><span className="font-semibold">Ongoing Meme Warfare</span> — Continuous AI meme drops to keep momentum.</li>
            </ol>
          </section>

          {/* 6. Roadmap */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">6. Roadmap — The Meme Takeover Plan</h2>
            <div className="space-y-6 text-white/90">
              <div>
                <h3 className="text-2xl font-semibold text-red-200">Phase 1 — AI Birth</h3>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Deploy contract; launch site & socials</li>
                  <li>First wave of AI political memes</li>
                  <li>Airdrop to early community</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-200">Phase 2 — Viral Launch</h3>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Add liquidity, enable trading, lock LP</li>
                  <li>Verify & audit contract</li>
                  <li>Renounce ownership</li>
                  <li>Daily AI meme campaigns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-200">Phase 3 — Meme Takeover</h3>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>DEXTools / CoinGecko / CoinMarketCap listings</li>
                  <li>First CEX listing</li>
                  <li>Meme raids on political hashtags</li>
                  <li>Competitions & bounty challenges</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-red-200">Phase 4 — Full Community Control</h3>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Community decides the future (pure meme or evolve)</li>
                  <li>Optional expansions: merch, events, new AI meme tools</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7. AI Advantage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-200 mb-4">7. The AI Advantage</h2>
            <p className="text-white/90">
              MAGATron is a 24/7 meme machine. AI generates, adapts, and times content to align with fast-moving trends,
              giving the community always-on firepower across social platforms.
            </p>
          </section>

          {/* 8. Disclaimer */}
          <section>
            <h2 className="text-3xl font-bold text-red-200 mb-4">8. Disclaimer</h2>
            <p className="text-white/90 italic">
              MAGATron is a meme-based community experiment for entertainment. No guarantees, no promises. Always DYOR.
            </p>
          </section>

          {/* Optional: link to downloadable PDF if you host it at /whitepaper/MAGATron_Whitepaper_v2.pdf */}
          <div className="mt-10 text-center">
            <a
              href="/whitepaper/MAGATron_Whitepaper_v2.pdf"
              className="inline-block px-6 py-3 rounded-lg border border-red-400/50 hover:border-red-300 text-red-200 hover:text-white transition"
            >
              Download PDF Whitepaper
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
