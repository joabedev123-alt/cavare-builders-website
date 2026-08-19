export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const footerNavigation = {
  company: [
    { label: "About Cavare", href: "/about" },
    { label: "Our History", href: "/about#history" },
    { label: "Careers", href: "/about#careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Custom Millwork", href: "/services" },
    { label: "Full Renovations", href: "/services" },
    { label: "Kitchens & Bathrooms", href: "/services" },
    { label: "Outdoor Spaces", href: "/services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
