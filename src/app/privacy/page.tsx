import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Privacy Policy | Cavare Builders LLC",
  description: "Privacy Policy for Cavare Builders LLC.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Privacy Policy" }]} />

        <h1 className="font-serif text-4xl font-medium text-brand-black mt-6 mb-6">
          Privacy Policy
        </h1>

        <div className="bg-white p-8 rounded-sm border border-brand-stone space-y-6 text-sm text-brand-muted font-light leading-relaxed">
          <p>
            This Privacy Policy describes how <strong>{companyConfig.name}</strong> collects, uses,
            and protects the information you provide when using our website or contacting us regarding
            our construction and remodeling services in Broward and Palm Beach County, Florida.
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit a consultation request form, contact us via phone, or message us on WhatsApp,
            we may collect your name, email address, phone number, property address/ZIP code, and
            project preferences.
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information provided solely to evaluate your property requirements, schedule
            on-site or virtual consultations, respond to inquiries, and communicate updates related
            to your project.
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            3. Information Protection & Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information to third parties for marketing
            purposes. Your information is retained securely and accessed only by authorized team
            members for project management.
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            4. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, please call us directly at{" "}
            <strong>{companyConfig.phoneDisplay}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
