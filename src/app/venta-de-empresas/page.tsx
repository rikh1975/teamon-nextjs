import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Venta de Empresas en España | teamOn",
  description: "Guía completa sobre cómo vender tu empresa en España. Asesoría en valoración, proceso de venta y maximización de valor.",
};

export default function VentaDeEmpresasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              Venta de Empresas en España
            </h1>
            <p className="text-xl text-gray-300 font-light mb-8">
              Maximiza el valor de tu empresa con asesoría especializada. Proceso integral desde valoración hasta cierre.
            </p>
            <p className="text-[#009bbf] text-sm font-light">
              * Recibe 30 minutos de consultoría gratuita
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Valoración",
                "Due Diligence",
                "Proceso de Venta",
                "Timeline",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-[#009bbf] font-light hover:text-[#007a92] text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Proceso de Venta de Empresa
            </h2>

            <div className="space-y-12">
              {/* Valoración */}
              <div id="valoracion">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-light text-lg">
                    1
                  </div>
                  <h3 className="text-2xl font-light text-[#0a1628] pt-2">
                    Valoración de la Empresa
                  </h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700 font-light leading-relaxed">
                    El primer paso es determinar el valor justo de mercado de tu empresa. Utilizamos múltiples metodologías para garantizar una valoración realista y competitiva.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="text-sm font-light text-[#009bbf] uppercase tracking-widest mb-4">
                      Métodos de Valoración
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Enfoque por múltiplos de EBITDA",
                        "Análisis de flujos de caja descontados (DCF)",
                        "Comparables de mercado",
                        "Análisis de activos",
                      ].map((method) => (
                        <li
                          key={method}
                          className="text-gray-700 font-light flex items-start gap-3"
                        >
                          <CheckCircle
                            size={18}
                            className="text-[#009bbf] flex-shrink-0 mt-0.5"
                          />
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Due Diligence */}
              <div id="due-diligence">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-light text-lg">
                    2
                  </div>
                  <h3 className="text-2xl font-light text-[#0a1628] pt-2">
                    Preparación y Due Diligence
                  </h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700 font-light leading-relaxed">
                    Preparamos toda la documentación necesaria para que los potenciales compradores realicen su análisis exhaustivo. Este proceso es crítico para acelerar la venta y maximizar valor.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="text-sm font-light text-[#009bbf] uppercase tracking-widest mb-4">
                      Documentación Requerida
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Estados financieros auditados (últimos 3-5 años)",
                        "Análisis de clientes y contratos clave",
                        "Registros de propiedad intelectual y patentes",
                        "Evaluación de litigios pendientes",
                        "Auditoría ambiental y de cumplimiento",
                      ].map((doc) => (
                        <li
                          key={doc}
                          className="text-gray-700 font-light flex items-start gap-3"
                        >
                          <CheckCircle
                            size={18}
                            className="text-[#009bbf] flex-shrink-0 mt-0.5"
                          />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div id="proceso-de-venta">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-light text-lg">
                    3
                  </div>
                  <h3 className="text-2xl font-light text-[#0a1628] pt-2">
                    Proceso de Venta Estructurado
                  </h3>
                </div>
                <div className="ml-16 space-y-4">
                  <p className="text-gray-700 font-light leading-relaxed">
                    Implementamos un proceso de venta profesional que genera competencia entre compradores y optimiza los términos de la transacción.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="text-sm font-light text-[#009bbf] uppercase tracking-widest mb-4">
                      Fases del Proceso
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Identificación de compradores potenciales (50-200 targets)",
                        "Envío de Information Memorandum (IM)",
                        "Gestión de NDA y expresiones de interés",
                        "Rondas de presentaciones ejecutivas",
                        "Management presentation (data room)",
                        "Gestión de DD y negociación de términos",
                      ].map((phase) => (
                        <li
                          key={phase}
                          className="text-gray-700 font-light flex items-start gap-3"
                        >
                          <CheckCircle
                            size={18}
                            className="text-[#009bbf] flex-shrink-0 mt-0.5"
                          />
                          <span>{phase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div id="timeline">
                <div className="flex gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-light text-lg">
                    4
                  </div>
                  <h3 className="text-2xl font-light text-[#0a1628] pt-2">
                    Timeline Típico
                  </h3>
                </div>
                <div className="ml-16">
                  <p className="text-gray-700 font-light leading-relaxed mb-6">
                    Una venta profesional generalmente toma entre 6 y 12 meses dependiendo de la complejidad y el tamaño de la empresa.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { phase: "Meses 1-2", activity: "Preparación y valoración" },
                      {
                        phase: "Meses 2-3",
                        activity: "Marketing y envío de IM",
                      },
                      {
                        phase: "Meses 3-4",
                        activity: "Presentaciones y gestión de interés",
                      },
                      { phase: "Meses 5-9", activity: "Due diligence y negociación" },
                      { phase: "Meses 9-10", activity: "Cierre de transacción" },
                      {
                        phase: "Meses 10-12",
                        activity: "Post-cierre y finalización",
                      },
                    ].map((item) => (
                      <div
                        key={item.phase}
                        className="bg-white border border-gray-200 p-4 rounded-lg"
                      >
                        <p className="text-[#009bbf] font-light text-sm uppercase tracking-widest mb-1">
                          {item.phase}
                        </p>
                        <p className="text-gray-700 font-light">{item.activity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Considerations */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Consideraciones Clave
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fiscalidad",
                  description:
                    "Planificación fiscal integral para optimizar la retención neta tras la venta.",
                },
                {
                  title: "Garantías de Vendedor",
                  description:
                    "Negociación de earn-outs, escrow y representaciones.",
                },
                {
                  title: "Continuidad del Negocio",
                  description:
                    "Estructura transaccional que mantiene operaciones durante el proceso.",
                },
                {
                  title: "Confidencialidad",
                  description:
                    "Proceso discreto que protege tu empresa y a empleados clave.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-lg border border-gray-200"
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

        {/* Why teamOn */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-light text-[#0a1628] mb-12">
              Por qué elegir teamOn
            </h2>

            <div className="space-y-6">
              {[
                {
                  title: "Experiencia Probada",
                  description:
                    "Más de 100 transacciones de M&A completadas en España y Latinoamérica.",
                },
                {
                  title: "Red Global",
                  description:
                    "Acceso a una red internacional de inversores, PE firms y compradores estratégicos.",
                },
                {
                  title: "Proceso Profesional",
                  description:
                    "Metodología rigurosa que maximiza valor y acelera el cierre.",
                },
                {
                  title: "Asesoría Integral",
                  description:
                    "Soporte completo desde valoración hasta post-cierre.",
                },
                {
                  title: "Confidencialidad Total",
                  description:
                    "Proceso discreto que protege la privacidad de tu empresa.",
                },
              ].map((item, index) => (
                <div key={item.title} className="flex gap-6">
                  <div className="w-12 h-12 bg-[#009bbf] text-white rounded-full flex items-center justify-center flex-shrink-0 font-light">
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-light text-[#0a1628] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0a1628] text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-light mb-6">Inicia tu proceso de venta</h2>
            <p className="text-xl text-gray-300 mb-8 font-light">
              Recibe 30 minutos de consultoría gratuita para analizar tus opciones.
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
