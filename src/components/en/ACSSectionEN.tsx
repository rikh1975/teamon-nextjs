"use client";
import { Globe } from "lucide-react";

const countries = [
  "Spain", "Portugal", "France", "Germany", "Netherlands",
  "United Kingdom", "Italy", "Switzerland", "United States", "Mexico",
  "Colombia", "Chile", "Argentina", "Uruguay", "Brazil", "Peru",
];

export default function ACSSectionEN() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#278CC8] text-sm font-semibold tracking-widest uppercase mb-4">International Network</p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 leading-tight">The ACS Partners</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              teamOn is the exclusive member in Spain of The ACS Partners, a global network of boutique Corporate Finance firms with presence in over 16 countries. This alliance allows us to offer our clients access to investment opportunities and strategic buyers in the main international markets.
            </p>
            <div className="flex items-center gap-3 text-[#278CC8]">
              <Globe size={20} />
              <span className="text-sm font-semibold tracking-wide">16 COUNTRIES · 3 CONTINENTS · 1 GLOBAL NETWORK</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
            <h3 className="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-6">International Presence</h3>
            <div className="grid grid-cols-2 gap-3">
              {countries.map((country) => (
                <div key={country} className="flex items-center gap-2 text-sm text-gray-600 py-2 px-3 rounded hover:bg-[#278CC8]/10 hover:text-[#278CC8] transition-colors">
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
