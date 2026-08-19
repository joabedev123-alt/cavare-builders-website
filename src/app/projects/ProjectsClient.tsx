"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryData } from "@/data/gallery";

const CATEGORIES = [
  "Todas",
  "Renovações Completas",
  "Cozinhas e Banheiros",
  "Exteriores",
  "Marcenaria e Interiores",
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Renovação completa do imóvel - Lighthouse Point",
    categories: ["Renovações Completas"],
    description: (
      <>
        <p>Este projeto representa uma transformação residencial completa, desde a fundação, executada com precisão, coordenação e elevados padrões de design. Cada fase da renovação foi meticulosamente gerenciada, proporcionando uma integração perfeita entre as melhorias estruturais e os acabamentos interiores refinados.</p>
        <p>O escopo incluiu a modernização completa dos sistemas hidráulico, elétrico e mecânico, garantindo desempenho ideal, eficiência e conformidade com as normas de construção modernas. As melhorias estruturais foram complementadas por reparos no telhado, instalação de novas paredes de drywall, novas janelas e portas resistentes a impactos em toda a casa, uma nova porta de entrada de luxo também resistente a impactos e acabamentos detalhados em toda a propriedade.</p>
        <p>O interior foi repensado com marcenaria e armários sob medida, instalação de pisos de alta qualidade e materiais cuidadosamente selecionados que aprimoram tanto a durabilidade quanto o valor estético. A cozinha e a sala de estar foram transformadas em um layout coeso e de conceito aberto, com elementos personalizados e acabamento de alto padrão.</p>
        <p>As melhorias externas incluíram um pátio ampliado, projetado para ampliar a experiência de vida ao ar livre e criar uma transição perfeita entre os ambientes internos e externos.</p>
        <p>Cada detalhe, da infraestrutura aos acabamentos finais, foi executado para entregar uma residência pronta para morar, que reflete sofisticação, funcionalidade e valor a longo prazo.</p>
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
    title: "Renovação completa de imóvel moderno - Lighthouse Point",
    categories: ["Renovações Completas"],
    description: (
      <>
        <p>Este projeto representa uma transformação residencial de luxo completa, construída do zero com foco em integridade estrutural, design sofisticado e acabamento excepcional. Da fundação aos detalhes arquitetônicos finais, cada fase foi cuidadosamente planejada e executada profissionalmente para entregar um resultado impecável e de alto padrão.</p>
        <p>O escopo incluiu preparação completa do terreno, construção da fundação, instalação da piscina, áreas de deck personalizadas, sistemas hidráulicos, elétricos e mecânicos, além de melhorias estruturais em toda a propriedade. Cada componente foi projetado para integrar funcionalidade, durabilidade e luxo moderno.</p>
        <p>Os espaços internos e externos foram cuidadosamente desenvolvidos para criar uma experiência coesa entre interior e exterior, combinando materiais de primeira linha, acabamentos refinados e detalhes personalizados, adaptados à arquitetura e ao estilo de vida da propriedade.</p>
        <p>As áreas de convivência ao ar livre, a piscina e os espaços de entretenimento foram projetados para aumentar o conforto, a elegância e o valor da propriedade a longo prazo, mantendo uma estética sofisticada e atemporal.</p>
        <p>Da infraestrutura e construção aos acabamentos de luxo e ao design das áreas externas, este projeto foi concluído com precisão, coordenação e atenção a cada detalhe — entregando uma residência pronta para morar, construída para beleza e desempenho.</p>
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
    title: "Pisos Premium, Reforma de Cozinhas e Banheiros – Fort Lauderdale",
    categories: ["Cozinhas e Banheiros"],
    description: (
      <>
        <p>Localizado em Fort Lauderdale, este projeto teve como foco a modernização dos pisos e banheiros, resultando em um interior mais sofisticado e funcional.</p>
        <p>O escopo incluiu a instalação de pisos de alta qualidade e a reforma completa dos banheiros, utilizando materiais de primeira linha e mão de obra especializada. O resultado é um espaço moderno e elegante, projetado para conforto, durabilidade e luxo no dia a dia.</p>
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
    title: "Renovação completa do imóvel - Delray Beach",
    categories: ["Renovações Completas"],
    description: (
      <p>Reforma completa do interior, incluindo demolição, atualizações estruturais e reconstrução total de todos os espaços habitáveis. O escopo abrange cozinhas, banheiros e pisos, executados com coordenação precisa, acabamento de alta qualidade e entrega totalmente pronta para morar.</p>
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
    title: "Transformação de Apartamento de Luxo – Pompano Beach",
    categories: ["Renovações Completas"],
    description: (
      <>
        <p>Este projeto apresenta uma transformação completa do interior de um apartamento residencial, executada com foco em precisão, eficiência e design sofisticado. Cada aspecto da reforma foi cuidadosamente coordenado para proporcionar um ambiente moderno e refinado, com funcionalidade impecável.</p>
        <p>O escopo incluiu a modernização completa das instalações hidráulicas, elétricas e mecânicas, garantindo o desempenho ideal dos sistemas e a conformidade com as normas vigentes. A estrutura interna foi aprimorada com a instalação de novas placas de gesso, acabamentos detalhados e preparação impecável das superfícies em todo o espaço.</p>
        <p>O apartamento foi repensado com armários planejados, marcenaria e pisos de alta qualidade, criando uma estética coesa e sofisticada. A cozinha e a sala de estar foram redesenhadas em um layout aberto e integrado, maximizando espaço, luz e fluidez, ao mesmo tempo que incorporam materiais de primeira linha e detalhes personalizados.</p>
        <p>Os banheiros e as salas de estar foram modernizados com acabamentos contemporâneos, oferecendo conforto e durabilidade. Cada elemento — da infraestrutura aos detalhes finais — foi executado com um compromisso com a qualidade artesanal e o design atemporal.</p>
        <p>O resultado é um apartamento totalmente reformado, pronto para morar, que combina elegância, funcionalidade e valor a longo prazo.</p>
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
    title: "Instalação de Revestimento de Porcelanato em Deck de Piscina – Boca Raton",
    categories: ["Exteriores"],
    description: (
      <p>Preparação da área do deck da piscina, incluindo nivelamento e base, seguida da instalação precisa de azulejos ao redor do perímetro da piscina. O serviço inclui inclinação adequada para drenagem, alinhamento preciso, rejuntamento, acabamento das bordas e instalação detalhada do revestimento para um resultado final impecável e refinado.</p>
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
    title: "Pérgolas e cercas de luxo no sul da Flórida",
    categories: ["Exteriores"],
    description: (
      <>
        <p>Na Cavare Interiors, projetamos e construímos pérgolas e cercas de luxo personalizadas que combinam elegância, privacidade, durabilidade e acabamento excepcional. Atendemos com orgulho comunidades residenciais de alto padrão, incluindo Naples, Bonita Springs, Parkland, Lighthouse Point, Palm City, Boca Raton, Fort Lauderdale e arredores no sul da Flórida.</p>
        <p>De espaços modernos de convivência ao ar livre a cercas arquitetônicas personalizadas, adaptamos cada projeto com materiais de primeira linha, design atemporal e atenção a cada detalhe.</p>
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
    title: "Projetos de Remodelação de Cozinhas de Luxo",
    categories: ["Cozinhas e Banheiros"],
    description: (
      <>
        <p>A cozinha é o coração da casa e, na Cavare Interiors, criamos espaços que combinam beleza, funcionalidade e valor duradouro com perfeição. Seja qual for a sua visão — uma cozinha branca atemporal, um design aconchegante em carvalho, um layout moderno e elegante, um estilo de transição sofisticado ou uma cozinha de luxo totalmente personalizada —, nossa equipe dá vida ao seu projeto com excepcional habilidade e atenção aos detalhes.</p>
        <p>De armários planejados e bancadas de alta qualidade a soluções inovadoras de armazenamento, iluminação, pisos e transformações completas do layout, cada elemento é cuidadosamente selecionado para aprimorar tanto a estética quanto o dia a dia. Nosso objetivo é criar uma cozinha que reflita seu estilo pessoal, proporcionando o conforto, a funcionalidade e a elegância que sua casa merece. Com um compromisso com a qualidade e a excelência, transformamos cozinhas comuns em espaços extraordinários, projetados para serem apreciados por muitos anos.</p>
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
    title: "Projetos de reforma de banheiros de luxo",
    categories: ["Cozinhas e Banheiros"],
    description: (
      <p>Transforme seu banheiro em um refúgio de luxo privativo com projetos personalizados que combinam elegância, conforto e funcionalidade. Na Cavare Interiors, somos especialistas em reformas de banheiros de alto padrão, com chuveiros de entrada direta, banheiras de imersão, bancadas personalizadas, azulejos premium, pedras naturais, iluminação de luxo, boxes de vidro sem moldura e acessórios de design. Seja qual for o seu estilo – moderno, contemporâneo ou clássico –, criamos banheiros belíssimos, inspirados em spas, com acabamento excepcional e atenção a cada detalhe.</p>
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
    title: "Móveis sob medida, painéis de parede e design de interiores",
    categories: ["Marcenaria e Interiores"],
    description: (
      <p>Transforme seu espaço com móveis sob medida, painéis de parede decorativos e soluções de design de interiores personalizadas que combinam luxo, funcionalidade e acabamento excepcional. Na Cavare Interiors, projetamos e construímos centros de entretenimento, painéis multimídia, armários embutidos, paredes de destaque, painéis ripados de madeira, painéis canelados, prateleiras personalizadas e marcenaria arquitetônica sob medida para a sua visão. Cada detalhe é cuidadosamente elaborado para criar interiores elegantes e atemporais que valorizam tanto espaços residenciais quanto comerciais.</p>
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
              <Image src={img} alt={`${title} - foto ${idx + 1}`} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsClient() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(24);

  useEffect(() => {
    setVisibleGalleryCount(24);
  }, [activeCategory]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todas") {
      return PROJECTS_DATA;
    }
    return PROJECTS_DATA.filter(project => project.categories.includes(activeCategory));
  }, [activeCategory]);

  const filteredGallery = useMemo(() => {
    if (activeCategory === "Todas") {
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
        <Breadcrumb items={[{ label: "Projetos" }]} />

        <div className="max-w-3xl mt-6 text-center mx-auto">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              PROJETOS DA CAVARE
            </span>
            <span className="w-6 h-[1px] bg-brand-gold" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Nosso trabalho: <br />
            <span className="italic font-normal text-brand-gold">Projetos reais. Resultados refinados.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            A Cavare Interiors apresenta um portfólio selecionado de projetos concluídos no sul e sudoeste da Flórida, incluindo Naples, Cape Coral, Pompano Beach, Fort Lauderdale, Boca Raton, Palm Beach e comunidades de luxo vizinhas.
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
              Nenhum projeto encontrado nesta categoria.
            </div>
          )}
        </div>

        {/* FULL GALLERY SECTION */}
        {filteredGallery.length > 0 && (
          <section className="py-24 bg-[#faf9f6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h3 className="font-serif text-3xl sm:text-4xl text-brand-black mb-4">Galeria de Inspirações</h3>
                <p className="text-base text-brand-muted font-light max-w-2xl mx-auto">
                  Explore centenas de fotos exclusivas dos nossos projetos.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {visibleGalleryImages.map((img, idx) => (
                  <div key={idx} className="relative w-full aspect-square overflow-hidden rounded-sm group shadow-sm bg-brand-stone/20">
                    <Image 
                      src={img.src} 
                      alt={`Inspiração ${activeCategory} ${idx + 1}`} 
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
                    Carregar Mais Fotos
                  </button>
                  <p className="mt-4 text-xs text-brand-stone font-medium">
                    Mostrando {visibleGalleryImages.length} de {filteredGallery.length} fotos
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
        
        <section className="py-20 bg-brand-black text-brand-marble border-t border-brand-dark-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-gold mb-6">A excelência está sempre em construção.</h2>
            <p className="text-base sm:text-lg text-brand-stone font-light leading-relaxed max-w-3xl mx-auto mb-12">
              Nossa equipe dá vida a novos projetos de luxo todos os dias. Mais espaços belamente concebidos e transformações inspiradoras serão adicionados em breve. Fique atento, pois continuaremos a construir interiores excepcionais, projetados para superar expectativas.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative h-64 w-64 border border-brand-dark-border rounded-sm overflow-hidden flex items-center justify-center bg-brand-black/50 group shadow-card">
                  <span className="text-brand-gold font-sans uppercase tracking-widest text-sm font-semibold z-10 group-hover:scale-110 transition-transform">Em breve</span>
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
              title="Pronto para começar seu projeto?"
              description="Se você está planejando uma reforma, uma nova construção ou precisa de um empreiteiro geral confiável em Pompano Beach ou em qualquer lugar no sul da Flórida, a Cavare Interiors está pronta para dar vida à sua visão."
              align="center"
              className="mb-8"
            />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
              >
                Solicite um orçamento hoje mesmo!
              </Link>
              <a
                href="tel:7543157373"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-transparent border border-brand-black text-brand-black hover:bg-brand-black hover:text-white font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
              >
                Ligue para 754-315-7373
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
