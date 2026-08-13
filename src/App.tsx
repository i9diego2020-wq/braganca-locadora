import React, { useState } from 'react';
import { EQUIPMENTS } from './data/equipments';
import { Equipment } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BenefitsBar } from './components/BenefitsBar';
import { EquipmentCard } from './components/EquipmentCard';
import { EquipmentDetailModal } from './components/EquipmentDetailModal';
import { ConversionBanner } from './components/ConversionBanner';
import { AreasSection } from './components/AreasSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';

export default function App() {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);

  return (
    <div className="min-h-screen bg-[#fff8f6] text-[#261812] font-inter pb-16 md:pb-0 selection:bg-[#ff6a00] selection:text-white">
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero onExploreClick={() => {
        const el = document.getElementById('equipamentos');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Benefits Bar */}
      <BenefitsBar />

      {/* Main Content: Catalog */}
      <main id="equipamentos" className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-montserrat font-black text-2xl sm:text-3xl lg:text-4xl text-[#261812] uppercase tracking-tight">
              EQUIPAMENTOS PARA <span className="text-[#ff6a00]">LOCAÇÃO</span>
            </h2>
            <p className="font-inter text-sm md:text-base text-[#5a4136]">
              Equipamentos de alta qualidade e revisados para sua obra render mais e parar menos!
            </p>
          </div>

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {EQUIPMENTS.map((eq) => (
              <EquipmentCard
                key={eq.id}
                equipment={eq}
                onSelect={(e) => setSelectedEquipment(e)}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Conversion Worker Banner */}
      <ConversionBanner />

      {/* Areas Section */}
      <AreasSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQs */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bottom Nav */}
      <MobileBottomNav />

      {/* Equipment Detail Modal */}
      <EquipmentDetailModal
        equipment={selectedEquipment}
        onClose={() => setSelectedEquipment(null)}
      />
    </div>
  );
}

