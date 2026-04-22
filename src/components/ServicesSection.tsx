"use client";
import { ArrowRight, Building2, TrendingUp, Home } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Corporate Finance",
    description:
      "Servicios integrales de Finanzas Corporativas: compraventa de empresas, capital de crecimiento y estrategias Buy and Build.",
    links: [
      { label: "Vende tu empresa", href: "/servicios" },
      { label: "Compra una empresa", href: "/servicios" },
      { label: "Reestructura tus finanzas", href: "/servicios" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Inversión y Capital",
    description:
      "Conectamos Family Offices, firmas de capital privado e inversores con selectas oportunidades de inversión estratégica.",
    links: [
      { label: "Levanta capital", href: "/servicios" },
      { label: "Encuentra socios", href: "/servicios" },
      { label: "Encuentra oportunidades", href: "/servicios" },
    ],
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Soluciones estratégicas en transacciones inmobiliarias orientadas a satisfacer las necesidades de empresas y familias.",
    links: [
      { label: "Vende tu inmueble", href: "/servicios" },
      { label: "Compra un inmueble", href: "/servicios" },
      { label: "Otras gestiones", href: "/servicios" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-[#009bbf] text-xs font-light tracking-widest uppercase mb-4">
            Servicios
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
            Soluciones integrales
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-lg p-10 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#009bbf]/20"
            >
              <div className="mb-6">
                <service.icon
                  size={48}
                  className="text-[#009bbf] group-hover:text-[#007a92] transition-colors"
                />
              </div>
              <h3 className="text-2xl font-light mb-4 text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8 font-light">
                {service.description}
              </p>
              <div className="space-y-3">
                {service.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-[#009bbf] hover:text-[#007a92] transition-colors font-light"
                  >
                    <ArrowRight size={16} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
