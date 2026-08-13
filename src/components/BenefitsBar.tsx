import React from 'react';
import { Truck, DollarSign, ShieldCheck, Headset } from 'lucide-react';

export const BenefitsBar: React.FC = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'ENTREGA RÁPIDA',
      subtitle: 'Entrega no Mesmo Dia na Obra',
      highlight: false
    },
    {
      icon: DollarSign,
      title: 'MELHOR PREÇO',
      subtitle: 'da Região de Bragança',
      highlight: false
    },
    {
      icon: ShieldCheck,
      title: 'COBRIMOS QUALQUER OFERTA',
      subtitle: 'Garantia do Menor Valor',
      highlight: true
    },
    {
      icon: Headset,
      title: 'ATENDIMENTO RÁPIDO',
      subtitle: 'Especializado em Obra',
      highlight: false
    }
  ];

  return (
    <section className="bg-[#ffffff] py-6 relative z-20 rounded-t-3xl shadow-[0_-8px_20px_rgba(0,0,0,0.06)] border-b border-[#e2bfb0]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all relative ${
                  benefit.highlight
                    ? 'bg-[#ffeae1] border-[#ff6a00] shadow-md ring-2 ring-[#ff6a00]/20'
                    : 'bg-[#fff1eb] border-[#e2bfb0] shadow-xs hover:border-[#ff6a00] hover:shadow-md'
                }`}
              >
                {benefit.highlight && (
                  <span className="absolute -top-2.5 right-3 bg-[#ff6a00] text-white font-montserrat font-extrabold text-[9px] uppercase px-2 py-0.5 rounded-full shadow-xs">
                    Garantia
                  </span>
                )}
                <div className={`p-3 rounded-xl transition-transform shadow-xs ${
                  benefit.highlight
                    ? 'bg-[#ff6a00] text-white scale-105'
                    : 'bg-[#ff6a00] text-white'
                }`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-montserrat font-extrabold text-xs sm:text-sm text-[#261812] uppercase tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="font-inter text-xs text-[#5a4136]">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


