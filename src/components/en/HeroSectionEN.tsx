"use client";
import { ArrowDown } from "lucide-react";

export default function HeroSectionEN() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a1628] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1f34] to-[#0a1628]" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009bbf]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#009bbf]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20 w-full">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-8 tracking-tight">
            Corporate Finance
            <br />
            & M&A Advisory
            <br />
            <span className="text-[#009bbf]">in Spain</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
            Navigate corporate finance transactions successfully with a specialized team by your side.
          </p>

          <p className="text-gray-400 mb-6 text-lg">We specialize in:</p>

          <ul className="space-y-4 text-gray-300 mb-12 max-w-2xl">
            <li className="flex items-start gap-4">
              <span className="text-[#009bbf] mt-1 flex-shrink-0">•</span>
              <span className="font-light">Maximizing value for entrepreneurs looking to sell part or all of their company.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#009bbf] mt-1 flex-shrink-0">•</span>
              <span className="font-light">Identifying unique expansion opportunities for companies seeking inorganic growth.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-[#009bbf] mt-1 flex-shrink-0">•</span>
              <span className="font-light">Providing access to investment funds and Family Offices through our global network.</span>
            </li>
          </ul>

          <p className="text-[#009bbf] text-sm font-light mb-8">* Receive 30 minutes of free consulting</p>

          <a
            href="#cta"
            className="inline-flex items-center gap-3 bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
          >
            SCHEDULE A MEETING
            <ArrowDown size={16} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="text-white/30" size={20} />
        </div>
      </div>
    </section>
  );
}
