"use client";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1a1a2e] overflow-hidden">
      {/* Background overlay with city image effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/90 via-[#278CC8]/30 to-[#1a1a2e]/80" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23278CC8' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-8">
            Corporate Finance
            <br />
            <span className="text-white/90">y Asesoría M&A</span>
            <br />
            <span className="text-[#278CC8]">en España</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
            Navega con éxito en las transacciones de finanzas corporativas de la mano de un equipo especializado.
          </p>

          <p className="text-gray-400 mb-4">Desde teamOn, nos especializamos en:</p>

          <ul className="space-y-3 text-gray-300 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-[#278CC8] mt-1">&#8226;</span>
              <span>Maximizar el valor para empresarios que buscan vender parte o la totalidad de su empresa.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#278CC8] mt-1">&#8226;</span>
              <span>Identificar oportunidades únicas de expansión para empresas que buscan un crecimiento inorgánico a nivel nacional e internacional.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#278CC8] mt-1">&#8226;</span>
              <span>Ofrecer acceso a fondos de inversión y Family Offices a través de nuestra red global.</span>
            </li>
          </ul>

          <p className="text-[#278CC8] text-sm italic mb-6">* recibe 30 minutos de consultoría gratuita</p>

          <a
            href="#cta"
            className="inline-flex items-center gap-3 bg-white text-[#1a1a2e] font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#278CC8] hover:text-white transition-all duration-300 rounded-sm"
          >
            <ArrowDown size={18} />
            PROGRAMA UNA CITA
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/40" size={24} />
      </div>
    </section>
  );
}
