import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HiOutlineTruck, HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import useInView from '../hooks/useInView';

import 'swiper/css';
import 'swiper/css/navigation';

const formatPrice = (price) => {
  return parseFloat(price.replace(/[^0-9.,]/g, '').replace(',', '.') || price).toFixed(2);
};

const calcDiscount = (oldPrice, currentPrice) => {
  const old = parseFloat(String(oldPrice).replace(/[^0-9.,]/g, '').replace(',', '.'));
  const curr = parseFloat(String(currentPrice).replace(/[^0-9.,]/g, '').replace(',', '.'));
  if (old && curr && old > curr) {
    return Math.round(((old - curr) / old) * 100);
  }
  return null;
};

export default function ProductCarousel({ products, title, subtitle }) {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (!products || products.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className={`bg-white py-8 md:py-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
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

        {/* Carousel */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={14}
            slidesPerView={2}
            autoplay={{ delay: 4000, disableOnInteraction: true, pauseOnMouseEnter: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 18 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 6, spaceBetween: 24 },
            }}
            className="pb-2"
          >
            {products.map((product) => {
              const discount = product.oldPrice ? calcDiscount(product.oldPrice, product.price) : null;
              const priceNum = parseFloat(formatPrice(product.price));
              const installment = priceNum / 10;

              return (
                <SwiperSlide key={product.id}>
                  <Link
                    to={`/produto/${product.id}`}
                    className="block bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group/card h-full"
                  >
                    {/* Image */}
                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-5 overflow-hidden">
                      <img
                        src={product.productsImage || '/placeholder.svg'}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover/card:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = `https://placehold.co/300x300/e2e8f0/64748b?text=${encodeURIComponent(product.name.substring(0, 20))}`;
                        }}
                      />
                      {discount && (
                        <span className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-md animate-pulseGlow">
                          {discount}% OFF
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      {product.oldPrice && (
                        <span className="text-xs md:text-sm text-gray-400 line-through mb-1 block">
                          R$ {product.oldPrice}
                        </span>
                      )}

                      <div className="flex items-baseline gap-1">
                        <span className="text-xs md:text-sm font-bold text-gray-600">R$</span>
                        <span className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                          {priceNum.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>

                      {discount && (
                        <p className="text-xs md:text-sm font-bold text-emerald-600 mt-1 animate-fadeInDown">
                          {discount}% OFF
                        </p>
                      )}

                      <p className="text-xs md:text-sm text-gray-500 mt-1.5 leading-tight">
                        em <span className="font-bold text-gray-700">10x</span> R$ {installment.toFixed(2).replace('.', ',')} <span className="text-gray-400">sem juros</span>
                      </p>

                      <div className="flex items-center gap-1.5 mt-3 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-lg px-2.5 py-1.5 w-fit">
                        <HiOutlineTruck className="text-sm" />
                        Frete grátis
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="swiper-prev-custom absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-purple-700 hover:shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:flex border border-gray-100"
          >
            <HiOutlineChevronLeft className="text-xl" />
          </button>
          <button
            ref={nextRef}
            className="swiper-next-custom absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-purple-700 hover:shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:flex border border-gray-100"
          >
            <HiOutlineChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
