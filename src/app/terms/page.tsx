import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Terms of Use | Cavare Builders LLC",
  description: "Terms of Use for Cavare Builders LLC website.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Terms of Use" }]} />

        <h1 className="font-serif text-4xl font-medium text-brand-black mt-6 mb-6">
          Terms of Use
        </h1>

        <div className="bg-white p-8 rounded-sm border border-brand-stone space-y-6 text-sm text-brand-muted font-light leading-relaxed">
          <p>
            Welcome to the website of <strong>{companyConfig.name}</strong>. By accessing or using
            our website, you agree to comply with and be bound by the following terms of use.
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            1. Services Overview & Project Estimates
          </h2>
          <p>
            The content provided on this website is for informational purposes. Formal project scopes,
            timelines, and binding cost evaluations are provided only following direct on-site consultation
            and written contractual agreement.
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            2. Intellectual Property
          </h2>
          <p>
            All website design, text, custom imagery, logos, and graphics are the property of{" "}
            {companyConfig.name} and may not be reproduced without written permission.
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            3. Limitation of Liability
          </h2>
          <p>
            {companyConfig.name} makes reasonable efforts to maintain accurate information on this
            website. However, we do not warrant that all content is free from inadvertent technical errors.
          </p>
        </div>
      </div>
    </div>
  );
}
