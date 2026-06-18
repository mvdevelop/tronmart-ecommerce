import React from 'react';
import HeroBanner from './HeroBanner';
import BenefitsRow from './BenefitsRow';
import ProductCarousel from './ProductCarousel';
import PromoBanners from './PromoBanners';
import MeliPlus from './MeliPlus';
import CategoryGrid from './CategoryGrid';
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
      <HeroBanner />

      <BenefitsRow />

      <ProductCarousel
        products={recentlyViewed}
        title="Inspirado no último visto"
        subtitle="Com base no que você navegou"
      />

      <SectionDivider />

      {ofertas.length > 0 && (
        <ProductCarousel
          products={ofertas}
          title="Ofertas imperdíveis 🏷️"
          subtitle="Aproveite os melhores descontos do mês"
        />
      )}

      <PromoBanners />

      <ProductCarousel
        products={maisVendidos}
        title="Mais vendidos 🔥"
        subtitle="Explore os produtos que são tendência agora"
      />

      <SectionDivider />

      <MeliPlus />

      <CategoryGrid />

      <div className="h-4 bg-gray-50" />
    </main>
  );
}
