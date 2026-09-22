import { BragancaNeighborhoodsSection } from '@/components/BragancaNeighborhoodsSection';
import React from 'react';
import { EQUIPMENTS } from '@/lib/data/equipments';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { Check, MessageSquare, Info, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EQUIPMENTS.map((eq) => ({ slug: eq.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const equipment = EQUIPMENTS.find((eq) => eq.slug === slug);
  if (!equipment) return {};

  return {
    title: `Aluguel de ${equipment.name} em Bragança Paulista | Bragança Locadora`,
    description: `Locação de ${equipment.name} em Bragança Paulista. ${equipment.tagline}. Entrega no mesmo dia, equipamento revisado e orçamento pelo WhatsApp.`,
    alternates: {
      canonical: `/equipamentos/${equipment.slug}`,
    },
    openGraph: {
      title: `Aluguel de ${equipment.name} em Bragança Paulista`,
      description: `${equipment.tagline}. Consulte disponibilidade e orçamento pelo WhatsApp.`,
      url: `https://www.bragancalocadora.com.br/equipamentos/${equipment.slug}`,
    },
  };
}

export default async function EquipamentoPage({ params }: Props) {
  const { slug } = await params;
  const equipment = EQUIPMENTS.find((eq) => eq.slug === slug);

  if (!equipment) notFound();

  const whatsappLink = `https://wa.me/5511965939300?text=${encodeURIComponent(
    `Olá Bragança Locadora! Gostaria de alugar o seguinte equipamento:\n*Equipamento:* ${equipment.name}\n\nPode confirmar a disponibilidade, valor e prazo de entrega para a minha obra?`
  )}`;

  // Related equipments (same category, excluding current)
  const related = EQUIPMENTS.filter(
    (eq) => eq.category === equipment.category && eq.id !== equipment.id
  ).slice(0, 3);

  // JSON-LD for this specific equipment page
  const equipmentSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Aluguel de ${equipment.name} em Bragança Paulista`,
    description: equipment.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Bragança Locadora',
      telephone: '+55-11-96593-9300',
      url: 'https://www.bragancalocadora.com.br',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bragança Paulista',
    },
    serviceType: 'Locação de Equipamentos para Construção',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.bragancalocadora.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Equipamentos', item: 'https://www.bragancalocadora.com.br/equipamentos' },
      { '@type': 'ListItem', position: 3, name: equipment.name, item: `https://www.bragancalocadora.com.br/equipamentos/${equipment.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#261812] pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(equipmentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#e2bfb0]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-3">
          <nav className="text-xs font-inter text-[#8e7164] flex items-center gap-1 flex-wrap">
            <Link href="/" className="hover:text-[#ff6a00] transition-colors">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/equipamentos" className="hover:text-[#ff6a00] transition-colors">Equipamentos</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#261812] font-semibold">{equipment.categoryName}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#ff6a00] font-bold">{equipment.name}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-10 md:py-14">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-14">
          {/* Image */}
          <div className="bg-white rounded-3xl border border-[#e2bfb0] p-8 flex items-center justify-center min-h-[320px] shadow-sm">
            <img
              src={equipment.imageUrl}
              alt={`Aluguel de ${equipment.name} em Bragança Paulista`}
              className="max-h-72 max-w-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block bg-[#ffeae1] text-[#a14000] font-montserrat font-bold text-xs uppercase px-3 py-1 rounded-full mb-3">
                {equipment.categoryName}
              </span>
              <h1 className="font-montserrat font-black text-2xl md:text-3xl lg:text-4xl text-[#261812] uppercase leading-tight mb-2">
                Aluguel de {equipment.name} em Bragança Paulista
              </h1>
              <p className="font-inter text-base text-[#5a4136] leading-relaxed">
                {equipment.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {equipment.powerType && (
                <span className="bg-[#ffeae1] text-[#7b2f00] text-xs font-montserrat font-bold px-3 py-1.5 rounded-full border border-[#e2bfb0]">
                  ⚡ {equipment.powerType}
                </span>
              )}
              {equipment.weight && (
                <span className="bg-[#ffeae1] text-[#7b2f00] text-xs font-montserrat font-bold px-3 py-1.5 rounded-full border border-[#e2bfb0]">
                  ⚖️ {equipment.weight}
                </span>
              )}
              <span className="bg-[#00b050]/15 text-[#006d2f] text-xs font-montserrat font-bold px-3 py-1.5 rounded-full">
                ✓ Revisado e Testado
              </span>
              <span className="bg-[#00b050]/15 text-[#006d2f] text-xs font-montserrat font-bold px-3 py-1.5 rounded-full">
                🚚 Entrega no Mesmo Dia
              </span>
            </div>

            {/* CTA Box */}
            <div className="bg-[#261812] rounded-2xl p-6 space-y-4">
              <h2 className="font-montserrat font-extrabold text-sm uppercase text-[#ff8500]">
                Solicite seu Orçamento
              </h2>
              <p className="font-inter text-xs text-[#f8ddd2]">
                Consulte disponibilidade e condições para locação em Bragança Paulista e região. Resposta imediata!
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-4 px-6 rounded-xl uppercase text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                Solicitar Orçamento pelo WhatsApp
              </a>
              <a
                href="tel:+5511965939300"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold py-3 px-6 rounded-xl uppercase text-xs flex items-center justify-center gap-2 transition-all border border-white/20"
              >
                📞 Ligar: (11) 96593-9300
              </a>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-2xl p-6 border border-[#e2bfb0] mb-10 shadow-sm">
          <h2 className="font-montserrat font-extrabold text-lg text-[#261812] uppercase mb-5 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#ff6a00]" />
            Ficha Técnica & Especificações
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            {equipment.specifications.map((spec, idx) => (
              <div key={idx} className="flex justify-between p-3 bg-[#fff8f6] rounded-xl border border-[#fee3d8]">
                <span className="text-[#5a4136] font-medium text-xs">{spec.label}:</span>
                <span className="font-montserrat font-bold text-[#261812] text-xs ml-2">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Uses */}
        <div className="mb-10">
          <h2 className="font-montserrat font-extrabold text-lg text-[#261812] uppercase mb-5">
            Principais Aplicações na Obra
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {equipment.popularUses.map((use, idx) => (
              <li key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-[#e2bfb0] shadow-xs">
                <Check className="w-5 h-5 text-[#00b050] flex-shrink-0" />
                <span className="font-inter text-sm text-[#5a4136]">{use}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* How it Works */}
        <div className="bg-[#fff1eb] rounded-2xl p-6 border border-[#e2bfb0] mb-10">
          <h2 className="font-montserrat font-extrabold text-lg text-[#261812] uppercase mb-4">
            Como Funciona a Locação
          </h2>
          <ol className="space-y-3 font-inter text-sm text-[#5a4136]">
            <li className="flex items-start gap-3">
              <span className="bg-[#ff6a00] text-white font-montserrat font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
              <span>Entre em contato pelo WhatsApp ou telefone e informe o equipamento, período e endereço de entrega.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#ff6a00] text-white font-montserrat font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
              <span>Nossa equipe verifica a disponibilidade, apresenta o orçamento e confirma a data de entrega.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#ff6a00] text-white font-montserrat font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
              <span>Entregamos o equipamento diretamente na sua obra, realizamos o teste operacional e orientamos sobre o uso.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-[#ff6a00] text-white font-montserrat font-bold w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">4</span>
              <span>Ao final do período, buscamos o equipamento no local combinado sem complicação.</span>
            </li>
          </ol>
        </div>

        {/* Neighborhoods Delivery Section */}
        <BragancaNeighborhoodsSection equipmentName={equipment.name} />

        {/* Related Equipments */}
        {related.length > 0 && (
          <div>
            <h2 className="font-montserrat font-extrabold text-lg text-[#261812] uppercase mb-5">
              Equipamentos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((eq) => (
                <Link
                  key={eq.id}
                  href={`/equipamentos/${eq.slug}`}
                  className="bg-white rounded-2xl border border-[#e2bfb0] p-5 flex gap-4 items-center hover:border-[#ff6a00] hover:shadow-md transition-all group"
                >
                  <div className="w-20 h-20 bg-[#fff1eb] rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img
                      src={eq.imageUrl}
                      alt={eq.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-extrabold text-sm text-[#261812] uppercase group-hover:text-[#ff6a00] transition-colors">
                      {eq.name}
                    </h3>
                    <p className="font-inter text-xs text-[#5a4136] line-clamp-2 mt-1">{eq.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
