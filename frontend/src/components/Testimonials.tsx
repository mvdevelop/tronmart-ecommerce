import React from 'react';
import { HiOutlineStar, HiOutlineHeart } from 'react-icons/hi';
import useInView from '../hooks/useInView';

const testimonials = [
  {
    name: 'Ana Silva',
    location: 'São Paulo, SP',
    avatar: 'AS',
    rating: 5,
    text: 'Comprei um tablet e chegou em 2 dias! O frete grátis foi um diferencial enorme. Super recomendo a TronMart!',
    product: 'Tablet Hancdon Pro12',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Carlos Oliveira',
    location: 'Rio de Janeiro, RJ',
    avatar: 'CO',
    rating: 5,
    text: 'Melhor preço que encontrei na internet. O desconto de 32% OFF foi real e o produto é original. Nota 10!',
    product: 'Fone Bluetooth',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Juliana Costa',
    location: 'Belo Horizonte, MG',
    avatar: 'JC',
    rating: 5,
    text: 'Primeira compra e já virou cliente fiel. O cupom de desconto funcionou e o parcelamento sem juros ajudou demais.',
    product: 'Smartwatch',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Rafael Mendes',
    location: 'Curitiba, PR',
    avatar: 'RM',
    rating: 4,
    text: 'Produto bem embalado, entrega antes do prazo e suporte rápido pelo WhatsApp. Experiência incrível de compra.',
    product: 'Teclado Mecânico',
    color: 'bg-amber-100 text-amber-700',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <HiOutlineStar
          key={i}
          className={`text-sm ${i < count ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-lg`}>
            {testimonial.avatar}
          </div>
          <div>
            <h4 className="font-bold text-sm text-gray-800">{testimonial.name}</h4>
            <p className="text-xs text-gray-400">{testimonial.location}</p>
          </div>
        </div>
        <Stars count={testimonial.rating} />
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-3">"{testimonial.text}"</p>

      <div className="flex items-center gap-1.5 text-xs text-purple-600 font-semibold">
        <HiOutlineHeart className="text-sm" />
        Comprou: {testimonial.product}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-10 md:py-14">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            ⭐ Clientes Felizes
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            O que nossos <span className="text-purple-700">clientes</span> dizem
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto">
            Mais de 10.000 clientes satisfeitos em todo o Brasil. Veja alguns depoimentos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-8 md:mt-10 bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-black text-purple-700">10K+</span>
              <p className="text-xs text-gray-500 font-medium mt-1">Clientes felizes</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-black text-purple-700">4.9★</span>
              <p className="text-xs text-gray-500 font-medium mt-1">Avaliação média</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-black text-purple-700">98%</span>
              <p className="text-xs text-gray-500 font-medium mt-1">Recomendam</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-black text-purple-700">2 dias</span>
              <p className="text-xs text-gray-500 font-medium mt-1">Entrega média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
