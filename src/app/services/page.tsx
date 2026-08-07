import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Our Construction & Remodeling Services | Cavare Builders LLC",
  description:
    "Explore dedicated construction and remodeling services by Cavare Builders LLC in South Florida: Full Home Remodeling, Kitchens, Bathrooms, Flooring, Doors & Windows, Custom Millwork, and Project Management.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      {/* Header Banner & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Breadcrumb items={[{ label: "Services" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              OUR SPECIALIZED SERVICES
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Craftsmanship Across <br />
            <span className="italic font-normal text-brand-gold">Every Dedicated Trade.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            Cavare Builders LLC offers specialized construction, structural remodeling, and interior
            transformation services across South Florida. Explore each dedicated area below to learn
            how we bring precision and coordinated execution to every project.
          </p>
        </div>
      </div>

      {/* Services Grid (8 Dedicated Service Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-sm border border-brand-stone hover:border-brand-gold/60 transition-all duration-300 overflow-hidden shadow-subtle hover:shadow-card flex flex-col justify-between"
            >
              {/* Service Cover Image */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-brand-black/80 backdrop-blur-sm text-brand-gold text-xs font-sans font-bold px-3 py-1 rounded-sm border border-brand-gold/30">
                  {service.number}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-brand-gold">
                    <i className={`bi bi-${service.icon} text-lg`} />
                    <span className="text-[11px] uppercase tracking-wider font-sans font-semibold text-brand-muted">
                      {service.subtitle}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl font-medium text-brand-black group-hover:text-brand-gold transition-colors mb-3">
                    {service.title}
                  </h2>

                  <p className="text-xs text-brand-muted font-light leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-brand-black font-sans">
                        <i className="bi bi-check2 text-brand-gold" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-stone/60">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-between w-full text-xs uppercase tracking-wider text-brand-black group-hover:text-brand-gold font-bold transition-colors"
                  >
                    <span>View Dedicated Page</span>
                    <i className="bi bi-arrow-right text-brand-gold text-base group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-brand-black text-brand-marble py-16 border-t border-brand-dark-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            eyebrow="READY TO CONSULT WITH OUR TEAM?"
            title="Have a Specific Project in Mind?"
            description="Speak directly with Cavare Builders LLC to discuss your architectural plans, trade requirements, and timelines."
            align="center"
            darkBackground
            className="mb-8"
          />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
            >
              Request a Consultation
            </Link>
            <a
              href={companyConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent hover:bg-white/10 text-brand-marble border border-brand-marble/40 font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 flex items-center gap-2"
            >
              <i className="bi bi-whatsapp text-[#25D366] text-base" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
