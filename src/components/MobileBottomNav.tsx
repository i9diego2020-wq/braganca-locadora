import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 flex md:hidden border-t border-[#e2bfb0] shadow-[0_-4px_12px_rgba(0,0,0,0.15)] bg-white">
      <a
        href="https://wa.me/5511965939300?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20de%20equipamento."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-row items-center justify-center gap-2 h-14 bg-[#00b050] text-white font-montserrat font-bold text-sm tracking-wide active:scale-98 transition-all"
      >
        <MessageSquare className="w-5 h-5" />
        WhatsApp
      </a>

      <a
        href="tel:+5511965939300"
        className="flex-1 flex flex-row items-center justify-center gap-2 h-14 bg-[#ff6a00] text-white font-montserrat font-bold text-sm tracking-wide active:scale-98 transition-all"
      >
        <PhoneCall className="w-5 h-5" />
        Ligar Agora
      </a>
    </nav>
  );
};
