import React from 'react';
import { BRAGANCA_NEIGHBORHOODS } from '@/lib/data/bragancaNeighborhoods';
import { MapPin, ShieldCheck, Truck, MessageSquare } from 'lucide-react';

interface Props {
  equipmentName?: string;
}

export function BragancaNeighborhoodsSection({ equipmentName }: Props) {
  const whatsappMsg = equipmentName
    ? `Olá! Gostaria de consultar a entrega do equipamento *${equipmentName}* no meu bairro/condomínio em Bragança Paulista.`
    : `Olá! Gostaria de consultar a taxa e prazo de entrega para meu bairro/condomínio em Bragança Paulista.`;

  const whatsappUrl = `https://wa.me/5511965939300?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="bg-white rounded-3xl border border-[#e2bfb0] p-6 md:p-8 shadow-sm my-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#fee3d8]">
        <div>
          <div className="flex items-center gap-2 text-[#ff6a00] font-montserrat font-bold text-xs uppercase mb-2">
            <Truck className="w-4 h-4" />
            <span>Atendimento Expresso Local</span>
          </div>
          <h2 className="font-montserrat font-black text-xl md:text-2xl uppercase text-[#261812]">
            Entrega & Retirada em <span className="text-[#ff6a00]">Bragança Paulista</span>
          </h2>
          <p className="font-inter text-sm text-[#5a4136] mt-1 max-w-2xl">
            Entregamos equipamentos testados e revisados diretamente na sua obra ou condomínio em qualquer região de Bragança Paulista com agilidade e frete justo.
          </p>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-3.5 px-6 rounded-xl text-xs uppercase flex items-center justify-center gap-2 shadow-md transition-all whitespace-nowrap self-start md:self-center"
        >
          <MessageSquare className="w-4 h-4" />
          Consultar Entrega no Meu Bairro
        </a>
      </div>

      {/* Neighborhoods & Condos Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {BRAGANCA_NEIGHBORHOODS.map((group, idx) => (
          <div key={idx} className="space-y-3">
            <h3 className="font-montserrat font-extrabold text-xs uppercase text-[#a14000] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ff6a00]" />
              {group.category} em Bragança Paulista:
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="bg-[#fff1eb] text-[#5a4136] hover:text-[#ff6a00] hover:bg-[#ffe2d6] text-xs font-inter font-medium px-3 py-1.5 rounded-lg border border-[#fee3d8] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Guarantee Footer */}
      <div className="mt-8 pt-6 border-t border-[#fee3d8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter text-[#5a4136]">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#00b050]" />
          <span>Frete grátis ou reduzido dependendo do período de locação em Bragança.</span>
        </div>
        <span className="font-montserrat font-bold text-[#ff6a00] uppercase text-[11px]">
          ✓ Atendimento de Segunda a Sábado
        </span>
      </div>
    </section>
  );
}
