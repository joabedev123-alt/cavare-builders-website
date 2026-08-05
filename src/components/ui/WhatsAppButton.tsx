"use client";

import React, { useState } from "react";
import { companyConfig } from "@/data/company";

interface WhatsAppButtonProps {
  customMessage?: string;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  customMessage,
  className = "",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = companyConfig.getWhatsAppLink(customMessage);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 ${className}`}>
      {/* Tooltip on hover */}
      <div
        className={`hidden md:flex items-center bg-brand-black text-brand-marble text-xs px-3.5 py-2 rounded shadow-floating border border-brand-gold/30 transition-all duration-300 pointer-events-none whitespace-nowrap ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
        role="tooltip"
        id="whatsapp-tooltip"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
        Chat with Cavare Builders
      </div>

      {/* Main WhatsApp floating action button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Cavare Builders LLC on WhatsApp"
        aria-describedby="whatsapp-tooltip"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-floating hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 group"
      >
        <i className="bi bi-whatsapp text-2xl group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
};
