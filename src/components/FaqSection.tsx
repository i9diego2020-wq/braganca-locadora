import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#fff8f6]">
      <div className="max-w-[900px] mx-auto px-4 md:px-6">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#ffeae1] text-[#a14000] font-montserrat font-bold text-xs uppercase px-3.5 py-1.5 rounded-full border border-[#e2bfb0]">
            <HelpCircle className="w-4 h-4 text-[#ff6a00]" />
            Dúvidas Frequentes
          </div>
          <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-[#261812] uppercase">
            Como Funciona a <span className="text-[#ff6a00]">Locação</span>
          </h2>
          <p className="font-inter text-sm text-[#5a4136]">
            Tire suas dúvidas sobre contrato, entregas, pagamentos e suporte no canteiro de obras.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e2bfb0] overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 md:p-5 text-left font-montserrat font-extrabold text-sm text-[#261812] flex justify-between items-center gap-4 hover:text-[#ff6a00] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ff6a00] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 md:p-5 pt-0 font-inter text-xs md:text-sm text-[#5a4136] leading-relaxed border-t border-[#fee3d8] bg-[#fff8f6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Footer */}
        <div className="mt-8 bg-[#fff1eb] border border-[#e2bfb0] p-5 rounded-2xl text-center space-y-3">
          <p className="font-montserrat font-bold text-sm text-[#261812]">
            Ainda tem dúvidas sobre qual equipamento escolher?
          </p>
          <p className="font-inter text-xs text-[#5a4136]">
            Nossos consultores técnicos ajudam a dimensionar a máquina exata para o seu tipo de solo ou estrutura.
          </p>
          <a
            href="https://wa.me/5511965939300?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20locação%20de%20equipamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-2.5 px-5 rounded-xl text-xs uppercase shadow-md transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            Falar com Consultor no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
