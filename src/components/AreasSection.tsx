import React from 'react';
import { MapPin, Truck, Clock, CheckCircle2, ShieldCheck, Building2, Wrench, Sparkles } from 'lucide-react';

export const AreasSection: React.FC = () => {
  return (
    <section id="areas" className="py-12 md:py-16 bg-[#fff8f6]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#ffeae1] text-[#a14000] font-montserrat font-bold text-xs uppercase px-3.5 py-1.5 rounded-full border border-[#e2bfb0]">
            <MapPin className="w-4 h-4 text-[#ff6a00]" />
            Atendimento Exclusivo Bragança Paulista - SP
          </div>
          <h2 className="font-montserrat font-black text-2xl md:text-4xl text-[#261812] uppercase tracking-tight">
            Aluguel de Equipamentos para Obra em <span className="text-[#ff6a00]">Bragança Paulista</span>
          </h2>
          <p className="font-inter text-sm md:text-base text-[#5a4136] max-w-2xl mx-auto">
            Atendimento prioritário com frete grátis e entrega no mesmo dia para todos os bairros e canteiros de obras de Bragança Paulista.
          </p>
        </div>

        {/* Featured Bragança Card */}
        <div className="bg-gradient-to-r from-[#ffeae1] via-white to-[#fff1eb] border-2 border-[#ff6a00] rounded-3xl p-6 md:p-8 shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="bg-[#00b050] text-white font-montserrat font-bold text-xs uppercase px-3 py-1 rounded-full shadow-xs">
                Frete Grátis na Cidade
              </span>
              <span className="bg-[#ff6a00] text-white font-montserrat font-bold text-xs uppercase px-3 py-1 rounded-full shadow-xs">
                Entrega no Mesmo Dia
              </span>
            </div>

            <h3 className="font-montserrat font-black text-xl md:text-2xl text-[#261812] uppercase">
              Bragança Paulista - SP
            </h3>

            <p className="font-inter text-xs md:text-sm text-[#5a4136]">
              Agilidade na logística de canteiro de obras. Entregamos e retiramos no local sem complicação.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-montserrat font-bold text-[#261812]">
              <Clock className="w-4 h-4 text-[#ff6a00]" />
              <span>Prazo de Entrega: Pediu, chegou no mesmo dia!</span>
            </div>
          </div>

          <div className="flex-shrink-0">
            <a
              href="https://wa.me/5511965939300?text=Olá!%20Preciso%20de%20equipamento%20para%20minha%20obra%20em%20Bragança%20Paulista."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-3.5 px-6 rounded-2xl uppercase text-xs tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <Truck className="w-4 h-4" />
              Solicitar Entrega em Bragança
            </a>
          </div>
        </div>

        {/* SEO Rich Content Box */}
        <div className="bg-white rounded-3xl border border-[#e2bfb0] p-6 md:p-8 shadow-sm space-y-6">
          <div className="border-b border-[#fee3d8] pb-4">
            <h3 className="font-montserrat font-black text-lg md:text-xl text-[#261812] uppercase flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ff6a00]" />
              Especialista em Locação de Maquinário para Construção Civil
            </h3>
            <p className="font-inter text-xs md:text-sm text-[#5a4136] mt-1">
              A Bragança Locadora é a parceira oficial de pedreiros, mestres de obras, construtoras e engenheiros em Bragança Paulista - SP.
            </p>
          </div>

          {/* Bairros Atendidos Badge Cloud */}
          <div>
            <h4 className="font-montserrat font-bold text-xs text-[#261812] uppercase mb-3">
              Bairros e Regiões Atendidas em Bragança Paulista:
            </h4>
            <div className="flex flex-wrap gap-2 font-inter text-xs text-[#5a4136]">
              {[
                'Centro', 'Jardim Europa', 'Taboão', 'Jardim do Lago', 'Bairro do Menin', 
                'Campo Novo', 'Santa Luzia', 'Jardim Santa Rita', 'Planejada I e II', 'Residencial Euroville',
                'Quinta da Baroneza', 'Portal das Hortênsias', 'Vila Marly', 'Jardim Amapá', 'Bairro dos Silveiras',
                'Distrito Industrial', 'Zona Rural & Chácaras'
              ].map((bairro, idx) => (
                <span
                  key={idx}
                  className="bg-[#fff1eb] border border-[#e2bfb0] text-[#261812] px-3 py-1 rounded-full text-[11px] font-medium"
                >
                  📍 {bairro}
                </span>
              ))}
            </div>
          </div>

          {/* SEO Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3 bg-[#fff8f6] p-4 rounded-2xl border border-[#fee3d8]">
              <h4 className="font-montserrat font-extrabold text-sm text-[#ff6a00] uppercase flex items-center gap-1.5">
                <Wrench className="w-4 h-4" />
                Aluguel de Martelete & Demolição
              </h4>
              <p className="font-inter text-xs text-[#5a4136] leading-relaxed">
                Precisa quebrar piso, laje ou viga em Bragança Paulista? Alugue <strong>Martelete Demolidor 30kg</strong> de alta performance. Equipamentos potentes, revisados e prontos para o trabalho pesado na sua obra.
              </p>
            </div>

            <div className="space-y-3 bg-[#fff8f6] p-4 rounded-2xl border border-[#fee3d8]">
              <h4 className="font-montserrat font-extrabold text-sm text-[#ff6a00] uppercase flex items-center gap-1.5">
                <Building2 className="w-4 h-4" />
                Locação de Andaimes & Elevação
              </h4>
              <p className="font-inter text-xs text-[#5a4136] leading-relaxed">
                Montagem segura de fachada, pintura e reforma. Alugue <strong>Andaime Tubular 1,0m e 1,5m</strong> com pisos metálicos, rodízios e sapatas ajustáveis com entrega rápida em Bragança Paulista.
              </p>
            </div>

            <div className="space-y-3 bg-[#fff8f6] p-4 rounded-2xl border border-[#fee3d8]">
              <h4 className="font-montserrat font-extrabold text-sm text-[#ff6a00] uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Compactador de Solo (Sapo)
              </h4>
              <p className="font-inter text-xs text-[#5a4136] leading-relaxed">
                Preparo ideal do solo para baldrames e valas. O <strong>Compactador de Solo Tipo Sapo</strong> garante o adensamento perfeito em obras residenciais e comerciais em Bragança Paulista.
              </p>
            </div>

            <div className="space-y-3 bg-[#fff8f6] p-4 rounded-2xl border border-[#fee3d8]">
              <h4 className="font-montserrat font-extrabold text-sm text-[#ff6a00] uppercase flex items-center gap-1.5">
                <Truck className="w-4 h-4" />
                Betoneira 400L & Caçamba Entulho
              </h4>
              <p className="font-inter text-xs text-[#5a4136] leading-relaxed">
                Aluguel de <strong>Betoneiras 400 Litros</strong> para concreto contínuo e <strong>Caçamba Entulho</strong> com descarte ecológico regulamentado pela Prefeitura e Cetesb em Bragança Paulista.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

