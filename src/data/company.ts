export const companyConfig = {
  name: "Cavare Builders LLC",
  shortName: "Cavare",
  tagline: "Fine Craftsmanship & Premium Interiors",
  description: "Specializing in luxury home renovations, custom millwork, and premium interior design across South Florida.",
  
  // Contact details
  phoneDisplay: "754-315-7373",
  phoneRaw: "7543157373",
  phoneInternational: "+1 754 315 7373",
  whatsappNumber: "17543157373",
  email: "info@cavarebuilders.com",
  
  // Location
  address: {
    street: "",
    city: "Pompano Beach",
    state: "FL",
    zip: "",
    country: "USA",
    fullAddress: "Serving Broward and Palm Beach Counties, FL",
  },

  // Business hours
  availability: "Business Hours: 10:00 AM to 6:00 PM",
  
  // Social Media
  social: {
    instagram: "https://instagram.com/cavareinteriors",
    facebook: "https://facebook.com/cavareinteriors",
    linkedin: "https://linkedin.com/company/cavareinteriors",
  },
  
  // Areas served
  areasServed: [
    "Naples",
    "Cape Coral",
    "Pompano Beach",
    "Fort Lauderdale",
    "Boca Raton",
    "Palm Beach",
    "South Florida",
    "Southwest Florida"
  ],

  // Brand values/statements
  valueProposition: "Transforming luxury homes through impeccable design, superior materials, and masterful execution.",
  
  // Helper methods
  getPhoneLink: () => `tel:${companyConfig.phoneInternational.replace(/\s+/g, '')}`,
  getWhatsAppLink: () => `https://wa.me/${companyConfig.whatsappNumber}`,
  getEmailLink: () => `mailto:${companyConfig.email}`,
  
  // Common UI text
  primaryGoalText: "Request a Consultation",
  secondaryGoalText: "View Our Portfolio",
};
