import React from 'react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full py-12 px-4 md:px-6 border-t border-[#e2bfb0] bg-[#1a110c] text-white mb-14 md:mb-0 text-center md:text-left">
      <div className="max-w-[1200px] mx-auto space-y-10">
        
        {/* Main Footer Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b border-[#e2bfb0]/15 pb-8">
          {/* Brand Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-montserrat font-extrabold text-2xl text-[#ff6a00] tracking-tight">
              BRAGANÇA
            </span>
            <span className="font-montserrat font-bold text-sm tracking-widest text-[#ff8500] -mt-1">
              LOCADORA
            </span>
            <p className="font-inter text-xs text-[#e2bfb0] mt-1 max-w-sm">
              Aluguel de equipamentos de alta performance para construção civil em Bragança Paulista - SP.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-6 font-inter text-xs text-[#f8ddd2]">
            <li>
              <button
                onClick={() => scrollToSection('equipamentos')}
                className="hover:text-[#ff6a00] transition-colors font-semibold"
              >
                Equipamentos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('areas')}
                className="hover:text-[#ff6a00] transition-colors font-semibold"
              >
                Atendimento Bragança Paulista
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('faq')}
                className="hover:text-[#ff6a00] transition-colors font-semibold"
              >
                Dúvidas Frequentes (FAQ)
              </button>
            </li>
          </ul>
        </div>

        {/* SEO Keywords & Text Block */}
        <div className="bg-[#261812] p-6 rounded-2xl border border-[#e2bfb0]/15 space-y-4">
          <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#ff8500]">
            Locação de Equipamentos para Construção Civil em Bragança Paulista - SP
          </h4>
          
          <p className="font-inter text-[11px] text-[#e2bfb0] leading-relaxed">
            A <strong>Bragança Locadora</strong> é líder em soluções para canteiros de obras residenciais, comerciais e industriais. Oferecemos entrega expressa no mesmo dia com frete grátis para toda a cidade de Bragança Paulista. Cobrimos qualquer orçamento concorrente comprovado.
          </p>

          <div className="flex flex-wrap gap-2 text-[10px] font-inter text-[#f8ddd2]/80 pt-2 border-t border-[#e2bfb0]/10">
            <span className="bg-[#1a110c] px-2.5 py-1 rounded-md border border-[#e2bfb0]/10">
              Aluguel de Martelete Demolidor em Bragança Paulista
            </span>
            <span className="bg-[#1a110c] px-2.5 py-1 rounded-md border border-[#e2bfb0]/10">
              Locação de Andaime Tubular Bragança Paulista
            </span>
            <span className="bg-[#1a110c] px-2.5 py-1 rounded-md border border-[#e2bfb0]/10">
              Aluguel de Compactador de Solo Sapo
            </span>
            <span className="bg-[#1a110c] px-2.5 py-1 rounded-md border border-[#e2bfb0]/10">
              Locação de Betoneira 400L Bragança
            </span>
            <span className="bg-[#1a110c] px-2.5 py-1 rounded-md border border-[#e2bfb0]/10">
              Caçamba Entulho Bragança Paulista
            </span>
            <span className="bg-[#1a110c] px-2.5 py-1 rounded-md border border-[#e2bfb0]/10">
              Locadora de Ferramentas para Obra SP
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-2">
          <p className="font-inter text-xs text-[#e2bfb0]/70">
            © {new Date().getFullYear()} Bragança Locadora - Todos os direitos reservados. Locação de Equipamentos e Máquinas para Construção.
          </p>
        </div>

      </div>
    </footer>
  );
};

