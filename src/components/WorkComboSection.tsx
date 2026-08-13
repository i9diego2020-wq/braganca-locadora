import React from 'react';
import { WORK_COMBOS } from '../data/combos';
import { EQUIPMENTS } from '../data/equipments';
import { Equipment } from '../types';
import { Sparkles, Check, ArrowRight, ShoppingBag } from 'lucide-react';

interface WorkComboSectionProps {
  onAddComboToQuote: (equipments: Equipment[]) => void;
}

export const WorkComboSection: React.FC<WorkComboSectionProps> = ({ onAddComboToQuote }) => {
  return (
    <section id="simulador" className="py-12 bg-[#fff1eb] border-y border-[#e2bfb0]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="bg-[#ff6a00] text-white font-montserrat font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-2 shadow-xs">
            Economize em Pacotes
          </span>
          <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-[#261812] uppercase">
            Combos Prontos para <span className="text-[#ff6a00]">Sua Obra</span>
          </h2>
          <p className="font-inter text-sm text-[#5a4136] mt-2">
            Combine equipamentos para a mesma etapa da obra e ganhe descontos exclusivos com entrega única!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_COMBOS.map((combo) => {
            const comboEquipments = EQUIPMENTS.filter(e => combo.equipmentIds.includes(e.id));
            const subtotalDaily = comboEquipments.reduce((acc, curr) => acc + curr.dailyRate, 0);
            const discountedDaily = Math.round(subtotalDaily * (1 - combo.discountPercentage / 100));

            return (
              <div
                key={combo.id}
                className="bg-white rounded-2xl p-5 border border-[#e2bfb0] shadow-sm hover:border-[#ff6a00] hover:shadow-xl transition-all flex flex-col justify-between relative group"
              >
                {/* Discount Ribbon */}
                <div className="absolute -top-2.5 right-4 bg-[#00b050] text-white font-montserrat font-extrabold text-xs px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {combo.discountPercentage}% OFF
                </div>

                <div className="space-y-3">
                  <h3 className="font-montserrat font-extrabold text-base text-[#261812] uppercase pt-1">
                    {combo.title}
                  </h3>
                  <p className="font-inter text-xs text-[#5a4136] min-h-[36px]">
                    {combo.description}
                  </p>

                  {/* Included Items */}
                  <div className="bg-[#fff8f6] p-3 rounded-xl border border-[#fee3d8] space-y-2">
                    <span className="font-montserrat font-bold text-[11px] text-[#261812] uppercase block">
                      Equipamentos Inclusos:
                    </span>
                    {comboEquipments.map((eq) => (
                      <div key={eq.id} className="flex items-center gap-2 text-xs font-inter text-[#5a4136]">
                        <Check className="w-4 h-4 text-[#00b050] flex-shrink-0" />
                        <span className="truncate">{eq.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="pt-2">
                    <span className="text-xs text-[#8e7164] line-through block">
                      De R$ {subtotalDaily.toFixed(2).replace('.', ',')}/dia
                    </span>
                    <span className="font-montserrat font-black text-xl text-[#ff6a00]">
                      Por R$ {discountedDaily.toFixed(2).replace('.', ',')}/dia
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onAddComboToQuote(comboEquipments)}
                  className="w-full bg-[#ff6a00] hover:bg-[#a14000] text-white font-montserrat font-bold py-3 px-4 rounded-xl uppercase text-xs shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Adicionar Combo
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
