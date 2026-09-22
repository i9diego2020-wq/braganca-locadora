'use client';

import React, { useState } from 'react';
import { Equipment } from '@/lib/types';
import { X, Check, MessageSquare, Info } from 'lucide-react';

interface EquipmentDetailModalProps {
  equipment: Equipment | null;
  onClose: () => void;
}

export const EquipmentDetailModal: React.FC<EquipmentDetailModalProps> = ({ equipment, onClose }) => {
  if (!equipment) return null;

  const generateWhatsAppLink = () => {
    const msg = `Olá Bragança Locadora! Gostaria de solicitar um orçamento para o seguinte equipamento:\n*Equipamento:* ${equipment.name}\n*Cidade:* Bragança Paulista - SP\n\nPode me confirmar a disponibilidade e o prazo de entrega no meu endereço?`;
    return `https://wa.me/5511965939300?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-[#fff8f6] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e2bfb0] z-10 my-auto">
        {/* Sticky Header */}
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
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Image */}
            <div className="bg-white p-6 rounded-2xl border border-[#e2bfb0] flex items-center justify-center h-60 shadow-inner">
              <img
                src={equipment.imageUrl}
                alt={`Aluguel de ${equipment.name} em Bragança Paulista`}
                className="max-h-full max-w-full object-contain drop-shadow-lg"
              />
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <p className="font-inter text-sm text-[#5a4136] leading-relaxed">{equipment.description}</p>
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

          {/* Specifications */}
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

          {/* CTA — Orçamento via WhatsApp (sem preços) */}
          <div className="bg-[#261812] text-white p-5 rounded-2xl space-y-4 shadow-xl">
            <h3 className="font-montserrat font-extrabold text-sm uppercase text-[#ff8500]">
              Solicite seu Orçamento
            </h3>
            <p className="font-inter text-xs text-[#f8ddd2]">
              Consulte disponibilidade e condições especiais diretamente com nossa equipe. Resposta imediata pelo WhatsApp!
            </p>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-4 px-6 rounded-xl uppercase text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 text-center"
            >
              <MessageSquare className="w-5 h-5" />
              Solicitar Orçamento pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
