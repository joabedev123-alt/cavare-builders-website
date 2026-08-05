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
    id: "project-placeholder-01",
    title: "Whole Home Transformation",
    category: "Full Remodels",
    categorySlug: "full-remodels",
    location: "Broward County, Florida",
    summary:
      "A complete interior renovation focused on natural materials, improved circulation, warm architectural lighting, and refined custom finishes.",
    description:
      "This comprehensive estate overhaul involved removing load-bearing partitions to create a unified open living room, dining salon, and gourmet kitchen. High-gloss porcelain flooring was laid seamlessly throughout, while custom walnut paneling adds warm contrast.",
    coverImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
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
      beforeImage:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      afterImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      description:
        "From a segmented 1980s layout with dated finishes to an open, sunlit contemporary haven with seamless floor transitions.",
    },
    isFeatured: true,
  },
  {
    id: "project-placeholder-02",
    title: "Gourmet Marble Kitchen Suite",
    category: "Kitchens",
    categorySlug: "kitchens",
    location: "Palm Beach County, Florida",
    summary:
      "Custom flat-panel cabinetry paired with double waterfall marble islands and concealed pantry storage.",
    description:
      "Designed for entertaining, this kitchen renovation highlights clean lines, high-capacity custom storage, concealed touch-latch pantries, and an oversized 12-foot island clad in honed Calacatta quartz.",
    coverImage:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85",
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
    isFeatured: false,
  },
  {
    id: "project-placeholder-03",
    title: "Curbless Spa Bathroom Sanctuary",
    category: "Bathrooms",
    categorySlug: "bathrooms",
    location: "Broward County, Florida",
    summary:
      "A tranquil master bathroom featuring large-format stone tiling, a zero-threshold glass shower, and freestanding tub.",
    description:
      "Engineered for ultimate relaxation, this master bath overhaul incorporates floor-to-ceiling bookmatched porcelain tiles, a curbless rain shower with linear floor drainage, floating dual oak vanities, and ambient perimeter lighting.",
    coverImage:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=85",
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
    isFeatured: false,
  },
  {
    id: "project-placeholder-04",
    title: "Open Coastal Living Interior",
    category: "Interiors",
    categorySlug: "interiors",
    location: "Palm Beach County, Florida",
    summary:
      "Architectural living space overhaul featuring custom slatted feature walls and flush lighting.",
    description:
      "An interior modernization that replaced heavy drywall archways with crisp rectangular transitions, flush linear air diffusers, warm oak ceiling slats, and wide-plank engineered flooring.",
    coverImage:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
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
    id: "project-placeholder-05",
    title: "Custom Closet & Millwork Suite",
    category: "Custom Details",
    categorySlug: "custom-details",
    location: "Broward County, Florida",
    summary:
      "Bespoke walk-in dressing room with glass-front displays, island storage, and velvet drawers.",
    description:
      "Precision finish carpentry transforming a master walk-in closet into a boutique-style dressing lounge, complete with integrated LED clothing rails, suede drawer liners, and glass display cases.",
    coverImage:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
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
    id: "project-placeholder-06",
    title: "Impact Glass & Pivot Entry System",
    category: "Doors and Windows",
    categorySlug: "doors-windows",
    location: "Palm Beach County, Florida",
    summary:
      "Grand 10-foot wood pivot front door and hurricane impact sliding glass patio system.",
    description:
      "Upgrading entryways and patio portals with custom hurricane impact architectural glass sliding doors and an imposing custom oak pivot door with electronic smart lock integration.",
    coverImage:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
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
