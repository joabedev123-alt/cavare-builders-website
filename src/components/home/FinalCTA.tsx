"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { companyConfig } from "@/data/company";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-brand-marble relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-16 rounded-sm bg-brand-dark/80 border border-brand-gold/40 shadow-floating"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-brand-gold inline-block" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              LET’S BUILD SOMETHING EXCEPTIONAL
            </span>
            <span className="w-6 h-[1px] bg-brand-gold inline-block" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-brand-marble tracking-tight leading-tight mb-6">
            Your Property Has More Potential. <br />
            <span className="italic font-normal text-brand-gold">Let’s Bring It to Life.</span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-brand-stone/80 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Schedule a consultation with Cavare Builders LLC and take the first step toward a more
            functional, refined, and beautifully completed space.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
            >
              {companyConfig.primaryGoalText}
            </Link>

            <a
              href={companyConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 text-brand-marble border border-brand-gold/60 font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
            >
              <i className="bi bi-whatsapp text-[#25D366] text-base" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Direct Phone Call */}
          <div className="pt-6 border-t border-brand-dark-border inline-flex items-center gap-2 text-xs text-brand-stone font-sans">
            <span>Or call us directly:</span>
            <a
              href={companyConfig.getPhoneLink()}
              className="text-brand-gold font-semibold hover:underline"
            >
              {companyConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
