import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/data/company";

interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  showTagline = false,
  size = "xl",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-10 sm:h-12",
    md: "h-12 sm:h-14",
    lg: "h-14 sm:h-18",
    xl: "h-11 sm:h-20 md:h-24", // Otimizado responsivamente para mobile e desktop
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 rounded-sm p-1 transition-all ${className}`}
      aria-label={`${companyConfig.name} - Home`}
    >
      <div className="relative flex items-center">
        <Image
          src="/logo-Photoroom.png"
          alt="Cavare Builders LLC Logo"
          width={320}
          height={100}
          className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
          priority
        />
      </div>
    </Link>
  );
};
