import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { CategoryItem } from '../types';
import useInView from '../hooks/useInView';

import 'swiper/css';

const categories: CategoryItem[] = [
  { name: 'Carros, Motos e Outros', icon: '🚗', color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'Acessórios para Veículos', icon: '🔧', color: 'bg-gray-50 hover:bg-gray-100' },
  { name: 'Casa, Móveis e Decoração', icon: '🏠', color: 'bg-yellow-50 hover:bg-yellow-100' },
  { name: 'Celulares e Telefones', icon: '📱', color: 'bg-green-50 hover:bg-green-100' },
  { name: 'Calçados, Roupas e Bolsas', icon: '👟', color: 'bg-pink-50 hover:bg-pink-100' },
  { name: 'Informática', icon: '💻', color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'Eletrodomésticos', icon: '🧊', color: 'bg-cyan-50 hover:bg-cyan-100' },
  { name: 'Esportes e Fitness', icon: '🏋️', color: 'bg-orange-50 hover:bg-orange-100' },
  { name: 'Imóveis', icon: '🏢', color: 'bg-purple-50 hover:bg-purple-100' },
  { name: 'Ferramentas', icon: '🛠️', color: 'bg-amber-50 hover:bg-amber-100' },
  { name: 'Beleza e Cuidado Pessoal', icon: '💄', color: 'bg-rose-50 hover:bg-rose-100' },
  { name: 'Eletrônicos, Áudio e Vídeo', icon: '🎧', color: 'bg-indigo-50 hover:bg-indigo-100' },
  { name: 'Agro', icon: '🌾', color: 'bg-lime-50 hover:bg-lime-100' },
  { name: 'Alimentos e Bebidas', icon: '🍕', color: 'bg-red-50 hover:bg-red-100' },
  { name: 'Antiguidades e Coleções', icon: '🏺', color: 'bg-stone-50 hover:bg-stone-100' },
  { name: 'Arte, Papelaria e Armarinho', icon: '🎨', color: 'bg-violet-50 hover:bg-violet-100' },
  { name: 'Bebês', icon: '🍼', color: 'bg-sky-50 hover:bg-sky-100' },
  { name: 'Brinquedos e Hobbies', icon: '🎮', color: 'bg-teal-50 hover:bg-teal-100' },
  { name: 'Câmeras e Acessórios', icon: '📷', color: 'bg-gray-50 hover:bg-gray-100' },
  { name: 'Festas e Lembrancinhas', icon: '🎉', color: 'bg-pink-50 hover:bg-pink-100' },
  { name: 'Games', icon: '🎮', color: 'bg-purple-50 hover:bg-purple-100' },
  { name: 'Indústria e Comércio', icon: '🏭', color: 'bg-blue-50 hover:bg-blue-100' },
  { name: 'Ingressos', icon: '🎫', color: 'bg-yellow-50 hover:bg-yellow-100' },
  { name: 'Instrumentos Musicais', icon: '🎸', color: 'bg-orange-50 hover:bg-orange-100' },
  { name: 'Joias e Relógios', icon: '💎', color: 'bg-amber-50 hover:bg-amber-100' },
  { name: 'Livros, Revistas e Comics', icon: '📚', color: 'bg-green-50 hover:bg-green-100' },
  { name: 'Música, Filmes e Seriados', icon: '🎵', color: 'bg-red-50 hover:bg-red-100' },
  { name: 'Pet Shop', icon: '🐾', color: 'bg-emerald-50 hover:bg-emerald-100' },
  { name: 'Saúde', icon: '💊', color: 'bg-teal-50 hover:bg-teal-100' },
  { name: 'Serviços', icon: '🔧', color: 'bg-gray-50 hover:bg-gray-100' },
  { name: 'Televisores', icon: '📺', color: 'bg-indigo-50 hover:bg-indigo-100' },
];

export default function CategoryGrid() {
  const [sectionRef, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-10 md:py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4">
        <div
          ref={sectionRef}
          className={`bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-gray-100 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">
              <span className="text-purple-700">Categorias</span>
            </h2>
            <Link to="/categorias" className="text-sm md:text-base font-semibold text-purple-600 hover:text-purple-700 transition-all duration-200">
              Mostrar todas →
            </Link>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 xl:grid-cols-6 gap-3">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to={`/categoria/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl ${cat.color} hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-gray-200 group`}
                style={{
                  transitionDelay: `${index * 30}ms`,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <span className="text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                <span className="text-xs md:text-sm text-gray-700 text-center font-semibold leading-tight">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <Swiper
              spaceBetween={10}
              slidesPerView={3.5}
              className="pb-2"
            >
              {categories.map((cat, index) => (
                <SwiperSlide key={index}>
                  <Link
                    to={`/categoria/${cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    className={`flex flex-col items-center gap-3 p-4 rounded-2xl ${cat.color} hover:shadow-lg transition-all min-h-[120px] border border-gray-100 group`}
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                    <span className="text-xs text-gray-700 text-center font-semibold leading-tight">
                      {cat.name.length > 22 ? cat.name.substring(0, 20) + '...' : cat.name}
                    </span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
