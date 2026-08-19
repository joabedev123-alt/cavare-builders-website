"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryData } from "@/data/gallery";

const CATEGORIES = [
  "All",
  "Full Renovations",
  "Kitchens & Bathrooms",
  "Outdoor Spaces",
  "Custom Millwork",
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Full Home Renovation - Lighthouse Point",
    categories: ["Full Renovations"],
    description: (
      <>
        <p>This project represents a complete residential transformation, from the foundation, executed with precision, coordenação e elevados padrões of design. Every phase of the renovation was meticulously managed, providing seamless integration between structural improvements and refined interior finishes.</p>
        <p>The scope included complete modernization of plumbing, electrical, and mechanical systems, ensuring optimal performance, efficiency and compliance with modern building codes. Structural improvements were complemented by roof repairs, installation of new drywall, new impact-resistant windows and doors throughout the house, a new luxury impact-resistant entry door and detailed finishes throughout the property.</p>
        <p>The interior was reimagined with custom millwork and cabinetry, installation of high-quality flooring and carefully selected materials that enhance both durability and aesthetic value. The kitchen and living room were transformed into a cohesive, open-concept layout, with custom elements and high-end finishes.</p>
        <p>Exterior improvements included an expanded patio, designed to enhance the outdoor living experience and create a seamless transition between indoor and outdoor spaces.</p>
        <p>Every detail, from infrastructure to final finishes, was executed to deliver a move-in ready residence, that reflects sophistication, functionality, and long-term value.</p>
      </>
    ),
    images: [
      "/images/Full-House-Construction-by-Cavare-Interiors-in-Lighthouse-Point-1-scaled.jpeg",
      "/images/Full-renovation-remodeling-in-Fort-Lauderdale-scaled.jpeg",
      "/images/Master-bedroom-picture-after-scaled.webp",
      "/images/Luxury-Bathroom-Remodeling-in-lighthouse-point-scaled.webp"
    ]
  },
  {
    id: 2,
    title: "Modern Full Home Renovation - Lighthouse Point",
    categories: ["Full Renovations"],
    description: (
      <>
        <p>This project represents a complete luxury residential transformation, built from the ground up with a focus on structural integrity, sophisticated design, and exceptional craftsmanship. From the foundation to the final architectural details, each phase was carefully planned and professionally executed to deliver a flawless, high-end result.</p>
        <p>The scope included complete site preparation, foundation construction, pool installation, custom deck areas, plumbing, electrical, and mechanical systems, as well as structural improvements throughout the property. Each component was designed to integrate functionality, durability, and modern luxury.</p>
        <p>Indoor and outdoor spaces were carefully developed to create a cohesive indoor-outdoor experience, combining top-tier materials, refined finishes, and custom details, tailored to the property's architecture and lifestyle.</p>
        <p>Outdoor living areas, the pool, and entertainment spaces were designed to increase comfort, elegance, and the long-term value of the property, maintaining a sophisticated and timeless aesthetic.</p>
        <p>From infrastructure and construction to luxury finishes and exterior design, this project was completed with precision, coordination, and attention to every detail — delivering a move-in ready residence, built for beauty and performance.</p>
      </>
    ),
    images: [
      "/images/New-house-construction-and-Impact-windows-and-doors-in-lighthouse-point-florida-1.jpeg",
      "/images/New-Construction-building-ready.jpeg",
      "/images/Kitchen-remodeling-in-Lighthouse-Point-1-scaled.jpeg",
      "/images/Full-House-Construction-by-Cavare-Interiors-Kitchen-Remodeling-in-Lighthouse-Point-1-scaled.jpeg"
    ]
  },
  {
    id: 3,
    title: "Premium Flooring, Kitchen & Bathroom Remodeling – Fort Lauderdale",
    categories: ["Kitchens & Bathrooms"],
    description: (
      <>
        <p>Located in Fort Lauderdale, this project focused on modernizing floors and bathrooms, resulting in a more sophisticated and functional interior.</p>
        <p>The scope included high-quality flooring installation and complete bathroom remodeling, using premium materials and specialized craftsmanship. The result is a modern and elegant space, designed for comfort, durability, and everyday luxury.</p>
      </>
    ),
    images: [
      "/images/Floor-Install-3.jpeg",
      "/images/Sauna-Installation.jpeg",
      "/images/Bathroom-remodeling-in-Fort-Lauderdale-scaled.jpeg",
      "/images/Spa-Bathroom-walking-shower-with-golden-finish.webp"
    ]
  },
  {
    id: 4,
    title: "Full Home Renovation - Delray Beach",
    categories: ["Full Renovations"],
    description: (
      <p>Complete interior remodel, including demolition, structural updates and total reconstruction of all living spaces. The scope covers kitchens, bathrooms, and flooring, executed with precise coordination, high-quality craftsmanship, and fully move-in ready delivery.</p>
    ),
    images: [
      "/images/Impact-Window-Fixed-on-Kitchen-Delray-beach.webp",
      "/images/Kitchen-island-1.webp",
      "/images/Master-Bathroom-full-remodeling-Delray-Beach.webp",
      "/images/Stair-Drywall-Railing-with-Engineer-Wood.webp"
    ]
  },
  {
    id: 5,
    title: "Luxury Apartment Transformation – Pompano Beach",
    categories: ["Full Renovations"],
    description: (
      <>
        <p>This project features a complete interior transformation of a residential apartment, executed with a focus on precision, efficiency, and sophisticated design. Every aspect of the remodel was carefully coordinated to provide a modern and refined environment, with impeccable functionality.</p>
        <p>The scope included complete modernization das instalações hidráulicas, elétricas e mecânicas, garantindo o desempenho ideal dos sistemas e a conformidade com as normas vigentes. The internal structure was enhanced with the installation of new drywall, detailed finishes, and flawless surface preparation throughout the space.</p>
        <p>The apartment was reimagined with custom cabinetry, high-quality millwork and flooring, creating a cohesive and sophisticated aesthetic. The kitchen and living room were redesigned into an open and integrated layout, maximizing space, light, and flow, while incorporating top-tier materials and custom details.</p>
        <p>Bathrooms and living rooms were modernized with contemporary finishes, offering comfort and durability. Every element — from infrastructure to final details — was executed with a commitment to craftsmanship and timeless design.</p>
        <p>The result is a fully renovated apartment, ready to move in, combining elegance, functionality, and long-term value.</p>
      </>
    ),
    images: [
      "/images/Full-home-and-apartment-remodeling-1-1-1024x683.webp",
      "/images/Living-room-after-1.webp",
      "/images/Kitchen-after-the-fact-ali-2.webp",
      "/images/Luxury-Bathroom-Remodeling-around-pompano-beach-scaled.jpg"
    ]
  },
  {
    id: 6,
    title: "Porcelain Tile Installation on Pool Deck – Boca Raton",
    categories: ["Outdoor Spaces"],
    description: (
      <p>Preparation of the pool deck area, including leveling and base, followed by the precise installation of tiles around the pool perimeter. The service includes proper grading for drainage, precise alignment, grouting, edge finishing, and detailed tile installation for a flawless and refined final result.</p>
    ),
    images: [
      "/images/Pool-deck-pavers.webp",
      "/images/Swimming-pool-tiles-pavers-Travertino-Stone-around-pool.webp",
      "/images/Porcelain-Tiles-versus-ceramic-tile-Tile-Installation-Tile-Company-Installation-1.webp",
      "/images/Pool-deck-pavers.webp"
    ]
  },
  {
    id: 7,
    title: "Luxury Pergolas and Fences in South Florida",
    categories: ["Outdoor Spaces"],
    description: (
      <>
        <p>Na Cavare Interiors, we design and build custom luxury pergolas and fences that combine elegance, privacy, durability, and exceptional craftsmanship. We proudly serve high-end residential communities, including Naples, Bonita Springs, Parkland, Lighthouse Point, Palm City, Boca Raton, Fort Lauderdale, and surrounding areas in South Florida.</p>
        <p>From modern outdoor living spaces to custom architectural fences, we tailor each project with top-tier materials, timeless design, and attention to every detail.</p>
      </>
    ),
    images: [
      "/images/Aluminum-Pergola-in-Boca-Raton-by-Cavare.jpeg",
      "/images/Aluminum-Pergola-on-Lauderdale-by-the-sea.jpeg",
      "/images/Aluminum-Pergola-in-Fort-Lauderdale-by-cavare.jpeg",
      "/images/Aluminum-Pergola-and-fence-in-fort-lauderdale.jpeg"
    ]
  },
  {
    id: 8,
    title: "Luxury Kitchen Remodeling Projects",
    categories: ["Kitchens & Bathrooms"],
    description: (
      <>
        <p>The kitchen is the heart of the home e, na Cavare Interiors, we create spaces that perfectly combine beauty, functionality, and lasting value. Whatever your vision — a timeless white kitchen, a cozy oak design, a sleek modern layout, a sophisticated transitional style or a fully custom luxury kitchen —, our team brings your project to life with exceptional skill and attention to detail.</p>
        <p>From custom cabinetry and high-quality countertops to innovative storage solutions, lighting, flooring and complete layout transformations, each element is carefully selected to enhance both aesthetics and everyday living. Our goal is to create a kitchen that reflects your personal style, providing the comfort, functionality, and elegance your home deserves. With a commitment to quality and excellence, we transform ordinary kitchens into extraordinary spaces, designed to be enjoyed for many years.</p>
      </>
    ),
    images: [
      "/images/Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design-41.jpeg",
      "/images/Backlit-CountertopModern-Kitchen-Design-Illuminated-CountertopCristalloonyxTaj-Mahal-Quartzite-Countertops-Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design3.jpeg",
      "/images/Cashmere-Kitchen-Handleless-Kitchen-Modern-Kitchen-Design-Luxury-Kitchen-Taj-Mahal-Quartzite-Taj-Mahal-Countertops-Contemporary-Kitchen-Custom-Cabinetrycrystal-light-countertop-1.jpeg",
      "/images/Modern-Wooden-Kitchen-1-scaled.jpg"
    ]
  },
  {
    id: 9,
    title: "Luxury Bathroom Remodeling Projects",
    categories: ["Kitchens & Bathrooms"],
    description: (
      <p>Transform your bathroom into a private luxury retreat with custom projects that combine elegance, comfort, and functionality. Na Cavare Interiors, we specialize in high-end bathroom remodeling, with zero-entry showers, soaking tubs, custom countertops, premium tiles, natural stone, luxury lighting, frameless glass enclosures, and designer fixtures. Whatever your style – modern, contemporary, or classic –, we create beautiful, spa-inspired bathrooms, with exceptional craftsmanship and attention to every detail.</p>
    ),
    images: [
      "/images/Ultra-High-End-Bathroom-1-2048x1434.jpg",
      "/images/Double-vanity-luxury-bathroom-Fort-Lauderdale-scaled.webp",
      "/images/Luxury-Bathroom-Remodeling-near-Naples-scaled.jpg",
      "/images/Luxury-Bathroom-Remodeling-company-near-boca-raton-scaled.jpg"
    ]
  },
  {
    id: 10,
    title: "Custom Furniture, Wall Panels & Interior Design",
    categories: ["Custom Millwork"],
    description: (
      <p>Transform your space with custom furniture, decorative wall panels, and custom interior design solutions that combine luxury, functionality, and exceptional craftsmanship. Na Cavare Interiors, we design and build entertainment centers, media panels, built-in cabinets, accent walls, wood slat panels, fluted panels, custom shelving, and architectural millwork tailored to your vision. Every detail is carefully crafted to create elegant and timeless interiors that enhance both residential and commercial spaces.</p>
    ),
    images: [
      "/images/Custom-Furniture-Wall-Panels-Decorative-Wall-Panels-Wood-Slat-Walls-Fluted-Wall-Panels-Feature-Walls-Accent-Walls-Custom-Millworkt-Custom-Cabinetry-1-1-scaled.webp",
      "/images/custom-built-in-wall-unit-luxury-living-room.webp",
      "/images/Luxury-closet-Custom-design-Customdesign-LuxuryDesign-luxurycustomization-closet-bycallvare.webp",
      "/images/Master-bedroom-and-tv-stand-wall-deco-scaled.webp"
    ]
  }
];

