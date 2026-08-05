import React from "react";
import Link from "next/link";
import { companyConfig } from "@/data/company";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  showTagline = false,
  className = "",
}) => {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3.5 group text-left focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 rounded-sm p-1 transition-all ${className}`}
      aria-label={`${companyConfig.name} - Home`}
    >
      {/* Monogram "C" inside a thin architectural square frame */}
      <div
        className={`relative flex items-center justify-center w-10 h-10 border transition-all duration-300 ${
          isDark
            ? "border-brand-black/80 group-hover:border-brand-gold text-brand-black bg-brand-black/5"
            : "border-brand-gold/70 group-hover:border-brand-gold text-brand-gold bg-brand-gold/10"
        }`}
      >
        <span className="font-serif text-xl font-semibold tracking-wider">C</span>
        {/* Subtle decorative inner corner accents */}
        <span
          className={`absolute top-0.5 left-0.5 w-1 h-1 transition-colors ${
            isDark ? "bg-brand-black/40 group-hover:bg-brand-gold" : "bg-brand-gold"
          }`}
        />
        <span
          className={`absolute bottom-0.5 right-0.5 w-1 h-1 transition-colors ${
            isDark ? "bg-brand-black/40 group-hover:bg-brand-gold" : "bg-brand-gold"
          }`}
        />
      </div>

      {/* Typography Signature */}
      <div className="flex flex-col">
        <span
          className={`font-serif text-xl font-semibold tracking-ultra uppercase transition-colors ${
            isDark ? "text-brand-black" : "text-brand-marble"
          }`}
        >
          {companyConfig.shortName}
        </span>
        <span
          className={`text-[10px] tracking-[0.3em] uppercase font-sans font-medium transition-colors ${
            isDark ? "text-brand-muted" : "text-brand-stone/80"
          }`}
        >
          BUILDERS LLC
        </span>
        {showTagline && (
          <span className="text-[9px] tracking-widest text-brand-gold uppercase font-sans mt-0.5">
            {companyConfig.tagline}
          </span>
        )}
      </div>
    </Link>
  );
};
