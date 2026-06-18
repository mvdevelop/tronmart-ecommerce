import React, { useState, useEffect, useCallback } from 'react';
import { HiOutlineX, HiOutlineMail } from 'react-icons/hi';
import { FiGift } from 'react-icons/fi';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !dismissed && !submitted) {
      setIsVisible(true);
    }
  }, [dismissed, submitted]);

  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [handleMouseLeave]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        setDismissed(true);
      }, 2500);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center p-4 animate-fadeInUp">
        <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl animate-scaleIn overflow-hidden">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <HiOutlineX className="text-xl" />
          </button>

          {/* Gradient header */}
          <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 p-8 md:p-10 text-white text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg animate-float">
                <FiGift className="text-3xl text-purple-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-2">ESPERA! 🎁</h2>
              <p className="text-purple-200 text-lg mb-1">Não vá ainda!</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 text-center">
            {!submitted ? (
              <>
                <p className="text-gray-600 text-base md:text-lg mb-2">
                  <strong className="text-purple-700">Ganhe 10% OFF</strong> na sua primeira compra!
                </p>
                <p className="text-gray-400 text-sm mb-6">
                  Cadastre seu e-mail e receba o cupom exclusivo agora mesmo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
                    <HiOutlineMail className="text-xl text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Digite seu melhor e-mail"
                      required
                      className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-700 to-purple-600 hover:from-purple-600 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl text-base transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 active:scale-[0.98]"
                  >
                    QUERO MEU CUPOM 🎉
                  </button>
                </form>

                <p className="text-xs text-gray-400 mt-4">
                  🔒 Seus dados estão seguros. Sem spam, prometemos.
                </p>
              </>
            ) : (
              <div className="animate-scaleIn py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cupom enviado! 🎉</h3>
                <p className="text-gray-500 text-sm">
                  Verifique seu e-mail <strong className="text-purple-700">{email}</strong> e use o código <span className="bg-purple-100 text-purple-700 font-bold px-3 py-1 rounded-lg">TRON10</span>
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-8 pb-6 text-center">
            <button
              onClick={handleClose}
              className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
            >
              Não, obrigado. Quero continuar comprando.
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