interface ProjectSectionProps {
  title: string;
  description: React.ReactNode;
  images: string[];
}

function ProjectSection({ title, description, images }: ProjectSectionProps) {
  return (
    <section className="py-20 border-b border-brand-stone/40 last:border-b-0 bg-white animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-black mb-6">{title}</h2>
          <div className="text-base sm:text-lg text-brand-muted font-light leading-relaxed space-y-4">
            {description}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="relative h-64 sm:h-72 w-full overflow-hidden rounded-sm border border-brand-stone/60 group">
              <Image src={img} alt={`${title} - photo ${idx + 1}`} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(24);

  useEffect(() => {
    setVisibleGalleryCount(24);
  }, [activeCategory]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.categories.includes(activeCategory));
  }, [activeCategory]);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") {
      return galleryData;
    }
    return galleryData.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  const visibleGalleryImages = filteredGallery.slice(0, visibleGalleryCount);
  const hasMoreGallery = visibleGalleryCount < filteredGallery.length;

  return (
    <div className="pt-28 pb-0 bg-brand-marble min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Breadcrumb items={[{ label: "Projects" }]} />

        <div className="max-w-3xl mt-6 text-center mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              CAVARE PROJECTS
            </span>
            <span className="w-6 h-[1px] bg-brand-gold" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Our work: <br />
            <span className="italic font-normal text-brand-gold">Real projects. Refined results.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            A Cavare Interiors apresenta um portfólio selecionado of projetos concluídos in South and Southwest Florida, including Naples, Cape Coral, Pompano Beach, Fort Lauderdale, Boca Raton, Palm Beach e comunidades of luxo vizinhas.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-brand-gold text-brand-black shadow-md border border-brand-gold"
                  : "bg-transparent text-brand-muted border border-brand-stone/60 hover:border-brand-gold hover:text-brand-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-brand-stone/40">
        <div className="min-h-[50vh]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectSection
                key={project.id}
                title={project.title}
                description={project.description}
                images={project.images}
              />
            ))
          ) : (
            <div className="py-20 text-center text-brand-muted font-medium text-lg">
              No projects found in this category.
            </div>
          )}
        </div>

        {/* FULL GALLERY SECTION */}
        {filteredGallery.length > 0 && (
          <section className="py-24 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className="font-serif text-3xl sm:text-4xl text-brand-black mb-4">Inspiration Gallery</h3>
                <p className="text-base text-brand-muted font-light max-w-2xl mx-auto">
                  Explore hundreds of exclusive photos of our projects.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {visibleGalleryImages.map((img, idx) => (
                  <div key={idx} className="relative w-full aspect-square overflow-hidden rounded-sm group shadow-sm bg-brand-stone/20">
                    <Image 
                      src={img.src} 
                      alt={`Inspiration ${activeCategory} ${idx + 1}`} 
                      fill 
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover group-hover:scale-[1.05] transition-transform duration-700" 
                      loading={idx < 8 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
              </div>

              {hasMoreGallery && (
                <div className="mt-16 text-center">
                  <button
                    onClick={() => setVisibleGalleryCount((prev) => prev + 24)}
                    className="inline-flex items-center justify-center px-10 py-4 border border-brand-gold bg-brand-gold text-brand-black hover:bg-[#d6b26e] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-sm"
                  >
                    Load More Photos
                  </button>
                  <p className="mt-4 text-xs text-brand-stone font-medium">
                    Showing {visibleGalleryImages.length} of {filteredGallery.length} photos
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
        
        <section className="py-20 bg-brand-black text-brand-marble border-t border-brand-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-gold mb-6">Excellence is always under construction.</h2>
            <p className="text-base sm:text-lg text-brand-stone font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Nossa equipe dá vida a novos projetos of luxo todos os dias. More beautifully designed spaces and inspiring transformations will be added soon. Stay tuned as we continue to build exceptional interiors, designed to exceed expectations.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative h-64 w-64 border border-brand-dark-border rounded-sm overflow-hidden flex items-center justify-center bg-brand-black/50 group shadow-card">
                  <span className="text-brand-gold font-sans uppercase tracking-widest text-sm font-semibold z-10 group-hover:scale-110 transition-transform">Coming Soon</span>
                  <Image src="/images/Coming-Soon-1.webp" alt="Coming Soon" fill className="object-cover opacity-20 mix-blend-overlay group-hover:opacity-30 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="bg-brand-marble text-brand-black py-20 border-t border-brand-stone/60">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <SectionHeading
              eyebrow="READY TO TRANSFORM YOUR SPACE?"
              title="Ready to start your project??"
              description="If you are planning a remodel, new construction ou precisa of um empreiteiro geral confiável em Pompano Beach or anywhere in South Florida, Cavare Interiors is ready to bring your vision to life."
              align="center"
              className="mb-8"
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
              >
                Request a quote today!
              </Link>
              <a
                href="tel:7543157373"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-black text-brand-black hover:bg-brand-black hover:text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
              >
                Call 754-315-7373
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
