import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";

export const metadata = {
  title: "M&A Crossborder LATAM-España | teamOn",
  description:
    "M&A y transacciones crossborder entre España y Latinoamérica. Oportunidades en múltiples mercados.",
};

export default function MAEnLatamPage() {
  const countries = [
    {
      name: "Argentina",
      href: "/ma-corporate-finance-argentina",
      volume: "$11.8B",
      deals: "247",
      focus: "Agribusiness, Tecnología",
    },
    {
      name: "Chile",
      href: "/ma-corporate-finance-chile",
      volume: "$7.8B",
      deals: "312",
      focus: "Minería, Fintech, Renovables",
    },
    {
      name: "Colombia",
      href: "/ma-corporate-finance-colombia",
      volume: "$5.2B",
      deals: "189",
      focus: "Tecnología, Infraestructura",
    },
    {
      name: "México",
      href: "/ma-corporate-finance-mexico",
      volume: "$28.5B",
      deals: "480",
      focus: "Manufactura, Tech, Consumer",
    },
    {
      name: "Florida",
      href: "/ma-corporate-finance-florida",
      volume: "Variable",
      deals: "Múltiples",
      focus: "Tech, Real Estate, Finanzas",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              M&A Crossborder LATAM-España
            </h1>
            <p className="text-xl text-gray-300 font-light mb-8">
              Conectamos empresas españolas con oportunidades en Latinoamérica y viceversa.
            </p>
            <p className="text-[#009bbf] text-sm font-light">
              * Recibe 30 minutos de consultoría gratuita sobre oportunidades transfronterizas
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Operaciones Transfronterizas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-light text-[#0a1628] mb-4">
                  España → Latinoamérica
                </h3>
                <p className="text-gray-700 font-light leading-relaxed mb-4">
                  Ayudamos a empresas españolas a expandirse en Latinoamérica mediante:
                </p>
                <ul className="space-y-3">
                  {[
                    "Identificación de targets en mercados clave",
                    "Asesoría en regulación y cumplimiento local",
                    "Gestión de operaciones transnacionales",
                    "Financiación y estructuras de capital",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 font-light flex items-start gap-3"
                    >
                      <span className="text-[#009bbf] flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-light text-[#0a1628] mb-4">
                  Latinoamérica → España
                </h3>
                <p className="text-gray-700 font-light leading-relaxed mb-4">
                  Facilitamos inversión latinoamericana en empresas españolas:
                </p>
                <ul className="space-y-3">
                  {[
                    "Due diligence en mercado español",
                    "Acceso a empresas medianas en venta",
                    "Asesoría regulatoria y fiscal",
                    "Integración post-cierre",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-gray-700 font-light flex items-start gap-3"
                    >
                      <span className="text-[#009bbf] flex-shrink-0">←</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-light text-[#0a1628] mb-6">
                Volumen de M&A en Latinoamérica
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">
                    $58.6B
                  </p>
                  <p className="text-sm text-gray-600 font-light">Volumen anual</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">1,200+</p>
                  <p className="text-sm text-gray-600 font-light">Transacciones</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">55%</p>
                  <p className="text-sm text-gray-600 font-light">
                    Inversión extranjera
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">5</p>
                  <p className="text-sm text-gray-600 font-light">
                    Mercados principales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countries */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Mercados Principales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Link
                  key={country.name}
                  href={country.href}
                  className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#009bbf] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-light text-[#0a1628] group-hover:text-[#009bbf] transition-colors">
                      {country.name}
                    </h3>
                    <Globe
                      size={24}
                      className="text-[#009bbf] flex-shrink-0"
                    />
                  </div>

                  <div className="mb-6 space-y-2">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-light">
                        Volumen Anual
                      </p>
                      <p className="text-2xl font-light text-[#009bbf]">
                        {country.volume}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-light">
                        Transacciones
                      </p>
                      <p className="text-lg font-light text-gray-700">
                        {country.deals}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 font-light mb-4">
                    Sectores: {country.focus}
                  </p>

                  <div className="flex items-center gap-2 text-[#009bbf] font-light text-sm group-hover:gap-3 transition-all">
                    Explorar
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Crossborder */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Ventajas de Operaciones Crossborder
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Diversificación",
                  description:
                    "Acceso a múltiples mercados y economías para reducir riesgo.",
                },
                {
                  title: "Crecimiento Acelerado",
                  description:
                    "Expansión rápida mediante adquisiciones estratégicas.",
                },
                {
                  title: "Sinergias Operativas",
                  description:
                    "Combinación de competencias y mercados complementarios.",
                },
                {
                  title: "Múltiplos Valoración",
                  description:
                    "Acceso a mercados con diferentes múltiplos de valoración.",
                },
                {
                  title: "Talento Global",
                  description:
                    "Acceso a equipos especializados y profesionales calificados.",
                },
                {
                  title: "Optimización Fiscal",
                  description:
                    "Estructuras eficientes desde perspectiva tributaria.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <h3 className="text-lg font-light text-[#0a1628] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Nuestra Experiencia
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  stat: "150+",
                  label: "Transacciones Completadas",
                },
                {
                  stat: "$2.5B+",
                  label: "Volumen Total Gestionado",
                },
                {
                  stat: "25+",
                  label: "Años Experiencia Combinada",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white p-8 rounded-lg border border-gray-200 text-center"
                >
                  <p className="text-4xl font-light text-[#009bbf] mb-2">
                    {item.stat}
                  </p>
                  <p className="text-gray-600 font-light">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl font-light text-[#0a1628] mb-4">
                Sectores de Especialización
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Tecnología",
                  "Manufactura",
                  "Agribusiness",
                  "Energía",
                  "Real Estate",
                  "Finanzas",
                  "Retail",
                  "Infraestructura",
                  "Consumer",
                ].map((sector) => (
                  <div
                    key={sector}
                    className="flex items-center gap-2 text-gray-700 font-light"
                  >
                    <span className="text-[#009bbf]">✓</span>
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Nuestro Proceso
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  num: "1",
                  title: "Identificación",
                  desc: "Análisis de mercado y búsqueda de targets",
                },
                {
                  num: "2",
                  title: "Análisis",
                  desc: "Due diligence y evaluación de oportunidad",
                },
                {
                  num: "3",
                  title: "Negociación",
                  desc: "Structuring y negociación de términos",
                },
                {
                  num: "4",
                  title: "Cierre",
                  desc: "Integración y seguimiento post-cierre",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="w-10 h-10 bg-[#009bbf] text-white rounded-full flex items-center justify-center font-light mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-light text-[#0a1628] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-6">
              Explora oportunidades transfronterizas
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Recibe 30 minutos de consultoría gratuita sobre estrategias de crecimiento en Latinoamérica.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 bg-[#009bbf] text-white font-light px-8 py-4 text-sm tracking-widest hover:bg-[#007a92] transition-all duration-300 hover:shadow-lg"
            >
              PROGRAMA UNA CITA
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
