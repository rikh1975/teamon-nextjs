"use client";
import { Calendar, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-32 bg-[#0a1628] relative overflow-hidden">
      {/* Subtle accent gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009bbf]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#009bbf]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#009bbf] text-xs font-light tracking-widest uppercase mb-8">
          Da el primer paso
        </p>
        <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
          ¿Listo para hablar de tu operación?
        </h2>
        <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto leading-relaxed font-light">
          Nuestro equipo de Corporate Finance te ofrece una primera consulta
          gratuita para evaluar tu situación y explorar las mejores opciones.
        </p>
        <p className="text-[#009bbf] text-sm font-light mb-12">
          * Recibe 30 minutos de consultoría gratuita
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/teamon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#009bbf] text-white font-light px-10 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
          >
            <Calendar size={18} />
            PROGRAMA UNA CITA
          </a>
          <a
            href="tel:+34932720861"
            className="inline-flex items-center justify-center gap-3 border border-white/20 text-white font-light px-10 py-4 text-sm tracking-widest hover:border-[#009bbf] hover:text-[#009bbf] transition-all duration-300"
          >
            <Phone size={18} />
            +34 93 272 08 61
          </a>
        </div>
      </div>
    </section>
  );
}
