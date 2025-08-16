import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>MAGATron - Memecoin Revolution</title>
        <meta
          name="description"
          content="The official MAGATron memecoin - 47B supply, anti-whale protection, LP locked on launch. Join the revolution."
        />
        <meta property="og:title" content="MAGATron - Memecoin Revolution" />
        <meta
          property="og:description"
          content="47B supply • Anti-whale • LP locked • Decentralized power to the people."
        />
        <meta property="og:image" content="/logo.png" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white font-sans">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 px-6">
          <motion.img
            src="/logo.png"
            alt="MAGATron Logo"
            className="w-40 h-40 mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            MAGATron
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            47,000,000,000 Supply • 18 Decimals <br />
            Anti-Whale: 2% Max Tx • 3% Max Wallet <br />
            LP Lock on Launch
          </p>
          <motion.a
            href="https://x.com/MAGATron_Coin"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-full shadow-lg transition"
            whileHover={{ scale: 1.1 }}
          >
            Follow X
          </motion.a>
