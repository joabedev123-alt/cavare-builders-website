export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: "full-remodels" | "kitchens" | "bathrooms" | "interiors" | "doors-windows" | "custom-details";
  location: string;
  summary: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  interventions: string[];
  materials: string[];
  beforeAfter?: {
    beforeImage: string;
    afterImage: string;
    description: string;
  };
  isFeatured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "project-01",
    title: "Whole Home Transformation",
    category: "Full Remodels",
    categorySlug: "full-remodels",
    location: "Broward County, Florida",
    summary:
      "A complete interior renovation focused on natural materials, improved circulation, warm architectural lighting, and refined custom finishes.",
    description:
      "This comprehensive estate overhaul involved removing load-bearing partitions to create a unified open living room, dining salon, and gourmet kitchen. High-gloss porcelain flooring was laid seamlessly throughout, while custom walnut paneling adds warm contrast.",
    coverImage: "/images/Full-House-Construction-by-Cavare-Interiors-1-scaled.jpeg",
    galleryImages: [
      "/images/Full-House-Construction-by-Cavare-Interiors-1-scaled.jpeg",
      "/images/1-Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design.jpeg",
      "/images/Luxury-Bathroom-Remodeling-1-1-scaled.jpg",
      "/images/1-custom-furniture-wall-panels-decorative-wall-panels-wood-slat-walls-fluted-wall-panels-feature-walls-accent-walls-custom-millworkt-custom-cabinetry-scaled.jpg",
    ],
    interventions: [
      "Interior structural remodeling",
      "Gourmet kitchen rebuild",
      "Master bath suite redesign",
      "Large-format porcelain flooring",
      "Custom walnut millwork & built-ins",
      "Recessed architectural lighting",
    ],
    materials: [
      "Natural Oak & Walnut",
      "Calacatta Marble Slabs",
      "Brushed Gold Hardware",
      "Large-format Italian Porcelain",
    ],
    beforeAfter: {
      beforeImage: "/images/Living-room-before-picture.webp",
      afterImage: "/images/Living-room-after-1.webp",
      description:
        "From a segmented 1980s layout with dated finishes to an open, sunlit contemporary haven with seamless floor transitions.",
    },
    isFeatured: true,
  },
  {
    id: "project-02",
    title: "Gourmet Marble Kitchen Suite",
    category: "Kitchens",
    categorySlug: "kitchens",
    location: "Palm Beach County, Florida",
    summary:
      "Custom flat-panel cabinetry paired with double waterfall marble islands and concealed pantry storage.",
    description:
      "Designed for entertaining, this kitchen renovation highlights clean lines, high-capacity custom storage, concealed touch-latch pantries, and an oversized 12-foot island clad in honed Calacatta quartz.",
    coverImage: "/images/Backlit-CountertopModern-Kitchen-Design-Illuminated-CountertopCristalloonyxTaj-Mahal-Quartzite-Countertops-Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design1.jpeg",
    galleryImages: [
      "/images/Backlit-CountertopModern-Kitchen-Design-Illuminated-CountertopCristalloonyxTaj-Mahal-Quartzite-Countertops-Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design1.jpeg",
      "/images/12-Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design.jpeg",
      "/images/Kitchen-after-the-fact-ali-2.webp",
    ],
    interventions: [
      "Custom rift-cut oak cabinetry",
      "Double waterfall island fabrication",
      "Hidden walk-in pantry portal",
      "Integrated Sub-Zero & Wolf appliances",
      "Under-cabinet LED channel illumination",
    ],
    materials: [
      "Honed Quartz Slabs",
      "Rift Oak Veneers",
      "Matte Black Fixtures",
      "Linear LED Strip Channels",
    ],
    beforeAfter: {
      beforeImage: "/images/Kitchen-before-picture.webp",
      afterImage: "/images/Kitchen-after-the-fact-ali-2.webp",
      description:
        "Complete overhaul from old oak cabinets to handleless high-gloss cabinetry and illuminated Taj Mahal quartzite countertops.",
    },
    isFeatured: false,
  },
  {
    id: "project-03",
    title: "Curbless Spa Bathroom Sanctuary",
    category: "Bathrooms",
    categorySlug: "bathrooms",
    location: "Broward County, Florida",
    summary:
      "A tranquil master bathroom featuring large-format stone tiling, a zero-threshold glass shower, and freestanding tub.",
    description:
      "Engineered for ultimate relaxation, this master bath overhaul incorporates floor-to-ceiling bookmatched porcelain tiles, a curbless rain shower with linear floor drainage, floating dual oak vanities, and ambient perimeter lighting.",
    coverImage: "/images/Double-vanity-luxury-bathroom-Fort-Lauderdale-scaled.webp",
    galleryImages: [
      "/images/Double-vanity-luxury-bathroom-Fort-Lauderdale-scaled.webp",
      "/images/Luxury-Bathroom-Remodeling-1-1-scaled.jpg",
      "/images/Bathroom-Remodeling-after-the-fact-picture-gray-tiles-niches-oak-vanity-and-interior-door.webp",
    ],
    interventions: [
      "Curbless zero-threshold shower conversion",
      "Floor-to-ceiling tile wall cladding",
      "Floating double sink vanity installation",
      "Freestanding acrylic soaking tub installation",
      "Custom recessed wall niches",
    ],
    materials: [
      "Bookmatched Porcelain Slabs",
      "Brushed Gold Watermarks",
      "Natural Teak Shower Bench",
      "Backlit LED Mirrors",
    ],
    beforeAfter: {
      beforeImage: "/images/Guest-bath-before-1.webp",
      afterImage: "/images/Guest-bathroom-remodeling-after-picture.webp",
      description:
        "Transformed a cramped bathroom with outdated tub into a open-walk-in spa shower with custom niche lighting.",
    },
    isFeatured: false,
  },
  {
    id: "project-04",
    title: "Open Coastal Living Interior",
    category: "Interiors",
    categorySlug: "interiors",
    location: "Palm Beach County, Florida",
    summary:
      "Architectural living space overhaul featuring custom slatted feature walls and flush lighting.",
    description:
      "An interior modernization that replaced heavy drywall archways with crisp rectangular transitions, flush linear air diffusers, warm oak ceiling slats, and wide-plank engineered flooring.",
    coverImage: "/images/1-custom-furniture-wall-panels-decorative-wall-panels-wood-slat-walls-fluted-wall-panels-feature-walls-accent-walls-custom-millworkt-custom-cabinetry-scaled.jpg",
    galleryImages: [
      "/images/1-custom-furniture-wall-panels-decorative-wall-panels-wood-slat-walls-fluted-wall-panels-feature-walls-accent-walls-custom-millworkt-custom-cabinetry-scaled.jpg",
      "/images/Master-bedroom-and-tv-stand-wall-deco-scaled.webp",
    ],
    interventions: [
      "Archway removal & beam squaring",
      "Acoustic slatted wood wall installation",
      "Architectural ceiling lighting drop",
      "Hardwood floor alignment across main salon",
    ],
    materials: [
      "Engineered White Oak Hardwood",
      "Walnut Acoustic Slat Panels",
      "Level 5 Drywall Smooth Finish",
    ],
    isFeatured: false,
  },
  {
    id: "project-05",
    title: "Custom Closet & Millwork Suite",
    category: "Custom Details",
    categorySlug: "custom-details",
    location: "Broward County, Florida",
    summary:
      "Bespoke walk-in dressing room with glass-front displays, island storage, and velvet drawers.",
    description:
      "Precision finish carpentry transforming a master walk-in closet into a boutique-style dressing lounge, complete with integrated LED clothing rails, suede drawer liners, and glass display cases.",
    coverImage: "/images/Luxury-closet-Custom-design-Customdesign-LuxuryDesign-luxurycustomization-closet-bycallvare.webp",
    galleryImages: [
      "/images/Luxury-closet-Custom-design-Customdesign-LuxuryDesign-luxurycustomization-closet-bycallvare.webp",
      "/images/Reach-in-Closet-with-Glass-Doors-1-2048x1412.jpg",
    ],
    interventions: [
      "Custom cabinetry framing & installation",
      "Glass display door fabrication",
      "Central storage island with jewelry drawers",
      "Automated motion-sensor closet lighting",
    ],
    materials: [
      "Textured Melamine Panels",
      "Bronze Anodized Aluminum Frames",
      "Tempered Starphire Glass",
    ],
    isFeatured: false,
  },
  {
    id: "project-06",
    title: "Impact Glass & Pivot Entry System",
    category: "Doors and Windows",
    categorySlug: "doors-windows",
    location: "Palm Beach County, Florida",
    summary:
      "Grand 10-foot wood pivot front door and hurricane impact sliding glass patio system.",
    description:
      "Upgrading entryways and patio portals with custom hurricane impact architectural glass sliding doors and an imposing custom oak pivot door with electronic smart lock integration.",
    coverImage: "/images/Pivot-Oak-Wood-Impact-Door-768x1024.webp",
    galleryImages: [
      "/images/Pivot-Oak-Wood-Impact-Door-768x1024.webp",
      "/images/Impact-Windows-Instalaltion-Delray-Beach.webp",
    ],
    interventions: [
      "Pivot door structural framing",
      "High-performance impact glass sliders",
      "Concealed floor closer hardware",
      "Weather sealing & perimeter waterproofing",
    ],
    materials: [
      "Solid Teak & Aluminum Pivot Core",
      "Laminated Impact Glass",
      "Black Anodized Metal Trims",
    ],
    isFeatured: false,
  },
];
