"use client";

import React, { useState } from "react";

interface FormDataState {
  services: string[];
  fullName: string;
  email: string;
  phone: string;
  cep: string;
  notes: string;
  consent: boolean;
  honeypot: string;
}

const SERVICE_OPTIONS = [
  "Custom Millwork",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Flooring",
  "Impact Windows",
  "Interior Doors",
  "Entry Doors",
  "Construction Services",
  "Permitting Services",
  "Other Services",
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    services: [],
    fullName: "",
    email: "",
    phone: "",
    cep: "",
    notes: "",
    consent: false,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === "consent") {
        setFormData((prev) => ({ ...prev, consent: checked }));
      } else {
        // Handle services array
        setFormData((prev) => {
          const currentServices = [...prev.services];
          if (checked) {
            currentServices.push(value);
          } else {
            const index = currentServices.indexOf(value);
            if (index > -1) {
              currentServices.splice(index, 1);
            }
          }
          return { ...prev, services: currentServices };
        });
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;

    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMessage("Please fill out all required fields (Name, Email, Phone).");
      setStatus("error");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the consent terms to proceed.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    
    // Simulate API call
    setTimeout(() => {
       setStatus("success");
    }, 1500);
  };

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="p-8 bg-[#1e1a16] border border-brand-gold/20 rounded-sm text-center shadow-lg">
          <div className="w-12 h-12 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-check-circle-fill text-2xl" />
          </div>
          <h4 className="font-serif text-2xl font-medium text-white mb-2">
            Request Received
          </h4>
          <p className="text-xs text-stone-300 font-sans leading-relaxed mb-6">
            Thank you for contacting Cavare Builders LLC. Our team is reviewing your request and will get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-6 py-2.5 bg-brand-gold text-brand-black text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#d6b26e] transition-colors"
          >
            Submit another request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="hidden" aria-hidden="true">
            <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
          </div>

          {/* Service Checkboxes */}
          <div>
            <label className="block text-sm font-semibold text-white mb-3">
              Services
            </label>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {SERVICE_OPTIONS.map((service) => (
                <label key={service} className="flex items-center gap-2 cursor-pointer text-sm text-white font-medium hover:text-gray-300">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                    className="w-4 h-4 rounded-sm border-gray-300 text-brand-gold focus:ring-brand-gold bg-white"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* 2-Column Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder:text-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder:text-gray-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder:text-gray-500"
            />
            <input
              type="text"
              name="cep"
              placeholder="City or ZIP Code"
              value={formData.cep}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder:text-gray-500"
            />
          </div>

          {/* Textarea */}
          <div className="relative">
            <textarea
              name="notes"
              rows={4}
              placeholder="Additional details about your project"
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white text-gray-800 text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-gold placeholder:text-gray-500 resize-none"
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
              {formData.notes.length} / 300
            </div>
          </div>

          {/* Consent Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer text-xs text-stone-300 leading-relaxed max-w-4xl">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 rounded-sm border-gray-300 text-brand-gold focus:ring-brand-gold bg-white shrink-0"
            />
            <span>
              By checking this box, you agree to receive SMS messages from Cavare Builders for conversational purposes. You may reply with the word STOP to opt-out at any time. For help, reply with the word HELP to 754-315-7373. Message and data rates may apply. Message frequency may vary.<br/><br/>
              Learn more in our <a href="#" className="text-[#3b82f6] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#3b82f6] hover:underline">Terms & Conditions</a>.
            </span>
          </label>

          {status === "error" && errorMessage && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/50 text-rose-200 text-xs rounded-sm">
              {errorMessage}
            </div>
          )}

          <div className="flex flex-col gap-5 pt-2">
            {/* Fake Cloudflare Widget */}
            <div className="bg-white rounded-sm w-[300px] p-2 flex items-center justify-between border border-gray-300 shadow-sm h-[74px]">
              <div className="flex items-center gap-3 pl-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <i className="bi bi-check-lg text-xl" />
                </div>
                <span className="text-[15px] text-gray-700 font-medium">Success!</span>
              </div>
              <div className="flex flex-col items-center pr-2">
                <div className="text-[#f6821f] flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 46 22" fill="currentColor">
                    <path d="M12.923 11.231C13.846 6.923 17.538 3.538 22.154 3.538C26.154 3.538 29.538 6 30.923 9.692C31.538 9.538 32 9.538 32.615 9.538C37.231 9.538 41.077 13.385 41.077 18C41.077 22.615 37.231 26.462 32.615 26.462H12.923C6.769 26.462 1.846 21.538 1.846 15.385C1.846 9.692 6.154 5.077 11.692 4.462C12.308 7.077 12.923 9.231 12.923 11.231Z"/>
                  </svg>
                </div>
                <span className="text-[9px] font-bold text-gray-700 mt-1 uppercase tracking-tighter">Cloudflare</span>
                <div className="flex items-center gap-1 text-[8px] text-gray-500 mt-0.5">
                  <a href="#" className="hover:underline">Privacy</a>
                  <span>•</span>
                  <a href="#" className="hover:underline">Help</a>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-8 py-3.5 bg-[#e4ab50] hover:bg-[#d49940] text-gray-900 text-sm uppercase font-semibold rounded-sm w-fit transition-all shadow-md"
            >
              {status === "submitting" ? "Sending..." : "REQUEST A QUOTE"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
