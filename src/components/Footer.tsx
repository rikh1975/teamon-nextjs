"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const footerSections = [
  {
    title: "CONTACTO",
    content: (
      <div className="space-y-4 text-sm text-gray-300">
        <div>
          <p className="font-semibold text-white mb-1">Barcelona</p>
          <p>Paseo de Gracia 74, 2-1A</p>
          <p>08008, Barcelona</p>
          <p>+34 93 272 08 61</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Hilversum</p>
          <p>Koninginneweg 31</p>
          <p>1217 KR, Hilversum, Países Bajos</p>
          <p>+31 303 100 448</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-1">Montevideo</p>
          <p>Bulevar General Artigas, 417, piso 7</p>
          <p>Montevideo, Uruguay</p>
        </div>
        <p className="text-gray-400 mt-2">Horario: Lunes a viernes, 09:00h a 18:00h</p>
      </div>
    ),
  },
  {
    title: "SERVICIOS",
    content: (
      <div className="space-y-2 text-sm text-gray-300">
        <Link href="/servicios" className="block hover:text-[#278CC8] transition-colors">Venta de empresas en España</Link>
        <Link href="/servicios" className="block hover:text-[#278CC8] transition-colors">Empresa familiar</Link>
        <Link href="/servicios" className="block hover:text-[#278CC8] transition-colors">Fusiones y adquisiciones (M&A)</Link>
        <Link href="/servicios" className="block hover:text-[#278CC8] transition-colors">Finanzas corporativas</Link>
        <Link href="/servicios" className="block hover:text-[#278CC8] transition-colors">Inversión y capital</Link>
        <Link href="/servicios" className="block hover:text-[#278CC8] transition-colors">Transacciones inmobiliarias</Link>
        <Link href="/servicios" className="block hover:text-[#278CC8] transition-colors">Glosario de M&A</Link>
      </div>
    ),
  },
  {
    title: "ACTIVIDAD",
    content: (
      <div className="space-y-2 text-sm text-gray-300">
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Corporate Finance Barcelona</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">M&A Argentina</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">M&A México</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">M&A Colombia</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">M&A Chile</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Corporate Finance Florida</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Crossborder LATAM-España</Link>
      </div>
    ),
  },
  {
    title: "INFORMACIÓN",
    content: (
      <div className="space-y-2 text-sm text-gray-300">
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Cómo valorar una empresa</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Proceso de due diligence</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Múltiplos EBITDA por sector</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Fiscalidad en venta de empresas</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Protocolo familiar</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">Cuánto vale mi empresa</Link>
        <Link href="/" className="block hover:text-[#278CC8] transition-colors">WACC: coste medio ponderado</Link>
      </div>
    ),
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Logo + Copyright */}
        <div className="mb-10">
          <div className="text-2xl tracking-tight mb-4">
            team<span className="text-[#278CC8]">O</span>n
          </div>
          <p className="text-gray-400 text-sm">2026 &copy;</p>
          <p className="text-gray-400 text-sm">Todos los derechos reservados</p>
          <div className="flex gap-4 mt-4">
            <a href="https://linkedin.com/company/teamon" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#278CC8] transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#278CC8] transition-colors">
              <YoutubeIcon size={20} />
            </a>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="space-y-0 border-t border-gray-700">
          {footerSections.map((section, index) => (
            <div key={section.title} className="border-b border-gray-700">
              <button
                onClick={() => setOpenSection(openSection === index ? null : index)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-sm font-semibold tracking-widest">{section.title}</span>
                <ChevronDown
                  size={20}
                  className={`text-[#278CC8] transition-transform ${
                    openSection === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === index && (
                <div className="pb-6 animate-[fadeInUp_0.3s_ease-out]">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom links */}
        <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-500">
          <Link href="/politica-de-privacidad" className="hover:text-gray-300">Política de privacidad</Link>
          <Link href="/politica-de-cookies" className="hover:text-gray-300">Política de cookies</Link>
          <Link href="/terminos-de-uso" className="hover:text-gray-300">Términos de uso</Link>
        </div>
      </div>
    </footer>
  );
}
