import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Star, Quote, Building2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="sobre" className="py-12 md:py-16 bg-[#fff1eb] border-t border-[#e2bfb0]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header with Google Rating Badge */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-[#ffffff] px-4 py-1.5 rounded-full border border-[#e2bfb0] shadow-xs">
            <div className="flex text-[#ff8500]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-montserrat font-bold text-xs text-[#261812]">4.9 de 5 no Google</span>
          </div>

          <h2 className="font-montserrat font-extrabold text-2xl md:text-3xl text-[#261812] uppercase">
            Quem Aluga <span className="text-[#ff6a00]">Recomenda</span>
          </h2>
          <p className="font-inter text-sm text-[#5a4136]">
            Confira a opinião de quem confia na Bragança Locadora para manter suas obras no prazo e sem imprevistos.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 border border-[#e2bfb0] shadow-sm flex flex-col justify-between relative group hover:shadow-xl hover:border-[#ff6a00] transition-all"
            >
              <Quote className="w-8 h-8 text-[#fee3d8] absolute top-4 right-4" />

              <div className="space-y-4">
                <div className="flex text-[#ff8500] gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="font-inter text-xs text-[#5a4136] leading-relaxed italic">
                  "{testimonial.comment}"
                </p>

                <div className="bg-[#fff8f6] p-2.5 rounded-xl border border-[#fee3d8]">
                  <span className="text-[11px] font-inter text-[#8e7164] block">Equipamento Locado:</span>
                  <span className="font-montserrat font-bold text-xs text-[#261812]">
                    {testimonial.equipmentRented}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 mt-4 border-t border-[#fee3d8]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#ff6a00]"
                />
                <div>
                  <h4 className="font-montserrat font-extrabold text-xs text-[#261812]">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-[11px] text-[#5a4136]">
                    {testimonial.role} {testimonial.company ? `• ${testimonial.company}` : ''}
                  </p>
                  <p className="font-inter text-[10px] text-[#8e7164]">
                    {testimonial.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
