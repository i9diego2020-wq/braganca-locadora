import React from 'react';
import { MessageSquare, PhoneCall, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="top" className="relative bg-[#261812] text-white py-10 md:py-20 overflow-hidden">
      {/* Dark background texture */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkWUtLfcJ4GJ53JhP8w65UbCotC8WccQMWIkJx4eWqzbAVuOR_t8UBwGObpbkAdXk4bsC0POojQjlSrwjmU8j2gnFhESa4LsaCsDuth4N_79J7yhgSMnVmbBZiUkY9e3Do7iY9Ot4oEt429Eco0NV7yCXFYdZVBq5FplUV3KOxlac5EHu4svh1Su04e4-8z_qyhARHq84XeqkkJXgEUfEo_rYEjodp82_DjHuRhOnbQitIsBdW9qqC')`
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Column: Headlines & Call to Actions */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div className="inline-block bg-[#ff6a00] text-white px-4 py-1.5 rounded-sm font-montserrat font-extrabold text-sm uppercase tracking-wide mb-4 shadow-lg transform -rotate-2">
            AQUI É ASSIM:
          </div>

          {/* Main Title */}
          <h1 className="font-montserrat font-black text-3xl sm:text-5xl lg:text-6xl uppercase leading-none mb-3 tracking-tight drop-shadow-md">
            ENTREGAMOS <br />
            <span className="text-[#ff6a00] text-6xl sm:text-7xl lg:text-8xl block mt-1 drop-shadow-lg">
              HOJE!
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-montserrat font-extrabold text-lg sm:text-2xl text-[#ff8500] uppercase tracking-wider mb-3">
            LOCOU, CHEGOU, RESOLVEU!
          </p>

          <p className="font-inter text-base sm:text-lg text-[#f8ddd2] mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Locação de equipamentos para construção com o melhor preço em{' '}
            <strong className="text-[#ff8500] font-bold">Bragança Paulista e região!</strong>
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/5511965939300?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20locação%20de%20equipamento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 uppercase text-center w-full sm:w-auto group"
            >
              <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <span className="block text-base leading-tight">CHAMAR NO WHATSAPP</span>
                <span className="block text-xs font-normal normal-case opacity-90">Resposta imediata!</span>
              </div>
            </a>

            <a
              href="tel:+5511965939300"
              className="bg-white hover:bg-[#fff8f6] text-[#261812] font-montserrat font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 uppercase text-center w-full sm:w-auto border-2 border-[#ff6a00]"
            >
              <PhoneCall className="w-6 h-6 text-[#ff6a00]" />
              <div className="text-left">
                <span className="block text-base font-extrabold text-[#261812] leading-tight">11 96593-9300</span>
                <span className="block text-[#ff6a00] text-xs font-bold">LIGAR AGORA</span>
              </div>
            </a>
          </div>

          {/* Quick trust pill */}
          <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-inter text-[#e2bfb0]">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#ff8500]" /> Entrega no mesmo dia
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00b050]" /> Máquinas revisadas
            </span>
          </div>
        </div>

        {/* Right Column: Google Reviews Rating Badge */}
        <div className="flex-1 relative mt-6 md:mt-0 flex justify-center">
          <div className="bg-[#1f130e] p-6 rounded-3xl border border-[#ff6a00]/40 shadow-2xl flex flex-col items-center justify-center text-center space-y-3 max-w-sm w-full">
            <div className="bg-[#ff6a00] text-white px-4 py-1.5 rounded-full text-xs font-montserrat font-bold shadow-md flex items-center gap-1.5">
              <span>⭐️ 4.9 de 5 no Google</span>
            </div>
            <h3 className="font-montserrat font-extrabold text-xl text-white uppercase">
              Bragança Locadora
            </h3>
            <p className="font-inter text-xs text-[#e2bfb0]">
              Avaliação máxima pelos construtores, mestres de obras e engenheiros de Bragança Paulista e região!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
