import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  HiOutlineSearch, HiOutlineShoppingCart, HiOutlineHeart,
  HiOutlineMenu, HiOutlineX, HiOutlineUser,
  HiOutlineChevronDown, HiOutlineLocationMarker
} from 'react-icons/hi';
import { FiPackage } from 'react-icons/fi';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  const categories: string[] = [
    "Carros, Motos e Outros", "Acessórios para Veículos", "Casa, Móveis e Decoração",
    "Celulares e Telefones", "Calçados, Roupas e Bolsas", "Informática",
    "Eletrodomésticos", "Esportes e Fitness", "Imóveis", "Ferramentas",
    "Beleza e Cuidado Pessoal", "Eletrônicos, Áudio e Vídeo", "Agro",
    "Alimentos e Bebidas", "Brinquedos e Hobbies", "Games",
    "Livros, Revistas e Comics", "Pet Shop", "Saúde", "Serviços"
  ];

  const quickLinks: string[] = [
    "Categorias", "Ofertas", "Cupons", "Supermercado", "Moda",
    "Mercado Play", "Vender", "Contato"
  ];

  const slugify = (text: string): string =>
    text.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      {/* Accessibility Skip Links */}
      <div className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:p-4 focus:bg-purple-400 focus:text-white focus:font-bold">
        <a href="#main-content" className="mr-4">Pular para o conteúdo</a>
        <a href="#nav-search" className="mr-4">Pular para a busca</a>
        <a href="#footer">Ir para o rodapé</a>
      </div>

      {/* ===== TOP BAR ===== */}
      <div className="bg-purple-950 text-sm text-white">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-1.5">
          <div className="flex items-center gap-4 text-xs text-purple-200">
            <div className="hidden sm:flex items-center gap-1 hover:text-purple-300 cursor-pointer transition-colors duration-200">
              <HiOutlineLocationMarker className="text-base" />
              <span>Enviar para <strong>Teresópolis 25954055</strong></span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="hidden md:block hover:text-purple-300 cursor-pointer transition-colors duration-200">Ajuda</span>
            <span className="hidden md:block hover:text-purple-300 cursor-pointer transition-colors duration-200">Contato</span>
            <span className="hover:text-purple-300 cursor-pointer flex items-center gap-1.5 transition-colors duration-200 group">
              <HiOutlineUser className="text-lg transition-transform duration-200 group-hover:scale-110" />
              <span className="hidden sm:inline">Marcos</span>
            </span>
            <span className="hover:text-purple-300 cursor-pointer transition-colors duration-200">Minhas Compras</span>
            <span className="hover:text-purple-300 cursor-pointer relative transition-colors duration-200 group">
              <HiOutlineHeart className="text-xl transition-transform duration-200 group-hover:scale-110" />
            </span>
            <span className="hover:text-purple-300 cursor-pointer relative transition-colors duration-200 group">
              <HiOutlineShoppingCart className="text-xl transition-transform duration-200 group-hover:scale-110" />
              <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-fadeInDown">0</span>
            </span>
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header className="bg-gradient-to-r from-purple-900 via-purple-900 to-purple-800 sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl p-1.5 text-white hover:bg-purple-800 rounded-lg transition-colors"
            aria-label="Abrir menu"
          >
            {menuOpen ? <HiOutlineX className="transition-transform duration-300 rotate-90" /> : <HiOutlineMenu />}
          </button>

          <Link to="/" className="flex-shrink-0 group">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300">Tron</span>
              <span className="text-white group-hover:text-purple-100 transition-colors duration-300">Mart</span>
            </h1>
          </Link>

          <div className="hidden sm:flex flex-1 max-w-[600px] relative">
            <div className="w-full flex shadow-lg rounded-xl overflow-hidden bg-white border-2 border-transparent focus-within:border-purple-400 focus-within:shadow-purple-500/20 transition-all duration-300">
              <input
                id="nav-search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar produtos, marcas e muito mais..."
                className="flex-1 px-4 py-3 text-base outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="px-6 flex items-center justify-center bg-purple-700 hover:bg-purple-600 border-l border-purple-600 text-white transition-all duration-300 hover:shadow-inner">
                <HiOutlineSearch className="text-xl" />
              </button>
            </div>
          </div>

          <div className="flex sm:hidden items-center gap-3 ml-auto">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-2xl p-1.5 text-white hover:bg-purple-800 rounded-lg transition-colors">
              <HiOutlineSearch />
            </button>
            <Link to="/carrinho" className="relative p-1.5 text-white hover:bg-purple-800 rounded-lg transition-colors">
              <HiOutlineShoppingCart className="text-2xl" />
              <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-[10px] font-bold rounded-full w-4.5 h-4.5 flex items-center justify-center badge-pop">0</span>
            </Link>
          </div>

          <button className="hidden lg:flex items-center gap-2.5 px-5 py-3 bg-purple-700 hover:bg-purple-600 active:bg-purple-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95">
            <FiPackage className="text-lg" />
            Minhas compras
          </button>
        </div>

        {searchOpen && (
          <div className="sm:hidden px-4 pb-3 animate-fadeInDown">
            <div className="flex shadow-lg rounded-xl overflow-hidden bg-white border-2 border-purple-400">
              <input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                className="flex-1 px-4 py-3 text-sm outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="px-5 flex items-center justify-center bg-purple-700 text-white">
                <HiOutlineSearch className="text-lg" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===== CATEGORIES BAR ===== */}
      <nav className="bg-gradient-to-r from-purple-800 via-purple-800 to-purple-700 border-b border-purple-600 shadow-md">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="hidden lg:flex items-center gap-0 py-2 overflow-x-auto">
            <div
              className="relative"
              onMouseEnter={() => setShowCategoryMenu(true)}
              onMouseLeave={() => setShowCategoryMenu(false)}
            >
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-purple-200 hover:text-white hover:bg-purple-700/60 rounded-lg whitespace-nowrap transition-all duration-200">
                <HiOutlineMenu className="text-lg" />
                Categorias
                <HiOutlineChevronDown className={`text-xs transition-all duration-300 ${showCategoryMenu ? 'rotate-180' : ''}`} />
              </button>
              {showCategoryMenu && (
                <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-200 rounded-xl z-50 min-w-[280px] max-h-[70vh] overflow-y-auto animate-fadeInUp">
                  <div className="py-1">
                    {categories.map((cat, i) => (
                      <Link
                        key={i}
                        to={`/categoria/${slugify(cat)}`}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 hover:pl-5 border-b border-gray-50 last:border-0 transition-all duration-200"
                      >
                        {cat}
                      </Link>
                    ))}
                  </div>
                  <Link to="/categorias" className="block px-4 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50 border-t border-gray-100 transition-all duration-200">
                    Mostrar todas as categorias →
                  </Link>
                </div>
              )}
            </div>

            {quickLinks.filter(l => l !== "Categorias").map((link, i) => (
              <Link
                key={i}
                to={`/${slugify(link)}`}
                className="px-3 py-1.5 text-sm text-purple-200 hover:text-white hover:bg-purple-700/60 rounded-lg whitespace-nowrap transition-all duration-200"
              >
                {link}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center gap-1.5 py-2 overflow-x-auto scrollbar-hide">
            {["Categorias", "Ofertas", "Cupons", "Supermercado", "Moda", "Mercado Play", "Vender"].map((link, i) => (
              <Link
                key={i}
                to={`/${slugify(link)}`}
                className="flex-shrink-0 px-3.5 py-2 text-xs font-medium text-purple-200 hover:text-white bg-purple-700/40 hover:bg-purple-600 rounded-full whitespace-nowrap border border-purple-500/50 transition-all duration-200"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ===== MOBILE SIDEBAR ===== */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fadeInUp" onClick={toggleMenu} />
          <div className="fixed top-0 left-0 bottom-0 w-[300px] max-w-[85vw] bg-white z-50 overflow-y-auto shadow-2xl lg:hidden animate-fadeInLeft">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-white">
              <h2 className="font-bold text-lg text-purple-900">Menu</h2>
              <button onClick={toggleMenu} className="text-2xl p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <HiOutlineX />
              </button>
            </div>
            <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-purple-50/50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                M
              </div>
              <div>
                <p className="font-semibold text-sm text-purple-900">Marcos</p>
                <p className="text-xs text-gray-500">md@email.com</p>
              </div>
            </div>
            <div className="py-2">
              {["Minhas compras", "Favoritos", "Carrinho", "Categorias", "Ofertas", "Cupons", "Supermercado", "Moda", "Mercado Play", "Vender", "Contato", "Ajuda"].map((item, i) => (
                <Link
                  key={i}
                  to={`/${slugify(item)}`}
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 hover:pl-5 border-b border-gray-50 transition-all duration-200"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
