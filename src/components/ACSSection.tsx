"use client";
import { Globe } from "lucide-react";

const countries = [
  "España", "Portugal", "Francia", "Alemania", "Países Bajos",
  "Reino Unido", "Italia", "Suiza", "Estados Unidos", "México",
  "Colombia", "Chile", "Argentina", "Uruguay", "Brasil", "Perú",
];

export default function ACSSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-[#278CC8] text-sm font-semibold tracking-widest uppercase mb-4">
              Red Internacional
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">
              The ACS Partners
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              teamOn es miembro exclusivo en España de The ACS Partners, una red
              global de firmas boutique de Corporate Finance con presencia en más
              de 16 países. Esta alianza nos permite ofrecer a nuestros clientes
              acceso a oportunidades de inversión y compradores estratégicos en
              los principales mercados internacionales.
            </p>
            <div className="flex items-center gap-3 text-[#278CC8]">
              <Globe size={20} />
              <span className="text-sm font-semibold tracking-wide">
                16 PAÍSES · 3 CONTINENTES · 1 RED GLOBAL
              </span>
            </div>
          </div>

          {/* Right: Country grid */}
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">
              Presencia internacional
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {countries.map((country) => (
                <div
                  key={country}
                  className="flex items-center gap-2 text-sm text-gray-600 py-2 px-3 rounded hover:bg-[#278CC8]/10 hover:text-[#278CC8] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#278CC8]" />
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
