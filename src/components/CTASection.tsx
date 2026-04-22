"use client";
import { Calendar, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-[#1a1a2e] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#278CC8]/10 via-transparent to-[#278CC8]/5" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-[#278CC8] text-sm font-semibold tracking-widest uppercase mb-4">
          Da el primer paso
        </p>
        <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
          ¿Listo para hablar de tu operación?
        </h2>
        <p className="text-gray-400 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
          Nuestro equipo de Corporate Finance te ofrece una primera consulta
          gratuita para evaluar tu situación y explorar las mejores opciones
          para tu empresa.
        </p>
        <p className="text-[#278CC8] text-sm italic mb-10">
          * Recibe 30 minutos de consultoría gratuita
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/teamon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-[#1a1a2e] font-semibold px-8 py-4 text-sm tracking-wide hover:bg-[#278CC8] hover:text-white transition-all duration-300 rounded-sm"
          >
            <Calendar size={18} />
            PROGRAMA UNA CITA
          </a>
          <a
            href="tel:+34932720861"
            className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-semibold px-8 py-4 text-sm tracking-wide hover:border-[#278CC8] hover:text-[#278CC8] transition-all duration-300 rounded-sm"
          >
            <Phone size={18} />
            +34 93 272 08 61
          </a>
        </div>
      </div>
    </section>
  );
}
