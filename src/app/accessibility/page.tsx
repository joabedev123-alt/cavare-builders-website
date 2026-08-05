import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Accessibility Statement | Cavare Builders LLC",
  description: "Accessibility Statement for Cavare Builders LLC website.",
};

export default function AccessibilityPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Accessibility Statement" }]} />

        <h1 className="font-serif text-4xl font-medium text-brand-black mt-6 mb-6">
          Accessibility Statement
        </h1>

        <div className="bg-white p-8 rounded-sm border border-brand-stone space-y-6 text-sm text-brand-muted font-light leading-relaxed">
          <p>
            <strong>{companyConfig.name}</strong> is committed to ensuring digital accessibility for
            people with disabilities. We continuously improve the user experience for everyone and apply
            the relevant accessibility standards (WCAG 2.1 Level AA guidelines).
          </p>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            Measures Taken
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>High-contrast text and background color ratios across dark and light sections.</li>
            <li>Visible focus rings and logical tab order for full keyboard navigation.</li>
            <li>Descriptive alt text on images and clear ARIA labels on interactive elements.</li>
            <li>Form input labels and accessible error feedback messaging.</li>
            <li>Respect for reduced motion preferences (`prefers-reduced-motion`).</li>
          </ul>

          <h2 className="font-serif text-xl font-medium text-brand-black pt-4">
            Feedback & Assistance
          </h2>
          <p>
            We welcome your feedback on the accessibility of our website. If you encounter any
            accessibility barriers, please call us at <strong>{companyConfig.phoneDisplay}</strong> so we
            may assist you.
          </p>
        </div>
      </div>
    </div>
  );
}
