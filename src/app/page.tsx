import { CinematicHero } from "@/components/home/CinematicHero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProject } from "@/components/home/FeaturedProject";
import { DifferentialsSection } from "@/components/home/DifferentialsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ProjectGallery } from "@/components/home/ProjectGallery";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { ServiceAreaSection } from "@/components/home/ServiceAreaSection";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <IntroSection />
      <ServicesSection />
      <FeaturedProject />
      <DifferentialsSection />
      <ProcessSection />
      <ProjectGallery />
      <BeforeAfterSlider />
      <ServiceAreaSection />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
