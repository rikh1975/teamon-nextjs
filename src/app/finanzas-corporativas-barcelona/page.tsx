import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Users, Globe, ArrowRight } from "lucide-react";

export const metadata = {
  title:
    "Finanzas Corporativas Barcelona | M&A y Corporate Finance | teamOn",
  description:
    "Asesoría especializada en M&A y Corporate Finance en Barcelona. Expertos en operaciones mid-market (EUR 5-100M).",
};

export default function FinanzasCorporativasBarcelonaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Finanzas Corporativas en Barcelona
            </h1>
            <p className="text-xl text-gray-300 font-light mb-8">
              Asesoría especializada en M&A y transacciones de Corporate Finance. Operaciones mid-market en el corazón de Cataluña.
            </p>
            <p className="text-[#009bbf] text-sm font-light">
              * Recibe 30 minutos de consultoría gratuita
            </p>
          </div>
        </section>

        {/* Barcelona Hub Section */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Barcelona: Centro Financiero de Cataluña
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Globe size={32} className="text-[#009bbf]" />,
                  title: "Centro Internacional",
                  description:
                    "Barcelona es el hub financiero y empresarial de Cataluña y la región mediterránea. Centro de inversión y negocios con presencia global.",
                },
                {
                  icon: <TrendingUp size={32} className="text-[#009bbf]" />,
                  title: "Dinamismo Empresarial",
                  description:
                    "Miles de PYMES y empresas medianas en sectores diversos buscan crecer, consolidarse o salir estratégicamente.",
                },
                {
                  icon: <Users size={32} className="text-[#009bbf]" />,
                  title: "Talento Disponible",
                  description:
                    "Ecosistema profesional maduro con expertos en finanzas, legal, tecnología y operaciones.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-light text-[#0a1628] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-lg font-light text-[#0a1628] mb-4">
                Actividad M&A en la Región
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">€250M+</p>
                  <p className="text-sm text-gray-600 font-light">
                    Volumen anual M&A
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">150+</p>
                  <p className="text-sm text-gray-600 font-light">
                    Transacciones/año
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">40%</p>
                  <p className="text-sm text-gray-600 font-light">
                    Inversión extranjera
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf] mb-1">5-100M</p>
                  <p className="text-sm text-gray-600 font-light">
                    Rango típico (EUR)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Servicios en Barcelona
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "M&A Advisory",
                  items: [
                    "Venta de empresas (full process)",
                    "Adquisiciones estratégicas",
                    "Buy & Build",
                    "Recapitalizaciones",
                  ],
                },
                {
                  title: "Corporate Finance",
                  items: [
                    "Capital de crecimiento",
                    "Financiación de operaciones",
                    "Restructuring de deuda",
                    "Optimización de capital",
                  ],
                },
                {
                  title: "Investor Relations",
                  items: [
                    "Conexión con inversores",
                    "Fundraising",
                    "Due diligence support",
                    "Negociación de términos",
                  ],
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-8 rounded-lg border border-gray-200"
                >
                  <h3 className="text-2xl font-light text-[#0a1628] mb-6">
                    {service.title}
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-gray-700 font-light"
                      >
                        <span className="text-[#009bbf] flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectors */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Sectores con Mayor Actividad
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Tecnología e IT", focus: "SaaS, software, digital" },
                { name: "Consumer & Retail", focus: "E-commerce, distribución" },
                {
                  name: "Servicios Profesionales",
                  focus: "Consultoría, legal, contable",
                },
                {
                  name: "Industria y Manufactura",
                  focus: "B2B, componentes, maquinaria",
                },
                {
                  name: "Energía y Sostenibilidad",
                  focus: "Renovables, eficiencia energética",
                },
                {
                  name: "Real Estate",
                  focus: "Comercial, residencial, logística",
                },
              ].map((sector) => (
                <div
                  key={sector.name}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <h4 className="text-lg font-light text-[#0a1628] mb-2">
                    {sector.name}
                  </h4>
                  <p className="text-gray-600 font-light text-sm">
                    {sector.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACS Partners Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-6">
              ACS Partners Network
            </h2>
            <p className="text-lg text-gray-600 font-light mb-12">
              Acceso a una red global de Private Equity, Family Offices e inversores institucionales para identificar oportunidades y acelerar transacciones.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Europa",
                  countries: ["España", "Francia", "Alemania", "Reino Unido"],
                },
                {
                  title: "Latinoamérica",
                  countries: ["Argentina", "Chile", "Colombia", "México"],
                },
                {
                  title: "EEUU",
                  countries: ["Miami", "Nueva York", "California", "Texas"],
                },
              ].map((region) => (
                <div
                  key={region.title}
                  className="bg-white p-8 rounded-lg border border-gray-200"
                >
                  <h4 className="text-lg font-light text-[#0a1628] mb-4">
                    {region.title}
                  </h4>
                  <ul className="space-y-2">
                    {region.countries.map((country) => (
                      <li
                        key={country}
                        className="text-gray-600 font-light flex items-start gap-2"
                      >
                        <span className="text-[#009bbf]">●</span>
                        <span>{country}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Barcelona */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Por qué Barcelona es Estratégica
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Posición geográfica: puerta a España, Mediterráneo y Europa",
                "Ecosistema empresarial maduro con empresas de todos los tamaños",
                "Talento profesional en finanzas, legal y operaciones",
                "Infraestructuras logísticas y de comunicaciones de clase mundial",
                "Capacidad de expandirse a otras regiones españolas",
                "Conexión internacional con mercados europeos",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 pb-8 border-b border-gray-200 last:border-b-0"
                >
                  <div className="w-8 h-8 bg-[#009bbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-light text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-light pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Placeholder */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Experiencia Comprobada
            </h2>

            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <p className="text-gray-600 font-light mb-6">
                Hemos completado más de 50 transacciones en Barcelona y Cataluña en los últimos años, con un volumen total superior a EUR 500M.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-3xl font-light text-[#009bbf]">50+</p>
                  <p className="text-sm text-gray-600 font-light">Transacciones</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf]">€500M+</p>
                  <p className="text-sm text-gray-600 font-light">Volumen</p>
                </div>
                <div>
                  <p className="text-3xl font-light text-[#009bbf]">95%</p>
                  <p className="text-sm text-gray-600 font-light">Cierre exitoso</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-6">
              Comienza tu transacción en Barcelona
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Recibe 30 minutos de consultoría gratuita sobre oportunidades en tu mercado.
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
