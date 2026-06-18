import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import useInView from '../hooks/useInView';

const banners = [
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

function BannerCard({ banner, index }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
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
      className={`relative bg-gradient-to-br ${banner.gradient} rounded-2xl p-7 md:p-9 min-h-[220px] md:min-h-[260px] flex flex-col justify-end overflow-hidden group hover:shadow-2xl transition-all duration-500 ${banner.textColor} ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{
        transitionDelay: `${index * 100}ms`,
        transform: isHovered ? `perspective(800px) rotateX(${-mousePos.y}deg) rotateY(${mousePos.x}deg) scale(1.02)` : 'perspective(800px) rotateX(0) rotateY(0) scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, opacity 0.8s ease',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700 delay-100" />
      <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/5 rounded-full hidden md:block group-hover:scale-150 transition-transform duration-700 delay-200" />

      {banner.subtitle && (
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.1em] opacity-80 mb-1.5 group-hover:opacity-100 transition-opacity duration-300">
          {banner.subtitle}
        </p>
      )}
      <h3 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-2 leading-tight ${banner.accent}`}>
        {banner.title}
      </h3>
      {banner.description && (
        <p className="text-sm md:text-base lg:text-lg font-bold mb-5 md:mb-6 opacity-90">
          {banner.description}
        </p>
      )}
      <div className="flex items-center gap-2.5 text-sm md:text-base font-bold bg-white/20 hover:bg-white/30 transition-all duration-300 rounded-xl px-5 py-3 w-fit backdrop-blur-md group-hover:shadow-lg">
        {banner.cta}
        <HiOutlineArrowRight className="text-lg group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </Link>
  );
}

export default function PromoBanners() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {banners.map((banner, index) => (
            <BannerCard key={index} banner={banner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
