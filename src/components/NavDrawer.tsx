import React from 'react';
import { Home, Wrench, Info, MapPin, HelpCircle, PhoneCall, X, FileText, Sparkles, MessageSquare } from 'lucide-react';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMyRentals: () => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose, onOpenMyRentals }) => {
  if (!isOpen) return null;

  const scrollToSection = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in" 
        onClick={onClose} 
      />

      {/* Drawer */}
      <nav className="relative z-10 w-80 max-w-[85vw] bg-[#fff8f6] shadow-2xl h-full flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 border-r border-[#e2bfb0]">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-[#e2bfb0] bg-[#ffeae1] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-montserrat font-extrabold text-lg text-[#ff6a00]">BRAGANÇA LOCADORA</span>
              <span className="font-inter text-xs text-[#5a4136]">Locação de Equipamentos de Construção</span>
            </div>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full text-[#5a4136] hover:bg-[#fee3d8] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Items */}
          <ul className="p-3 space-y-1 font-inter font-semibold text-sm text-[#261812]">
            <li>
              <button
                onClick={() => scrollToSection('top')}
                className="w-full text-left bg-[#ff6a00] text-white rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#a14000] transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Início</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('equipamentos')}
                className="w-full text-left text-[#5a4136] rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#fee3d8] transition-colors"
              >
                <Wrench className="w-5 h-5 text-[#ff6a00]" />
                <span>Equipamentos para Locação</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('simulador')}
                className="w-full text-left text-[#5a4136] rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#fee3d8] transition-colors"
              >
                <Sparkles className="w-5 h-5 text-[#ff6a00]" />
                <span>Combos de Obra & Descontos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('areas')}
                className="w-full text-left text-[#5a4136] rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#fee3d8] transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#ff6a00]" />
                <span>Áreas Atendidas & Frete</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('sobre')}
                className="w-full text-left text-[#5a4136] rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#fee3d8] transition-colors"
              >
                <Info className="w-5 h-5 text-[#ff6a00]" />
                <span>Sobre Nós & Depoimentos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('faq')}
                className="w-full text-left text-[#5a4136] rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#fee3d8] transition-colors"
              >
                <HelpCircle className="w-5 h-5 text-[#ff6a00]" />
                <span>Perguntas Frequentes (FAQ)</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  onClose();
                  onOpenMyRentals();
                }}
                className="w-full text-left text-[#261812] bg-[#fff1eb] border border-[#e2bfb0] rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-[#fee3d8] transition-colors mt-2"
              >
                <FileText className="w-5 h-5 text-[#00b050]" />
                <span>Meus Aluguéis / Extensões</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Quick Contact Footer */}
        <div className="p-4 border-t border-[#e2bfb0] bg-[#fff1eb] space-y-2">
          <p className="font-montserrat font-bold text-xs uppercase text-[#5a4136]">Atendimento Direto</p>
          <a
            href="https://wa.me/5511965939300?text=Olá!%20Vim%20pelo%20site%20da%20Bragança%20Locadora%20e%20gostaria%20de%20fazer%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs uppercase shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Direct
          </a>
          <a
            href="tel:+5511965939300"
            className="w-full bg-[#ff6a00] hover:bg-[#a14000] text-white font-montserrat font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 text-xs uppercase shadow-sm transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            Ligar: (11) 96593-9300
          </a>
        </div>
      </nav>
    </div>
  );
};
