import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Servicios | teamOn - Corporate Finance & M&A",
  description: "Finanzas Corporativas, Inversión y Capital, Transacciones Inmobiliarias. Especialistas en M&A y Corporate Finance en España.",
};

export default function ServiciosPage() {
  const services = [
    {
      title: "Finanzas Corporativas",
      icon: "📊",
      items: [
        "Compraventa de empresas",
        "Capital de crecimiento",
        "Buy & Build",
        "Restructuring",
      ],
      description:
        "Asesoría integral en operaciones de M&A para empresarios y empresas que buscan expandirse o desinvertir.",
      link: "/finanzas-corporativas-barcelona",
    },
    {
      title: "Inversión y Capital",
      icon: "💼",
      items: [
        "Family Offices",
        "Private Equity",
        "Oportunidades de inversión",
        "Due diligence",
      ],
      description:
        "Conectamos inversores y fondos con oportunidades de crecimiento en España y Latinoamérica.",
      link: "/servicios",
    },
    {
      title: "Transacciones Inmobiliarias",
      icon: "🏢",
      items: [
        "Venta y compra de inmuebles",
        "Fondos inmobiliarios",
        "Gestiones estratégicas",
        "Valoración de activos",
      ],
      description:
        "Expertos en transacciones inmobiliarias de alto valor y fondos de inversión inmobiliaria.",
      link: "/servicios",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl font-light">
              Asesoría especializada en Corporate Finance, M&A, Inversión y Capital, y Transacciones Inmobiliarias.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-[#009bbf]"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-light text-[#0a1628] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-light text-[#009bbf] uppercase tracking-widest mb-4">
                      Especialidades
                    </h4>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-gray-700 font-light flex items-start gap-3"
                        >
                          <span className="text-[#009bbf] mt-1 flex-shrink-0">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 text-[#009bbf] hover:text-[#007a92] font-light transition-colors"
                  >
                    Más información
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12 text-center">
              Nuestro Proceso
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Diagnóstico",
                  description: "Análisis profundo de tu situación y objetivos",
                },
                {
                  step: "2",
                  title: "Estrategia",
                  description: "Plan personalizado de actuación y timeline",
                },
                {
                  step: "3",
                  title: "Ejecución",
                  description: "Implementación con equipo especializado",
                },
                {
                  step: "4",
                  title: "Cierre",
                  description: "Finalización exitosa de la transacción",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-6 rounded-lg border border-gray-200"
                >
                  <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center font-light text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-light text-[#0a1628] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-light text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-6">
              Inicia tu transacción hoy
            </h2>
            <p className="text-xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
              Recibe 30 minutos de consultoría gratuita de nuestro equipo especializado.
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
