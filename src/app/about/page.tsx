import React from "react";
import Metadata from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "About Us | Cavare Builders LLC",
  description:
    "Learn about Cavare Builders LLC, our approach to construction, remodeling, and interior craftsmanship across Broward and Palm Beach County, Florida.",
};

const beliefsList = [
  {
    title: "Quality in the Details",
    text: "Quality is found in the subtle details: crisp tile transitions, flush door reveals, and precise material alignments.",
  },
  {
    title: "Clear Communication",
    text: "Communication should remain straightforward, structured, and consistent from initial consultation through final sign-off.",
  },
  {
    title: "Purposeful Selections",
    text: "Materials and finishes should be chosen with care for long-term durability, climate resilience, and aesthetic harmony.",
  },
  {
    title: "Living-First Design",
    text: "Every space should support the way people actually live, enhancing daily comfort, natural light, and functional circulation.",
  },
  {
    title: "Total Organization",
    text: "A successful remodeling project requires leadership and trade organization from beginning to end.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      {/* Header Banner & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Breadcrumb items={[{ label: "About" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              ABOUT CAVARE BUILDERS LLC
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Built on Craftsmanship, <br />
            <span className="italic font-normal text-brand-gold">Guided by Purpose.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            We approach construction and remodeling as a complete experience, combining thoughtful
            planning, skilled execution, clear communication, and a deep respect for every
            client’s property.
          </p>
        </div>
      </div>

      {/* Section 1: Our Approach */}
      <section className="py-16 bg-white border-y border-brand-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR APPROACH"
                title="A Coordinated, Detail-Driven Construction Experience"
              />

              <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                Cavare Builders LLC was created to provide homeowners with a more coordinated and
                detail-driven construction experience. We bring together planning, remodeling,
                interior execution, material selection, and project coordination to create spaces
                that feel intentional from every angle.
              </p>

              <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                Rather than treating remodeling as isolated tasks, we look at how room flow,
                surfaces, custom carpentry, and architectural lighting come together into a cohesive
                whole.
              </p>
            </div>

            <div className="lg:col-span-6 relative h-[400px] sm:h-[480px] rounded-sm overflow-hidden shadow-floating border border-brand-stone">
              <Image
                src="/images/Full-renovation-company-remodeling-in-Fort-Lauderdale-scaled.jpeg"
                alt="Cavare Builders interior transformation craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What We Believe */}
      <section className="py-20 bg-brand-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CORE PHILOSOPHY"
            title="What We Believe"
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {beliefsList.map((belief, idx) => (
              <div
                key={belief.title}
                className="p-6 bg-white rounded-sm border border-brand-stone hover:border-brand-gold transition-all duration-300 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-2xl font-bold text-brand-gold block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-brand-black mb-2">
                    {belief.title}
                  </h3>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    {belief.text}
                  </p>
                </div>
                <div className="w-8 h-[2px] bg-brand-stone mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Construction with an Interior Perspective */}
      <section className="py-20 bg-brand-black text-brand-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative h-[380px] sm:h-[450px] rounded-sm overflow-hidden border border-brand-dark-border shadow-dark">
              <Image
                src="/images/1-Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design.jpeg"
                alt="Construction with interior perspective"
                fill
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="OUR PERSPECTIVE"
                title="Construction with an Interior Perspective"
                darkBackground
              />

              <p className="text-sm sm:text-base text-brand-stone/80 font-light leading-relaxed">
                Great construction is not just about heavy framing or wall installations — it is
                about how materials, room proportions, light fixtures, millwork, and floor tiles
                interact once the dust settles.
              </p>

              <p className="text-sm sm:text-base text-brand-stone/80 font-light leading-relaxed">
                By approaching every project with an interior perspective, we ensure structural
                decisions enhance the final aesthetic, functionality, and overall property value.
              </p>

              <div className="pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-brand-gold hover:text-white font-semibold transition-colors"
                >
                  <span>Explore Featured Works</span>
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Commitment */}
      <section className="py-20 bg-white border-t border-brand-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="OUR COMMITMENT"
            title="Dedicated to Excellence Across South Florida"
            align="center"
            className="mb-6"
          />

          <p className="text-base text-brand-muted font-light leading-relaxed mb-10">
            Our commitment is to provide a professional process, responsible coordination, and
            carefully executed results for clients throughout Broward and Palm Beach County.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
          >
            <span>{companyConfig.primaryGoalText}</span>
            <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </section>
    </div>
  );
}
