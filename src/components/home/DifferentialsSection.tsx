"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface DifferentialItem {
  icon: string;
  title: string;
  description: string;
}

const differentialsList: DifferentialItem[] = [
  {
    icon: "shield-check",
    title: "Complete Project Support",
    description:
      "A coordinated process from the initial conversation through final completion.",
  },
  {
    icon: "chat-left-text",
    title: "Clear Communication",
    description:
      "Straightforward updates, organized decisions, and transparency throughout the project.",
  },
  {
    icon: "gem",
    title: "Detail-Focused Execution",
    description:
      "Careful attention to alignment, finishes, transitions, surfaces, and final presentation.",
  },
  {
    icon: "layers",
    title: "Curated Materials",
    description:
      "Selections guided by performance, design, durability, and the character of each space.",
  },
  {
    icon: "arrow-repeat",
    title: "Reliable Coordination",
    description:
      "Trades, scheduling, materials, and project stages managed with consistency.",
  },
  {
    icon: "sun",
    title: "Built for South Florida",
    description:
      "Solutions developed with local homes, climate, lifestyle, and property requirements in mind.",
  },
];

export const DifferentialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-brand-marble relative overflow-hidden border-y border-brand-dark-border">
      {/* Background subtle architectural line geometry */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(#C8A561_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE CAVARE STANDARD"
          title="A Better Building Experience Starts with Better Coordination"
          align="center"
          darkBackground
          className="mb-16"
        />

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentialsList.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 bg-brand-dark/90 rounded-sm border border-brand-dark-border hover:border-brand-gold/50 transition-all duration-300 group shadow-dark"
            >
              <div className="w-12 h-12 rounded-sm bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                <i className={`bi bi-${item.icon} text-xl`} />
              </div>

              <h3 className="font-serif text-2xl font-medium text-brand-marble mb-3 group-hover:text-brand-gold transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-brand-stone/70 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
