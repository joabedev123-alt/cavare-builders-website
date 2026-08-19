"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { companyConfig } from "@/data/company";
import { mainNavigation } from "@/data/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use solid background permanently, as requested by user
  const headerBg = "bg-brand-black shadow-subtle";
  
  const textColor = "text-white hover:text-brand-gold";
  const logoSrc = "/logo.jpeg";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg} border-b border-brand-dark-border`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform hover:scale-[1.02]">
            <span className="sr-only">{companyConfig.name}</span>
            <div className={`relative ${isScrolled ? 'h-10 w-32' : 'h-14 w-40'} transition-all duration-500`}>
              <Image 
                src={logoSrc}
                alt="Cavare Builders Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${textColor}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <i className="bi bi-list text-3xl" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/");
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs font-sans uppercase tracking-[0.2em] font-medium transition-colors duration-300 relative group
                  ${isActive ? 'text-brand-gold' : textColor}
                `}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-brand-gold origin-left transition-transform duration-300 ease-out
                  ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `} />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-brand-gold text-brand-black hover:bg-[#d6b26e] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-sm"
          >
            Get a Quote
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-over */}
      <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 transition-transform duration-500 ease-in-out lg:hidden
        ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">{companyConfig.name}</span>
            <div className="relative h-10 w-32">
              <Image 
                src="/logo.jpeg"
                alt="Cavare Builders Logo" 
                fill 
                className="object-contain object-left" 
              />
            </div>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-brand-stone hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <i className="bi bi-x-lg text-2xl" />
          </button>
        </div>
        
        <div className="mt-10 flow-root">
          <div className="-my-6 divide-y divide-brand-dark-border">
            <div className="space-y-2 py-6">
              {mainNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`-mx-3 block rounded-lg px-3 py-4 text-sm font-sans uppercase tracking-widest font-medium transition-colors
                    ${pathname === item.href ? 'text-brand-gold bg-white/5' : 'text-stone-300 hover:text-brand-gold hover:bg-white/5'}
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>

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
                  <i className="bi bi-telephone-fill" /> {companyConfig.phoneDisplay}
                </a>
                <a
                  href={companyConfig.getEmailLink()}
                  className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                >
                  <i className="bi bi-envelope-fill" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
