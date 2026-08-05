"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyConfig } from "@/data/company";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We learn about your property, priorities, inspiration, timeline, and the scope of your project.",
    icon: "clipboard-data",
  },
  {
    number: "02",
    title: "Planning and Selections",
    description:
      "The project is organized around layout, materials, finishes, technical requirements, and execution strategy.",
    icon: "palette",
  },
  {
    number: "03",
    title: "Construction and Coordination",
    description:
      "Our team coordinates the work, maintains communication, and focuses on quality throughout every stage.",
    icon: "tools",
  },
  {
    number: "04",
    title: "Final Review",
    description:
      "The completed space is carefully reviewed to ensure the details, finishes, and overall result meet the project vision.",
    icon: "check-circle",
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-marble relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR PROCESS"
          title="A Clear Path from Vision to Completion"
          align="center"
          className="mb-16"
        />

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-brand-gold/30 -z-0 -translate-y-6" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative z-10 bg-white p-8 rounded-sm border border-brand-stone hover:border-brand-gold transition-all duration-300 shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-brand-gold">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-brand-marble flex items-center justify-center text-brand-black">
                    <i className={`bi bi-${step.icon} text-lg`} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-medium text-brand-black mb-3">
                  {step.title}
                </h3>

                <p className="text-xs text-brand-muted font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-full h-[2px] bg-brand-stone group-hover:bg-brand-gold transition-colors mt-6" />
            </motion.div>
          ))}
        </div>

        {/* Action CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-black hover:bg-brand-gold text-brand-marble hover:text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-card"
          >
            <span>{companyConfig.primaryGoalText}</span>
            <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};
