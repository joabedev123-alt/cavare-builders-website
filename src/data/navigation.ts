export interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "Full Home Remodeling", href: "/services/full-home-remodeling" },
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Interior Renovations", href: "/services/interior-renovations" },
  { label: "Flooring and Surfaces", href: "/services/flooring-surfaces" },
  { label: "Doors and Windows", href: "/services/doors-windows" },
  { label: "Custom Millwork", href: "/services/custom-millwork" },
  { label: "Construction Coordination", href: "/services/construction-coordination" },
];

export const legalNavigation: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];
