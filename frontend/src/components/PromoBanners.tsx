import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import type { PromoBanner } from '../types';
import useInView from '../hooks/useInView';
import CountdownTimer from './CountdownTimer';

const banners: PromoBanner[] = [
  {
    title: 'FINO E RESISTENTE',
    subtitle: 'NOVO EDGE 70',
    description: 'PARCELE EM 24X*',
    cta: 'Compre agora',
    link: '/produto/edge-70',
    gradient: 'from-gray-900 via-gray-800 to-gray-700',
    textColor: 'text-white',
    accent: 'text-yellow-400',
  },
  {
    title: 'AION UT PREMIUM',
    subtitle: '',
    description: 'R$ 139.990 COM BÔNUS E SEGURO',
    cta: 'Faça tech drive',
    link: '/produto/aion-ut',
    gradient: 'from-blue-950 via-blue-900 to-indigo-900',
    textColor: 'text-white',
    accent: 'text-cyan-300',
  },
  {
    title: 'BRINQUEDOS',
    subtitle: 'DIVERSÃO PARA TODOS',
    description: 'ATÉ 20% OFF',
    cta: 'Ver detalhes',
    link: '/categoria/brinquedos',
    gradient: 'from-orange-600 via-red-500 to-pink-600',
    textColor: 'text-white',
    accent: 'text-yellow-300',
  },
  {
    title: 'DIVERSÃO PARA TODO PET',
    subtitle: 'DO GATO MANHOSO AO CÃO SAPECA',
    description: '',
    cta: 'Conferir',
    link: '/categoria/pet-shop',
    gradient: 'from-emerald-700 via-emerald-600 to-teal-600',
    textColor: 'text-white',
    accent: 'text-lime-300',
  },
  {
    title: 'CARRINHO CHEIO',
    subtitle: 'GARANTA O ESTOQUE PRO MÊS INTEIRO',
    description: '',
    cta: 'Comprar agora',
    link: '/ofertas',
    gradient: 'from-purple-800 via-purple-700 to-indigo-800',
    textColor: 'text-white',
    accent: 'text-pink-300',
  },
];

function getTargetDate(index: number): string | null {
  if (index === 0) {
    const d = new Date();
    d.setHours(d.getHours() + 24);
    return d.toISOString();
  }
  return null;
}

function BannerCard({ banner, index }: { banner: PromoBanner; index: number }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const targetDate = getTargetDate(index);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 8,
    });
  };

  return (
    <Link
      ref={ref}
      to={banner.link}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
      className={`relative bg-gradient-to-br ${banner.gradient} rounded-2xl p-8 md:p-10 min-h-[240px] md:min-h-[280px] flex flex-col justify-end overflow-hidden group hover:shadow-2xl transition-all duration-500 ${banner.textColor} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: isHovered ? `perspective(800px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) scale(1.02)` : 'perspective(800px) rotateX(0) rotateY(0) scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, opacity 0.8s ease',
      }}
    >
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700 delay-100" />
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/5 rounded-full hidden md:block group-hover:scale-150 transition-transform duration-700 delay-200" />

      {/* Countdown Timer on first banner — creates urgency */}
      {targetDate && (
        <div className="absolute top-4 right-4 z-10">
          <CountdownTimer targetDate={targetDate} size="sm" label="Oferta relâmpago" />
        </div>
      )}

      {banner.subtitle && (
        <p className="text-sm md:text-base font-medium uppercase tracking-[0.1em] opacity-80 mb-2 group-hover:opacity-100 transition-opacity duration-300">
          {banner.subtitle}
        </p>
      )}
      <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight ${banner.accent}`}>
        {banner.title}
      </h3>
      {banner.description && (
        <p className="text-base md:text-lg lg:text-xl font-bold mb-6 md:mb-8 opacity-90">
          {banner.description}
        </p>
      )}
      <div className="flex items-center gap-3 text-base md:text-lg font-bold bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-xl px-6 py-3.5 w-fit backdrop-blur-md group-hover:shadow-lg">
        {banner.cta}
        <HiOutlineArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </Link>
  );
}

export default function PromoBanners() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto p-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {banners.map((banner, index) => (
            <BannerCard key={index} banner={banner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
