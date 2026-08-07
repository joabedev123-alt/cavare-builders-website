"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-24 bg-brand-marble relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Editorial Content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col space-y-6"
          >
            <SectionHeading
              eyebrow="FROM CONCEPT TO COMPLETION"
              title="One Team. Every Detail. A Complete Transformation."
            />

            <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              Cavare Builders LLC brings construction, remodeling, and refined interior execution
              together in one coordinated process. We help homeowners transform kitchens,
              bathrooms, living areas, and complete properties through thoughtful planning,
              trusted craftsmanship, and close attention to every finish.
            </p>

            {/* Gold Line Divider */}
            <div className="w-20 h-[2px] bg-brand-gold my-2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-brand-gold pl-4 py-1">
                <h4 className="font-serif text-lg font-medium text-brand-black">
                  Coordinated Execution
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  Single point of leadership across all construction trades and interior finishes.
                </p>
              </div>

              <div className="border-l-2 border-brand-gold pl-4 py-1">
                <h4 className="font-serif text-lg font-medium text-brand-black">
                  Craftsmanship Focus
                </h4>
                <p className="text-xs text-brand-muted mt-1">
                  Precision alignments, premium materials, and flawless architectural handoffs.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-brand-black hover:bg-brand-gold text-brand-marble hover:text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-subtle group"
              >
                <span>Discover Cavare Builders</span>
                <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Overlapping Editorial Photo Composition (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-sm overflow-hidden shadow-card border border-brand-stone">
                <Image
                  src="/images/Full-renovation-company-remodeling-in-Fort-Lauderdale-scaled.jpeg"
                  alt="Interior transformation detail by Cavare Builders"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Secondary Overlapping Inset Image */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-3/5 h-52 sm:h-60 rounded-sm overflow-hidden shadow-floating border-4 border-brand-marble">
                <Image
                  src="/images/1-custom-furniture-wall-panels-decorative-wall-panels-wood-slat-walls-fluted-wall-panels-feature-walls-accent-walls-custom-millworkt-custom-cabinetry-scaled.jpg"
                  alt="Kitchen renovation craftsmanship by Cavare Builders"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Badge: Built for South Florida Living */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-brand-black text-brand-marble p-4 rounded-sm shadow-floating border border-brand-gold/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <i className="bi bi-patch-check text-lg" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-gold font-sans font-semibold">
                    Quality Standard
                  </p>
                  <p className="font-serif text-sm font-medium">Built for South Florida Living</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
