import React from "react";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqsData } from "@/data/faqs";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Frequently Asked Questions | Cavare Builders LLC",
  description: "Find answers to common questions about our construction, remodeling, and design services in South Florida.",
};

export default function FAQsPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Breadcrumb items={[{ label: "FAQs" }]} />

        <div className="mt-8 text-center">
          <SectionHeading
            eyebrow="ANSWERS & INSIGHTS"
            title="Frequently Asked Questions"
            description="Find answers to the most common questions about working with Cavare Builders LLC."
            align="center"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 space-y-4">
        {faqsData.map((faq, idx) => (
          <details 
            key={idx} 
            className="group bg-white p-6 rounded-sm border border-brand-stone/60 shadow-subtle open:border-brand-gold open:shadow-md transition-all duration-300"
          >
            <summary className="font-serif text-xl font-medium text-brand-black cursor-pointer list-none flex items-center justify-between gap-4">
              <span className="pr-6">{faq.question}</span>
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-brand-stone group-open:border-brand-gold group-open:bg-brand-gold group-open:text-brand-black transition-colors">
                <i className="bi bi-plus-lg group-open:hidden" />
                <i className="bi bi-dash-lg hidden group-open:block" />
              </span>
            </summary>
            <div className="mt-4 pt-4 border-t border-brand-stone/40">
              <p className="text-sm font-light text-brand-muted leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>

      <section className="max-w-3xl mx-auto px-4 text-center">
        <div className="p-10 bg-brand-black text-brand-marble rounded-sm shadow-dark">
          <h3 className="font-serif text-3xl mb-4 text-brand-gold">Still have questions?</h3>
          <p className="text-sm font-light text-brand-stone mb-8 max-w-lg mx-auto">
            If you couldn't find the answer you were looking for, our team is ready to help. Reach out to us directly to discuss your project in detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
            >
              Contact Us
            </Link>
            <a
              href={companyConfig.getPhoneLink()}
              className="px-8 py-3.5 bg-transparent border border-brand-stone text-white hover:border-brand-gold hover:text-brand-gold font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 whitespace-nowrap"
            >
              Call {companyConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
