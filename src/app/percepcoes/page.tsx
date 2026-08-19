import React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata = {
  title: "Percepções | Cavare Builders LLC",
  description: "Descubra nossas percepções e insights sobre construção e remodelação em South Florida.",
};

export default function PercepcoesPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-marble min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Breadcrumb items={[{ label: "Percepções" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              NOSSAS PERCEPÇÕES
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-brand-black tracking-tight leading-[1.15] mb-6">
            Ideias, Tendências e <br />
            <span className="italic font-normal text-brand-gold">Visões do Setor.</span>
          </h1>

          <p className="text-base sm:text-lg text-brand-muted font-light leading-relaxed">
            Acompanhe nossas análises e perspectivas sobre o mercado de construção civil, design de interiores e arquitetura.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white border-y border-brand-stone/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-lg text-brand-muted">Em breve, novos conteúdos serão publicados aqui.</p>
        </div>
      </section>
    </div>
  );
}
