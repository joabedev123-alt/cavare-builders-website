import React from "react";
import Metadata from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/contact/ContactForm";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Contact | Cavare Builders LLC",
  description:
    "Schedule a consultation for a home remodel, kitchen renovation, or interior transformation with Cavare Builders LLC.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-[#14120f] min-h-screen text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <Breadcrumb items={[{ label: "Contact" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              CONTACT CAVARE BUILDERS LLC
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.15] mb-6">
            Let's talk about <br />
            <span className="italic font-normal text-brand-gold">your project.</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Tell us about your property, your goals, and your desired timeline. Our team will review your information and contact you to discuss the next steps.
          </p>
        </div>
      </div>

      {/* 2-Column Contact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Contact Info (5 cols) */}
          <div className="lg:col-span-5 text-white p-0 sm:p-4 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-white mb-4">
                Direct Contact Information
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                For quick questions and scheduling, contact our project leadership team directly by phone or WhatsApp.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-brand-gold/20 text-sm">
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
                    className="text-base font-serif font-medium text-white hover:text-brand-gold transition-colors block"
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
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Broward & Palm Beach Counties, Florida
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
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {companyConfig.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-6 border-t border-brand-gold/20 flex flex-col sm:flex-row gap-4">
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
                className="flex-1 py-3 bg-transparent border border-brand-gold/60 text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-sm text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <i className="bi bi-whatsapp text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Appointment Form (7 cols) */}
          <div className="lg:col-span-7 bg-transparent rounded-lg relative overflow-hidden">
             {/* Fake texture mimicking the photo */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-mamba.png')] opacity-20 pointer-events-none" />
             <div className="relative p-2 sm:p-4">
                <ContactForm />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
