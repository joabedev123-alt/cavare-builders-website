import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { companyConfig } from "@/data/company";
import { mainNavigation, footerServices, legalNavigation } from "@/data/navigation";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-marble border-t border-brand-dark-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-dark-border">
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Logo variant="light" showTagline />
            <p className="text-sm font-light text-brand-stone/80 leading-relaxed max-w-sm">
              Cavare Builders LLC provides complete construction, remodeling, and interior
              transformation services throughout Broward and Palm Beach County, Florida.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-white font-semibold transition-colors"
              >
                <span>Schedule a Consultation</span>
                <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-ultra font-sans font-semibold text-brand-gold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {mainNavigation.map((nav) => (
                <li key={nav.label}>
                  <Link
                    href={nav.href}
                    className="text-brand-stone/80 hover:text-brand-gold transition-colors focus:outline-none focus:underline"
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-ultra font-sans font-semibold text-brand-gold">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-brand-stone/80 hover:text-brand-gold transition-colors focus:outline-none focus:underline"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Area (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-ultra font-sans font-semibold text-brand-gold">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm font-sans text-brand-stone/80">
              <li className="flex items-center gap-3">
                <i className="bi bi-telephone text-brand-gold text-base" />
                <a
                  href={companyConfig.getPhoneLink()}
                  className="hover:text-brand-gold transition-colors"
                >
                  {companyConfig.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <i className="bi bi-whatsapp text-[#25D366] text-base" />
                <a
                  href={companyConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>

              <li className="flex items-start gap-3">
                <i className="bi bi-[#geo-alt] bi-geo-alt text-brand-gold text-base mt-0.5" />
                <div>
                  <p>Broward County, Florida</p>
                  <p>Palm Beach County, Florida</p>
                </div>
              </li>

              <li className="flex items-center gap-3 text-xs text-brand-muted pt-1">
                <i className="bi bi-clock text-brand-gold" />
                <span>{companyConfig.availability}</span>
              </li>
            </ul>

            {/* Future Social Media Placement placeholder */}
            {/* 
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-brand-dark-border flex items-center justify-center text-brand-stone hover:text-brand-gold hover:border-brand-gold transition-colors">
                <i className="bi bi-instagram"></i>
              </a>
            </div> 
            */}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© {currentYear} Cavare Builders LLC. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            {legalNavigation.map((legal) => (
              <Link
                key={legal.label}
                href={legal.href}
                className="hover:text-brand-stone transition-colors"
              >
                {legal.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
