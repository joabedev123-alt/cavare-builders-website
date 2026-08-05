"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData } from "@/data/projects";

export const FeaturedProject: React.FC = () => {
  const featured = projectsData.find((p) => p.isFeatured) || projectsData[0];

  return (
    <section className="py-24 bg-brand-stone/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FEATURED TRANSFORMATION"
          title="Spaces Reimagined with Purpose"
          className="mb-12"
        />

        {/* Featured Card Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-brand-black text-brand-marble rounded-sm overflow-hidden shadow-floating border border-brand-dark-border grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Featured Image (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[480px]">
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent lg:hidden" />

            <div className="absolute top-4 left-4 bg-brand-gold text-brand-black text-xs uppercase tracking-widest font-sans font-bold px-3 py-1 rounded-sm shadow-subtle">
              {featured.category}
            </div>
          </div>

          {/* Featured Details (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-brand-gold font-sans uppercase tracking-wider mb-2">
                <i className="bi bi-geo-alt" />
                <span>{featured.location}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-brand-marble mb-4">
                {featured.title}
              </h3>

              <p className="text-sm text-brand-stone/80 font-light leading-relaxed mb-6">
                {featured.summary}
              </p>

              {/* Intervention Bullet Points */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold">
                  Scope of Interventions:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-stone/90">
                  {featured.interventions.slice(0, 6).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-6 border-t border-brand-dark-border">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-subtle group"
              >
                <span>View Full Project</span>
                <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
