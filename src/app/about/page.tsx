import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About Us | Cavare Builders LLC",
  description: "Learn about Cavare Builders LLC, our commitment to craftsmanship, and our legacy of luxury construction in South Florida.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/New-Construction-building-ready.jpeg"
            alt="Cavare Builders Luxury Construction"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-brand-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-brand-gold" />
            <span className="text-sm font-sans uppercase tracking-[0.3em] font-semibold text-brand-gold">
              Our Story
            </span>
            <span className="w-12 h-[1px] bg-brand-gold" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-8">
            Building Legacies in <span className="italic text-brand-gold">South Florida</span>
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-24 sm:py-32 bg-brand-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
            <div>
              <SectionHeading
                eyebrow="OUR PHILOSOPHY"
                title="Excellence in Every Detail"
                description="Cavare Builders LLC was founded on a simple premise: luxury is defined by the quality of execution. We believe that true craftsmanship cannot be rushed, and every project we undertake is a testament to our commitment to perfection."
                align="left"
                className="mb-8"
              />
              <div className="space-y-6 text-brand-muted font-light leading-relaxed">
                <p>
                  With over a decade of experience serving the most exclusive communities in South Florida—including Naples, Boca Raton, and Fort Lauderdale—we have established ourselves as the premier general contractor for discerning homeowners and leading designers.
                </p>
                <p>
                  Our team consists of master craftsmen, innovative designers, and meticulous project managers who work in concert to transform architectural visions into breathtaking realities. We specialize in complex, high-end residential projects where compromise is not an option.
                </p>
              </div>
            </div>
            
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden shadow-dark">
              <Image
                src="/images/Master-Bathroom-full-remodeling-Delray-Beach.webp"
                alt="Craftsmanship detail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team/Process Section */}
      <section className="w-full py-24 sm:py-32 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THE CAVARE DIFFERENCE"
            title="Our Approach"
            description="We don't just build homes; we curate living experiences through a meticulous and transparent process."
            align="center"
            className="mb-20"
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Precision Planning",
                description: "Every successful project begins with exhaustive planning. We collaborate closely with architects and clients to anticipate challenges and optimize timelines before ground is broken.",
                icon: "bi-rulers"
              },
              {
                title: "Master Execution",
                description: "Our tradesmen are artisans. From complex MEP installations to delicate custom millwork, execution is monitored daily to ensure it meets our exacting standards.",
                icon: "bi-hammer"
              },
              {
                title: "Transparent Communication",
                description: "Luxury service requires flawless communication. Clients receive regular updates, complete financial transparency, and dedicated project management from day one.",
                icon: "bi-chat-square-text"
              }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto border border-brand-gold rounded-full flex items-center justify-center mb-6 text-brand-gold">
                  <i className={`bi ${step.icon} text-2xl`} />
                </div>
                <h3 className="font-serif text-2xl mb-4">{step.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 sm:py-32 bg-[#faf9f6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl text-brand-black mb-8">Let's Build Something Extraordinary</h2>
          <p className="text-lg text-brand-muted font-light mb-12">
            Partner with South Florida's most trusted luxury builders. We are ready to bring your architectural vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-gold text-brand-black hover:bg-[#d6b26e] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
