"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { companyConfig } from "@/data/company";
import { mainNavigation } from "@/data/navigation";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-brand-black/95 backdrop-blur-md border-b border-brand-dark-border py-3.5 shadow-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo variant="light" />

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center space-x-8">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm uppercase tracking-widest transition-colors font-sans py-1 relative ${
                  isActive
                    ? "text-brand-gold font-medium"
                    : "text-brand-marble/90 hover:text-brand-gold"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Header Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href={companyConfig.getPhoneLink()}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-stone hover:text-brand-gold transition-colors font-sans"
          >
            <i className="bi bi-telephone text-brand-gold text-sm" />
            <span>{companyConfig.phoneDisplay}</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 shadow-subtle hover:shadow-floating focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black"
          >
            {companyConfig.primaryGoalText}
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-brand-marble hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
        >
          <i className={`bi ${mobileMenuOpen ? "bi-x-lg" : "bi-[justify-right]"} text-2xl`} />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-50 flex flex-col justify-between p-6 transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Mobile Header Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-brand-dark-border">
          <Logo variant="light" />
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Close navigation menu"
            className="p-2 text-brand-marble hover:text-brand-gold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded"
          >
            <i className="bi bi-x-lg text-2xl" />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav aria-label="Mobile Navigation" className="flex flex-col space-y-6 my-auto py-6">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-serif tracking-wide transition-colors ${
                  isActive
                    ? "text-brand-gold font-medium pl-2 border-l-2 border-brand-gold"
                    : "text-brand-marble hover:text-brand-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Actions & Quick Contact */}
        <div className="flex flex-col space-y-4 pt-6 border-t border-brand-dark-border">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 bg-brand-gold text-brand-black font-sans text-sm uppercase tracking-wider font-semibold rounded-sm shadow-card"
          >
            {companyConfig.primaryGoalText}
          </Link>

          <div className="flex items-center justify-between text-xs text-brand-stone pt-2">
            <a
              href={companyConfig.getPhoneLink()}
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <i className="bi bi-telephone text-brand-gold" />
              {companyConfig.phoneDisplay}
            </a>

            <a
              href={companyConfig.getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-brand-gold transition-colors"
            >
              <i className="bi bi-whatsapp text-[#25D366]" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
