"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData, ProjectItem } from "@/data/projects";

const categories = [
  { label: "All Projects", value: "all" },
  { label: "Full Remodels", value: "full-remodels" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Bathrooms", value: "bathrooms" },
  { label: "Interiors", value: "interiors" },
  { label: "Doors & Windows", value: "doors-windows" },
  { label: "Custom Details", value: "custom-details" },
];

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.categorySlug === activeCategory);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title="Craftsmanship You Can See in Every Detail"
          align="center"
          className="mb-10"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-sans font-medium rounded-sm transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-brand-black text-brand-gold shadow-subtle"
                  : "bg-brand-marble text-brand-muted hover:text-brand-black hover:bg-brand-stone"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative h-80 rounded-sm overflow-hidden cursor-pointer shadow-subtle border border-brand-stone"
              >
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-brand-marble">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-sans uppercase tracking-widest bg-brand-gold/20 text-brand-gold border border-brand-gold/40 px-2.5 py-1 rounded-sm">
                      {project.category}
                    </span>
                    <i className="bi bi-arrows-angle-expand text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <div>
                    <span className="text-xs text-brand-stone/80 font-sans block mb-1">
                      {project.location}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-brand-marble group-hover:text-brand-gold transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-brand-black hover:border-brand-gold hover:bg-brand-black text-brand-black hover:text-brand-gold font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
          >
            <span>View All Projects</span>
            <i className="bi bi-grid-3x3-gap" />
          </Link>
        </div>
      </div>

      {/* Lightbox Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-black border border-brand-dark-border rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-floating text-brand-marble relative p-6 sm:p-10"
            >
              {/* Close Modal Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-brand-stone hover:text-brand-gold transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg text-2xl" />
              </button>

              <div className="flex items-center gap-2 text-xs text-brand-gold uppercase tracking-wider font-sans mb-2">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.location}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-brand-marble mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-sm text-brand-stone/80 font-light leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Main Image */}
              <div className="relative h-80 sm:h-96 w-full rounded-sm overflow-hidden mb-6 border border-brand-dark-border">
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Scope Interventions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-dark-border mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold mb-3">
                    Scope Executed:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-brand-stone">
                    {selectedProject.interventions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <i className="bi bi-check2 text-brand-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold mb-3">
                    Materials & Finishes:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-brand-stone">
                    {selectedProject.materials.map((mat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <i className="bi bi-dot text-brand-gold text-lg" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 flex justify-between items-center border-t border-brand-dark-border">
                <Link
                  href="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-brand-gold text-brand-black text-xs uppercase tracking-wider font-bold rounded-sm hover:bg-[#d6b26e] transition-colors"
                >
                  Start Similar Project
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="text-xs text-brand-stone hover:text-brand-marble transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
