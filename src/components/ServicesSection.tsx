"use client";
import { ArrowRight, Building2, TrendingUp, Home } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Finanzas corporativas",
    description:
      "teamOn ofrece servicios integrales de Finanzas Corporativas, incluyendo operaciones de compraventa de empresas, Obtención de Capital de Crecimiento y Asesoramiento en estrategias Buy and Build.",
    links: [
      { label: "vende tu empresa", href: "/servicios" },
      { label: "compra una empresa", href: "/servicios" },
      { label: "reestructura tus finanzas", href: "/servicios" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Inversión y capital",
    description:
      "Nuestros servicios de asesoramiento financiero e inversión representan un puente estratégico que conecta a Family Offices, firmas de capital privado e inversores con selectas oportunidades de inversión.",
    links: [
      { label: "levanta capital", href: "/servicios" },
      { label: "encuentra socios", href: "/servicios" },
      { label: "encuentra oportunidades", href: "/servicios" },
    ],
  },
  {
    icon: Home,
    title: "Transacciones inmobiliarias",
    description:
      "Con un enfoque en soluciones estratégicas y personalizadas, nuestro asesoramiento en transacciones inmobiliarias está orientado a satisfacer las diversas necesidades de empresas y familias.",
    links: [
      { label: "vende tu inmueble", href: "/servicios" },
      { label: "compra un inmueble", href: "/servicios" },
      { label: "otras gestiones", href: "/servicios" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gray-50 rounded-lg p-8 hover:bg-[#1a1a2e] hover:text-white transition-all duration-500 border border-gray-100 hover:border-[#278CC8]/30"
            >
              <service.icon
                size={40}
                className="text-[#278CC8] mb-6 group-hover:text-[#278CC8]"
              />
              <h3 className="text-2xl font-light mb-4 text-gray-800 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-[#278CC8] hover:text-[#009bbf] transition-colors"
                  >
                    <ArrowRight size={14} />
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
