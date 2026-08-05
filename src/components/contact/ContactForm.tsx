"use client";

import React, { useState } from "react";
import { companyConfig } from "@/data/company";

interface FormDataState {
  fullName: string;
  email: string;
  phone: string;
  addressOrZip: string;
  county: string;
  projectType: string;
  preferredDate: string;
  preferredTime: string;
  budget: string;
  description: string;
  contactMethod: string;
  consent: boolean;
  honeypot: string; // Anti-spam field
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    fullName: "",
    email: "",
    phone: "",
    addressOrZip: "",
    county: "Broward County",
    projectType: "Full Home Remodeling",
    preferredDate: "",
    preferredTime: "Morning (9am - 12pm)",
    budget: "Not Sure Yet",
    description: "",
    contactMethod: "Phone",
    consent: false,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.honeypot) {
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMessage("Please complete all required fields (Name, Email, Phone).");
      setStatus("error");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please accept the contact consent to proceed.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus("success");
        } else {
          throw new Error("Form submission failed");
        }
      } catch {
        // Fallback option if network or endpoint fails
        setStatus("error");
        setErrorMessage(
          "Form submission endpoint unreachable. You can transmit your inquiry directly via WhatsApp below."
        );
      }
    } else {
      // If no endpoint environment variable configured, fallback to WhatsApp submission
      const whatsappMsg = `*New Consultation Request*\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCounty: ${formData.county}\nProject: ${formData.projectType}\nBudget: ${formData.budget}\nPreferred Date: ${formData.preferredDate} (${formData.preferredTime})\nDetails: ${formData.description}`;
      window.open(companyConfig.getWhatsAppLink(whatsappMsg), "_blank");
      setStatus("success");
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-sm border border-brand-stone shadow-floating">
      <h3 className="font-serif text-2xl sm:text-3xl font-medium text-brand-black mb-2">
        Request a Consultation
      </h3>
      <p className="text-xs text-brand-muted mb-8 font-sans">
        Fill out the form below and our project team will reach out to evaluate your property.
      </p>

      {status === "success" ? (
        <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-sm text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <i className="bi bi-check-circle-fill text-2xl" />
          </div>
          <h4 className="font-serif text-2xl font-medium text-emerald-900 mb-2">
            Consultation Request Received
          </h4>
          <p className="text-xs text-emerald-800 font-sans leading-relaxed mb-6">
            Thank you for reaching out to Cavare Builders LLC. Our team is reviewing your request
            and will contact you shortly via your preferred contact method.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-6 py-2.5 bg-emerald-800 text-white text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-emerald-900 transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot Invisible Anti-Spam Field */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                placeholder="e.g. Eleanor Vance"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="e.g. eleanor@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              />
            </div>
          </div>

          {/* Phone & Address / ZIP */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
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
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              />
            </div>

            <div>
              <label htmlFor="addressOrZip" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                Project Address or ZIP Code
              </label>
              <input
                type="text"
                id="addressOrZip"
                name="addressOrZip"
                placeholder="City or ZIP Code"
                value={formData.addressOrZip}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              />
            </div>
          </div>

          {/* County & Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="county" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                County
              </label>
              <select
                id="county"
                name="county"
                value={formData.county}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              >
                <option value="Broward County">Broward County</option>
                <option value="Palm Beach County">Palm Beach County</option>
                <option value="Other">Other Region in Florida</option>
              </select>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              >
                <option value="Full Home Remodeling">Full Home Remodeling</option>
                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                <option value="Interior Renovation">Interior Renovation</option>
                <option value="Flooring">Flooring & Surfaces</option>
                <option value="Doors and Windows">Doors & Windows</option>
                <option value="Custom Millwork">Custom Millwork & Built-ins</option>
                <option value="General Construction">General Construction</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Budget & Preferred Date */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label htmlFor="budget" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                Estimated Budget
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              >
                <option value="Under $25,000">Under $25,000</option>
                <option value="$25,000–$50,000">$25,000 – $50,000</option>
                <option value="$50,000–$100,000">$50,000 – $100,000</option>
                <option value="$100,000–$250,000">$100,000 – $250,000</option>
                <option value="Over $250,000">Over $250,000</option>
                <option value="Not Sure Yet">Not Sure Yet</option>
              </select>
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              />
            </div>

            <div>
              <label htmlFor="preferredTime" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
                Preferred Time
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
              >
                <option value="Morning (9am - 12pm)">Morning (9am - 12pm)</option>
                <option value="Afternoon (12pm - 4pm)">Afternoon (12pm - 4pm)</option>
                <option value="Evening (4pm - 6pm)">Evening (4pm - 6pm)</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="description" className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
              Project Description & Goals
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Tell us about your property goals, preferred finishes, or structural priorities..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-brand-marble border border-brand-stone text-brand-black text-sm rounded-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
            />
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-brand-black mb-2">
              Preferred Contact Method
            </label>
            <div className="flex items-center space-x-6 text-sm text-brand-black">
              {["Phone", "Email", "WhatsApp"].map((method) => (
                <label key={method} className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={formData.contactMethod === method}
                    onChange={handleChange}
                    className="text-brand-gold focus:ring-brand-gold"
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Error feedback if present */}
          {status === "error" && errorMessage && (
            <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-sm">
              {errorMessage}
            </div>
          )}

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer text-xs text-brand-muted">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-0.5 text-brand-gold focus:ring-brand-gold rounded-sm"
              />
              <span>
                By submitting this form, you agree to be contacted by Cavare Builders LLC regarding
                your project request. Message and data rates may apply.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-brand-black hover:bg-brand-gold text-brand-marble hover:text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-card flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <i className="bi bi-arrow-repeat animate-spin text-base" />
                  <span>Transmitting Request...</span>
                </>
              ) : (
                <>
                  <span>Request a Consultation</span>
                  <i className="bi bi-arrow-right" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
