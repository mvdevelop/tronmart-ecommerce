import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShieldCheck, HiOutlineTruck, HiOutlineCreditCard } from 'react-icons/hi';

export default function Footer() {
  const footerSections = [
    {
      title: 'Sobre',
      links: ['Trabalhe conosco', 'Termos e condições', 'Promoções', 'Como cuidamos da sua privacidade', 'Acessibilidade', 'Contato', 'Informações sobre seguros', 'Programa de Afiliados']
    },
    {
      title: 'Comprar',
      links: ['Como comprar', 'Formas de pagamento', 'Frete grátis', 'Compra garantida', 'Devolução', 'Garantia']
    },
    {
      title: 'Vender',
      links: ['Como vender', 'Tabela de taxas', 'Soluções para lojistas', 'Programa de Afiliados', 'Anuncie seus produtos']
    },
    {
      title: 'Ajuda',
      links: ['Central de ajuda', 'Meus dados', 'Minhas compras', 'Meios de pagamento', 'Segurança']
    }
  ];

  return (
    <footer id="footer" className="bg-gray-950 text-gray-300">
      {/* Payment & Shipping Info */}
      <div className="border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-800/50 transition-colors duration-300">
                <HiOutlineCreditCard className="text-3xl text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1.5">Escolha como pagar</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Com Mercado Pago, você paga com cartão, boleto ou Pix. Você também pode pagar em até 12x sem cartão com a Linha de Crédito.
                </p>
                <Link to="/meios-de-pagamento" className="text-sm text-purple-400 hover:text-purple-300 font-semibold mt-2 inline-block transition-colors">
                  Como pagar com Mercado Pago →
                </Link>
              </div>
            </div>

            <div className="group flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-800/50 transition-colors duration-300">
                <HiOutlineTruck className="text-3xl text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1.5">Frete grátis</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Aproveite frete grátis por ser sua primeira compra em milhões de produtos.
                </p>
              </div>
            </div>

            <div className="group flex items-start gap-4">
              <div className="w-14 h-14 bg-purple-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-800/50 transition-colors duration-300">
                <HiOutlineShieldCheck className="text-3xl text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1.5">Segurança, do início ao fim</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Você não gostou do que comprou? Devolva! No TronMart não há nada que você não possa fazer, porque você está sempre protegido.
                </p>
                <Link to="/seguranca" className="text-sm text-purple-400 hover:text-purple-300 font-semibold mt-2 inline-block transition-colors">
                  Como te protegemos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="border-b border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {footerSections.map((section, i) => (
              <div key={i}>
                <h3 className="font-bold text-white text-sm uppercase tracking-[0.15em] mb-5">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        to={`/${link.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                        className="text-sm md:text-base text-gray-400 hover:text-purple-400 hover:pl-1 transition-all duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block group">
              <h2 className="text-2xl font-black tracking-tight">
                <span className="text-purple-400 group-hover:text-purple-300 transition-colors">Tron</span>
                <span className="text-white group-hover:text-gray-200 transition-colors">Mart</span>
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Copyright © 1999-2026 TronMart.com.br LTDA.
            </p>
          </div>
          <div className="text-center md:text-right text-sm text-gray-500 leading-relaxed">
            <p>CNPJ n.º 00.000.000/0001-00 / Av. das Nações, nº 3.003,</p>
            <p>Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo TronMart.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
