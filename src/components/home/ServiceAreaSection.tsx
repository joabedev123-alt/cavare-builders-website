"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyConfig } from "@/data/company";

export const ServiceAreaSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SERVICE AREA"
          title="Serving Broward and Palm Beach County"
          description="Cavare Builders LLC provides construction and remodeling services throughout Broward County and Palm Beach County, helping homeowners create spaces designed for comfort, functionality, and lasting value."
          align="center"
          className="mb-16"
        />

        {/* 2 Regional County Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {companyConfig.primaryCounties.map((county, idx) => (
            <motion.div
              key={county.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 sm:p-10 bg-brand-marble/60 rounded-sm border border-brand-stone hover:border-brand-gold/60 transition-all duration-300 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-brand-gold font-semibold">
                    <i className="bi bi-geo-alt-fill" />
                    <span>Florida Service Area</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                </div>

                <h3 className="font-serif text-3xl font-medium text-brand-black mb-3">
                  {county.name}
                </h3>

                <p className="text-sm text-brand-muted font-light leading-relaxed mb-6">
                  {county.description}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-stone/60">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider font-semibold text-brand-black hover:text-brand-gold transition-colors"
                >
                  <span>Request Project Visit in {county.name}</span>
                  <i className="bi bi-arrow-right text-brand-gold" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
