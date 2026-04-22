"use client";
import { Globe } from "lucide-react";

const countries = [
  "Spain", "Portugal", "France", "Germany", "Netherlands",
  "United Kingdom", "Italy", "Switzerland", "United States", "Mexico",
  "Colombia", "Chile", "Argentina", "Uruguay", "Brazil", "Peru",
];

export default function ACSSectionEN() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#009bbf] text-xs font-light tracking-widest uppercase mb-6">International Network</p>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-8 leading-tight tracking-tight">The ACS Partners</h2>
            <p className="text-gray-600 leading-relaxed mb-10 font-light text-lg">
              teamOn is the exclusive member in Spain of The ACS Partners, a global network of boutique Corporate Finance firms with presence in over 16 countries. This alliance allows us to offer our clients access to investment opportunities and strategic buyers.
            </p>
            <div className="flex items-center gap-4 text-[#009bbf]">
              <Globe size={24} className="flex-shrink-0" />
              <span className="text-sm font-light tracking-wide">
                16 COUNTRIES · 3 CONTINENTS · 1 GLOBAL NETWORK
              </span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-10 border border-gray-100">
            <h3 className="text-xs font-light tracking-widest text-gray-500 uppercase mb-8">International Presence</h3>
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
