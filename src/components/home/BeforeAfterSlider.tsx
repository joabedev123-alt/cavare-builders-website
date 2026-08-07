"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const BeforeAfterSlider: React.FC = () => {
  return (
    <section className="py-24 bg-brand-marble relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRANSFORMATION HIGHLIGHT"
          title="Veja a diferença que uma reforma bem planejada faz."
          description="Toda transformação começa com a compreensão do potencial do imóvel e termina com um espaço que parece mais funcional, refinado e intencional."
          align="center"
          className="mb-14"
        />

        {/* Full Image Container - Aspect ratio natural sem cortes e sem espaço sobressalente */}
        <div className="w-full rounded-sm overflow-hidden shadow-floating border border-brand-stone">
          <Image
            src="/images/construction-services-before-after.webp"
            alt="Cavare Builders Construction & Remodeling Transformation"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain block"
            priority
          />
        </div>
      </div>
    </section>
  );
};
