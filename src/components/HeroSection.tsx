"use client";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a1628] overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1f34] to-[#0a1628]" />

      {/* Subtle accent gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009bbf]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#009bbf]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 w-full">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8 tracking-tight">
            Corporate Finance
            <br />
            y Asesoría M&A
            <br />
            <span className="text-[#009bbf]">en España</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
            Navega con éxito en transacciones de finanzas corporativas de la mano de un equipo especializado.
          </p>

          <p className="text-gray-400 mb-6 text-lg">Nos especializamos en:</p>

          <ul className="space-y-4 text-gray-300 mb-12 max-w-2xl">
            <li className="flex items-start gap-4">
              <span className="text-[#009bbf] mt-1 flex-shrink-0">•</span>
              <span className="font-light">Maximizar el valor para empresarios que buscan vender parte o la totalidad de su empresa.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#009bbf] mt-1 flex-shrink-0">•</span>
              <span className="font-light">Identificar oportunidades de expansión para empresas que buscan crecimiento inorgánico.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#009bbf] mt-1 flex-shrink-0">•</span>
              <span className="font-light">Ofrecer acceso a fondos de inversión y Family Offices a través de nuestra red global.</span>
            </li>
          </ul>

          <p className="text-[#009bbf] text-sm font-light mb-8">* Recibe 30 minutos de consultoría gratuita</p>

          <a
            href="#cta"
            className="inline-flex items-center gap-3 bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
          >
            PROGRAMA UNA CITA
            <ArrowDown size={16} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="text-white/30" size={20} />
        </div>
      </div>
    </section>
  );
}
