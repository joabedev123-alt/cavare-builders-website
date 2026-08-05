export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailedOverview: string;
  icon: string; // Bootstrap icon class name without 'bi-'
  imageUrl: string;
  highlights: string[];
  whatsappMessage: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "full-home-remodeling",
    number: "01",
    title: "Full Home Remodeling",
    subtitle: "Complete Property Transformations",
    description:
      "Complete residential transformations designed around your space, lifestyle, and long-term goals.",
    detailedOverview:
      "Our full home remodeling service reimagines your property from structural planning to final decorative trim. We coordinate architecture, plumbing, electrical, framing, and interior finishes in one seamless process tailored for South Florida living.",
    icon: "house-door",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Architectural layout optimization",
      "Structural reconfigurations & open-concept spaces",
      "Electrical, plumbing & HVAC coordination",
      "Comprehensive material selection & execution",
      "Dedicated project management from start to finish",
    ],
    whatsappMessage:
      "Hello, I would like to discuss a full home remodeling project with Cavare Builders LLC.",
  },
  {
    id: "kitchen-remodeling",
    number: "02",
    title: "Kitchen Remodeling",
    subtitle: "Culinary Spaces & Custom Cabinetry",
    description:
      "Custom kitchens combining refined cabinetry, functional layouts, quality surfaces, lighting, and precise installation.",
    detailedOverview:
      "The kitchen is the heart of the home. We craft bespoke kitchen interiors featuring integrated appliances, waterfall marble counter islands, custom storage solutions, architectural lighting, and high-performance fixtures.",
    icon: "grid-1x2",
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Custom built cabinetry & island design",
      "Premium quartz, granite, and marble surfaces",
      "Under-cabinet & dimmable LED lighting systems",
      "Backsplash tile & slab installation",
      "High-end appliance integration & plumbing",
    ],
    whatsappMessage:
      "Hello, I would like to schedule a consultation for a kitchen remodeling project with Cavare Builders LLC.",
  },
  {
    id: "bathroom-remodeling",
    number: "03",
    title: "Bathroom Remodeling",
    subtitle: "Spa-Inspired Luxury Bath Suites",
    description:
      "Elegant and functional bathrooms created through thoughtful planning, premium materials, and detail-focused execution.",
    detailedOverview:
      "Transform your bathrooms into private sanctuaries. From custom walk-in curbless showers and freestanding soaking tubs to floating stone vanities and radiant tile work, we pay attention to every detail.",
    icon: "droplet",
    imageUrl:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Custom curbless glass walk-in showers",
      "Freestanding tubs & wall-mounted vanities",
      "Large-format porcelain & natural marble tiling",
      "Waterproofing & linear drain systems",
      "Architectural bath fixtures & recessed niches",
    ],
    whatsappMessage:
      "Hello, I would like to schedule a consultation for a bathroom remodeling project with Cavare Builders LLC.",
  },
  {
    id: "interior-renovations",
    number: "04",
    title: "Interior Renovations",
    subtitle: "Refined Living Areas & Flow",
    description:
      "Interior upgrades that improve flow, comfort, materials, lighting, finishes, and the overall character of the property.",
    detailedOverview:
      "Elevate everyday living areas with open floorplans, custom drywall niches, modern ceiling treatments, recessed LED linear trim, updated interior doors, and cohesive paint schemes.",
    icon: "layers",
    imageUrl:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Wall removals & open-concept living design",
      "Coffered, tray, and smooth ceiling finishes",
      "Architectural lighting design & smart switches",
      "Drywall finishing & custom accent features",
      "Premium paint & wall treatment applications",
    ],
    whatsappMessage:
      "Hello, I would like to learn more about interior renovation services from Cavare Builders LLC.",
  },
  {
    id: "flooring-surfaces",
    number: "05",
    title: "Flooring and Surfaces",
    subtitle: "Precision Tiling & Hardwood",
    description:
      "Professional installation of porcelain, tile, engineered wood, luxury vinyl, marble, granite, and other premium surfaces.",
    detailedOverview:
      "Flooring defines the continuous feel of a luxury interior. We expertly lay large-format porcelain slabs, chevron/herringbone engineered wood, polished marble, and durable luxury vinyl tile with flush transitions.",
    icon: "bounding-box-circles",
    imageUrl:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Large-format porcelain & marble slab installation",
      "Engineered hardwood & herringbone patterns",
      "Subfloor leveling & acoustic underlayment",
      "Seamless flush floor transitions",
      "Baseboard & shoe molding craftsmanship",
    ],
    whatsappMessage:
      "Hello, I would like to inquire about flooring and surface installation with Cavare Builders LLC.",
  },
  {
    id: "doors-windows",
    number: "06",
    title: "Doors and Windows",
    subtitle: "Architectural Openings & Systems",
    description:
      "Interior doors, exterior doors, impact windows, sliding systems, and architectural solutions selected for performance and design.",
    detailedOverview:
      "Enhance security, thermal insulation, sound dampening, and aesthetics with custom interior frameless doors, solid core wood doors, pivot entry doors, and hurricane impact sliding glass systems built for Florida climate.",
    icon: "door-open",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Custom solid-core & frameless interior doors",
      "Impact glass windows & multi-slide patio doors",
      "Grand architectural entry pivot doors",
      "Concealed hinge hardware & magnetic latches",
      "Precision weather-sealing & framing",
    ],
    whatsappMessage:
      "Hello, I am interested in doors and impact window solutions from Cavare Builders LLC.",
  },
  {
    id: "custom-millwork",
    number: "07",
    title: "Custom Millwork and Built-ins",
    subtitle: "Bespoke Carpentry & Closets",
    description:
      "Custom closets, cabinetry, wall panels, storage solutions, furniture, and architectural woodwork tailored to the property.",
    detailedOverview:
      "Our finish carpenters build custom storage, walk-in closet systems, media wall built-ins, slatted wood feature walls, floating credenzas, and decorative trim that maximize utility while adding distinct warmth.",
    icon: "hammer",
    imageUrl:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Custom walk-in closet organizers & dressing rooms",
      "Media wall units & integrated electric fireplaces",
      "Slatted wood accent walls & decorative paneling",
      "Bespoke bar & wine cellar cabinetry",
      "Integrated architectural LED channel lighting",
    ],
    whatsappMessage:
      "Hello, I would like to discuss custom millwork and built-ins with Cavare Builders LLC.",
  },
  {
    id: "construction-coordination",
    number: "08",
    title: "Construction Coordination",
    subtitle: "Organized Project Leadership",
    description:
      "Organized project planning, trade coordination, documentation, execution oversight, and final quality review.",
    detailedOverview:
      "Eliminate stress with structured project leadership. We handle schedule management, subcontractor supervision, material procurement timelines, municipal inspections, and rigorous daily quality control reviews.",
    icon: "kanban",
    imageUrl:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
    highlights: [
      "Comprehensive timeline & schedule tracking",
      "Subcontractor & specialized trade supervision",
      "Material lead time management & staging",
      "Daily site cleanliness & protection standards",
      "Final punch-list walkthrough & quality sign-off",
    ],
    whatsappMessage:
      "Hello, I would like to inquire about project planning and construction coordination with Cavare Builders LLC.",
  },
];
