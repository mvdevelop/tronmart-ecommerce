import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTruck, HiOutlineCreditCard, HiOutlineShieldCheck, HiOutlineStar, HiOutlineOfficeBuilding, HiOutlineViewGrid } from 'react-icons/hi';
import { FiPercent } from 'react-icons/fi';
import type { BenefitItem } from '../types';
import useInView from '../hooks/useInView';

const benefits: BenefitItem[] = [
  {
    icon: HiOutlineTruck,
    title: 'Frete grátis',
    description: 'Benefício por ser sua primeira compra.',
    link: '/frete-gratis',
    linkText: 'Mostrar produtos',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    icon: HiOutlineCreditCard,
    title: 'Meios de pagamento',
    description: 'Pague suas compras com rapidez e segurança.',
    link: '/meios-de-pagamento',
    linkText: 'Mostrar meios',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: FiPercent,
    title: 'Menos de R$100',
    description: 'Confira produtos com preços baixos.',
    link: '/menos-de-100',
    linkText: 'Mostrar produtos',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: HiOutlineStar,
    title: 'Mais vendidos',
    description: 'Explore os produtos que são tendência.',
    link: '/mais-vendidos',
    linkText: 'Ir para Mais vendidos',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Compra garantida',
    description: 'Você pode devolver sua compra grátis.',
    link: '/compra-garantida',
    linkText: 'Como funciona',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: 'Lojas oficiais',
    description: 'Suas marcas preferidas.',
    link: '/lojas-oficiais',
    linkText: 'Mostrar lojas',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: HiOutlineViewGrid,
    title: 'Nossas categorias',
    description: 'Encontre celulares, roupas, imóveis e muito mais.',
    link: '/categorias',
    linkText: 'Ir para Categorias',
    color: 'bg-teal-100 text-teal-600',
  },
];

function BenefitCard({ benefit, index }: { benefit: BenefitItem; index: number }) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const Icon = benefit.icon;

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-5 flex items-start gap-4 border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-purple-200/50 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${benefit.color} shadow-sm`}>
        <Icon className="text-2xl" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-base md:text-lg text-gray-800">{benefit.title}</h3>
        <p className="text-sm text-gray-500 mt-1 mb-2.5 line-clamp-2">{benefit.description}</p>
        <Link
          to={benefit.link}
          className="text-sm font-semibold text-purple-600 hover:text-purple-700 hover:gap-2 transition-all duration-200 inline-flex items-center gap-1"
        >
          {benefit.linkText}
          <span className="group-hover:ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function BenefitsRow() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 md:py-10">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
