import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HiOutlineTruck } from 'react-icons/hi';
import type { Product, ProductCarouselProps } from '../types';
import useInView from '../hooks/useInView';

import 'swiper/css';
import 'swiper/css/navigation';

const formatPrice = (price: string): string => {
  return parseFloat(price.replace(/[^0-9.,]/g, '').replace(',', '.') || price).toFixed(2);
};

const calcDiscount = (oldPrice: string, currentPrice: string): number | null => {
  const old = parseFloat(String(oldPrice).replace(/[^0-9.,]/g, '').replace(',', '.'));
  const curr = parseFloat(String(currentPrice).replace(/[^0-9.,]/g, '').replace(',', '.'));
  if (old && curr && old > curr) {
    return Math.round(((old - curr) / old) * 100);
  }
  return null;
};

export default function ProductCarousel({ products, title, subtitle }: ProductCarouselProps) {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  if (!products || products.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-12 md:py-16 lg:py-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-[1440px] mx-auto p-[5%]">
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <div className="animate-fadeInRight">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              {title || "Produtos"}
            </h2>
            {subtitle && (
              <p className="text-sm md:text-base text-gray-500 mt-1.5 font-medium">{subtitle}</p>
            )}
          </div>
          <Link
            to="/produtos"
            className="text-sm md:text-base font-semibold text-purple-600 hover:text-purple-700 hover:gap-2 transition-all duration-200 inline-flex items-center gap-1"
          >
            Ver todos →
          </Link>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              1024: { slidesPerView: 5, spaceBetween: 28 },
              1280: { slidesPerView: 6, spaceBetween: 32 },
            }}
            className="pb-2"
          >
            {products.map((product: Product) => {
              const discount = product.oldPrice ? calcDiscount(product.oldPrice, product.price) : null;
              const priceNum = parseFloat(formatPrice(product.price));
              const installment = priceNum / 10;

              return (
                <SwiperSlide key={product.id}>
                  <Link
                    to={`/produto/${product.id}`}
                    className="block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group/card h-full"
                  >
                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-5 overflow-hidden">
                      <img
                        src={product.productsImage || '/placeholder.svg'}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover/card:scale-110 transition-transform duration-500"
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          e.currentTarget.src = `https://placehold.co/300x300/e2e8f0/64748b?text=${encodeURIComponent(product.name.substring(0, 20))}`;
                        }}
                      />
                      {discount && (
                        <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md animate-pulseGlow">
                          {discount}% OFF
                        </span>
                      )}
                    </div>

                    <div className="p-5 md:p-6">
                      {product.oldPrice && (
                        <span className="text-xs md:text-sm text-gray-400 line-through mb-2 block">
                          R$ {product.oldPrice}
                        </span>
                      )}

                      <div className="flex items-baseline gap-1.5 mb-2">
                        <span className="text-sm md:text-base font-bold text-gray-600">R$</span>
                        <span className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                          {priceNum.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      {discount && (
                        <p className="text-sm md:text-base font-bold text-emerald-600 mb-2 animate-fadeInDown">
                          {discount}% OFF
                        </p>
                      )}

                      <p className="text-sm md:text-base text-gray-500 mb-4 leading-relaxed">
                        em <span className="font-bold text-gray-700">10x</span> R$ {installment.toFixed(2).replace('.', ',')} <span className="text-gray-400">sem juros</span>
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-sm font-bold text-emerald-600 bg-emerald-50 rounded-lg px-3 py-2 w-fit">
                        <HiOutlineTruck className="text-base" />
                        Frete grátis
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
