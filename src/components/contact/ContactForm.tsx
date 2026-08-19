"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    notes: "",
    services: [] as string[],
    smsConsent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    "Custom Cabinetry & Millwork",
    "Kitchen Remodel",
    "Bathroom Remodel",
    "Flooring",
    "Complete Interior Remodel",
    "Additions",
    "New Construction",
    "Pergolas",
    "Pool & Hardscaping",
    "Outdoor Spaces & Patios",
    "Other",
  ];

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        zipCode: "",
        notes: "",
        services: [],
        smsConsent: false,
      });
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="p-8 bg-[#1A1A1A] border border-brand-gold/30 rounded-sm text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-6">
          <i className="bi bi-check-lg text-3xl" />
        </div>
        <h3 className="font-serif text-3xl text-white mb-4">Request Sent Successfully</h3>
        <p className="text-stone-400 font-light mb-8 max-w-md">
          Thank you for reaching out. Our project management team will contact you shortly to schedule your consultation.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="px-8 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-colors rounded-sm font-sans text-xs uppercase tracking-widest font-semibold"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-transparent space-y-6">
      
      {/* Services Checkboxes */}
      <div className="space-y-3 mb-8">
        <label className="block text-xs font-sans uppercase tracking-widest font-semibold text-brand-gold mb-4">
          SERVICES OF INTEREST *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {servicesList.map((service) => (
            <label key={service} className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center mt-0.5">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceChange(service)}
                  className="peer appearance-none w-4 h-4 border border-stone-500 rounded-sm bg-transparent checked:bg-brand-gold checked:border-brand-gold transition-colors focus:ring-1 focus:ring-brand-gold focus:ring-offset-1 focus:ring-offset-[#14120f] cursor-pointer"
                />
                <i className="bi bi-check text-brand-black text-sm absolute opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <span className="text-sm font-light text-stone-300 group-hover:text-white transition-colors">
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-xs font-sans uppercase tracking-widest font-semibold text-stone-400">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="e.g. Eleanor Vance"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#1e1c19] border border-stone-700 rounded-sm px-4 py-3 text-white placeholder:text-stone-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-sans uppercase tracking-widest font-semibold text-stone-400">
            Best Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="e.g. eleanor@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#1e1c19] border border-stone-700 rounded-sm px-4 py-3 text-white placeholder:text-stone-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-xs font-sans uppercase tracking-widest font-semibold text-stone-400">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(954) 000-0000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#1e1c19] border border-stone-700 rounded-sm px-4 py-3 text-white placeholder:text-stone-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="zipCode" className="block text-xs font-sans uppercase tracking-widest font-semibold text-stone-400">
            Project Address or Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="City or Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full bg-[#1e1c19] border border-stone-700 rounded-sm px-4 py-3 text-white placeholder:text-stone-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="block text-xs font-sans uppercase tracking-widest font-semibold text-stone-400">
          Additional Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Briefly describe your project..."
          value={formData.notes}
          onChange={handleChange}
          className="w-full bg-[#1e1c19] border border-stone-700 rounded-sm px-4 py-3 text-white placeholder:text-stone-600 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors font-light resize-y"
        />
      </div>

      {/* SMS Consent Checkbox */}
      <div className="flex items-start gap-3 mt-6">
        <div className="relative flex items-center justify-center mt-1">
          <input
            type="checkbox"
            name="smsConsent"
            id="smsConsent"
            checked={formData.smsConsent}
            onChange={handleChange}
            className="peer appearance-none w-5 h-5 border border-stone-500 rounded-sm bg-transparent checked:bg-brand-gold checked:border-brand-gold transition-colors focus:ring-1 focus:ring-brand-gold focus:ring-offset-1 focus:ring-offset-[#14120f] cursor-pointer"
          />
          <i className="bi bi-check text-brand-black text-lg absolute opacity-0 peer-checked:opacity-100 pointer-events-none" />
        </div>
        <label htmlFor="smsConsent" className="text-xs text-stone-400 font-light leading-relaxed cursor-pointer">
          I consent to receive SMS messages from Cavare Interiors at the mobile number provided above. Message and data rates may apply. Reply STOP to cancel at any time.
        </label>
      </div>

      {/* Fake Cloudflare CAPTCHA Box */}
      <div className="mt-8 border border-[#333] bg-[#222] p-4 rounded-sm flex items-center justify-between max-w-sm">
         <div className="flex items-center gap-3">
            <input type="checkbox" className="w-6 h-6 rounded-sm bg-[#111] border-[#444]" />
            <span className="text-sm text-stone-300 font-sans">Verify you are human</span>
         </div>
         <div className="flex flex-col items-center">
            <i className="bi bi-shield-lock text-stone-400 text-2xl" />
            <span className="text-[10px] text-stone-500 font-sans mt-1">Cloudflare</span>
         </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || formData.services.length === 0}
        className="w-full sm:w-auto px-10 py-4 mt-8 bg-brand-gold text-brand-black hover:bg-[#d6b26e] disabled:opacity-50 disabled:cursor-not-allowed font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-subtle flex justify-center items-center"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
        ) : (
          "REQUEST A QUOTE"
        )}
      </button>
    </form>
  );
}
