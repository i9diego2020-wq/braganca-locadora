import React from 'react';
import { CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

export const ConversionBanner: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto bg-[#261812] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-[#e2bfb0]">
        {/* Left Column: Worker Photo */}
        <div className="md:w-1/3 relative min-h-[280px] md:min-h-full bg-[#ff6a00] overflow-hidden flex items-end justify-center">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeyUk3gdTAsUj-8SVcXuZUpqtApplD4Wc8VHsHfNZbbFBHy72cB4MPH4Ry0UGlMSDrARev0OkCVprZrrJ-8_igQg4P8jZRP-FzKIHdLM9W49dx2926dt5SoCG8eDoh_wJegzWQNMOyb8N7XhCEHMRSJ5wtYFR6XssCeqTD_9b_oLz0BIaPvfQHHmUJ9yYQ8TzHvA7wLe74WBVAv0Bo9IzD5I24ab3q40oESSbcHqrQphRmxBYx3pDw"
            alt="Atendimento Bragança Locadora - Entregamos Hoje"
            className="w-full h-full object-cover object-bottom max-h-[380px] md:max-h-full"
          />
        </div>

        {/* Right Column: High Conversion Content */}
        <div className="md:w-2/3 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-r from-[#ff6a00] to-[#ff8500] text-white relative">
          <div className="absolute inset-0 bg-[#261812] opacity-90 z-0"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight text-white drop-shadow-md">
              PRECISOU?<br />
              <span className="text-[#ff6a00] drop-shadow-lg">A GENTE LEVA!</span>
            </h2>

            <ul className="space-y-3 font-inter text-sm sm:text-base text-[#fff8f6]">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff6a00] flex-shrink-0" />
                <span>Fale agora e receba seu equipamento ainda hoje!</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff6a00] flex-shrink-0" />
                <span>Atendemos Bragança Paulista e toda região!</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff6a00] flex-shrink-0" />
                <span>Resposta rápida pelo WhatsApp</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#ff6a00] flex-shrink-0" />
                <span>Orçamento sem compromisso</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/5511965939300?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento%20para%20locação%20de%20equipamento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00b050] hover:bg-[#006d2f] text-white font-montserrat font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 uppercase flex-1"
              >
                <MessageSquare className="w-6 h-6" />
                <div className="text-left">
                  <span className="block text-sm leading-tight">CHAMAR NO WHATSAPP</span>
                  <span className="block text-[11px] font-normal normal-case opacity-90">Resposta imediata!</span>
                </div>
              </a>

              <a
                href="tel:+5511965939300"
                className="bg-white hover:bg-[#fff8f6] text-[#261812] font-montserrat font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-xl transition-all active:scale-95 uppercase flex-1"
              >
                <PhoneCall className="w-6 h-6 text-[#ff6a00]" />
                <div className="text-left">
                  <span className="block text-base font-black text-[#261812] leading-tight">11 96593-9300</span>
                  <span className="block text-[#ff6a00] text-xs font-bold">LIGAR AGORA</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
