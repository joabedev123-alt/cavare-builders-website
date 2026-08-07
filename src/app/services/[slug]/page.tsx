import React from "react";
import Metadata from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData, ServiceItem } from "@/data/services";
import { projectsData } from "@/data/projects";
import { companyConfig } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return {
      title: "Service Not Found | Cavare Builders LLC",
    };
  }

  return {
    title: `${service.title} | Cavare Builders LLC`,
    description: service.detailedOverview,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  // Find related real projects matching or featuring this service area
  const relatedProjects = projectsData.slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      {/* Header Banner & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Breadcrumb
          items={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/15 border border-brand-gold/30 rounded-sm">
              <i className={`bi bi-${service.icon} text-brand-gold`} />
              <span className="text-xs font-sans uppercase tracking-wider font-semibold text-brand-gold">
                SERVICE NO. {service.number} • {service.subtitle}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15]">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
              {service.detailedOverview}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
              >
                Schedule Consultation
              </Link>
              <a
                href={companyConfig.getWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-black hover:bg-brand-dark text-brand-marble font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300 flex items-center gap-2"
              >
                <i className="bi bi-whatsapp text-[#25D366] text-base" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-sm overflow-hidden shadow-floating border border-brand-stone">
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scope of Work & Capabilities */}
      <section className="py-16 bg-white border-y border-brand-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SCOPE OF WORK"
            title={`What’s Included in ${service.title}`}
            description="Every detail of our execution is managed with trade precision, licensed oversight, and clean craftsmanship."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-brand-marble/50 rounded-sm border border-brand-stone flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0 mt-0.5">
                  <i className="bi bi-check-lg text-lg font-bold" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium text-brand-black mb-1">
                    Capability 0{index + 1}
                  </h4>
                  <p className="text-xs text-brand-muted font-light leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Specific to this Service */}
      <section className="py-20 bg-brand-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="EXECUTION METHODOLOGY"
            title="How We Deliver Results"
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation & Site Review", text: "In-depth review of property conditions, client goals, and trade scope." },
              { step: "02", title: "Material & Plan Finalization", text: "Exact selection of slabs, fixtures, finishes, and construction timeline." },
              { step: "03", title: "Precision Execution", text: "Clean trade work, daily quality inspections, and structural precision." },
              { step: "04", title: "Final Walkthrough", text: "Thorough punch-list sign-off and client walkthrough before handoff." },
            ].map((p) => (
              <div key={p.step} className="p-6 bg-white rounded-sm border border-brand-stone shadow-subtle">
                <span className="font-serif text-3xl font-bold text-brand-gold block mb-3">{p.step}</span>
                <h3 className="font-serif text-xl font-medium text-brand-black mb-2">{p.title}</h3>
                <p className="text-xs text-brand-muted font-light leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Real Projects Showcase */}
      <section className="py-20 bg-brand-black text-brand-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FEATURED RECENT WORK"
            title={`Recent ${service.title} Projects`}
            darkBackground
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-brand-dark rounded-sm border border-brand-dark-border overflow-hidden group shadow-dark"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans block mb-1">
                    {project.location}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-brand-marble mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-stone/70 font-light leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects#${project.id}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-brand-gold font-semibold hover:text-white transition-colors"
                  >
                    <span>Explore Project</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated CTA */}
      <section className="py-16 bg-brand-gold text-brand-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-4">
            Ready to Start Your {service.title}?
          </h2>
          <p className="text-sm font-sans mb-8 max-w-xl mx-auto">
            Contact Cavare Builders LLC today for professional guidance, detailed estimates, and exceptional craftsmanship.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-black text-brand-marble font-sans text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-brand-dark transition-all duration-300 shadow-floating"
          >
            <span>Book Your Consultation</span>
            <i className="bi bi-arrow-right text-brand-gold" />
          </Link>
        </div>
      </section>
    </div>
  );
}
