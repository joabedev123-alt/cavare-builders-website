export const companyConfig = {
  name: "Cavare Builders LLC",
  shortName: "CAVARE",
  fullName: "Cavare Builders LLC",
  tagline: "Construction • Remodeling • Interiors",
  subTagline: "Luxury Construction & Remodeling in South Florida",
  description:
    "Cavare Builders LLC delivers complete construction, remodeling, and interior transformation services across Broward and Palm Beach County. From concept to completion, every project is crafted with precision, quality, and architectural refinement.",
  
  // Contact details
  phoneDisplay: "(954) 465-1025",
  phoneRaw: "9544651025",
  phoneInternational: "+1 954 465 1025",
  whatsappNumber: "19544651025",
  
  // Locations & Areas
  state: "Florida",
  serviceAreas: ["Broward County", "Palm Beach County"],
  primaryCounties: [
    {
      name: "Broward County",
      description: "Custom home remodeling, kitchen transformations, and luxury interior renovations across Fort Lauderdale, Boca Raton border, Hollywood, Coral Springs, and surrounding communities.",
    },
    {
      name: "Palm Beach County",
      description: "Full property remodeling, high-end bathroom suites, custom millwork, and surface upgrades across Boca Raton, Delray Beach, Palm Beach Gardens, and neighboring areas.",
    },
  ],
  
  // Business hours & availability
  availability: "Monday – Saturday: By Appointment",
  
  // Goals & CTAs
  primaryGoalText: "Schedule a Consultation",
  secondaryGoalText: "Explore Our Projects",
  
  // Helper for generating custom WhatsApp URLs
  getWhatsAppLink: (customMessage?: string) => {
    const defaultMsg =
      "Hello, I visited the Cavare Builders LLC website and would like to schedule a consultation for my construction or remodeling project.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/19544651025?text=${text}`;
  },
  
  // Helper for telephone link
  getPhoneLink: () => "tel:+19544651025",
};
