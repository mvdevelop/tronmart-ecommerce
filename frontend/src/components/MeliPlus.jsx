import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineTruck, HiOutlineCash, HiOutlineChartBar, HiOutlinePlay } from 'react-icons/hi';
import { FiMonitor } from 'react-icons/fi';
import useInView from '../hooks/useInView';

const benefits = [
  {
    icon: HiOutlineTruck,
    title: 'Frete grátis rápido',
    description: 'em produtos a partir de R$ 19',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    icon: FiMonitor,
    title: 'As melhores plataformas',
    description: 'de entretenimento',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: HiOutlineCash,
    title: 'Até 5% de cashback',
    description: 'nas suas compras e pagamentos',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: HiOutlineChartBar,
    title: 'Rendimento de 120% do CDI',
    description: 'em Cofrinhos',
    gradient: 'from-amber-500 to-amber-700',
  },
];

const streamingServices = [
  { name: 'Disney+', icon: '🎬', description: 'Plano Padrão com anúncios', badge: 'NOVO', color: 'from-blue-800 to-blue-950' },
  { name: 'Globoplay Premium', icon: '📺', description: '30% OFF', badge: null, color: 'from-red-700 to-red-950' },
  { name: 'HBO Max', icon: '🅿️', description: '15% OFF', badge: 'NOVO', color: 'from-purple-700 to-purple-950' },
  { name: 'Premiere', icon: '⚽', description: '10% OFF', badge: 'NOVO', color: 'from-green-700 to-green-950' },
  { name: 'Apple TV', icon: '🍎', description: '15% OFF', badge: 'NOVO', color: 'from-gray-700 to-gray-950' },
  { name: 'Universal+', icon: '🎥', description: '7 DIAS GRÁTIS • 15% OFF', badge: null, color: 'from-blue-700 to-blue-950' },
];

const mercadoPlayMovies = [
  { title: 'A Era Do Gelo', genre: 'Animação', year: '2002' },
  { title: 'Top Gun: Maverick', genre: 'Ação', year: '2022' },
  { title: 'Matrix', genre: 'Ficção', year: '1999' },
];

export default function MeliPlus() {
  const [sectionRef, isInView] = useInView({ threshold: 0.05 });

  return (
    <section className="bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 py-8 md:py-12">
      <div className="max-w-[1280px] mx-auto px-4" ref={sectionRef}>
        {/* Mercado Play Banner */}
        <div className={`bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 rounded-3xl p-8 md:p-12 mb-8 text-white overflow-hidden relative transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Decorative orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-float-delayed" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-purple-300 mb-2">Grátis</p>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-3 leading-tight">Mercado Play</h2>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-purple-200">Assuma o controle.</p>
              <p className="text-lg md:text-xl text-purple-300 mb-6">Assista o que quiser.</p>
              <Link
                to="/mercado-play"
                className="group inline-flex items-center gap-3 bg-white text-purple-900 font-bold px-7 py-3.5 rounded-2xl hover:bg-purple-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <HiOutlinePlay className="text-2xl group-hover:scale-110 transition-transform" />
                Acesse o Mercado Play
              </Link>
            </div>

            {/* Movie Cards */}
            <div className="flex gap-4">
              {mercadoPlayMovies.map((movie, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 md:p-5 w-28 md:w-36 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-5xl md:text-6xl mb-3">🎬</div>
                  <p className="text-sm font-bold truncate">{movie.title}</p>
                  <p className="text-[11px] text-purple-300 mt-0.5">{movie.genre} • {movie.year}</p>
                  <button className="mt-3 text-xs font-bold bg-white/20 hover:bg-white/30 backdrop-blur rounded-lg px-3 py-2 w-full transition-all duration-200">
                    Reproduzir
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscription Benefits */}
        <div className={`bg-white rounded-3xl p-8 md:p-10 mb-8 shadow-lg border border-gray-100 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900">
                <span className="text-purple-700">meli</span>
                <span className="text-yellow-500">+</span>
              </h2>
              <p className="text-base md:text-lg text-gray-500 mt-2 max-w-xl leading-relaxed">
                VIVA TODA A EXPERIÊNCIA TronMart. Benefícios exclusivos a partir de <strong className="text-gray-700">R$ 9,90</strong> por mês.
              </p>
            </div>
            <Link
              to="/meli-plus"
              className="flex-shrink-0 bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-bold px-6 py-3.5 rounded-2xl text-base transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 active:scale-95"
            >
              Assinar a partir de R$ 9,90
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-1">{benefit.title}</h3>
                  <p className="text-sm text-gray-500">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Entertainment / Streaming Services */}
        <div className={`bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              As melhores plataformas de <span className="text-purple-700">entretenimento</span>
            </h2>
            <Link to="/entretenimento" className="text-sm md:text-base font-semibold text-purple-600 hover:text-purple-700 transition-colors">
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {streamingServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                {service.badge && (
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                    {service.badge}
                  </span>
                )}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 bg-gradient-to-br ${service.color} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1">{service.name}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-tight">{service.description}</p>
                <button className="mt-3 text-sm font-bold text-purple-600 hover:text-purple-700 transition-colors inline-flex items-center gap-1 group/btn">
                  Assinar
                  <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
