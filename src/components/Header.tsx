import React from 'react';
import { Phone } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#fff8f6] border-b border-[#e2bfb0] shadow-sm sticky top-0 z-40 transition-colors">
      <div className="flex justify-between items-center w-full px-4 md:px-6 h-16 md:h-20 max-w-[1200px] mx-auto">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col items-center group">
          <span className="font-montserrat font-extrabold text-xl md:text-2xl tracking-tight text-[#ff6a00] group-hover:scale-105 transition-transform">
            BRAGANÇA
          </span>
          <span className="font-montserrat font-bold text-xs md:text-sm tracking-widest text-[#ff8500] -mt-1">
            LOCADORA
          </span>
        </a>

        {/* Action Button: Phone Call Quick Link */}
        <div className="flex items-center gap-2 md:gap-4">
          <a
            href="tel:+5511965939300"
            className="text-[#a14000] p-1.5 md:p-2 flex items-center gap-2 hover:bg-[#fee3d8] rounded-lg transition-colors"
            title="Ligar para Bragança Locadora"
          >
            <div className="bg-[#ff6a00] text-white rounded-full p-2 shadow-sm">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="hidden md:flex flex-col text-right">
              <span className="font-montserrat font-bold text-sm text-[#261812]">11 96593-9300</span>
              <span className="font-inter font-semibold text-[11px] text-[#ff6a00] uppercase tracking-wider">
                Ligar Agora
              </span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

