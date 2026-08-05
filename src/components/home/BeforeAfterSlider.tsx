"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let positionPercentage = (x / rect.width) * 100;
    if (positionPercentage < 0) positionPercentage = 0;
    if (positionPercentage > 100) positionPercentage = 100;
    setSliderPosition(positionPercentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  return (
    <section className="py-24 bg-brand-marble relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRANSFORMATION HIGHLIGHT"
          title="See the Difference Thoughtful Remodeling Makes"
          description="Every transformation begins with understanding the property’s potential and ends with a space that feels more functional, refined, and intentional."
          align="center"
          className="mb-14"
        />

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          className="relative h-[380px] sm:h-[500px] lg:h-[580px] w-full rounded-sm overflow-hidden shadow-floating border border-brand-stone cursor-ew-resize select-none"
          role="region"
          aria-label="Before and after image comparison slider"
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
              alt="Completed luxury home remodeling transformation (After)"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-sm text-brand-gold text-xs font-sans uppercase tracking-widest font-semibold px-3 py-1.5 rounded-sm border border-brand-gold/30">
              AFTER
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full min-w-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85"
                alt="Original property state before renovation (Before)"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-sm text-brand-stone text-xs font-sans uppercase tracking-widest font-semibold px-3 py-1.5 rounded-sm border border-brand-stone/30">
                BEFORE
              </div>
            </div>
          </div>

          {/* Vertical Slider Line Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-brand-gold z-20 shadow-dark flex items-center justify-center -ml-0.5"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-brand-black text-brand-gold border-2 border-brand-gold flex items-center justify-center shadow-floating">
              <i className="bi bi-arrows-collapse text-base rotate-90" />
            </div>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-center text-xs text-brand-muted mt-4 font-sans">
          Drag the slider left or right to compare the before and after transformation
        </p>
      </div>
    </section>
  );
};
