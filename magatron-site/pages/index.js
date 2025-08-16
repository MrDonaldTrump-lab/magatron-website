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
        {/* Favicons (files in /public) */}
        <link rel="icon" type="image/png" sizes="32x32" href="/magatron-32.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/magatron-512.png?v=2" />
        <link rel="apple-touch-icon" href="/magatron-512.png?v=2" />
        {/* Social preview */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MAGATron ($MAGT)" />
        <meta
          property="og:description"
          content="The intergalactic memecoin — to the moon… and beyond tariffs."
        />
        <meta property="og:image" content="/magatron-512.png?v=2" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MAGATron ($MAGT)" />
        <meta
          name="twitter:description"
          content="The intergalactic memecoin — to the moon… and beyond tariffs."
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
