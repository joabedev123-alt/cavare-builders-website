import React from "react";
import Metadata from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "@/components/contact/ContactForm";
import { companyConfig } from "@/data/company";

export const metadata = {
  title: "Contato | Cavare Builders LLC",
  description:
    "Agende uma consulta para reforma de casa, renovação de cozinha ou transformação de interiores com a Cavare Builders LLC.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-[#14120f] min-h-screen text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <Breadcrumb items={[{ label: "Contato" }]} />

        <div className="max-w-3xl mt-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-brand-gold" />
            <span className="text-xs font-sans uppercase tracking-ultra font-semibold text-brand-gold">
              CONTATE A CAVARE BUILDERS LLC
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.15] mb-6">
            Vamos conversar sobre <br />
            <span className="italic font-normal text-brand-gold">o seu projeto.</span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 font-light leading-relaxed">
            Conte-nos sobre sua propriedade, seus objetivos e o cronograma desejado. Nossa equipe analisará suas informações e entrará em contato para discutir os próximos passos.
          </p>
        </div>
      </div>

      {/* 2-Column Contact Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column 1: Contact Info (5 cols) */}
          <div className="lg:col-span-5 text-white p-0 sm:p-4 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-medium text-white mb-4">
                Informações de contato direto
              </h3>
              <p className="text-sm text-stone-300 font-light leading-relaxed">
                Para dúvidas e agendamento rápidos, entre em contato diretamente com a equipe de liderança do projeto por telefone ou WhatsApp.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-brand-gold/20 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-telephone text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-widest text-brand-gold font-semibold mb-1">
                    Telefone e WhatsApp
                  </h4>
                  <a
                    href={companyConfig.getPhoneLink()}
                    className="text-base font-serif font-medium text-white hover:text-brand-gold transition-colors block"
                  >
                    {companyConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-geo-alt text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-widest text-brand-gold font-semibold mb-1">
                    Área de atendimento
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Condados de Broward e Palm Beach, Flórida
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                  <i className="bi bi-clock text-lg" />
                </div>
                <div>
                  <h4 className="text-xs font-sans uppercase tracking-widest text-brand-gold font-semibold mb-1">
                    Disponibilidade
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {companyConfig.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-6 border-t border-brand-gold/20 flex flex-col sm:flex-row gap-4">
              <a
                href={companyConfig.getPhoneLink()}
                className="flex-1 py-3 bg-brand-gold text-brand-black font-sans text-xs uppercase tracking-wider font-bold rounded-sm text-center hover:bg-[#d6b26e] transition-colors"
              >
                Ligue agora
              </a>

              <a
                href={companyConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-transparent border border-brand-gold/60 text-white font-sans text-xs uppercase tracking-wider font-semibold rounded-sm text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <i className="bi bi-whatsapp text-[#25D366]" />
                <span>Converse pelo WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Appointment Form (7 cols) */}
          <div className="lg:col-span-7 bg-transparent rounded-lg relative overflow-hidden">
             {/* Fake texture mimicking the photo */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-mamba.png')] opacity-20 pointer-events-none" />
             <div className="relative p-2 sm:p-4">
                <ContactForm />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
