"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData, ProjectItem } from "@/data/projects";

const filterCategories = [
  { label: "All Projects", value: "all" },
  { label: "Full Remodels", value: "full-remodels" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Bathrooms", value: "bathrooms" },
  { label: "Interiors", value: "interiors" },
  { label: "Doors & Windows", value: "doors-windows" },
  { label: "Custom Details", value: "custom-details" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);

  const filteredList =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.categorySlug === activeFilter);

  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      {/* Header & Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Breadcrumb items={[{ label: "Projects" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              OUR PROJECTS
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Transformations <br />
            <span className="italic font-normal text-brand-gold">Defined by Detail.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            Explore construction, remodeling, and interior projects developed to improve how each
            property looks, feels, and functions.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-sans font-medium rounded-sm transition-all duration-300 ${
                activeFilter === cat.value
                  ? "bg-brand-black text-brand-gold shadow-subtle"
                  : "bg-white text-brand-muted hover:text-brand-black border border-brand-stone"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Grid Portfolio */}
      {/* NOTE FOR DEVELOPERS: To add official projects, modify src/data/projects.ts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredList.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setModalProject(project)}
                className="group bg-white rounded-sm border border-brand-stone hover:border-brand-gold/60 transition-all duration-300 overflow-hidden shadow-subtle hover:shadow-card cursor-pointer flex flex-col justify-between"
              >
                {/* Cover Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-brand-black/80 backdrop-blur-sm text-brand-gold text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 rounded-sm border border-brand-gold/30">
                    {project.category}
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-brand-muted font-sans block mb-1">
                      {project.location}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-brand-black group-hover:text-brand-gold transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-muted font-light leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-stone/60 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-brand-black group-hover:text-brand-gold font-semibold flex items-center gap-1.5 transition-colors">
                      <span>View Project Details</span>
                      <i className="bi bi-arrow-right text-brand-gold" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Final Call to Action */}
      <section className="bg-brand-black text-brand-marble py-16 border-t border-brand-dark-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionHeading
            eyebrow="READY TO TRANSFORM YOUR SPACE?"
            title="Inspired by What You See?"
            description="Let’s discuss how Cavare Builders LLC can transform your property."
            align="center"
            darkBackground
            className="mb-8"
          />

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold hover:bg-[#d6b26e] text-brand-black font-sans text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-floating"
          >
            <span>Start Your Project</span>
            <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </section>

      {/* Lightbox Inspector Modal */}
      <AnimatePresence>
        {modalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setModalProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-brand-black border border-brand-dark-border rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-floating text-brand-marble relative p-6 sm:p-10"
            >
              <button
                type="button"
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 p-2 text-brand-stone hover:text-brand-gold transition-colors"
                aria-label="Close modal"
              >
                <i className="bi bi-x-lg text-2xl" />
              </button>

              <div className="text-xs text-brand-gold uppercase tracking-wider font-sans mb-2">
                {modalProject.category} • {modalProject.location}
              </div>

              <h2 className="font-serif text-3xl font-medium text-brand-marble mb-4">
                {modalProject.title}
              </h2>

              <p className="text-sm text-brand-stone/80 font-light leading-relaxed mb-6">
                {modalProject.description}
              </p>

              <div className="relative h-80 sm:h-96 w-full rounded-sm overflow-hidden mb-6 border border-brand-dark-border">
                <Image
                  src={modalProject.coverImage}
                  alt={modalProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-dark-border mb-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold mb-3">
                    Interventions Executed:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-brand-stone">
                    {modalProject.interventions.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <i className="bi bi-check2 text-brand-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-brand-gold font-sans font-semibold mb-3">
                    Finishes & Surfaces:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-brand-stone">
                    {modalProject.materials.map((mat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <i className="bi bi-dot text-brand-gold text-lg" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-brand-dark-border">
                <Link
                  href="/contact"
                  onClick={() => setModalProject(null)}
                  className="px-6 py-3 bg-brand-gold text-brand-black text-xs uppercase tracking-wider font-bold rounded-sm hover:bg-[#d6b26e] transition-colors"
                >
                  Start Your Project
                </Link>

                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="text-xs text-brand-stone hover:text-brand-marble transition-colors"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
