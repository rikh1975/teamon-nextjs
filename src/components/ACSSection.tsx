"use client";
import { Globe } from "lucide-react";

const countries = [
  "España", "Portugal", "Francia", "Alemania", "Países Bajos",
  "Reino Unido", "Italia", "Suiza", "Estados Unidos", "México",
  "Colombia", "Chile", "Argentina", "Uruguay", "Brasil", "Perú",
];

export default function ACSSection() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#009bbf] text-xs font-light tracking-widest uppercase mb-6">
              Red Internacional
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
              The ACS Partners
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 font-light text-lg">
              teamOn es miembro exclusivo en España de The ACS Partners, una red
              global de firmas boutique de Corporate Finance con presencia en más
              de 16 países. Esta alianza nos permite ofrecer a nuestros clientes
              acceso a oportunidades de inversión y compradores estratégicos.
            </p>
            <div className="flex items-center gap-4 text-[#009bbf]">
              <Globe size={24} className="flex-shrink-0" />
              <span className="text-sm font-light tracking-wide">
                16 PAÍSES · 3 CONTINENTES · 1 RED GLOBAL
              </span>
            </div>
          </div>

          {/* Right: Country grid */}
          <div className="bg-gray-50 rounded-lg p-10 border border-gray-100">
            <h3 className="text-xs font-light tracking-widest text-gray-500 uppercase mb-8">
              Presencia internacional
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {countries.map((country) => (
                <div
                  key={country}
                  className="flex items-center gap-3 text-sm text-gray-700 py-3 px-4 rounded hover:bg-[#009bbf]/10 hover:text-[#009bbf] transition-colors font-light"
                >
                  <span className="w-2 h-2 rounded-full bg-[#009bbf] flex-shrink-0" />
                  {country}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
