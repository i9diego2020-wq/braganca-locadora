import React, { useState } from 'react';
import { Equipment } from '../types';
import { X, Check, MessageSquare, Clock, Info } from 'lucide-react';

interface EquipmentDetailModalProps {
  equipment: Equipment | null;
  onClose: () => void;
}

export const EquipmentDetailModal: React.FC<EquipmentDetailModalProps> = ({
  equipment,
  onClose
}) => {
  if (!equipment) return null;

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'biweekly' | 'monthly'>('weekly');

  const getPeriodTotal = () => {
    let baseRate = 0;
    if (selectedPeriod === 'daily') {
      baseRate = equipment.dailyRate;
    } else if (selectedPeriod === 'weekly') {
      baseRate = equipment.weeklyRate;
    } else if (selectedPeriod === 'biweekly') {
      baseRate = Math.round(equipment.weeklyRate * 1.85);
    } else if (selectedPeriod === 'monthly') {
      baseRate = equipment.monthlyRate;
    }
    return baseRate * quantity;
  };

  const generateWhatsAppDirectLink = () => {
    const total = getPeriodTotal();
    const periodText = 
      selectedPeriod === 'daily' ? '1 dia (Diária)' :
      selectedPeriod === 'weekly' ? '7 dias (Semanal)' :
      selectedPeriod === 'biweekly' ? '15 dias (Quinzenal)' : '30 dias (Mensal)';

    const msg = `Olá Bragança Locadora! Gostaria de alugar o seguinte equipamento:
*Equipamento:* ${equipment.name}
*Quantidade:* ${quantity} un.
*Período:* ${periodText}
*Valor Estimado:* R$ ${total.toFixed(2).replace('.', ',')}

Pode confirmar a disponibilidade e prazo de entrega para a minha obra?`;

    return `https://wa.me/5511965939300?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative bg-[#fff8f6] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e2bfb0] z-10 my-auto">
        {/* Sticky Close Button Header */}
        <div className="sticky top-0 bg-[#fff8f6]/95 backdrop-blur-xs p-4 border-b border-[#e2bfb0] flex justify-between items-center z-20">
          <div>
            <span className="font-montserrat font-bold text-xs uppercase text-[#ff6a00] tracking-wider">
              {equipment.categoryName}
            </span>
            <h2 className="font-montserrat font-extrabold text-lg md:text-xl text-[#261812] uppercase leading-tight">
              {equipment.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#fee3d8] hover:bg-[#ff6a00] hover:text-white transition-colors text-[#5a4136]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 md:p-6 space-y-6">
          {/* Main Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image Box */}
            <div className="bg-white p-6 rounded-2xl border border-[#e2bfb0] flex items-center justify-center h-60 shadow-inner">
              <img
                src={equipment.imageUrl}
                alt={equipment.name}
                className="max-h-full max-w-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Overview & Quick Tags */}
            <div className="space-y-3">
              <p className="font-inter text-sm text-[#5a4136] leading-relaxed">
                {equipment.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {equipment.powerType && (
                  <span className="bg-[#ffeae1] text-[#7b2f00] text-xs font-montserrat font-bold px-3 py-1 rounded-full border border-[#e2bfb0]">
                    ⚡ {equipment.powerType}
                  </span>
                )}
                {equipment.weight && (
                  <span className="bg-[#ffeae1] text-[#7b2f00] text-xs font-montserrat font-bold px-3 py-1 rounded-full border border-[#e2bfb0]">
                    ⚖️ {equipment.weight}
                  </span>
                )}
                <span className="bg-[#00b050]/15 text-[#006d2f] text-xs font-inter font-bold px-3 py-1 rounded-full">
                  ✓ Revisado e Testado
                </span>
              </div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="bg-white rounded-2xl p-4 border border-[#e2bfb0]">
            <h3 className="font-montserrat font-extrabold text-sm text-[#261812] uppercase mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#ff6a00]" />
              Ficha Técnica & Especificações
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {equipment.specifications.map((spec, idx) => (
                <div key={idx} className="flex justify-between p-2 bg-[#fff8f6] rounded-lg border border-[#fee3d8]">
                  <span className="text-[#5a4136] font-medium">{spec.label}:</span>
                  <span className="font-montserrat font-bold text-[#261812]">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Uses */}
          <div>
            <h3 className="font-montserrat font-extrabold text-sm text-[#261812] uppercase mb-2">
              Aplicações Recomendadas na Obra
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {equipment.popularUses.map((use, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs font-inter text-[#5a4136] bg-[#fff1eb] p-2 rounded-lg border border-[#e2bfb0]">
                  <Check className="w-4 h-4 text-[#00b050] flex-shrink-0" />
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Period & Calculator Box */}
          <div className="bg-[#261812] text-white p-5 rounded-2xl space-y-4 shadow-xl">
            <h3 className="font-montserrat font-extrabold text-sm uppercase text-[#ff8500] flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Selecione o Período de Locação
            </h3>

            {/* Period selector tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'daily', label: '1 Dia', badge: 'Diária', rate: equipment.dailyRate },
                { id: 'weekly', label: '7 Dias', badge: 'Economize', rate: Math.round(equipment.weeklyRate / 7) },
                { id: 'biweekly', label: '15 Dias', badge: 'Quinzenal', rate: Math.round((equipment.weeklyRate * 1.85) / 15) },
                { id: 'monthly', label: '30 Dias', badge: 'Melhor Valor', rate: Math.round(equipment.monthlyRate / 30) }
              ].map((p) => {
                const isSelected = selectedPeriod === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPeriod(p.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#ff6a00] border-white text-white shadow-lg'
                        : 'bg-white/10 border-white/20 text-[#f8ddd2] hover:bg-white/20'
                    }`}
                  >
                    <span className="block font-montserrat font-bold text-xs uppercase">{p.label}</span>
                    <span className="block text-[11px] font-inter opacity-90">
                      R$ {p.rate}/dia
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quantity Selector & Total Display */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2 border-t border-white/20">
              <div className="flex items-center gap-3">
                <span className="font-inter text-xs font-semibold text-[#f8ddd2]">Quantidade:</span>
                <div className="flex items-center border border-white/30 rounded-lg overflow-hidden bg-white/10">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 font-bold text-white hover:bg-white/20"
                  >
                    -
                  </button>
                  <span className="px-4 font-montserrat font-bold text-sm text-white">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 font-bold text-white hover:bg-white/20"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="block text-xs font-inter text-[#f8ddd2]">Total Estimado ({quantity} un):</span>
                <span className="font-montserrat font-black text-2xl text-[#ff8500]">
                  R$ {getPeriodTotal().toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2">
              <a
                href={generateWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-4 px-6 rounded-xl uppercase text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 text-center"
              >
                <MessageSquare className="w-5 h-5" />
                Alugar Agora no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
