import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/data/company";
import { footerNavigation } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#14120f] border-t border-brand-dark-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 relative w-[200px] h-[60px]">
              <Image 
                src="/logo.jpeg" 
                alt="Cavare Builders LLC" 
                fill 
                className="object-contain" 
              />
            </Link>
            <p className="text-stone-400 font-light text-sm leading-relaxed mb-6">
              {companyConfig.tagline}. {companyConfig.valueProposition}
            </p>
            <div className="flex gap-4">
              {Object.entries(companyConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:text-brand-gold hover:border-brand-gold transition-colors"
                  aria-label={platform}
                >
                  <i className={`bi bi-${platform}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Company</h3>
            <ul className="space-y-4 text-sm font-light">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-stone-400 hover:text-brand-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-white mb-6">Services</h3>
            <ul className="space-y-4 text-sm font-light">
              {footerNavigation.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-stone-400 hover:text-brand-gold transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-serif text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <i className="bi bi-geo-alt text-brand-gold mt-1" />
                <span className="text-stone-400">{companyConfig.address.fullAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-telephone text-brand-gold" />
                <a href={companyConfig.getPhoneLink()} className="text-stone-400 hover:text-brand-gold transition-colors">
                  {companyConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-envelope text-brand-gold" />
                <a href={companyConfig.getEmailLink()} className="text-stone-400 hover:text-brand-gold transition-colors">
                  {companyConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="bi bi-clock text-brand-gold" />
                <span className="text-stone-400">{companyConfig.availability}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-stone-500">
          <p>&copy; {currentYear} {companyConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {footerNavigation.legal.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-stone-300 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
