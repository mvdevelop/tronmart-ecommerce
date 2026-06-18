import React from 'react';
import HeroBanner from './HeroBanner';
import BenefitsRow from './BenefitsRow';
import ProductCarousel from './ProductCarousel';
import PromoBanners from './PromoBanners';
import MeliPlus from './MeliPlus';
import CategoryGrid from './CategoryGrid';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import FloatingButtons from './FloatingButtons';
import ExitIntentPopup from './ExitIntentPopup';
import type { Product } from '../types';

import productData from '../Data.json';

function SectionDivider() {
  return (
    <div className="relative h-8 md:h-12 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[200px] h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent" />
      </div>
    </div>
  );
}

export default function Home() {
  const { products } = productData as { products: Product[] };

  const recentlyViewed = products.slice(0, 8);
  const maisVendidos = products.slice(5, 14);
  const ofertas = products.filter(p => p.oldPrice).slice(0, 8);

  return (
    <main id="main-content">
      {/* HERO */}
      <HeroBanner />

      {/* BENEFITS */}
      <BenefitsRow />

      {/* RECENTLY VIEWED */}
      <ProductCarousel
        products={recentlyViewed}
        title="Inspirado no último visto"
        subtitle="Com base no que você navegou"
      />

      <SectionDivider />

      {/* OFFERS CAROUSEL */}
      {ofertas.length > 0 && (
        <ProductCarousel
          products={ofertas}
          title="Ofertas imperdíveis 🏷️"
          subtitle="Aproveite os melhores descontos do mês"
        />
      )}

      {/* PROMO BANNERS */}
      <PromoBanners />

      {/* MAIS VENDIDOS */}
      <ProductCarousel
        products={maisVendidos}
        title="Mais vendidos 🔥"
        subtitle="Explore os produtos que são tendência agora"
      />

      {/* TESTIMONIALS — Prova Social */}
      <Testimonials />

      <SectionDivider />

      {/* MELI+ */}
      <MeliPlus />

      {/* CATEGORIES */}
      <CategoryGrid />

      {/* NEWSLETTER — Captura de Leads */}
      <Newsletter />

      {/* Floating Action Buttons */}
      <FloatingButtons />

      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      <div className="h-4 bg-gray-50" />
    </main>
  );
}
