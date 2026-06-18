import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import type { HeroSlide } from '../types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroSlides: HeroSlide[] = [
  {
    image: '/src/assets/banner-1.jpg',
    alt: 'Festival do Whey',
    title: 'FESTIVAL DO WHEY',
    subtitle: 'Envio mais rápido do Brasil',
    discount: 'Até 50% OFF',
    bgColor: 'from-blue-900/70 to-blue-800/30',
  },
  {
    image: '/src/assets/banner-2.jpg',
    alt: 'Descontos na cara do Gol',
    title: 'DESCONTOS NA CARA DO GOL',
    subtitle: 'Frete grátis a partir de R$19',
    discount: 'Ofertas imperdíveis',
    bgColor: 'from-green-900/70 to-green-800/30',
  },
  {
    image: '/src/assets/banner-3.jpg',
    alt: 'Mundo Auto',
    title: 'MUNDO AUTO',
    subtitle: 'Ative os cupons',
    discount: 'Até 60% OFF',
    bgColor: 'from-red-900/70 to-red-800/30',
  },
  {
    image: '/src/assets/banner-4.jpg',
    alt: 'Super ofertas',
    title: 'SUPER OFERTAS',
    subtitle: 'Esquenta São João',
    discount: 'Ative os cupons',
    bgColor: 'from-yellow-900/70 to-yellow-800/30',
  },
  {
    image: '/src/assets/banner-5.jpg',
    alt: 'meli+',
    title: 'meli+',
    subtitle: 'Os craques unidos para você sair ganhando',
    discount: 'Assine agora!',
    bgColor: 'from-purple-900/70 to-purple-800/30',
  },
];

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-b from-purple-950/5 to-gray-100">
      <div className="w-full">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          className="w-full overflow-hidden"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative h-[240px] sm:h-[320px] md:h-[400px] lg:h-[480px] bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-20 text-white">
                  <p className="text-xs md:text-sm lg:text-base font-medium uppercase tracking-[0.15em] mb-1.5 opacity-80 animate-fadeInDown">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black mb-3 leading-[1.05] tracking-tight animate-fadeInLeft">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 mb-4 lg:mb-6 animate-fadeInRight">
                    {slide.discount}
                  </p>
                  <Link
                    to="/ofertas"
                    className="group inline-flex items-center gap-2 px-6 py-3 md:px-7 md:py-3.5 bg-white text-gray-900 font-bold rounded-xl text-sm md:text-base hover:bg-gray-100 transition-all duration-300 w-fit shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 animate-scaleIn"
                  >
                    Ver ofertas
                    <HiOutlineArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
