import React from "react";

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: React.ReactNode | string;
  icon: string;
  imagePath?: string;
  features: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "custom-millwork",
    title: "Custom Millwork & Cabinetry",
    shortDescription: "Bespoke woodwork and custom cabinetry designed to elevate your interior spaces.",
    fullDescription: "Our master craftsmen design, build, and install custom millwork that brings unparalleled elegance to your home. From sophisticated kitchen cabinets and luxurious walk-in closets to intricate wall panels, built-in entertainment centers, and architectural wood detailing, every piece is tailored to your exact specifications using the finest materials.",
    icon: "bi-tools",
    imagePath: "/images/Custom-Furniture-Wall-Panels-Decorative-Wall-Panels-Wood-Slat-Walls-Fluted-Wall-Panels-Feature-Walls-Accent-Walls-Custom-Millworkt-Custom-Cabinetry-1-1-scaled.webp",
    features: [
      "Custom Kitchen & Bathroom Cabinetry",
      "Walk-in Closets & Wardrobes",
      "Built-in Entertainment Centers",
      "Architectural Wall Panels (Wood Slat, Fluted)",
      "Custom Bookshelves & Library Units",
      "Premium Material Selection & Finishes"
    ],
  },
  {
    id: "full-renovations",
    title: "Full Home Renovations",
    shortDescription: "Complete interior and exterior transformations executed with precision and high-end design.",
    fullDescription: "We specialize in comprehensive gut rehabs and full home renovations. Whether you are modernizing a historic property or completely reimagining a recently purchased home, our team manages every phase of the project. From demolition, structural upgrades, and MEP (Mechanical, Electrical, Plumbing) installations to the final luxurious finishes, we deliver turnkey results.",
    icon: "bi-house-gear",
    imagePath: "/images/New-house-construction-and-Impact-windows-and-doors-in-lighthouse-point-florida-1.jpeg",
    features: [
      "Complete Demolition & Structural Upgrades",
      "MEP (Mechanical, Electrical, Plumbing) Modernization",
      "Drywall, Framing & Insulation",
      "Impact Windows & Doors Installation",
      "Premium Flooring Installation",
      "Turnkey Project Management"
    ],
  },
  {
    id: "kitchen-bath",
    title: "Kitchen & Bathroom Remodeling",
    shortDescription: "Luxurious, high-performance spaces tailored to your lifestyle and aesthetic vision.",
    fullDescription: "The kitchen and master bathroom are the cornerstones of luxury living. We transform these essential spaces using top-tier materials such as Taj Mahal Quartzite, backlit onyx, and European handleless cabinetry for kitchens. For bathrooms, we create spa-like retreats featuring zero-entry walk-in showers, freestanding tubs, smart lighting, and continuous large-format porcelain or marble surfaces.",
    icon: "bi-droplet",
    imagePath: "/images/Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design-41.jpeg",
    features: [
      "European & Transitional Kitchen Designs",
      "Exotic Stone & Quartzite Countertops",
      "Spa-Inspired Master Bathrooms",
      "Zero-entry Walk-in Showers & Freestanding Tubs",
      "Custom Vanities & Smart Lighting",
      "High-End Fixtures & Hardware"
    ],
  },
  {
    id: "outdoor-spaces",
    title: "Outdoor Living & Pools",
    shortDescription: "Extending your luxury lifestyle to the outdoors with custom pergolas, decks, and pool areas.",
    fullDescription: "Embrace the South Florida lifestyle with our premium outdoor living solutions. We design and construct custom aluminum pergolas, elegant pool decks, porcelain or travertine pavers, and architectural fencing. Our goal is to create a seamless transition between your indoor comfort and outdoor entertainment, ensuring durability against the coastal climate without compromising on style.",
    icon: "bi-sun",
    imagePath: "/images/Aluminum-Pergola-in-Boca-Raton-by-Cavare.jpeg",
    features: [
      "Custom Aluminum Louvered Pergolas",
      "Pool Deck Leveling & Resurfacing",
      "Premium Pavers (Porcelain, Travertine, Natural Stone)",
      "Architectural Privacy Fencing",
      "Outdoor Kitchens & Entertainment Areas",
      "Seamless Indoor-Outdoor Integration"
    ],
  }
];

export const getServiceById = (id: string) => servicesData.find(service => service.id === id);
