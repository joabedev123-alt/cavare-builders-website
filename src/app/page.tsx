import Image from "next/image";
import Link from "next/link";
import { companyConfig } from "@/data/company";
import { servicesData } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Contemporary-Kitchen-Custom-Cabinetry-European-Kitchen-Design-41.jpeg"
            alt="Luxury Custom Kitchen by Cavare Builders"
            fill
            priority
            className="object-cover object-center scale-105 animate-[kenburns_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-20 fade-in">
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-[1px] bg-brand-gold" />
            <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.3em] font-semibold text-brand-gold">
              Welcome to Cavare
            </span>
            <span className="w-8 sm:w-12 h-[1px] bg-brand-gold" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight mb-6 sm:mb-8 font-medium">
            Fine Craftsmanship <br className="hidden sm:block" />
            <span className="italic font-normal text-brand-gold">& Premium Interiors</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed">
            {companyConfig.valueProposition}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/projects"
              className="px-8 py-4 w-full sm:w-auto bg-brand-gold text-brand-black hover:bg-[#d6b26e] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {companyConfig.secondaryGoalText}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white/10 font-sans text-xs uppercase tracking-widest font-semibold rounded-sm transition-all duration-300"
            >
              {companyConfig.primaryGoalText}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce">
          <span className="text-[10px] font-sans uppercase tracking-widest text-brand-gold/80 mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
        </div>
      </section>

      {/* Intro Statement Section */}
      <section className="w-full py-24 sm:py-32 bg-brand-marble">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-black leading-tight mb-8">
            Elevating South Florida Living Through <span className="italic text-brand-gold">Uncompromising Quality</span>.
          </h2>
          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            From complete home renovations to bespoke custom millwork, Cavare Builders brings architectural visions to life. We partner with homeowners, architects, and designers to execute complex projects with meticulous attention to detail and a commitment to excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {[
              { label: "Years of Excellence", value: "10+" },
              { label: "Completed Projects", value: "250+" },
              { label: "Client Satisfaction", value: "100%" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="block font-serif text-4xl sm:text-5xl text-brand-gold mb-2">{stat.value}</span>
                <span className="text-xs font-sans uppercase tracking-widest text-brand-muted font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-24 sm:py-32 bg-brand-black text-brand-marble">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Comprehensive Luxury Services"
            description="Delivering end-to-end construction and remodeling solutions tailored to the highest standards of luxury living."
            align="center"
            className="mb-16 sm:mb-24"
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {servicesData.map((service) => (
              <div key={service.id} className="group relative bg-brand-dark border border-brand-dark-border p-8 sm:p-10 rounded-sm hover:border-brand-gold/30 transition-colors duration-500">
                <div className="w-14 h-14 bg-brand-black border border-brand-dark-border rounded-full flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500">
                  <i className={`bi ${service.icon} text-2xl`} />
                </div>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h3>
                <p className="text-stone-400 font-light leading-relaxed mb-8 line-clamp-3">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-xs font-sans uppercase tracking-widest font-semibold text-brand-gold hover:text-white transition-colors"
                >
                  Explore Service <i className="bi bi-arrow-right ml-2 text-lg leading-none" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="w-full py-24 sm:py-32 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <SectionHeading
              eyebrow="Portfolio"
              title="Featured Work"
              description="A curated selection of our most recent luxury transformations across South Florida."
              align="left"
              className="mb-0 max-w-2xl"
            />
            <Link
              href="/projects"
              className="shrink-0 inline-flex items-center text-xs font-sans uppercase tracking-widest font-semibold text-brand-black hover:text-brand-gold border-b border-brand-black hover:border-brand-gold pb-1 transition-all"
            >
              View Full Portfolio
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Lighthouse Point Estate",
                category: "Full Renovation",
                image: "/images/Full-House-Construction-by-Cavare-Interiors-in-Lighthouse-Point-1-scaled.jpeg"
              },
              {
                title: "Delray Beach Kitchen",
                category: "Custom Millwork",
                image: "/images/Kitchen-island-1.webp"
              }
            ].map((project, idx) => (
              <Link href="/projects" key={idx} className="group block">
                <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden rounded-sm mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-sans uppercase tracking-widest text-brand-gold font-bold mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-2xl text-brand-black group-hover:text-brand-gold transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-brand-stone flex items-center justify-center text-brand-black group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
                    <i className="bi bi-arrow-up-right" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Ultra-High-End-Bathroom-1-2048x1434.jpg"
            alt="Luxury Bathroom"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-base sm:text-lg text-stone-300 font-light mb-10 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and begin the journey toward your dream home.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-brand-gold text-brand-black hover:bg-[#d6b26e] font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
