import React, { useState } from 'react';
import { HiOutlineMail, HiOutlineCheck } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import useInView from '../hooks/useInView';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sectionRef, isInView] = useInView({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-12 md:py-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="text-white text-center lg:text-left lg:max-w-lg">
            <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              📬 Fique por dentro
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3 leading-tight">
              Receba <span className="text-yellow-400">ofertas exclusivas</span>
            </h2>
            <p className="text-purple-200 text-sm md:text-base leading-relaxed">
              Cadastre-se e seja o primeiro a saber de lançamentos, descontos especiais e
              cupons imperdíveis. <strong className="text-white">Ganhe 10% OFF na sua primeira compra!</strong>
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
              {submitted ? (
                <div className="flex items-center gap-4 text-white animate-scaleIn">
                  <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center">
                    <HiOutlineCheck className="text-2xl text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Cadastro realizado! 🎉</h4>
                    <p className="text-sm text-purple-200">Seu cupom <span className="bg-white/20 px-2 py-0.5 rounded font-bold">TRON10</span> será enviado por e-mail.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-400 transition-all">
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
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-purple-900 font-bold py-3.5 rounded-xl text-base transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30 active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <FiSend className="text-lg" />
                    QUERO 10% OFF
                  </button>
                  <p className="text-xs text-purple-300 text-center">
                    🔒 Sem spam. Seus dados estão seguros.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
