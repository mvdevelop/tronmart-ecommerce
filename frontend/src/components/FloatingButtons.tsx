import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineChevronUp } from 'react-icons/hi';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5521999999999?text=Olá!%20Vim%20pelo%20TronMart%20e%20quero%20saber%20mais!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 animate-float group"
        title="Fale conosco no WhatsApp"
      >
        <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 bg-purple-700 hover:bg-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          title="Voltar ao topo"
        >
          <HiOutlineChevronUp className="text-2xl" />
        </button>
      )}
    </div>
  );
}
