import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  darkBackground?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  darkBackground = false,
  className = "",
}) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto max-w-3xl",
    right: "text-right items-end ml-auto max-w-3xl",
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} ${className}`}>
      {/* Eyebrow badge */}
      <div className="flex items-center gap-2.5 mb-3">
        <span className="w-6 h-[1px] bg-brand-gold inline-block" />
        <span className="text-xs uppercase tracking-ultra font-sans font-semibold text-brand-gold">
          {eyebrow}
        </span>
        {align === "center" && <span className="w-6 h-[1px] bg-brand-gold inline-block" />}
      </div>

      {/* Main Title */}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] ${
          darkBackground ? "text-brand-marble" : "text-brand-black"
        }`}
      >
        {title}
      </h2>

      {/* Description if provided */}
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg font-light leading-relaxed max-w-2xl ${
            darkBackground ? "text-brand-stone/80" : "text-brand-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
