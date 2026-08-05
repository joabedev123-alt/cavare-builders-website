export interface NavItem {
  label: string;
  href: string;
  isAnchor?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services", isAnchor: true },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "Full Home Remodeling", href: "/#services" },
  { label: "Kitchen Remodeling", href: "/#services" },
  { label: "Bathroom Remodeling", href: "/#services" },
  { label: "Interior Renovations", href: "/#services" },
  { label: "Flooring and Surfaces", href: "/#services" },
  { label: "Doors and Windows", href: "/#services" },
  { label: "Custom Millwork", href: "/#services" },
];

export const legalNavigation: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];
