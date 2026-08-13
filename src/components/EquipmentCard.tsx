import React from 'react';
import { Equipment } from '../types';
import { MessageSquare, Zap, CheckCircle2 } from 'lucide-react';

interface EquipmentCardProps {
  equipment: Equipment;
  onSelect: (equipment: Equipment) => void;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  equipment,
  onSelect
}) => {
  const handleRentWhatsApp = () => {
    const msg = `Olá! Gostaria de fazer o orçamento para *alugar o equipamento: ${equipment.name}*.
Qual é o valor do frete e a disponibilidade para entrega hoje?`;
    window.open(`https://wa.me/5511965939300?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl border border-[#e2bfb0] shadow-sm hover:shadow-xl hover:border-[#ff6a00] transition-all duration-300 p-5 flex flex-col h-full group relative overflow-hidden">
      {/* Featured Badge */}
      {equipment.featured && (
        <span className="absolute top-3 left-3 bg-[#ff6a00] text-white font-montserrat font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1 z-10">
          <Zap className="w-3 h-3 fill-current" /> Destaque
        </span>
      )}

      {/* Stock badge */}
      <span className="absolute top-3 right-3 bg-[#00b050]/10 text-[#006d2f] font-inter font-bold text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1 z-10">
        <CheckCircle2 className="w-3 h-3 text-[#00b050]" /> Disponível
      </span>

      {/* Image container */}
      <div 
        onClick={() => onSelect(equipment)}
        className="h-44 w-full flex items-center justify-center p-2 mb-4 bg-[#fff1eb] rounded-xl cursor-pointer group-hover:scale-102 transition-transform overflow-hidden relative"
      >
        <img
          src={equipment.imageUrl}
          alt={equipment.name}
          className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Title & Tagline */}
      <h3 className="font-montserrat font-extrabold text-base text-[#261812] uppercase mb-1 line-clamp-1 group-hover:text-[#ff6a00] transition-colors">
        {equipment.name}
      </h3>
      <p className="font-inter text-xs text-[#5a4136] mb-4 line-clamp-2 min-h-[32px]">
        {equipment.tagline}
      </p>

      {/* Rates showcase */}
      <div className="bg-[#fff8f6] p-2.5 rounded-xl border border-[#fee3d8] mb-4 space-y-1">
        <div className="flex justify-between items-center text-xs">
          <span className="text-[#5a4136] font-inter">Diária:</span>
          <span className="font-montserrat font-extrabold text-[#261812]">
            R$ {equipment.dailyRate.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-[#5a4136] font-inter">Semanal (7 dias):</span>
          <span className="font-montserrat font-bold text-[#a14000]">
            R$ {(equipment.weeklyRate / 7).toFixed(2).replace('.', ',')}/dia
          </span>
        </div>
        <div className="flex justify-between items-center text-xs">
          <span className="text-[#006d2f] font-inter font-bold">Mensal (30 dias):</span>
          <span className="font-montserrat font-extrabold text-[#00b050]">
            R$ {(equipment.monthlyRate / 30).toFixed(2).replace('.', ',')}/dia
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <button
          onClick={handleRentWhatsApp}
          className="w-full bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-3 px-4 rounded-xl uppercase text-xs tracking-wider shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-4 h-4" />
          Alugar pelo WhatsApp
        </button>
      </div>
    </div>
  );
};
