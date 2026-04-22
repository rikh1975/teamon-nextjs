"use client";
import { ArrowDown } from "lucide-react";

export default function HeroSectionEN() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1a1a2e] overflow-hidden">
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
            <span className="text-white/90">& M&A Advisory</span>
            <br />
            <span className="text-[#278CC8]">in Spain</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
            Successfully navigate corporate finance transactions with a specialized team by your side.
          </p>
          <p className="text-gray-400 mb-4">At teamOn, we specialize in:</p>
          <ul className="space-y-3 text-gray-300 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-[#278CC8] mt-1">&#8226;</span>
              <span>Maximizing value for entrepreneurs looking to sell part or all of their company.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#278CC8] mt-1">&#8226;</span>
              <span>Identifying unique expansion opportunities for companies seeking inorganic growth nationally and internationally.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#278CC8] mt-1">&#8226;</span>
              <span>Providing access to investment funds and Family Offices through our global network.</span>
            </li>
          </ul>
          <p className="text-[#278CC8] text-sm italic mb-6">* receive 30 minutes of free consulting</p>
          <a
            href="#cta"
            className="inline-flex items-center gap-3 bg-white text-[#1a1a2e] font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#278CC8] hover:text-white transition-all duration-300 rounded-sm"
          >
            <ArrowDown size={18} />
            SCHEDULE A MEETING
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white/40" size={24} />
      </div>
    </section>
  );
}
