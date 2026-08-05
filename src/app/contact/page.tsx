import React from "react";
import Metadata from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/contact/ContactForm";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Contact Us | Cavare Builders LLC",
  description:
    "Schedule a consultation for home remodeling, kitchen renovation, or interior transformation with Cavare Builders LLC in Broward and Palm Beach County, Florida.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-marble min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              CONTACT CAVARE BUILDERS LLC
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Let’s Talk About <br />
            <span className="italic font-normal text-brand-gold">Your Project.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            Tell us about your property, goals, and preferred timeline. Our team will review your
            information and contact you to discuss the next steps.
          </p>
        </div>
      </div>

      {/* 2-Column Contact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Contact Info (5 cols) */}
          <div className="lg:col-span-5 bg-brand-black text-brand-marble p-8 sm:p-10 rounded-sm border border-brand-dark-border shadow-floating space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-brand-marble mb-4">
                Direct Contact Information
              </h3>
              <p className="text-xs text-brand-stone/80 font-light leading-relaxed">
                Connect with our project leadership directly via phone or WhatsApp for prompt
                inquiries and scheduling.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-brand-dark-border text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-telephone text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-widest text-brand-gold font-semibold mb-1">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href={companyConfig.getPhoneLink()}
                    className="text-base font-serif font-medium text-brand-marble hover:text-brand-gold transition-colors block"
                  >
                    {companyConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-geo-alt text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-widest text-brand-gold font-semibold mb-1">
                    Service Area
                  </h4>
                  <p className="text-xs text-brand-stone/90 leading-relaxed">
                    Broward County and Palm Beach County, Florida
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-clock text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-widest text-brand-gold font-semibold mb-1">
                    Availability
                  </h4>
                  <p className="text-xs text-brand-stone/90 leading-relaxed">
                    {companyConfig.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-6 border-t border-brand-dark-border flex flex-col sm:flex-row gap-4">
              <a
                href={companyConfig.getPhoneLink()}
                className="flex-1 py-3 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-wider font-bold rounded-sm text-center hover:bg-[#d6b26e] transition-colors"
              >
                Call Now
              </a>

              <a
                href={companyConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-transparent border border-brand-gold/60 text-brand-marble font-sans text-xs uppercase tracking-wider font-semibold rounded-sm text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <i className="bi bi-whatsapp text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Appointment Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
