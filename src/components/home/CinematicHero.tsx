"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { companyConfig } from "@/data/company";

export const CinematicHero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-black">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
          alt="Luxury home remodeling by Cavare Builders LLC in South Florida"
          fill
          priority
          quality={90}
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Multilayer dark gradient overlay for optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-brand-gold/15 border border-brand-gold/40 rounded-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span className="text-[11px] font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              LUXURY CONSTRUCTION & REMODELING IN SOUTH FLORIDA
            </span>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-brand-marble tracking-tight leading-[1.1] mb-6"
          >
            Built with Precision. <br />
            <span className="italic font-normal text-brand-gold">Designed to Elevate</span> Everyday
            Living.
          </motion.h1>

          {/* Hero Subtitle Text */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg text-brand-stone/90 font-light leading-relaxed mb-8 max-w-2xl"
          >
            Cavare Builders LLC delivers complete construction, remodeling, and interior
            transformation services across Broward and Palm Beach County. From the first
            consultation to the final detail, every project is managed with craftsmanship,
            clarity, and purpose.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating group"
            >
              <span>{companyConfig.primaryGoalText}</span>
              <i className="bi bi-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-brand-marble/10 text-brand-marble border border-brand-marble/40 hover:border-brand-gold font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300"
            >
              <span>{companyConfig.secondaryGoalText}</span>
            </Link>
          </motion.div>

          {/* Service Region Sub-badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-3 text-xs text-brand-stone/70 border-t border-brand-marble/15 pt-6"
          >
            <i className="bi bi-geo-alt text-brand-gold text-sm" />
            <span>Serving Broward & Palm Beach County, Florida</span>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 text-brand-stone/60"
      >
        <span className="text-[10px] uppercase tracking-widest font-sans">Scroll</span>
        <a href="#intro" aria-label="Scroll down to introduction">
          <i className="bi bi-chevron-down text-sm animate-bounce text-brand-gold" />
        </a>
      </motion.div>
    </section>
  );
};
