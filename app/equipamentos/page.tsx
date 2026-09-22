import { BragancaNeighborhoodsSection } from '@/components/BragancaNeighborhoodsSection';
import React from 'react';
import { EQUIPMENTS } from '@/lib/data/equipments';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { MessageSquare, Wrench } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Equipamentos para Locação em Bragança Paulista | Bragança Locadora',
  description:
    'Catálogo completo de equipamentos para locação em Bragança Paulista. Martelete, andaime, betoneira, compactador, caçamba e muito mais. Entrega no mesmo dia!',
  alternates: {
    canonical: '/equipamentos',
  },
};

const categories = [
  { id: 'demolicao', label: 'Demolição' },
  { id: 'concreto', label: 'Concreto & Argamassa' },
  { id: 'elevacao', label: 'Andaimes & Elevação' },
  { id: 'compactacao', label: 'Compactação' },
  { id: 'geradores', label: 'Geradores & Energia' },
  { id: 'bombas', label: 'Bombas & Saneamento' },
  { id: 'corte', label: 'Corte & Furação' },
  { id: 'ferramentas', label: 'Ferramentas' },
  { id: 'limpeza', label: 'Limpeza & Lavagem' },
  { id: 'cacamba', label: 'Caçambas' },
];

export default function EquipamentosPage() {
  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#261812] pb-16 md:pb-0">
      <Header />

      {/* Page Header */}
      <section className="bg-[#261812] text-white py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="text-xs font-inter text-[#e2bfb0] mb-4 flex items-center gap-1">
            <Link href="/" className="hover:text-[#ff6a00] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-[#ff8500]">Equipamentos</span>
          </nav>
          <h1 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl uppercase text-white mb-3">
            Equipamentos para <span className="text-[#ff6a00]">Locação</span>
          </h1>
          <p className="font-inter text-[#f8ddd2] max-w-2xl">
            Catálogo completo de equipamentos para sua obra em Bragança Paulista e região. Entrega no mesmo dia, máquinas revisadas e orçamento pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* Categories Nav */}
      <div className="bg-white border-b border-[#e2bfb0] sticky top-16 md:top-20 z-30">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-3 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex-shrink-0 font-montserrat font-bold text-xs uppercase px-4 py-2 rounded-full border border-[#e2bfb0] text-[#5a4136] hover:border-[#ff6a00] hover:text-[#ff6a00] transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      {/* Equipment Grid by Category */}
      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-12 space-y-16">
        {categories.map((cat) => {
          const items = EQUIPMENTS.filter((eq) => eq.category === cat.id);
          if (items.length === 0) return null;
          return (
            <section key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-5 h-5 text-[#ff6a00]" />
                <h2 className="font-montserrat font-black text-xl md:text-2xl uppercase text-[#261812]">
                  {cat.label}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((eq) => (
                  <Link
                    key={eq.id}
                    href={`/equipamentos/${eq.slug}`}
                    className="bg-white rounded-2xl border border-[#e2bfb0] shadow-sm hover:shadow-xl hover:border-[#ff6a00] transition-all duration-300 p-5 flex flex-col group"
                  >
                    <div className="h-40 flex items-center justify-center bg-[#fff1eb] rounded-xl mb-4 overflow-hidden">
                      <img
                        src={eq.imageUrl}
                        alt={`Aluguel de ${eq.name} em Bragança Paulista`}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-montserrat font-extrabold text-sm text-[#261812] uppercase mb-1 group-hover:text-[#ff6a00] transition-colors">
                      {eq.name}
                    </h3>
                    <p className="font-inter text-xs text-[#5a4136] line-clamp-2 mb-4 flex-1">
                      {eq.tagline}
                    </p>
                    <span className="w-full text-center bg-[#ff6a00] text-white font-montserrat font-bold py-2 rounded-xl text-xs uppercase tracking-wider group-hover:bg-[#a14000] transition-colors">
                      Ver Detalhes & Orçamento
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <BragancaNeighborhoodsSection />
      </main>

      {/* CTA Banner */}
      <section className="bg-[#261812] py-10 px-4 text-center">
        <h2 className="font-montserrat font-black text-2xl md:text-3xl text-white uppercase mb-3">
          Não encontrou o que procura?
        </h2>
        <p className="font-inter text-[#f8ddd2] text-sm mb-6 max-w-lg mx-auto">
          Temos um catálogo completo com mais de 60 equipamentos. Fale com nossa equipe e informe o que precisa para sua obra.
        </p>
        <a
          href="https://wa.me/5511965939300?text=Olá!%20Preciso%20de%20um%20equipamento%20que%20não%20encontrei%20no%20site."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-4 px-8 rounded-xl uppercase shadow-xl transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          Consultar pelo WhatsApp
        </a>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
