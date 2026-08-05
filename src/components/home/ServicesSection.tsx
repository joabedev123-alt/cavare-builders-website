"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import { companyConfig } from "@/data/company";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="OUR EXPERTISE"
          title="Complete Construction and Remodeling Services"
          description="From targeted renovations to complete property transformations, our team coordinates every phase with a commitment to quality, communication, and lasting results."
          align="center"
          className="mb-16"
        />

        {/* 8 Architectural Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-brand-marble/50 rounded-sm border border-brand-stone hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-subtle hover:shadow-card"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent" />

                {/* Editorial Number & Icon Badge */}
                <div className="absolute top-3 right-3 bg-brand-black/80 backdrop-blur-sm text-brand-gold px-2.5 py-1 rounded text-xs font-sans font-semibold border border-brand-gold/30">
                  {service.number}
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-brand-marble">
                  <div className="w-8 h-8 rounded-full bg-brand-gold text-brand-black flex items-center justify-center shadow-subtle">
                    <i className={`bi bi-${service.icon} text-sm`} />
                  </div>
                  <span className="text-[11px] font-sans uppercase tracking-wider text-brand-stone">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-brand-black group-hover:text-brand-gold transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-brand-stone/60 flex items-center justify-between">
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-sans uppercase tracking-wider text-brand-black group-hover:text-brand-gold font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Schedule Consultation</span>
                    <i className="bi bi-arrow-right text-brand-gold group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href={companyConfig.getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                    className="text-brand-muted hover:text-[#25D366] transition-colors p-1"
                    title="Quick Inquiry on WhatsApp"
                  >
                    <i className="bi bi-whatsapp text-base" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
